<script setup lang="ts">
import {defineProps} from "vue";
import type {TabItemProperties} from "../Interfaces/IUmbracoData.ts";

const props = defineProps<{
  item: TabItemProperties;
  isActive: boolean;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <h3
        class="text-[#04283E] text-right font-['SimplerPro',sans-serif]
             font-bold leading-[110%] text-[18px] lg:text-[28px] lg:leading-[36px]"
    >
      {{ props.item.title }}
    </h3>

    <transition
        v-if="props.isActive"
        appear
        enter-active-class="transition-opacity duration-700 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-0"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <p
          v-if="props.isActive"
          class="text-[#04283E] text-right font-['SimplerPro',sans-serif]
               font-normal leading-[120%] text-[16px] lg:text-[28px]
               w-full"
      >
        {{ props.item.description }}
      </p>
    </transition>

    <!-- Link always visible, same style as before -->
    <a
        v-if="props.isActive"
        :href="props.item.link[0].url"
        class="text-[#04283E] text-right font-['SimplerPro',sans-serif]
             font-bold leading-[110%] text-[18px] lg:text-[28px] lg:leading-[36px]"
    >
      {{ props.item.link[0].title }} &gt;
    </a>
  </div>
</template>
