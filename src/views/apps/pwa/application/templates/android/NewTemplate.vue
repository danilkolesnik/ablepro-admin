<script setup>
import { computed, ref } from "vue";
import { usePwaStore } from "@/stores/apps/pwa/pwa_old";
import { wTrans } from "laravel-vue-i18n";
import topImage from "@/assets/icons/pwa/top-dev.png";
import vvipImage from "@/assets/icons/pwa/vvip.png";
import ageIcon from "@/assets/icons/pwa/other_18.jpeg";
import shareImage from "@/assets/icons/pwa/share.webp";
import cloudImage from "@/assets/icons/pwa/cloud.webp";
import lockImage from "@/assets/icons/pwa/lock.webp";
import removeImage from "@/assets/icons/pwa/remove.webp";
import moreImage from "@/assets/icons/pwa/more.webp";
import { Head } from "@inertiajs/vue3";
import { dynamicStyle } from "@/utils/dynamicStyles";
import { formatPfp } from "@/utils/reviews";

const pwaStore = usePwaStore();
const currentLanguageId = pwaStore.getCurrentPWALanguage.id;
const name = computed(() => pwaStore.getName().value);
const author = computed(() => pwaStore.getAuthor().value);
const category = computed(() => pwaStore.getCategory().value);
const rating = computed(() => pwaStore.getRating().value);
const fileSize = computed(() => pwaStore.getFileSize().value);
const reviewsCount = computed(() => pwaStore.getReviewsCount().value);
const reviewsArray = computed(() => pwaStore.getReviewsArray().value);
const installsCount = computed(() => pwaStore.getInstallsCount().value);
const youtubeVideo = computed(() => pwaStore.getYoutubeVideo().value);
const customVideo = computed(() => {
  const video = pwaStore.getCustomVideo().value;
  console.log("Video - " + video);
  if (!video || typeof video !== "string") {
    return video;
  }
  return video.includes("/pwa/pwa/")
    ? video.replace("/pwa/pwa/", "/storage/pwa/")
    : video;
});
const pwaTemplate = computed(() => pwaStore.getPwaTemplate);
const description = computed(() => pwaStore.getDescription().value);
const selectedPwas = computed(() => pwaStore.getSelectedPwas);
const fiveRatingQuantity = computed(() => pwaStore.getFiveRatingQuantity().value);
const fourRatingQuantity = computed(() => pwaStore.getFourRatingQuantity().value);
const threeRatingQuantity = computed(() => pwaStore.getThreeRatingQuantity().value);
const twoRatingQuantity = computed(() => pwaStore.getTwoRatingQuantity().value);
const oneRatingQuantity = computed(() => pwaStore.getOneRatingQuantity().value);
const adInfo = computed(() => pwaStore.getAdInfo().value);
const aboutText = computed(() => pwaStore.getAboutText().value);
const reviewsText = computed(() => pwaStore.getReviewsText().value);
const installsText = computed(() => pwaStore.getInstallsText().value);
const installBtnText = computed(() => pwaStore.getInstallBtnText().value);
const canselBtnText = computed(() => pwaStore.getCancelBtnText().value);
const openBtnText = computed(() => pwaStore.getOpenBtnText().value);
const phoneText = computed(() => pwaStore.getPhoneText().value);
const deviceText = computed(() => pwaStore.getDeviceText().value);
const tabsText = computed(() => pwaStore.getTabsText().value);
const dataSecurityText = computed(() => pwaStore.getDataSecurityText().value);
const dataSecurity = computed(() => pwaStore.getDataSecurity().value);
const shareDataText = computed(() => pwaStore.getShareDataText().value);
const shareData = computed(() => pwaStore.getShareData().value);
const dataCollectText = computed(() => pwaStore.getDataCollectionText().value);
const dataCollect = computed(() => pwaStore.getDataCollection().value);
const moreText = computed(() => pwaStore.getMoreText().value);
const dataTransmittedText = computed(() => pwaStore.getDataTransmittedText().value);
const dataDeleteText = computed(() => pwaStore.getDataDeleteText().value);
const rateAppText = computed(() => pwaStore.getRateAppText().value);
const shareYourOpinion = computed(() => pwaStore.getShareThoughtsText().value);
const writeReviewText = computed(() => pwaStore.getWriteReviewText().value);
const ratingReviewsText = computed(() => pwaStore.getRatingReviewsText().value);
const reviewsVerifiedText = computed(() => pwaStore.getReviewsVerifiedText().value);
const yesText = computed(() => pwaStore.getYesText().value);
const noText = computed(() => pwaStore.getNoText().value);
const allReviewsText = computed(() => pwaStore.getAllReviewsText().value);
const appSupport = computed(() => pwaStore.getAppSupport().value);
const refundPolicy = computed(() => pwaStore.getRefundPolicyText().value);
const allPrices = computed(() => pwaStore.getAllPricesText().value);
const gamesText = computed(() => pwaStore.getGamesText().value);
const appsText = computed(() => pwaStore.getAppsText().value);
const booksText = computed(() => pwaStore.getBooksText().value);
const peopleText = computed(() => pwaStore.getPeopleReview().value);
const isUsefulText = computed(() => pwaStore.getIsUsefull().value);
function getRandom(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.floor(max)
  );
}

const categoryArray = computed(() => category.value);

const loadScripts = ref(false);

setTimeout(() => {
  loadScripts.value = true;
}, 2000);
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
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
        src="/src/views/apps/pwa/application/templates/android/3.4.1.js"
      ></component>
      <component :is="'style'">
        :root { --star-color_my: #e3e3e3; --star-size: 16px; --star-color: #e3e3e3;
        --star-background: #1357cd } html { -ms-overflow-style: none; /* Internet Explorer
        10+ */ scrollbar-width: none; } html::-webkit-scrollbar { display: none; }
        #container { width: 75px; height: 75px; } .stars { --percent: calc(var(--rating) /
        5 * 100%); display: inline-block; font-size: var(--star-size); font-family: Times;
        line-height: 1; width: max-content } .stars::before { background:
        linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color_my)
        var(--percent)) !important; -webkit-background-clip: text !important; content:
        "★★★★★"; letter-spacing: 0; background: linear-gradient(90deg,
        var(--star-background) var(--percent), var(--star-color) var(--percent));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent }
        .rating__stars-box { display: flex; flex-direction: column; position: relative;
        box-sizing: border-box; } .loader { position: fixed; left: 0px; top: 0px; width:
        100%; height: 100%; z-index: 9998; background-color: rgb(250, 250, 250); overflow:
        hidden; } .loader-img { position: absolute; inset: 0px; z-index: 9999; height:
        120px; width: 120px; margin: auto; } .icon-main { width: 63px; height: 63px;
        border-radius: 16px; } .icon-loading { width: 33px; height: 33px; border-radius:
        4px; } .main-button { width: 100% !important; border-radius: 20px; display: flex;
        align-items: center; justify-content: center; height: 34px; background-color:
        #0b57cf; color: white !important; font-size: 14px; font-weight: 600;
        letter-spacing: 0.0178571429em; } .active { animation: spin 1s linear infinite; }
        .isDisabled { background-color: gray; color: #202124; cursor: not-allowed;
        pointer-events: none; user-select: none; opacity: 0.5; text-decoration: none; }
        .circle__spinner { width: 63px; height: 63px; } .circle__spinner .path { stroke:
        #0b57cf; stroke-linecap: round; animation: test 5s linear infinite; } @keyframes
        dash { 0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; } 100% {
        stroke-dasharray: 130, 150; stroke-dashoffset: 0; } } .secondary-title {
        font-weight: 600; font-size: 17px; font-family: 'Open Sans', 'Roboto', 'Arial',
        sans-serif; } .arrow { width: 25px; cursor: pointer; } .cell { text-align: center;
        display: flex; flex-direction: column; align-items: center; }
        .cell:not(:first-child)::before { content: ''; display: block; position: absolute;
        top: calc(50% - 15px); left: 0; background-color: #e8eaed; width: 1px; height:
        20px; } .text { fill: #202124; stop-color: #202124; align-items: center; color:
        #202124; display: flex; font-family: 'Open Sans', 'Roboto', 'Arial', sans-serif;
        font-size: 12px; font-weight: 500; height: 20px; justify-content: center;
        letter-spacing: 0.0178571429em; line-height: 1.25rem; white-space: nowrap; }
        .icons { width: 18px; height: 18px; } .small-icons { width: 10px; height: 10px; }
        .image-slide { position: relative; width: auto; flex-shrink: 0; display: flex;
        flex-direction: column; align-items: center; height: 100%; border-radius: 16px;
        overflow: hidden; } .image-slide > img, .video-slide > video { height: 204px; }
        .number { font-family: Roboto, Arial, sans-serif; font-size: 10px; font-weight:
        400; letter-spacing: 0.025em; line-height: 1rem; padding-right: 16px; } .progress
        { align-items: center; display: grid; margin-bottom: 2px; grid-template-columns:
        -webkit-max-content auto; grid-template-columns: max-content auto; } .line {
        -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%; text-size-adjust: 100%; fill: #5f6368;
        -webkit-tap-highlight-color: transparent; background-color: #e8eaed; border: 0;
        border-radius: 9999px; box-sizing: border-box; color: inherit; font: inherit;
        font-size: 100%; height: 8px; letter-spacing: 0.0142857143em; margin: 0; padding:
        0; text-rendering: optimizeLegibility; vertical-align: initial; visibility:
        visible; width: 100%; } .progress-bar { background-color: #0b57cf; border-radius:
        inherit; height: 100%; } .backdrop.backdrop--is-hidden { opacity: 0;
        pointer-events: none; } .backdrop { position: fixed; top: 0; left: 0; z-index: 40;
        width: 100vw; height: 100%; opacity: 1; overflow-y: scroll; transition: opacity
        500ms ease-in-out, transform 250ms ease-in-out; } .backdrop.backdrop--is-hidden
        .modal { transform: translate(100%, -50%) scale(1); } .modal { position: absolute;
        top: 50%; left: 50%; width: 100%; height: 100%; padding-bottom: 30px;
        background-color: white; transform: translate(-50%, -50%) scale(1); transition:
        transform 500ms ease-in-out; } .modal__icon { width: 24px; height: 24px; color:
        #202124; } .modal-block { padding-left: 25px; padding-right: 25px; padding-bottom:
        16px; border-bottom: 1px solid #5f6368; } .modal-title { padding-top: 15px;
        font-size: 14px; font-weight: 500; font-family: 'Open Sans', 'Roboto', 'Arial',
        sans-serif; } .visually-hidden { position: absolute; white-space: nowrap; width:
        1px; height: 1px; overflow: hidden; border: 0; padding: 0; clip: rect(0 0 0 0);
        clip-path: inset(50%); margin: -1px; } html { font-family: "Roboto"; }
        body.body-lock { overflow: hidden; scroll-snap-type: none; } body
        ::-webkit-scrollbar { height: 0; width: 0; } ::-webkit-scrollbar-thumb {
        background: none; } ::-webkit-scrollbar-track { background-color: inherit; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform:
        rotate(360deg); } } .top-image { background-image: linear-gradient(180deg,
        rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%); background-size: cover;
        aspect-ratio: 16 / 9; width: 100%; max-width: 1280px; margin: 0 auto; z-index: -5;
        } #myVideo { position: fixed; top: 0; width: 100%; max-width: 1280px; margin: 0
        auto; height: auto; object-fit: contain; object-position: center; z-index: -10; }
        @media (prefers-color-scheme: dark) { .top-image { background-image:
        linear-gradient(180deg, transparent 0%, #131313 100%); background-size: cover;
        aspect-ratio: 16 / 9; width: 100%; max-width: 1280px; margin: 0 auto; z-index: -5;
        } }
      </component>
      <Head :title="name" />
    </head>
    <body class="dark:bg-dark-bg text-left max-w-7xl mx-auto relative">
      <template v-if="customVideo !== null && customVideo !== undefined">
        <video autoplay muted loop id="myVideo">
          <source :src="customVideo" type="video/mp4" />
        </video>
        <div class="top-image sticky top-0 h-[209px] md:h-[30%] xl:h-[45%]"></div>
      </template>
      <div class="bg-white dark:bg-dark-bg">
        <header
          class="bg-white dark:bg-dark-bg flex items-start justify-start pt-[25px] pl-[20px] pr-[17px] gap-[21px] relative"
        >
          <div class="relative w-[63px] h-[63px] circle__item">
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
                :src="`/upload/pwa/` + pwaTemplate?.icon"
                alt="app icon"
              />
            </div>
          </div>

          <div class="flex flex-col bg-white dark:bg-dark-bg relative">
            <h1
              class="-mt-[3px] dark:text-gray font-semibold text-[23px] tracking-wide max-w-[190px] leading-[1.5]"
            >
              {{ name }}
            </h1>
            <h2 class="text-[14px] leading-[1.2] text-link dark:text-dark-link">
              {{ author }}
            </h2>
            <h3 class="text-dark-gray text-[10px] text-gray-500 dark:text-dark-text">
              {{ adInfo }}
            </h3>
          </div>

          <div class="absolute top-[55px] md:top-6 right-0">
            <img
              class="opacity-0 dark:opacity-100 w-0 h-0 dark:h-auto dark:w-[95px]"
              :src="topImage"
              alt="top image"
            />
            <img
              class="opacity-100 dark:opacity-0 w-[66px] md:w-[95px] h-auto dark:w-0 dark:h-0"
              :src="vvipImage"
              alt="developers choice"
            />
          </div>
        </header>

        <div
          id="about-hidden"
          class="bg-white dark:bg-dark-bg visually-hidden mt-[20px] px-[20px]"
        >
          <div class="flex items-center justify-between mb-[13px]">
            <h2 class="secondary-title dark:text-gray">{{ aboutText }}</h2>
            <svg
              data-modal-open-hidden
              class="shrink-0 fill-[#202124] dark:fill-gray"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
              />
            </svg>
          </div>
          <div class="mb-[18px]">
            <p
              class="text-[14px] text-dark-gray line-clamp-4 dark:text-dark-text"
              :style="dynamicStyle(description)"
            >
              {{ description }}
            </p>
          </div>
        </div>

        <div
          class="bg-white dark:bg-dark-bg swiper mySwiperNewTemplate mt-5 mb-6 md:max-w-[520px] ml-0"
        >
          <div class="swiper-wrapper gap-[4px]">
            <div class="swiper-slide md:max-w-[130px] cell">
              <div class="flex items-center justify-center">
                <span class="text mt-[2px] font-bold text-black dark:text-gray">{{
                  rating
                }}</span>
                <span>
                  <svg
                    class="fill-dark-bg dark:fill-gray w-[10px] h-[10px]"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 22.8"
                  >
                    <path
                      class="cls-1"
                      d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                class="text-[10px] text-gray-500 dark:text-gray flex items-center justify-center gap-[2px]"
              >
                <span class="text-dark-gray dark:text-gray"
                  >{{ reviewsCount }} {{ reviewsText }}</span
                >
                <span class="cursor-pointer">
                  <svg
                    class="fill-[#202124] dark:fill-gray"
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
            <div class="swiper-slide md:max-w-[130px] cell">
              <div class="icons">
                <svg
                  class="fill-[#202124] dark:fill-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="inherit"
                >
                  <path
                    d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm80-111 160-53 160 53v-129H320v129Zm20-649L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227ZM320-280h320-320Z"
                  />
                </svg>
              </div>
              <div class="text-dark-gray dark:text-gray text-[10px] mt-[3px]">
                {{ wTrans("pwa.approved") }}
              </div>
            </div>
            <div class="swiper-slide md:max-w-[130px] cell">
              <div class="icons">
                <svg
                  class="fill-[#202124] dark:fill-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 61.67 64"
                >
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
                </svg>
              </div>
              <div class="text-dark-gray dark:text-gray text-[10px] mt-[3px]">
                {{ fileSize }} MB
              </div>
            </div>
            <div class="swiper-slide md:max-w-[130px] cell">
              <div class="icons">
                <img :src="ageIcon" alt="Rated for 18+" />
              </div>
              <div
                class="text-[10px] text-gray-500 flex items-center justify-center gap-[2px] mt-[3px]"
              >
                <span class="text-dark-gray dark:text-gray">18+</span>
                <span class="cursor-pointer">
                  <svg
                    class="fill-[#202124] dark:fill-gray"
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
            <div class="swiper-slide md:max-w-[130px] cell">
              <div class="mx-auto text font-bold text-black dark:text-gray">
                {{ installsCount }}
              </div>
              <div
                class="text-[10px] text-gray-500 flex items-center justify-center gap-[2px]"
              >
                <span class="text-dark-gray dark:text-gray">{{ installsText }}</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-dark-bg w-full pb-[14px] mb-[14px] pl-[20px] pr-[21px] border-b-[1px] border-gray dark:border-dark-gray"
        >
          <button
            type="button"
            id="pwa-install-btn"
            class="main-button transition-all max-w-[520px]"
          >
            {{ installBtnText }}
          </button>
          <div
            id="pwa-buttons"
            class="visually-hidden transition-all flex items-center justify-center gap-[4px] max-w-[520px]"
          >
            <button
              id="cansel-btn"
              class="w-1/2 border border-1 rounded-[20px] text-[#0B57CF] text-[12px] px-[20px] py-[4px]"
            >
              {{ canselBtnText }}
              <svg
                class="animate hidden active visually-hidden"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
            <button
              id="open-btn"
              class="w-1/2 border border-transparent rounded-[20px] isDisabled dark:bg-dark-gray dark:text-dark-text font-medium text-[12px] px-[20px] py-[4px]"
            >
              {{ openBtnText }}
            </button>
          </div>
        </div>

        <div
          class="bg-white dark:bg-dark-bg pl-[20px] swiper myDeviceSwiperNewTemplate mb-[20px]"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide !w-fit bg-[#c0e7fd] border border-[#c0e7fd] rounded-[7px] py-[4px] pl-[5px] pr-[12px] ml-5"
            >
              <div class="flex items-center justify-start gap-[5px]">
                <svg
                  class="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="text text-[10px]">{{ phoneText }}</p>
                <p class="text text-[10px]">{{ rating }}</p>
                <svg
                  width="10"
                  height="10"
                  class="fill-[#303030]"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div
              class="swiper-slide !w-fit border border-black dark:border-dark-gray rounded-[7px] py-[4px] pl-[5px] pr-[12px]"
            >
              <div class="flex items-center justify-center gap-[5px]">
                <svg
                  class="shrink-0 fill-black dark:fill-gray"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M510.163,392.022l-45.59-57.326V93.611c0-11.662-9.458-21.12-21.12-21.12H68.546
                                c-11.662,0-21.115,9.458-21.115,21.12v241.085L1.837,392.022C0.648,393.517,0,395.367,0,397.287v25.373
                                c0,9.311,7.542,16.849,16.849,16.849h478.302c9.307,0,16.849-7.538,16.849-16.849v-25.373
                                C512,395.367,511.356,393.517,510.163,392.022z M77.226,102.291h357.548v202.606H77.226V102.291z M304.121,419.47h-96.242v-25.478
                                h96.242V419.47z"
                  />
                </svg>
                <p class="text text-[10px] dark:text-gray">{{ deviceText }} Chromebook</p>
                <p class="text text-[10px] dark:text-gray">{{ rating }}</p>
                <svg
                  width="10"
                  height="10"
                  class="fill-[#303030] dark:fill-gray"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div
              class="swiper-slide !w-fit border border-black dark:border-dark-gray rounded-[7px] py-[4px] pl-[5px] pr-[12px]"
            >
              <div class="flex items-center justify-center gap-[5px]">
                <svg
                  class="shrink-0 fill-black dark:fill-gray"
                  fill="inherit"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M19,6 L5,6 C4.44771525,6 4,6.44771525 4,7 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7 C20,6.44771525 19.5522847,6 19,6 Z M12,14 C12.5522847,14 13,14.4477153 13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 C11,14.4477153 11.4477153,14 12,14 Z"
                  />
                </svg>
                <p class="text text-[10px] dark:text-gray">{{ tabsText }}</p>
                <p class="text text-[10px] dark:text-gray">{{ rating }}</p>
                <svg
                  width="10"
                  height="10"
                  class="fill-[#303030] dark:fill-gray"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-dark-bg px-[20px] swiper myFirstSwiperNewTemplate mb-[28px] ml-0"
        >
          <ul class="swiper-wrapper">
            <template
              v-if="
                youtubeVideo !== null &&
                youtubeVideo?.length > 0 &&
                youtubeVideo.startsWith('https://www.youtube.com/embed/')
              "
            >
              <li class="swiper-slide video-slide">
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
            <template
              v-if="pwaTemplate?.banners !== null && pwaTemplate?.banners !== undefined"
            >
              <li
                v-for="banner in pwaTemplate?.banners"
                :key="banner.path"
                class="swiper-slide image-slide"
              >
                <img :src="'/upload/pwa/' + banner.path" alt="Banner" />
              </li>
            </template>
            <template v-if="pwaTemplate?.banners?.length === 3">
              <li
                v-for="banner in pwaTemplate?.banners"
                :key="banner.path"
                class="swiper-slide image-slide"
              >
                <img :src="'/upload/pwa/' + banner.path" alt="Banner" />
              </li>
            </template>
          </ul>
        </div>

        <div id="about" class="bg-white dark:bg-dark-bg px-[20px]">
          <div class="flex items-center justify-between mb-[13px]">
            <h2 class="secondary-title text-[12px] dark:text-gray">{{ aboutText }}</h2>
            <svg
              data-modal-open
              class="shrink-0 fill-[#202124] dark:fill-gray"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
              />
            </svg>
          </div>
          <div class="mb-[18px]">
            <p class="text-[14px] text-dark-gray line-clamp-4 dark:text-dark-text">
              {{ description }}
            </p>
          </div>
        </div>

        <template v-if="categoryArray?.length > 0">
          <div class="pl-[20px]">
            <div
              class="bg-white dark:bg-dark-bg swiper myCategorySwiperNewTemplate ml-0 mb-[28px]"
            >
              <div class="swiper-wrapper">
                <div
                  v-for="storeCategory in categoryArray"
                  :key="storeCategory"
                  class="swiper-slide !w-fit border border-black dark:border-dark-gray rounded-[7px] py-[4px] px-[12px]"
                >
                  <div class="flex items-center justify-center gap-[5px]">
                    <p class="text text-[11px] dark:text-gray">
                      {{ storeCategory }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="bg-white dark:bg-dark-bg px-[20px] mb-[29px]">
          <div class="flex items-center justify-between mb-[13px]">
            <h2 class="secondary-title dark:text-dark-text">{{ dataSecurityText }}</h2>
            <svg
              class="shrink-0 fill-[#202124] dark:fill-gray"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
              />
            </svg>
          </div>
          <div>
            <p class="text-[12px] text-dark-gray dark:text-dark-text">
              {{ dataSecurity }}
            </p>
          </div>
        </div>

        <div
          class="bg-white dark:bg-dark-bg mx-[20px] pt-[12px] pb-[30px] px-[24px] border border-dark-gray dark:border-dark-gray rounded-[8px] mb-[49px]"
        >
          <div class="flex items-start justify-start gap-[13px] mb-[8px]">
            <img
              class="pt-2 w-[18px] shrink-0"
              :src="shareImage"
              alt="share information"
            />
            <div class="mt-[4px]">
              <p class="text-dark-gray dark:text-dark-text text-[12px] tracking-wide">
                {{ shareDataText }}
              </p>
              <p
                class="text-dark-gray dark:text-dark-text text-[10px] leading-[1.5] tracking-wider mt-[3px]"
              >
                {{ shareData }}
              </p>
            </div>
          </div>
          <div class="flex items-start justify-start gap-[13px] mb-[16px]">
            <img
              class="w-[18px] shrink-0"
              :src="cloudImage"
              alt="cloud information save"
            />
            <div class="mt-[4px]">
              <p class="text-[12px] tracking-wide text-dark-gray dark:text-dark-text">
                {{ dataCollectText }}
              </p>
              <p
                class="text-dark-gray dark:text-dark-text text-[11px] leading-[1.5] tracking-wider mt-[6px]"
              >
                {{ dataCollect }}
              </p>
            </div>
          </div>
          <div class="flex items-center justify-start gap-[13px] mb-[15px]">
            <img class="w-[18px] shrink-0" :src="lockImage" alt="lock information" />
            <div class="mt-[4px]">
              <p class="text-[12px] text-dark-gray dark:text-dark-text">
                {{ dataTransmittedText }}
              </p>
            </div>
          </div>
          <div class="flex items-start justify-start gap-[13px] mb-[23px]">
            <img class="w-[18px] shrink-0" :src="removeImage" alt="remove information" />
            <div class="mt-[4px]">
              <p class="text-[12px] text-dark-gray dark:text-dark-text">
                {{ dataDeleteText }}
              </p>
            </div>
          </div>
          <p class="text-[10px] text-link dark:text-dark-link tracking-wide">
            {{ moreText }}
          </p>
        </div>

        <div class="bg-white dark:bg-dark-bg mx-[20px]">
          <h2 class="secondary-title text-[14px] dark:text-dark-text">
            {{ rateAppText }}
          </h2>
          <p class="text-[10px] text-dark-gray dark:text-dark-text">
            {{ shareYourOpinion }}
          </p>

          <ul
            class="px-[5px] mt-[20px] mb-[24px] flex items-center justify-between gap-[5px]"
          >
            <li>
              <svg
                class="fill-transparent stroke-2 stroke-[#827f7f]"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22.8"
              >
                <path
                  d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                />
              </svg>
            </li>
            <li>
              <svg
                class="fill-transparent stroke-2 stroke-[#827f7f]"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22.8"
              >
                <path
                  d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                />
              </svg>
            </li>
            <li>
              <svg
                class="fill-transparent stroke-2 stroke-[#827f7f]"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22.8"
              >
                <path
                  d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                />
              </svg>
            </li>
            <li>
              <svg
                class="fill-transparent stroke-2 stroke-[#827f7f]"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22.8"
              >
                <path
                  d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                />
              </svg>
            </li>
            <li>
              <svg
                class="fill-transparent stroke-2 stroke-[#827f7f]"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 22.8"
              >
                <path
                  d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                />
              </svg>
            </li>
          </ul>
          <p class="mb-[42px] text-[12px] text-[#0B57CF] dark:text-dark-link">
            {{ writeReviewText }}
          </p>

          <div class="flex items-center justify-between">
            <h2 class="secondary-title text-[14px] dark:text-dark-text">
              {{ ratingReviewsText }}
            </h2>
            <svg
              class="shrink-0 fill-[#202124] dark:fill-gray"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
              />
            </svg>
          </div>

          <p
            class="inline-block mt-[22px] text-[12px] leading-[1.2] text-dark-gray dark:text-dark-text"
          >
            {{ reviewsVerifiedText }}
            <svg
              class="inline-block fill-[#202124] dark:fill-gray"
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

          <div class="mt-[8px] flex items-start justify-start gap-[26px]">
            <div class="">
              <p class="font-openSans mt-[-14px] text-[49px] font-medium dark:text-gray">
                {{ rating }}
              </p>
              <div class="-mt-[3px]">
                <div class="rating__stars-box">
                  <div
                    class="stars"
                    :style="{ '--rating': rating }"
                    :aria-label="`Rating of this product is ${rating} out of 5.`"
                  ></div>
                </div>
                <p class="text-[10px] dark:text-gray">{{ reviewsCount }}</p>
              </div>
            </div>
            <div class="grow mt-[1px]">
              <div class="progress">
                <div class="number dark:text-dark-text">5</div>
                <div class="line dark:bg-dark-gray">
                  <div
                    :style="{ width: fiveRatingQuantity + '%' }"
                    class="progress-bar dark:bg-dark-link"
                  ></div>
                </div>
              </div>
              <div class="progress">
                <div class="number dark:text-dark-text">4</div>
                <div class="line dark:bg-dark-gray">
                  <div
                    :style="{ width: fourRatingQuantity + '%' }"
                    class="progress-bar dark:bg-dark-link"
                  ></div>
                </div>
              </div>
              <div class="progress">
                <div class="number dark:text-dark-text">3</div>
                <div class="line dark:bg-dark-gray">
                  <div
                    :style="{ width: threeRatingQuantity + '%' }"
                    class="progress-bar dark:bg-dark-link"
                  ></div>
                </div>
              </div>
              <div class="progress">
                <div class="number dark:text-dark-text">2</div>
                <div class="line dark:bg-dark-gray">
                  <div
                    :style="{ width: twoRatingQuantity + '%' }"
                    class="progress-bar dark:bg-dark-link"
                  ></div>
                </div>
              </div>
              <div class="progress">
                <div class="number dark:text-dark-text">1</div>
                <div class="line dark:bg-dark-gray">
                  <div
                    :style="{ width: oneRatingQuantity + '%' }"
                    class="progress-bar dark:bg-dark-link"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="reviewsArray?.length > 0"
            v-for="review in reviewsArray"
            :key="review.author"
            class="mt-[28px]"
          >
            <div class="pb-3">
              <div class="mb-[12px] flex items-center justify-between">
                <div class="flex items-center justify-start gap-[12px]">
                  <img
                    class="w-8 h-8 rounded-full overflow-hidden object-cover"
                    :src="formatPfp(review)"
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <p
                    class="text-[12px] dark:text-dark-text"
                    :style="dynamicStyle(review.author)"
                  >
                    {{ review.author }}
                  </p>
                </div>
                <img class="w-5 h-5" :src="moreImage" alt="more info" />
              </div>
              <div class="flex items-center justify-start gap-[10px]">
                <div class="rating__stars-box">
                  <div
                    class="stars"
                    :style="{ '--rating': review.rating }"
                    :aria-label="`Rating of this product is ${review.rating} out of 5.`"
                  ></div>
                </div>
                <p class="text-[10px] text-dark-gray dark:text-dark-text">
                  {{ review.date }}
                </p>
              </div>
              <p
                class="text-dark-gray dark:text-dark-text font-openSans text-[12px] tracking-[0.01em] mt-[7px]"
              >
                {{ review.body }}
              </p>
              <p
                class="text-dark-gray dark:text-dark-text font-openSans text-[10px] tracking-[0.025em] mt-[10px]"
              >
                {{ review.useful }}
                {{ peopleText }}
              </p>

              <div class="flex items-center justify-between mt-[19px]">
                <p
                  class="text-dark-gray dark:text-dark-text font-openSans text-[10px] tracking-[0.01em]"
                >
                  {{ isUsefulText }}
                </p>
                <div class="flex items-center justify-center gap-[11px]">
                  <div
                    class="text-dark-gray w-fit border border-dark-gray dark:border-gray dark:text-dark-text rounded-[8px] px-[15px] py-[6px] text-[13px]"
                  >
                    {{ yesText }}
                  </div>
                  <div
                    class="text-dark-gray w-fit border border-dark-gray dark:border-gray dark:text-dark-text rounded-[8px] px-[15px] py-[6px] text-[13px]"
                  >
                    {{ noText }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p class="mt-[20px] mb-[45px] text-[12px] text-[#0B57CF] dark:text-dark-link">
            {{ allReviewsText }}
          </p>

          <div class="flex items-center justify-between mb-[32px]">
            <h2 class="secondary-title text-[15px] dark:text-dark-text">
              {{ appSupport }}
            </h2>

            <svg
              class="shrink-0 stroke-[#202124] dark:stroke-gray"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9.5L12 14.5L7 9.5"
                stroke="inherit"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          v-if="
            selectedPwas !== null &&
            selectedPwas !== undefined &&
            selectedPwas?.length > 0
          "
          class="bg-white dark:bg-dark-bg ml-5 mt-[29px]"
        >
          <div class="pr-5 flex items-center justify-between mb-[13px]">
            <h2 class="secondary-title dark:text-dark-text">
              {{ wTrans("pwa.related") }}
            </h2>
            <svg
              class="shrink-0 fill-[#202124] dark:fill-gray"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
              />
            </svg>
          </div>
          <div
            :class="`swiper myRelatedSwiperNewTemplate mt-[18px] mb-[28px] ml-0 pr-[20px] w-full max-w-[calc(100px*${selectedPwas?.length})]`"
          >
            <ul class="swiper-wrapper">
              <li
                v-for="selectedPwa in selectedPwas"
                :key="selectedPwa.name"
                class="swiper-slide pr-[10px]"
              >
                <div class="w-[100px] h-[100px] rounded-[19px] overflow-hidden">
                  <img
                    class="w-full h-auto"
                    :src="'/upload/pwa/' + selectedPwa?.template?.icon"
                    alt="app icon"
                  />
                </div>
                <p class="text-[13px] dark:text-dark-text">
                  {{ selectedPwa.name[currentLanguageId] ?? selectedPwa.name["1"] }}
                </p>
                <p class="flex items-center justify-start gap-[2px]">
                  <span class="text-[11px] dark:text-dark-text">{{
                    selectedPwa.rating[currentLanguageId] ?? selectedPwa.rating["1"]
                  }}</span>
                  <svg
                    fill="inherit"
                    class="w-2 h-2 dark:fill-gray"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 22.8"
                  >
                    <path
                      class="cls-1"
                      d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                    />
                  </svg>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white dark:bg-dark-bg mx-5 pb-20">
          <div class="flex items-center justify-start gap-[7px] mb-[19px]">
            <svg
              class="shrink-0 fill-[#202124] dark:fill-gray"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42259 7.52194C8.71085 7.22448 8.70339 6.74967 8.40594 6.46141C8.10848 6.17315 7.63367 6.18061 7.34541 6.47806L8.42259 7.52194ZM4.46141 9.45406C4.17315 9.75152 4.18061 10.2263 4.47806 10.5146C4.77552 10.8028 5.25033 10.7954 5.53859 10.4979L4.46141 9.45406ZM5.52244 9.43789C5.22525 9.14936 4.75042 9.15638 4.46189 9.45356C4.17336 9.75075 4.18038 10.2256 4.47756 10.5141L5.52244 9.43789ZM7.36156 13.3141C7.65875 13.6026 8.13358 13.5956 8.42211 13.2984C8.71064 13.0012 8.70362 12.5264 8.40644 12.2379L7.36156 13.3141ZM5 9.226C4.58579 9.226 4.25 9.56179 4.25 9.976C4.25 10.3902 4.58579 10.726 5 10.726V9.226ZM15.62 9.976L15.6347 9.22614C15.6298 9.22605 15.6249 9.226 15.62 9.226V9.976ZM19 13.488L18.2501 13.4739C18.25 13.4833 18.25 13.4927 18.2501 13.5021L19 13.488ZM15.62 17V17.75C15.6249 17.75 15.6298 17.75 15.6347 17.7499L15.62 17ZM5 16.25C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75V16.25ZM7.34541 6.47806L4.46141 9.45406L5.53859 10.4979L8.42259 7.52194L7.34541 6.47806ZM4.47756 10.5141L7.36156 13.3141L8.40644 12.2379L5.52244 9.43789L4.47756 10.5141ZM5 10.726H15.62V9.226H5V10.726ZM15.6053 10.7259C17.0943 10.755 18.2781 11.985 18.2501 13.4739L19.7499 13.5021C19.7933 11.1853 17.9514 9.27143 15.6347 9.22614L15.6053 10.7259ZM18.2501 13.5021C18.2781 14.991 17.0943 16.221 15.6053 16.2501L15.6347 17.7499C17.9514 17.7046 19.7933 15.7907 19.7499 13.4739L18.2501 13.5021ZM15.62 16.25H5V17.75H15.62V16.25Z"
                fill="inherit"
              />
            </svg>
            <p class="text-[12px] dark:text-dark-text">{{ refundPolicy }} Google Play</p>
          </div>
          <p class="text-[12px] dark:text-dark-text">{{ allPrices }}</p>
        </div>
      </div>
      <div
        id="sticky"
        class="z-50 px-[20px] py-[8px] bg-[#f6f6f8] dark:bg-dark-secondary-gray fixed bottom-0 w-full max-w-7xl"
      >
        <div class="flex items-center justify-between max-w-7xl">
          <div class="text-center">
            <div class="bg-[#c0e7fd] px-3 py-0.5 rounded-[8px] w-fit mx-auto">
              <svg
                height="16"
                width="16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <g>
                  <path
                    class="st0"
                    d="M510.441,322.894l-29.76-126.56c-15.073-56.252-66.047-95.363-124.286-95.363H155.604
                        c-58.239,0-109.212,39.11-124.285,95.363l-29.76,126.56c-7.618,36.303,13.34,72.524,48.626,84.001l1.74,0.558
                        c32.658,10.632,68.288-3.07,85.429-32.831l25.894-38.289c6.502-11.288,18.538-18.25,31.55-18.25h122.406
                        c13.012,0,25.048,6.962,31.549,18.25l25.894,38.289c17.142,29.761,52.779,43.463,85.438,32.831l1.732-0.558
                        C497.1,395.418,518.06,359.197,510.441,322.894z M191.046,238.081h-41.689v41.696h-36.295v-41.696H71.373v-36.279h41.689v-41.68
                        h36.295v41.68h41.689V238.081z M374.728,151.436c12.626,0,22.847,10.221,22.847,22.848c0,12.61-10.221,22.831-22.847,22.831
                        c-12.61,0-22.831-10.221-22.831-22.831C351.897,161.656,362.118,151.436,374.728,151.436z M329.049,242.801
                        c-12.61,0-22.839-10.23-22.839-22.856c0-12.602,10.229-22.831,22.839-22.831c12.618,0,22.839,10.229,22.839,22.831
                        C351.889,232.572,341.668,242.801,329.049,242.801z M374.728,288.471c-12.61,0-22.831-10.221-22.831-22.831
                        c0-12.627,10.221-22.848,22.831-22.848c12.626,0,22.847,10.221,22.847,22.848C397.575,278.25,387.354,288.471,374.728,288.471z
                         M420.406,242.801c-12.61,0-22.832-10.23-22.832-22.856c0-12.602,10.222-22.831,22.832-22.831
                        c12.618,0,22.847,10.229,22.847,22.831C443.253,232.572,433.024,242.801,420.406,242.801z"
                  />
                </g>
              </svg>
            </div>
            <p class="text-[10px] dark:text-dark-text">{{ gamesText }}</p>
          </div>
          <div class="text-center">
            <div class="px-3 py-0.5 rounded-[8px] w-fit mx-auto">
              <svg
                class="shrink-0 fill-black dark:fill-gray"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.15,11.26h-5A1.94,1.94,0,0,1,2.22,9.33v-5A1.94,1.94,0,0,1,4.15,2.4h5a1.94,1.94,0,0,1,1.93,1.93v5A1.94,1.94,0,0,1,9.15,11.26Zm-5-7.36a.44.44,0,0,0-.43.43v5a.43.43,0,0,0,.43.43h5a.43.43,0,0,0,.43-.43v-5a.43.43,0,0,0-.43-.43Z"
                />

                <path
                  d="M19.85,11.26h-5a1.94,1.94,0,0,1-1.93-1.93v-5A1.94,1.94,0,0,1,14.85,2.4h5a1.94,1.94,0,0,1,1.93,1.93v5A1.94,1.94,0,0,1,19.85,11.26Zm-5-7.36a.43.43,0,0,0-.43.43v5a.43.43,0,0,0,.43.43h5a.43.43,0,0,0,.43-.43v-5a.44.44,0,0,0-.43-.43Z"
                />

                <path
                  d="M9.15,21.6h-5a1.94,1.94,0,0,1-1.93-1.93v-5a1.94,1.94,0,0,1,1.93-1.93h5a1.94,1.94,0,0,1,1.93,1.93v5A1.94,1.94,0,0,1,9.15,21.6Zm-5-7.36a.43.43,0,0,0-.43.43v5a.44.44,0,0,0,.43.43h5a.43.43,0,0,0,.43-.43v-5a.43.43,0,0,0-.43-.43Z"
                />

                <path
                  d="M19.85,21.6h-5a1.94,1.94,0,0,1-1.93-1.93v-5a1.94,1.94,0,0,1,1.93-1.93h5a1.94,1.94,0,0,1,1.93,1.93v5A1.94,1.94,0,0,1,19.85,21.6Zm-5-7.36a.43.43,0,0,0-.43.43v5a.43.43,0,0,0,.43.43h5a.44.44,0,0,0,.43-.43v-5a.43.43,0,0,0-.43-.43Z"
                />
              </svg>
            </div>
            <p class="text-[10px] dark:text-dark-text">{{ appsText }}</p>
          </div>
          <div class="text-center">
            <div class="px-3 py-0.5 rounded-[8px] w-fit mx-auto">
              <svg
                class="shrink-0 stroke-black dark:stroke-gray"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="inherit"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M8 3v9l3-3 3 3V3M8 3h6"
                />
              </svg>
            </div>
            <p class="text-[10px] dark:text-dark-text">{{ booksText }}</p>
          </div>
        </div>
      </div>
      <component is="script" v-if="loadScripts">
        new Swiper(".mySwiperNewTemplate", { slidesPerView: 2.6, breakpoints: { 480: {
        slidesPerView: "3.5", }, 650: { slidesPerView: "4", } } }); new
        Swiper(".myDeviceSwiperNewTemplate", { slidesPerView: "2.1", spaceBetween: 7, });
        new Swiper(".myCategorySwiperNewTemplate", { slidesPerView: "3.1", spaceBetween:
        7, }); new Swiper(".myFirstSwiperNewTemplate", { spaceBetween: 13, slidesPerView:
        "auto", }); new Swiper(".myRelatedSwiperNewTemplate", { slidesPerView: "3.05",
        spaceBetween: 15, });
      </component>
    </body>
  </html>
</template>

<style scoped></style>
