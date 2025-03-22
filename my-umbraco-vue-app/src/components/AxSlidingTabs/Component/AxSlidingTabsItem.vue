<script setup lang="ts">
import {defineProps} from 'vue';
import type {TabItemProperties} from "../Interfaces/IUmbracoData.ts";
import AxSlidingTabsItemActive from "./AxSlidingTabsItemActive.vue";
import AxSlidingTabsItemNotActive from "./AxSlidingTabsItemNotActive.vue";
import AxSlidingTabsItemProgressBar from "./AxSlidingTabsItemProgressBar.vue";

const emit = defineEmits<{
  (e: 'button-pressed'): void;
  (e: 'title-pressed'): void;
}>();

const props = defineProps<{
  isActive: boolean;
  progress: number;
  item: TabItemProperties;
}>();

function onButtonPressed() {
  emit('button-pressed');
}

function onTitlePressed() {
  console.log('onTitlePressed');
  emit('title-pressed');
}

</script>

<template>
  <div class="tab" @click="onTitlePressed">
    <div class="progress-bar-container">
      <button
          v-if="props.isActive"
          @click="onButtonPressed"
      >
        <img src="/src/assets/images/pause.svg" loading="lazy" alt="pause">
      </button>
      <AxSlidingTabsItemProgressBar :progress="props.isActive ? props.progress : 0"/>
    </div>
    <AxSlidingTabsItemActive v-if="props.isActive" :item="props.item"/>
    <AxSlidingTabsItemNotActive v-else :title="props.item.title"/>
  </div>
</template>

<style scoped>

@media (min-width: 991px) {
  .tab {
    flex-direction: column;
  }

  .progress-bar-container {
    flex-direction: row !important;
    width: 100% !important;
    height: 48px !important;
    gap: 24px !important;
  }

  button {
    width: 48px !important;
    height: 48px !important;
  }

}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  flex-shrink: 0;
}


img {
  width: 100%;
  height: 100%;
}

button {
  border: none;
  background-color: transparent;
}


AxSlidingTabsItemProgressBar {
  flex-grow: 1;
}

.tab {
  display: flex;
  gap: 28px;
}

.progress-bar-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 24px;
  cursor: pointer;
}


</style>
