<script setup lang="ts">

import AxSlidingTabs from "./AxSlidingTabs.vue";
import {type Ref, ref} from "vue";
import type {IUmbracoData, TabsSliderProperties} from "../Interfaces/IUmbracoData.ts";

const data: Ref<IUmbracoData<TabsSliderProperties>> = ref({
  "contentType": "tabsSlider",
  "id": "f3da3cb3-c400-4532-8363-79b02803db45",
  "properties": {
    "mainTitle": "הסגל, העמיתים והבוגרים שלנו",
    "enableAutoTransition": true,
    "tabs": {
      "items": [
        {
          "content": {
            "contentType": "tabsSliderTabItem",
            "id": "7d41a4fe-053f-4a59-ac81-c02f44b90955",
            "properties": {
              "image": [
                {
                  "properties": {
                    "umbracoFile": "https://mandel-markup.uteam-dev.com/src/assets/images/img-people-carousel-001.jpg",
                    "umbracoWidth": 2332,
                    "umbracoHeight": 938,
                    "umbracoBytes": 2413308,
                    "umbracoExtension": "png",
                    "alt": "Snaail",
                    "credit": "צלוד דשלגך"
                  },
                  "focalPoint": null,
                  "crops": [],
                  "id": "a9a69a54-b13d-41b1-b670-4254644a8279",
                  "name": "some photo for testing",
                  "mediaType": "AxMediaImage",
                  "url": "https://mandel-markup.uteam-dev.com/src/assets/images/img-people-carousel-001.jpg",
                  "extension": "png",
                  "width": 2332,
                  "height": 938,
                  "bytes": 2413308
                }
              ],
              "title": "המרצים והסגל שלנו",
              "description": "המרצים והסגל שלנו הם בחוד החנית לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום",
              "link": [
                {
                  "url": "https://www.youtube.com/watch?v=1zN7J64IeBo#",
                  "queryString": "#",
                  "title": "שבלול",
                  "target": null,
                  "destinationId": null,
                  "destinationType": null,
                  "route": null,
                  "linkType": "External"
                }
              ]
            }
          },
          "settings": null
        },
        {
          "content": {
            "contentType": "tabsSliderTabItem",
            "id": "4bab5f90-5fa7-4203-a5f6-8aafdc7b70e9",
            "properties": {
              "image": [
                {
                  "properties": {
                    "umbracoFile": "https://mandel-markup.uteam-dev.com/src/assets/images/img-people-carousel-001.jpg",
                    "umbracoWidth": 4096,
                    "umbracoHeight": 2731,
                    "umbracoBytes": 12714143,
                    "umbracoExtension": "jpeg",
                    "alt": "ppl saying hello",
                    "credit": "Shoney Deerp"
                  },
                  "focalPoint": null,
                  "crops": [],
                  "id": "06695e58-db53-4bc6-8081-11e7fabc769f",
                  "name": "waving ",
                  "mediaType": "AxMediaImage",
                  "url": "/media/sdedn1sh/7a42416e58ae245d056a013af9204e09.jpeg",
                  "extension": "jpeg",
                  "width": 4096,
                  "height": 2731,
                  "bytes": 12714143
                }
              ],
              "title": "אנשים עושים שלוןם",
              "description": "והם עושים עוד ועוד ועוד שלום",
              "link": [
                {
                  "url": null,
                  "queryString": null,
                  "title": "Home Page en",
                  "target": null,
                  "destinationId": "7d211a27-02db-4af8-9e4c-bef12b38d469",
                  "destinationType": "home",
                  "route": {
                    "path": "/",
                    "startItem": {
                      "id": "7d211a27-02db-4af8-9e4c-bef12b38d469",
                      "path": "home-page"
                    }
                  },
                  "linkType": "Content"
                }
              ]
            }
          },
          "settings": null
        },
        {
          "content": {
            "contentType": "tabsSliderTabItem",
            "id": "4bab5f90-5fa7-4203-a5f6-8aafdc7b70e9",
            "properties": {
              "image": [
                {
                  "properties": {
                    "umbracoFile": "https://mandel-markup.uteam-dev.com/src/assets/images/img-people-carousel-001.jpg",
                    "umbracoWidth": 4096,
                    "umbracoHeight": 2731,
                    "umbracoBytes": 12714143,
                    "umbracoExtension": "jpeg",
                    "alt": "ppl saying hello",
                    "credit": "Shoney Deerp"
                  },
                  "focalPoint": null,
                  "crops": [],
                  "id": "06695e58-db53-4bc6-8081-11e7fabc769f",
                  "name": "waving ",
                  "mediaType": "AxMediaImage",
                  "url": "/media/sdedn1sh/7a42416e58ae245d056a013af9204e09.jpeg",
                  "extension": "jpeg",
                  "width": 4096,
                  "height": 2731,
                  "bytes": 12714143
                }
              ],
              "title": "העמיתים שלנו",
              "description": "והם עושים עוד ועוד ועוד שלום",
              "link": [
                {
                  "url": null,
                  "queryString": null,
                  "title": "Home Page en",
                  "target": null,
                  "destinationId": "7d211a27-02db-4af8-9e4c-bef12b38d469",
                  "destinationType": "home",
                  "route": {
                    "path": "/",
                    "startItem": {
                      "id": "7d211a27-02db-4af8-9e4c-bef12b38d469",
                      "path": "home-page"
                    }
                  },
                  "linkType": "Content"
                }
              ]
            }
          },
          "settings": null
        }
      ]
    }
  }
});

</script>


<template>
  <AxSlidingTabs :tabs-slider="data"/>

</template>

<style scoped>

</style>