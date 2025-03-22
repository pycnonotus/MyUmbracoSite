<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue';
import AxSlidingTabsItem from "./AxSlidingTabsItem.vue";
import type {IUmbracoData, TabsSliderProperties} from "../Interfaces/IUmbracoData.ts";
import type {IAxSlidingTabsItem} from "../Interfaces/IAxSlidingTabsItem.ts";

function onChildButtonPressed() {
  isStopped = !isStopped;
}

function onTitlePressed(index: number) {
  if (activeItemIndex.value !== index) {
    progress.value = 0;
  }
  activeItemIndex.value = index;

}


const progress = ref(0);

const props = defineProps<{
  tabsSlider: IUmbracoData<TabsSliderProperties>;
}>();

const mapped: Omit<IAxSlidingTabsItem, 'isActive'>[] = props.tabsSlider.properties.tabs.items.map((item) => {
  return {
    isActive: false,
    item: item.content.properties
  };
});
const tabs = ref(mapped);

let isStopped = false;
let timer: number;
const activeItemIndex = ref(0);
const activeItem = computed(() => {
  console.log(activeItemIndex.value);
  return tabs.value[activeItemIndex.value].item
});

onMounted(() => {
  const totalDurationMs = 1000 * 4;
  const intervalDurationMs = 50;
  const step = (intervalDurationMs / totalDurationMs) * 100;


  timer = window.setInterval(() => {

    if (isStopped) {
      return;
    }

    progress.value += step;
    if (progress.value < 100) {
      return;
    }

    activeItemIndex.value = (activeItemIndex.value + 1) % tabs.value.length;
    progress.value = 0;
  }, intervalDurationMs);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="ax-tabs-slider">
    <h2>
      {{ props.tabsSlider.properties.mainTitle }}
    </h2>
    <div class="tabs-items">
      <figure :style="{ '--img-src': `url(${activeItem.image[0].properties.umbracoFile})` }">
        <picture>
          <source :srcset="activeItem.image[0].properties.umbracoFile"/>
          <img :src="activeItem.image[0].properties.umbracoFile"
               loading="lazy"
               :alt="activeItem.image[0].properties.alt"
          >
        </picture>
        <figcaption>
          <span class="pre">קרדיט</span>
          צילום:
          {{ activeItem.image[0].properties.credit }}
        </figcaption>
      </figure>
      <div class="items">
        <AxSlidingTabsItem v-for="(tabb, index) in tabs" :key="index"
                           :isActive="activeItemIndex === index"
                           :progress="progress"
                           :item="tabb.item"
                           :class="{
                             'tab-item-active': activeItemIndex === index,
                             'tab-item-not-active': activeItemIndex !== index
                           }"
                           @button-pressed="onChildButtonPressed"
                           @title-pressed="() => onTitlePressed(index)"

        />
      </div>
    </div>

  </div>
</template>

<style scoped>
:host {
  --img-src: '';
}
.tab-item-active {
  flex-grow: 1;
  transition: width 0.3s ease-in-out;
}

.tab-item-not-active {
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
}



@media (min-width: 991px) {
  figure {
    gap: 11px !important;
  }

  .items {
    gap: 40px !important;
  }
  .ax-tabs-slider{
    padding: 0 80px;
  }
}


@media (max-width: 990px) {
  .pre {
    display: unset !important;
  }

  .ax-tabs-slider {
    padding: 20px;
  }
}

.pre {
  display: none;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

h2 {
  color: #9D5726;
  text-align: center;
  font-family: "Masada", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 550;
  line-height: 110%; /* 24.2px */
}

.ax-tabs-slider {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (min-width: 991px) {
  .ax-tabs-slider {
    flex-direction: row !important;
    justify-content: space-between;
  }

  h2 {
    color: #9D5726;
    text-align: right;
    font-family: "Masada", sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 550;
    line-height: 66px;
    width: 335px;
  }

  .items {
    flex-direction: row !important;
  }

  .tabs-items {
    gap: 24px !important;
  }

  figcaption {

    font-size: 16px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 22px !important;
  }
}

figure {
  overflow: hidden;
  max-width: 1323px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;


}


figure::after {

  --image-margin-width: 18px;
  --image-margin-height: 23px;

  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - calc(var(--image-margin-width) * 2));
  height: calc(100% - calc(var(--image-margin-height) * 2));
  background-image: var(--img-src);
  background-size: cover;
  background-position: center;
  filter: blur(7px);
  transform: translate(var(--image-margin-width), var(--image-margin-height));
}

img {
  width: 100%;
  min-height: 157px;
  max-width: 1323px;
  max-height: 411px;
  box-sizing: border-box;
  object-fit: cover;
  position: relative;
  z-index: 1;

}

figcaption {
  margin-top: 7px;
  color: #04283E;
  text-align: right;
  font-family: SimplerPro, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 14.4px */
  opacity: 0.6;
  z-index: 1;
  position: relative;

}

.ax-tabs-slider {
  display: flex;
  gap: 12px;
}


.tabs-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 1323px;

}


</style>
