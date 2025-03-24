<script setup lang="ts">
import {computed} from 'vue';
import type {AboutMandelFooterItemProperties} from "../interfaces/IAxAboutMandel.ts";

const props = defineProps<{
  item: AboutMandelFooterItemProperties;
  index: number;
  totalItems: number;
}>();

const clipInlineStart = computed(() => {
  const total = props.totalItems || 1;
  return `${(props.index / total) * 100}%`;
});

const clipInlineEnd = computed(() => {
  const total = props.totalItems || 1;
  return `${100 - ((props.index + 1) / total) * 100}%`;
});


const backgroundImageStyle = computed(() => {
  const baseUrl = `https://mandel-umbraco.uteam-dev.com/${props.item.image[0].url}`;

  return {
    '--desktop-bg': `linear-gradient(180deg, rgba(157,87,38,0) 70%, rgba(157,87,38,0.75) 100%), url('${baseUrl}')`,
    '--mobile-bg': `linear-gradient(to right, rgba(157,87,38,0) 0%, rgba(157,87,38,0.75) 100%), url('${baseUrl}')`,
    '--clip-start': clipInlineStart.value,
    '--clip-end': clipInlineEnd.value,
  };
});
</script>

<template>
  <div class="about-mandel-unit-item-wrapper" :style="backgroundImageStyle">
    <div class="background"></div>
    <div class="about-mandel-unit-item">
      <div>
        <img
            class="logo"
            :src="'https://mandel-umbraco.uteam-dev.com/' + props.item.logo[0].url"
            alt="logo"
            role="presentation"
        >
      </div>
      <h3>{{ props.item.title }}</h3>
      <p class="only-on-active">{{ props.item.description }}</p>
      <span class="credit only-on-active" v-if="props.item.image[0].properties.credit">
        {{ props.item.image[0].properties.credit }}
      </span>
      <div class="hr only-on-active"></div>
      <span class="only-on-active">
        <a :href="props.item.link[0].url">
          {{ props.item.link[0].title }}
          <img
              class="inline-block"
              src="/src/assets/images/arrow.svg"
              alt="arrow"
              role="presentation"
              loading="lazy"
          >
        </a>
      </span>
    </div>
    <div class="mobile-link">
      <a :href="props.item.link[0].url">
        <img
            class="inline-block"
            src="/src/assets/images/mobile-arrow.svg"
            alt="arrow"
            role="presentation"
            loading="lazy"
        >
      </a>
    </div>
  </div>
</template>

<style scoped>
.about-mandel-unit-item-wrapper {
  padding: 20px 24px;
  flex: 1 1 0;
  height: 100%;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: var(--desktop-bg);
  background-size: cover;
  background-position: center;
  clip-path: inset(0% var(--clip-start) 0% var(--clip-end));
}

.about-mandel-unit-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #FEFEFA;
  gap: 12px;
  min-width: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 10; /* Content above the background */
  max-width: 272px;
  height: 100%;
}

h3 {
  color: #FEFEFA;
  text-align: right;
  font-family: 'Masada', sans-serif;
  font-size: 36px;
  font-weight: 550;
  line-height: 110%;
}

.logo {
  width: auto !important;
  height: auto !important;
  max-width: none !important;
  flex: 0 0 auto !important;
  display: block;
}

p {
  font-family: 'SimplerPro', sans-serif;
  font-size: 23px;
  font-weight: 400;
  line-height: 130%;
  max-width: 319px;
  box-sizing: border-box;
}

.credit {
  text-align: right;
  font-family: 'SimplerPro', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
}

.hr {
  width: 100%;
  height: 2px;
  background-color: #FEFEFA;
}

a {
  color: #FEFEFA;
  text-align: right;
  font-family: 'SimplerPro', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 120%;
}

/* Hidden content transitions */
.only-on-active {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 1s ease-in-out, opacity 0.5s linear;
  pointer-events: none;
}

.about-mandel-unit-item-wrapper:hover .only-on-active {
  max-height: 500px; /* Adjust as needed */
  opacity: 1;
  z-index: 11 !important;
  pointer-events: unset !important;

}

.about-mandel-unit-item-wrapper:hover .background {
  clip-path: inset(0) !important;
  z-index: 10;
  pointer-events: none;
  transition: clip-path 0.1s ease-in-out;

}

.mobile-link {
  display: none;
}

@media (max-width: 991px) {
  .about-mandel-unit-item {
    max-width: 280px;
    gap: 9px;
  }

  h3 {
    color: #FEFEFA;
    text-align: right;
    font-family: 'Masada', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 550;
    line-height: 110%; /* 30.8px */
  }

  .background {
    display: none;
  }

  .only-on-active {
    display: none;
  }

  .about-mandel-unit-item-wrapper {
    background-image: var(--mobile-bg);
    background-size: cover;
    background-position: center;
    flex-basis: 132px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 132px;


  }

  .about-mandel-unit-item {
    height: unset;
  }

  .logo {
    height: 30px !important;
  }

  .mobile-link {
    display: unset;
  }

}

</style>
