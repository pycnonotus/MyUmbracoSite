<script setup lang="ts">
import type {IAxAboutMandel} from "../interfaces/IAxAboutMandel.ts";

const props = defineProps<{
  item: IAxAboutMandel;
}>();
</script>

<template>
  <div class="about-mandel-information">
    <h2>
      {{ props.item.properties.title }}
    </h2>

    <p>
      {{ props.item.properties.description }}
    </p>

    <footer>
      <a
          class="inline-flex font-bold hover:underline text-main-blue-700 text-base/[1.2] lg:text-[1.75rem]/[1.2857142857]"
          :href="props.item.properties.link[0].url"
      >
        {{ props.item.properties.link[0].title }}
      </a>
    </footer>

  </div>
</template>

<style scoped>
.about-mandel-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

h2 {
  color: #04283E;
  text-align: center;
  font-family: 'Masada', sans-serif;
  font-size: 80px;
  font-style: normal;
  font-weight: 550;
  line-height: 100%; /* 80px */
}

p {
  color: #04283E!important;
  text-align: center;
  font-family: 'SimplerPro', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 24px */
}

a {
  color: #04283E!important;
}

@media (max-width: 991px) {

  .about-mandel-information{
    max-width: 333px;
    padding: 0 21px;
  }

  h2{
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 550;
    line-height: 110%; /* 44px */
  }

  p{

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
  }

  a{

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
  }
}

</style>