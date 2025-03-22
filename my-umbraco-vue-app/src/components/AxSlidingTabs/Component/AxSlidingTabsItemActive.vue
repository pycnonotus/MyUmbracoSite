<script setup lang="ts">
import {defineProps} from "vue";
import type {TabItemProperties} from "../Interfaces/IUmbracoData.ts";

const props = defineProps<{
  item: TabItemProperties;
}>();
</script>

<template>
  <div>
    <h3>{{ props.item.title }}</h3>
    <p>
      {{ props.item.description }}
    </p>
    <a :href="props.item.link[0].url">
      {{ props.item.link[0].title }}&nbsp;&nbsp;>
    </a>
  </div>
</template>

<style scoped>
* {
  transition: all 0.3s ease-in-out;
}

@media (min-width: 991px) {
  h3 {
    color: #04283E;
    text-align: right;
    font-family: "SimplerPro", sans-serif;
    font-size: 28px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 36px !important;
  }

  p {

    font-size: 28px !important;
    font-style: normal;
    font-weight: 400 !important;
    line-height: 120% !important;
  }
  a{
    opacity: 1 !important;
    font-size: 28px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: 120% !important;
  }
}

div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h3 {
  color: #04283E;
  text-align: right;
  font-family: "SimplerPro", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 19.8px */
}

p {
  color: #04283E;
  text-align: right;
  font-family: "SimplerPro", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
}

a {
  color: #04283E;
  text-align: right;
  font-family: "SimplerPro", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  opacity: 0.5;
}
</style>