<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-[#04283E] text-right font-['SimplerPro',sans-serif] font-bold leading-[110%] text-[18px] lg:text-[28px] lg:leading-[36px]">
      {{ props.item.title }}
    </h3>
    <p class="text-[#04283E] text-right font-['SimplerPro',sans-serif] font-normal leading-[120%] text-[16px] lg:text-[28px]">
      {{ props.item.description }}
    </p>
    <a
        :href="props.item.link[0].url"
        class="!text-[#04283E] text-right font-['SimplerPro',sans-serif] font-bold leading-[120%] text-[16px] opacity-50 lg:text-[28px] lg:opacity-100"
    >
      {{ props.item.link[0].title }}&nbsp;&nbsp;&gt;
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { TabItemProperties } from "../Interfaces/IUmbracoData.ts";

const props = defineProps<{
  item: TabItemProperties;
}>();
</script>
