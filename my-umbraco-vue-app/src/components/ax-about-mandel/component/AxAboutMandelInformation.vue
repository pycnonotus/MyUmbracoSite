<script setup lang="ts">
import type { IAxAboutMandel } from "../interfaces/IAxAboutMandel.ts";

const props = defineProps<{
  item: IAxAboutMandel;
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 max-w-[20.8125rem] px-[1.3125rem] lg:max-w-none">
    <h2 class="text-center text-[2.5rem] lg:text-[5rem] text-[#04283E] font-['Masada']">
      {{ props.item.properties.title }}
    </h2>

    <p class="text-center text-[#04283E] text-[1rem] lg:text-[1.5rem] leading-[1.2] font-['SimplerPro']">
      {{ props.item.properties.description }}
    </p>


    <footer>
      <a
          class="inline-flex font-bold hover:underline text-[#04283E] text-[1rem] leading-[1.2] lg:text-[1.75rem] lg:leading-[1.2857]"
          :href="props.item.properties.link[0].url"
      >
        {{ props.item.properties.link[0].title }}
      </a>
    </footer>
  </div>
</template>
