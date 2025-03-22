<script setup lang="ts">
import {defineProps} from "vue";
const props = defineProps<{
  title: string;
}>();
</script>

<template>
<div>
  <h3>{{ props.title }}</h3>
</div>
</template>

<style scoped>
h3 {
  color: #04283E;
  text-align: right;
  font-family: "SimplerPro", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 19.8px */
  opacity: 0.5;
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
}


</style>