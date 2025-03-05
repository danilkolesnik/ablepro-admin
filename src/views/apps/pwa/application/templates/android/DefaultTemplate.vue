<script setup>
import { computed, ref } from "vue";

import { wTrans } from "laravel-vue-i18n";

import startImage from "@/assets/icons/pwa/star.png";
import ageIcon from "@/assets/icons/pwa/other_18.png";
import arrowRight from "@/assets/icons/pwa/arrow-right.png";
import shareIcon from "@/assets/icons/pwa/share.png";
import cloudIcon from "@/assets/icons/pwa/cloud.png";
import lockIcon from "@/assets/icons/pwa/lock.png";
import removeIcon from "@/assets/icons/pwa/remove.png";
// import userIcon from "@/assets/icons/pwa/user.png";
import moreIcon from "@/assets/icons/pwa/more.png";

import { usePwaStore } from "@/stores/apps/pwa/pwa_old";
// import { Head } from "@inertiajs/vue3";
import { dynamicStyle } from "@/utils/dynamicStyles";
import { formatPfp } from "@/utils/reviews";

const pwaStore = usePwaStore();
const currentLanguageId = pwaStore.getCurrentPWALanguage.id;

const name = computed(() => pwaStore.getName().value);
const author = computed(() => pwaStore.getAuthor().value);
const category = computed(() => pwaStore.getCategory().value);
const rating = computed(() => pwaStore.getRating().value);
const reviewsCount = computed(() => pwaStore.getReviewsCount().value);
const reviewsArray = computed(() => pwaStore.getReviewsArray().value);
const installsCount = computed(() => pwaStore.getInstallsCount().value);
const youtubeVideo = computed(() => pwaStore.getYoutubeVideo().value);
const customVideo = computed(() => pwaStore.getCustomVideo().value);
const pwaTemplate = computed(() => pwaStore.getPwaTemplate);
const description = computed(() => pwaStore.getDescription().value);
const selectedPwas = computed(() => pwaStore.getSelectedPwas);
const fiveRatingQuantity = computed(() => pwaStore.getFiveRatingQuantity().value);
const fourRatingQuantity = computed(() => pwaStore.getFourRatingQuantity().value);
const threeRatingQuantity = computed(() => pwaStore.getThreeRatingQuantity().value);
const twoRatingQuantity = computed(() => pwaStore.getTwoRatingQuantity().value);
const oneRatingQuantity = computed(() => pwaStore.getOneRatingQuantity().value);
const fileSize = computed(() => pwaStore.getFileSize().value);
const installsText = computed(() => pwaStore.getInstallsText().value);
const reviewsText = computed(() => pwaStore.getReviewsText().value);
const adInfo = computed(() => pwaStore.getAdInfo().value);
const eighteenAgeText = computed(() => pwaStore.getEighteenAgeText().value);
const aboutText = computed(() => pwaStore.getAboutText().value);
const installBtnText = computed(() => pwaStore.getInstallBtnText().value);
const ratingReviewsText = computed(() => pwaStore.getRatingReviewsText().value);
const reviewsVerifiedText = computed(() => pwaStore.getReviewsVerifiedText().value);
const yesText = computed(() => pwaStore.getYesText().value);
const noText = computed(() => pwaStore.getNoText().value);
const moreText = computed(() => pwaStore.getMoreText().value);
const dataSecurityText = computed(() => pwaStore.getDataSecurityText().value);
const dataSecurity = computed(() => pwaStore.getDataSecurity().value);
const shareDataText = computed(() => pwaStore.getShareDataText().value);
const shareData = computed(() => pwaStore.getShareData().value);
const dataCollectText = computed(() => pwaStore.getDataCollectionText().value);
const dataCollect = computed(() => pwaStore.getDataCollection().value);
const dataTransmittedText = computed(() => pwaStore.getDataTransmittedText().value);
const dataDeleteText = computed(() => pwaStore.getDataDeleteText().value);
// const dataDelete = computed(() => pwaStore.getDataDelete().value);
const peopleText = computed(() => pwaStore.getPeopleReview().value);
const isUsefulText = computed(() => pwaStore.getIsUsefull().value);

const showDescription = ref(false);

const categoryArray = computed(() => category.value);
const loadScripts = ref(false);

setTimeout(() => {
  loadScripts.value = true;
}, 2000);
</script>

<template>
  <!DOCTYPE html>
  <html lang="uk" class="overflow-x-hidden" id="default-template">
    <head>
      <meta charset="UTF-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />

      <!-- шрифти -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />

      <component
        :is="'script'"
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
      ></component>

      <component
        :is="'script'"
        src="./src/views/apps/pwa/application/templates/android/3.4.1.js"
      ></component>
      <component :is="'style'">
        .cls-1 { stroke-width: 0px; } :root { --white: #ffffff; --review__more: #ffffff;
        --black: #000000; --black_interface: #000000; --black_text: #000000;
        --black_text_box: #000000; --filter_for_black: none; --gray: #333; --gray_text:
        #333; --opacity: 1; --progress_bg: #e3e3e3; --star-color_my: #e3e3e3; --boder:
        #d0d0d0; --star-size: 16px; --star-color: #e3e3e3; --star-background: #1357cd }
        html::-webkit-scrollbar { display: none; } #container { width: 72px; height: 72px;
        } .icon-main { width: 70px; height: 72px; border-radius: 16px; } .icon-loading {
        width: 65px; height: 65px; border-radius: 50%; } .main-button { width: 100%;
        border-radius: 20px; display: flex; align-items: center; justify-content: center;
        height: 41px; background-color: #0b57cf; color: white !important; font-size: 14px;
        font-weight: 600; letter-spacing: 0.0178571429em; } .active { animation: spin 1s
        linear infinite; } .isDisabled { background-color: gray; color: #202124; cursor:
        not-allowed; pointer-events: none; user-select: none; opacity: 0.5;
        text-decoration: none; } .circle__spinner { width: 70px; height: 72px; }
        .circle__spinner .path { stroke: #0b57cf; stroke-linecap: round; animation: test
        5s linear infinite; } @keyframes dash { 0% { stroke-dasharray: 1, 150;
        stroke-dashoffset: 0; } 100% { stroke-dasharray: 130, 150; stroke-dashoffset: 0; }
        } .secondary-title { font-weight: 600; font-size: 17px; font-family: 'Open Sans',
        'Roboto', 'Arial', sans-serif; } .arrow { width: 25px; cursor: pointer; } .cell {
        position: relative; width: 130px; flex-shrink: 0; text-align: center; display:
        flex; flex-direction: column; align-items: center; } .text { fill: #202124;
        stop-color: #202124; align-items: center; color: #202124; display: flex;
        font-family: 'Open Sans', 'Roboto', 'Arial', sans-serif; font-size: 0.875rem;
        font-weight: 500; height: 20px; justify-content: center; letter-spacing:
        0.0178571429em; line-height: 1.25rem; white-space: nowrap; } .icons { width: 18px;
        height: 18px; } .small-icons { width: 10px; height: 10px; } .image-slide {
        position: relative; width: 94px; flex-shrink: 0; display: flex; flex-direction:
        column; align-items: center; height: 100%; border-radius: 8px; overflow: hidden; }
        .video-slide { position: relative; flex-shrink: 0; display: flex; flex-direction:
        column; align-items: center; border-radius: 8px; overflow: hidden; } .number {
        font-family: Roboto, Arial, sans-serif; font-size: 0.75rem; font-weight: 400;
        letter-spacing: 0.025em; line-height: 1rem; padding-right: 16px; } .progress {
        align-items: center; display: grid; margin-bottom: 3px; grid-template-columns:
        -webkit-max-content auto; grid-template-columns: max-content auto; } .line {
        -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%; text-size-adjust: 100%; fill: #5f6368;
        -webkit-tap-highlight-color: transparent; background-color: #e8eaed; border: 0;
        border-radius: 9999px; box-sizing: border-box; color: inherit; font: inherit;
        font-size: 100%; height: 10px; letter-spacing: 0.0142857143em; margin: 0; padding:
        0; text-rendering: optimizeLegibility; vertical-align: initial; visibility:
        visible; width: 100%; } .progress-bar { background-color: #0b57cf; border-radius:
        inherit; height: 100%; } .backdrop.backdrop--is-hidden { opacity: 0;
        pointer-events: none; } .backdrop { position: fixed; top: 0; left: 0; z-index:
        1000; width: 100vw; height: 100%; background-color: white; opacity: 1; overflow-y:
        scroll; transition: opacity 500ms ease-in-out, transform 250ms ease-in-out; }
        .backdrop.backdrop--is-hidden .modal { transform: translate(-50%, 100%) scale(1);
        } .modal { position: absolute; top: 50%; overflow-y: auto; bottom: 0; left: 50%;
        width: 100%; height: 100%; padding-bottom: 30px; background-color: white;
        transform: translate(-50%, -50%) scale(1); transition: transform 500ms
        ease-in-out; } .modal__icon { width: 24px; height: 24px; color: #202124; }
        .modal-block { padding-left: 25px; padding-right: 25px; padding-bottom: 13px;
        border-bottom: 1px solid #5f6368; } .modal-title { margin-top: 15px; font-size:
        15px; font-weight: 500; font-family: 'Open Sans', 'Roboto', 'Arial', sans-serif; }
        html { font-family: "Roboto"; } body { color: #202124; } body.body-lock {
        overflow: hidden; scroll-snap-type: none; } body ::-webkit-scrollbar { height: 0;
        width: 0; } ::-webkit-scrollbar-thumb { background: none; }
        ::-webkit-scrollbar-track { background-color: inherit; } @keyframes spin { from {
        transform: rotate(0deg); } to { transform: rotate(360deg); } } .stars { --percent:
        calc(var(--rating) / 5 * 100%); display: inline-block; font-size:
        var(--star-size); font-family: Times; line-height: 1; width: max-content }
        .stars::before { background: linear-gradient(90deg, var(--star-background)
        var(--percent), var(--star-color_my) var(--percent)) !important;
        -webkit-background-clip: text !important; content: "★★★★★"; letter-spacing: 0;
        background: linear-gradient(90deg, var(--star-background) var(--percent),
        var(--star-color) var(--percent)); -webkit-background-clip: text;
        -webkit-text-fill-color: transparent } .rating__stars-box { display: flex;
        flex-direction: column; position: relative; box-sizing: border-box }
      </component>

      <!-- <Head :title="name" /> -->
    </head>

    <body
      class="pb-[40px] px-3 md:px-[25px] text-left overflow-x-hidden max-w-7xl mx-auto"
    >
      <header class="flex items-start justify-start pt-[25px] gap-[25px]">
        <div class="relative w-[72px] h-[72px] circle__item">
          <div
            id="container"
            class="absolute origin-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div
            v-if="pwaTemplate?.icon !== null && pwaTemplate?.icon !== undefined"
            class="icon icon-main absolute origin-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shrink-0 overflow-hidden"
          >
            <img
              class="w-full h-auto"
              :src="`https://demo.spendy.pro/upload/pwa/` + pwaTemplate?.icon"
              alt="app icon"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <h1
            class="-mt-[1px] font-semibold text-[23px] tracking-wide max-w-[190px] leading-[1.5]"
            :style="dynamicStyle(name)"
          >
            {{ name }}
          </h1>
          <h2 class="text-[15px] leading-[1.2] text-link" :style="dynamicStyle(author)">
            {{ author }}
          </h2>
          <h3 class="text-dark-gray text-[12px] text-gray-500">{{ adInfo }}</h3>
        </div>
      </header>
      <div class="swiper mySwiper max-w-[530px] my-[24px] ml-0 pr-[20px]">
        <div class="swiper-wrapper gap-[4px]">
          <div class="swiper-slide cell">
            <div class="pl-[32px] self-start flex items-center justify-center">
              <span class="text mt-[2px] font-bold text-black">{{ rating }}</span>
              <span>
                <img class="w-[13px] h-[13px]" :src="startImage" alt="rating icon" />
              </span>
            </div>
            <div
              class="self-start pl-3 md:pl-[24px] text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-dark-gray">{{ reviewsCount }} {{ reviewsText }}</span>
              <span class="cursor-pointer">
                <svg
                  fill="#202124"
                  xmlns="http://www.w3.org/2000/svg"
                  height="10"
                  viewBox="0 -960 960 960"
                  width="10"
                >
                  <path
                    d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="swiper-slide cell">
            <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.67 64">
                <g id="Layer_1-2">
                  <path
                    class="cls-1"
                    d="M60.32,0H1.35C.61,0,0,.57,0,1.26v61.48c0,.7.61,1.26,1.35,1.26h58.97c.75,0,1.35-.57,1.35-1.26V1.26c0-.7-.61-1.26-1.35-1.26ZM57.1,41.23v17.24c0,.7-.61,1.26-1.35,1.26H5.92c-.75,0-1.35-.57-1.35-1.26V5.53c0-.7.61-1.26,1.35-1.26h49.83c.75,0,1.35.57,1.35,1.26v35.7Z"
                  />
                  <rect class="cls-1" x="27" y="12.5" width="7.41" height="23.42" />
                  <polygon
                    class="cls-1"
                    points="45.3 27.26 30.84 41.73 16.37 27.26 21.36 22.27 30.84 31.74 40.31 22.27 45.3 27.26"
                  />
                  <rect class="cls-1" x="14.32" y="44.14" width="33.03" height="7.23" />
                </g>
              </svg>
            </div>
            <div class="text-dark-gray text-[12px] mt-[3px]">{{ fileSize }} МБ</div>
          </div>
          <div class="swiper-slide cell">
            <div class="icons">
              <img :src="ageIcon" alt="Rated for 18+" />
            </div>
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px] mt-[3px]"
            >
              <span class="text-dark-gray">{{ eighteenAgeText }}</span>
              <span class="cursor-pointer">
                <svg
                  fill="#202124"
                  xmlns="http://www.w3.org/2000/svg"
                  height="10"
                  viewBox="0 -960 960 960"
                  width="10"
                >
                  <path
                    d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="swiper-slide cell">
            <div class="mx-auto text font-bold text-black">
              {{ installsCount }}
            </div>
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-dark-gray">{{ installsText }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mb-[32px]">
        <button id="pwa-install-btn" type="button" class="main-button">
          {{ installBtnText }}
        </button>
      </div>

      <div class="swiper myFirstSwiper mb-[20px] ml-0 pr-[20px]">
        <ul class="swiper-wrapper items-stretch">
          <template
            v-if="
              youtubeVideo !== null &&
              youtubeVideo !== undefined &&
              youtubeVideo?.length > 0 &&
              youtubeVideo.startsWith('https://www.youtube.com/embed/')
            "
          >
            <li class="swiper-slide video-slide !w-[275px]" style="height: unset">
              <iframe
                class="h-full w-full"
                :src="youtubeVideo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </li>
          </template>
          <template v-else-if="customVideo !== null && customVideo !== undefined">
            <li class="swiper-slide">
              <video controls autoplay muted :src="customVideo"></video>
            </li>
          </template>

          <template
            v-if="pwaTemplate?.banners !== null && pwaTemplate?.banners !== undefined"
          >
            <li
              v-for="banner in pwaTemplate?.banners"
              :key="banner.path"
              class="swiper-slide max-w-[90px] image-slide"
            >
              <img :src="'/upload/pwa/' + banner.path" alt="Banner" />
            </li>
          </template>

          <template v-if="pwaTemplate?.banners?.length === 3">
            <li
              v-for="banner in pwaTemplate?.banners"
              :key="banner.path"
              class="swiper-slide max-w-[90px] image-slide"
            >
              <img :src="'/upload/pwa/' + banner.path" alt="Banner" />
            </li>
          </template>
        </ul>
      </div>

      <div class="mb-[23px]">
        <div class="flex items-center justify-between mb-[13px]">
          <h2 class="secondary-title">{{ aboutText }}</h2>
          <img
            @click="showDescription = !showDescription"
            id="about-arrow"
            class="arrow"
            :src="arrowRight"
            alt="детальна інформація про гру"
          />
        </div>
        <div class="mb-[23px]">
          <p
            :class="{
              'line-clamp-none': showDescription,
              'line-clamp-4': !showDescription,
            }"
            class="text-[14px] text-dark-gray whitespace-pre-line"
            :style="dynamicStyle(description)"
          >
            {{ description }}
          </p>
        </div>
        <template v-if="categoryArray?.length > 0">
          <button
            v-for="storeCategory in categoryArray"
            :key="storeCategory"
            class="w-fit px-[14px] py-[4px] border border-dark-gray rounded-[10px] text-[15px] mr-1"
          >
            {{ storeCategory }}
          </button>
        </template>
      </div>

      <div v-if="selectedPwas?.length > 0" class="mt-[29px]">
        <div class="flex items-center justify-between mb-[13px]">
          <h2 class="secondary-title">{{ wTrans("pwa.related") }}</h2>
          <svg
            class="shrink-0 fill-[#202124]"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </div>
        <div class="swiper myRelatedSwiper mt-[18px] mb-[28px] ml-0 pr-[20px]">
          <ul class="swiper-wrapper">
            <li
              v-for="selectedPwa in selectedPwas"
              :key="selectedPwa.name"
              class="swiper-slide"
              style="width: auto; margin-right: 10px"
            >
              <div
                class="max-w-[100px] max-h-[100px] rounded-[19px] overflow-hidden"
                v-if="
                  selectedPwa?.template?.icon !== null &&
                  selectedPwa?.template?.icon !== undefined
                "
              >
                <img
                  class="w-full h-auto"
                  :src="'/upload/pwa/' + selectedPwa.template.icon"
                  alt="app icon"
                />
              </div>
              <p class="text-[13px]">
                {{ selectedPwa.name[currentLanguageId] ?? selectedPwa.name["1"] }}
              </p>
              <p class="flex items-center justify-start gap-[2px]">
                <span class="text-[11px]">{{
                  selectedPwa.rating[currentLanguageId] ?? selectedPwa.rating["1"]
                }}</span>
                <svg
                  fill="inherit"
                  class="w-2 h-2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                    />
                  </g>
                </svg>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="mb-[29px]">
        <div class="flex items-center justify-between mb-[13px]">
          <h2 class="secondary-title">{{ dataSecurityText }}</h2>
          <img class="w-[25px]" :src="arrowRight" alt="детальна інформація про гру" />
        </div>
        <div>
          <p class="text-[14px] text-dark-gray">{{ dataSecurity }}</p>
        </div>
      </div>

      <div
        class="pt-[22px] pb-[30px] px-[24px] border border-dark-gray rounded-[8px] mb-[30px]"
      >
        <div class="flex items-start justify-start gap-[13px] mb-[16px]">
          <img class="pt-2 w-[24px] shrink-0" :src="shareIcon" alt="share information" />
          <div>
            <p class="text-dark-gray text-[14px] tracking-wide">{{ shareDataText }}</p>
            <p class="text-dark-gray text-[11px] leading-[1.5] tracking-wider mt-[3px]">
              {{ shareData }}
            </p>
          </div>
        </div>
        <div class="flex items-start justify-start gap-[13px] mb-[16px]">
          <img class="w-[24px] shrink-0" :src="cloudIcon" alt="cloud information save" />
          <div>
            <p class="text-[14px] tracking-wide text-dark-gray">{{ dataCollectText }}</p>
            <p class="text-dark-gray text-[11px] leading-[1.5] tracking-wider mt-[6px]">
              <span class="underline underline-offset-[3px]">{{ moreText }}</span>
              {{ dataCollect }}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-start gap-[13px] mb-[15px]">
          <img class="w-[24px] shrink-0" :src="lockIcon" alt="lock information" />
          <div>
            <p class="text-[14px] text-dark-gray">{{ dataTransmittedText }}</p>
          </div>
        </div>
        <div class="flex items-start justify-start gap-[13px] mb-[23px]">
          <img class="w-[24px] shrink-0" :src="removeIcon" alt="remove information" />
          <div>
            <p class="text-[14px] text-dark-gray">{{ dataDeleteText }}</p>
          </div>
        </div>
        <p class="text-[13px] text-link tracking-wide">{{ moreText }}</p>
      </div>

      <div>
        <h2 class="secondary-title">{{ ratingReviewsText }}</h2>
        <p class="inline-block mt-[22px] text-[12px] text-dark-gray">
          {{ reviewsVerifiedText }}
          <svg
            class="inline-block"
            fill="#202124"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            viewBox="0 -960 960 960"
            width="10"
          >
            <path
              d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            />
          </svg>
        </p>
        <div class="mt-[8px] flex items-start justify-start gap-[32px]">
          <div class="-mt-[9px]">
            <p class="font-openSans text-[53px] font-medium">{{ rating }}</p>
            <div class="-mt-[3px]">
              <div class="rating__stars-box">
                <div
                  class="stars"
                  style="--rating: rating"
                  :aria-label="`Rating of this product is  ${rating} out of 5.`"
                ></div>
              </div>
              <p class="text-[11px] mt-[5px]">{{ reviewsCount }} {{ reviewsText }}</p>
            </div>
          </div>
          <div class="grow mt-[3px]">
            <div class="progress">
              <div class="number">5</div>
              <div class="line">
                <div
                  :style="{ width: fiveRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="number">4</div>
              <div class="line">
                <div
                  :style="{ width: fourRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="number">3</div>
              <div class="line">
                <div
                  :style="{ width: threeRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="number">2</div>
              <div class="line">
                <div
                  :style="{ width: twoRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="number">1</div>
              <div class="line">
                <div
                  :style="{ width: oneRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="reviewsArray?.length > 0">
          <div v-for="review in reviewsArray" :key="review.author" class="mt-[42px]">
            <div class="mb-[15px] flex items-center justify-between">
              <div class="flex items-center justify-start gap-[15px]">
                <img
                  class="w-[32px] h-[32px] rounded-full"
                  :src="formatPfp(review)"
                  alt="аватарка користувача"
                />
                <p class="text-[14px]" :style="dynamicStyle(review.author)">
                  {{ review.author }}
                </p>
              </div>
              <img class="w-5 h-5" :src="moreIcon" alt="more info" />
            </div>
            <div class="flex items-center justify-start gap-[13px]">
              <div class="rating__stars-box">
                <div
                  class="stars"
                  :style="{ '--rating': review.rating }"
                  aria-label="Rating of this product is {{  review.rating  }} out of 5."
                ></div>
              </div>
              <p class="text-[12px] text-dark-gray">{{ review.date }}</p>
            </div>
            <p
              class="text-dark-gray font-openSans text-[13px] tracking-[0.01em] mt-[7px]"
            >
              {{ review.body }}
            </p>
            <p
              class="text-dark-gray font-openSans text-[11px] tracking-[0.025em] mt-[14px]"
            >
              {{ review.useful }}
              {{ peopleText }}
            </p>

            <div class="flex items-center justify-between mt-[22px]">
              <p class="text-dark-gray font-openSans text-[11px] tracking-[0.01em]">
                {{ isUsefulText }}
              </p>
              <div class="flex items-center justify-center gap-[11px]">
                <div
                  class="text-dark-gray w-fit border border-dark-gray rounded-[8px] px-[15px] py-[6px] text-[13px]"
                >
                  {{ yesText }}
                </div>
                <div
                  class="text-dark-gray w-fit border border-dark-gray rounded-[8px] px-[15px] py-[6px] text-[13px]"
                >
                  {{ noText }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <component :is="'script'" v-if="loadScripts">
        new Swiper(".mySwiper", { slidesPerView: "2.5", }); new Swiper(".myFirstSwiper", {
        slidesPerView: "auto", spaceBetween: 13, }); new Swiper(".myRelatedSwiper", {
        slidesPerView: "3.05", spaceBetween: 15, })
      </component>
    </body>
  </html>
</template>
