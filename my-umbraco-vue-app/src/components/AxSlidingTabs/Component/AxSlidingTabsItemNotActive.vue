<template>
  <div class="custom-header">
    <h3 class="text-[#04283E] text-right font-[SimplerPro,sans-serif] text-lg font-bold leading-[110%] opacity-50 lg:text-[28px] lg:leading-[36px]">
      {{ props.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ title: string }>();
</script>

