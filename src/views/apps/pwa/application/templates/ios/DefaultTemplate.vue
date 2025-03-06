<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { wTrans } from "laravel-vue-i18n";

import gameCenterIcon from "@/assets/icons/pwa/GameCenter@2x.png";
import { usePwaStore } from "@/stores/apps/pwa/pwa_old";
// import { Head } from "@inertiajs/vue3";

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
const gamesText = computed(() => pwaStore.getGamesText().value);
const inAppText = computed(() => pwaStore.getInAppText().value);
const getBtnText = computed(() => pwaStore.getGetBtnText().value);
const installBtnText = computed(() => pwaStore.getInstallBtnText().value);
const reviewsText = computed(() => pwaStore.getReviewsText().value);
const ageText = computed(() => pwaStore.getAgeIOS().value);
const yearsText = computed(() => pwaStore.getYearsIOS().value);
const scheduleText = computed(() => pwaStore.getScheduleIOS().value);
const developerText = computed(() => pwaStore.getDeveloperIOS().value);
const sizeText = computed(() => pwaStore.getSizeIOS().value);
const langText = computed(() => pwaStore.getLangIOS().value);
const appsText = computed(() => pwaStore.getAppsText().value);
const moreText = computed(() => pwaStore.getMoreText().value);
const ratingReviewsText = computed(() => pwaStore.getRatingReviewsText().value);
const allReviewsText = computed(() => pwaStore.getAllReviewsText().value);
const fromText = computed(() => pwaStore.getFromIOS().value);
const whatsNewText = computed(() => pwaStore.getWhatsNew().value);
const versionHistoryText = computed(() => pwaStore.getVersionHistory().value);
const versionText = computed(() => pwaStore.getVersionIOS().value);
const agoText = computed(() => pwaStore.getAgoIOS().value);
const bugsText = computed(() => pwaStore.getBugsIOS().value);
const appPrivacy = computed(() => pwaStore.getAppPrivacy().value);
const appPrivacyText = computed(() => pwaStore.getAppPrivacyText().value);
const devPrivacy = computed(() => pwaStore.getDevPrivacy().value);
const dataColl = computed(() => pwaStore.getDataCollectionText().value);
const devColl = computed(() => pwaStore.getDevCollectionText().value);
const followDataText = computed(() => pwaStore.getFollowData().value);
const infoText = computed(() => pwaStore.getInfoIOS().value);
const categoryText = computed(() => pwaStore.getCategoryIOS().value);
const compatibility = computed(() => pwaStore.getCompatibilityIOS().value);
const compatibilityText = computed(() => pwaStore.getCompatibilityTextIOS().value);
const copyrightText = computed(() => pwaStore.getCopyRightIOS().value);
const reportText = computed(() => pwaStore.getReportIOS().value);
const supportText = computed(() => pwaStore.getSupportIOS().value);
const gameCenter = computed(() => pwaStore.getGameCenter().value);
const gameCenterText = computed(() => pwaStore.getGameCenterText().value);
const alsoLikeText = computed(() => pwaStore.getAlsoLike().value);
const fileSize = computed(() => pwaStore.getFileSize().value);

const lastKnownScrollPosition = ref(0);
const isShown = ref(false);
const showDescription = ref(false);

const toggleHeader = () => {
  lastKnownScrollPosition.value = window.scrollY;
  isShown.value = lastKnownScrollPosition.value > 20;
};
const toggleDesctiption = () => {
  showDescription.value = !showDescription.value;
};
const categoryArray = computed(() => category.value);

const chunkedPwas = computed(() => {
  const chunkSize = 2;
  const result = [];
  for (let i = 0; i < selectedPwas.value?.length; i += chunkSize) {
    result.push(selectedPwas.value.slice(i, i + chunkSize));
  }
  console.log(result);
  return result;
});
function getRandom(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.floor(max)
  );
}
onMounted(() => {
  window.addEventListener("scroll", toggleHeader);
});
onUnmounted(() => {
  window.removeEventListener("scroll", toggleHeader);
});

const loadScripts = ref(false);

setTimeout(() => {
  loadScripts.value = true;
}, 2000);
</script>

<template>
  <!DOCTYPE html>
  <html lang="uk" class="overflow-x-hidden">
    <head>
      <meta charset="UTF-8" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />

      <! -- шрифти -->
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
        :root { --star-color_my: #404040; --star-size: 16px; --star-color: #e3e3e3;
        --star-background: #f7840a; } #container { width: 72px; height: 72px; } body {
        font-family: "SF Pro Text", "SF Pro Icons", "Apple WebExp Icons Custom",
        "Helvetica Neue", Helvetica, Arial, sans-serif; } .top-header { position: fixed;
        top: 0; left: 0; right: 0; opacity: 0; visibility: hidden; pointer-events: none;
        backdrop-filter: saturate(180%) blur(20px); background-color: rgba(255, 255, 255,
        .72); z-index: 5; animation-name: hideTop; animation-duration: .5s;
        animation-iteration-count: 1; animation-fill-mode: forwards; } @keyframes hideTop
        { from { opacity: 1; visibility: visible; pointer-events: none; } to { opacity: 0;
        visibility: hidden; pointer-events: none; } } .top-header.active { animation-name:
        showTop; animation-duration: .5s; animation-iteration-count: 1;
        animation-fill-mode: forwards; } @keyframes showTop { from { opacity: 0;
        visibility: hidden; pointer-events: none; } to { opacity: 1; visibility: visible;
        pointer-events: none; } } .icon-main { width: 122px; height:121px; border-radius:
        26px; } .main-button { text-transform: uppercase; border-radius: 20px; display:
        flex; align-items: center; justify-content: center; padding: 5px 12px;
        background-color: #0077f5; color: white !important; font-size: 0.85rem;
        font-weight: 600; letter-spacing: 0.0178571429em; } .circle__spinner .path {
        stroke: #0077f5; stroke-linecap: round; animation: test 5s linear infinite; }
        .mask { max-height: 65px; mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0px,
        rgba(0, 0, 0, 0) 18.0001px, rgb(0, 0, 0) 18.0001px), linear-gradient(270deg,
        rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 32.8px, rgb(0, 0, 0) 68.8002px);
        transition: max-height 0.3s ease-out; } .mask-off { max-height: 500px; transition:
        max-height 0.5s ease-out; } @keyframes spin { from { transform: rotate(0deg); } to
        { transform: rotate(360deg); } } @keyframes dash { 0% { stroke-dasharray: 1, 150;
        stroke-dashoffset: 0; } 100% { stroke-dasharray: 130, 150; stroke-dashoffset: 0; }
        } .secondary-title { font-weight: 700; font-size: 20px; font-family: 'SF',
        'Helvetica', 'Helvetica Neue', sans-serif; } .arrow { width: 25px; cursor:
        pointer; } .cell { text-align: center; display: flex; flex-direction: column;
        align-items: center; } .cell:not(:first-child)::before { background-color:
        #e8eaed; content: ''; display: block; height: 33px; left: -6px; position:
        absolute; top: calc(50% - 15px); width: 1px; } .text { fill: #202124; stop-color:
        #202124; align-items: center; color: #202124; display: flex; font-family: 'Open
        Sans', 'Roboto', 'Arial', sans-serif; font-size: 24px; font-weight: 500;
        justify-content: center; letter-spacing: 0.0178571429em; line-height: 1.25rem;
        white-space: nowrap; } .icons { width: 18px; height: 18px; } .small-icons { width:
        10px; height: 10px; } .image-slide { position: relative; width: 275px;
        flex-shrink: 0; display: flex; flex-direction: column; align-items: center;
        height: 100%; border-radius: 16px; overflow: hidden; } .number { font-family:
        Roboto, Arial, sans-serif; font-size: 0.75rem; font-weight: 400; letter-spacing:
        0.025em; line-height: 1rem; padding-right: 16px; } .progress { align-items:
        center; display: grid; gap:10px; grid-template-columns: -webkit-max-content auto;
        grid-template-columns: max-content auto; } .line { -webkit-font-smoothing:
        antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%;
        text-size-adjust: 100%; fill: #5f6368; -webkit-tap-highlight-color: transparent;
        background-color: #e8eaed; border: 0; border-radius: 9999px; box-sizing:
        border-box; color: inherit; font: inherit; font-size: 100%; height: 3px;
        letter-spacing: 0.0142857143em; margin: 0; padding: 0; text-rendering:
        optimizeLegibility; vertical-align: initial; visibility: visible; width: 100%; }
        .visually-hidden { position: absolute; white-space: nowrap; width: 1px; height:
        1px; overflow: hidden; border: 0; padding: 0; clip: rect(0 0 0 0); clip-path:
        inset(50%); margin: -1px; } .progress-bar { background-color: #919191;
        border-radius: inherit; height: 100%; } .backdrop.backdrop--is-hidden { opacity:
        0; pointer-events: none; } .backdrop { position: fixed; top: 0; left: 0; z-index:
        1000; width: 100vw; height: 100%; background-color: white; opacity: 1; overflow-y:
        scroll; transition: opacity 500ms ease-in-out, transform 250ms ease-in-out; }
        .backdrop.backdrop--is-hidden .modal { transform: translate(-50%, 100%) scale(1);
        } .shad { box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) } @keyframes removeBackButton {
        from { opacity:1; visibility: visible; pointer-events: none; } to { opacity: 0;
        visibility: hidden; pointer-events: none; } } @keyframes spin { from { transform:
        rotate(0deg); } to { transform: rotate(360deg); } } .stars { --percent:
        calc(var(--rating) / 5 * 100%); display: inline-block; font-size:
        var(--star-size); font-family: Times; line-height: 1; width: max-content }
        .stars::before { background: linear-gradient(90deg, var(--star-background)
        var(--percent), var(--star-color_my) var(--percent)) !important;
        -webkit-background-clip: text !important; content: "★★★★★"; letter-spacing: 0;
        background: linear-gradient(90deg, var(--star-background) var(--percent),
        var(--star-color) var(--percent)); -webkit-background-clip: text;
        -webkit-text-fill-color: transparent } .rating__stars-box { display: flex;
        flex-direction: column; position: relative; box-sizing: border-box }
        body::-webkit-scrollbar { height: 0; width: 0; display: none; }
        ::-webkit-scrollbar-thumb { background: none; } ::-webkit-scrollbar-track {
        background-color: inherit; } .video-slide { position: relative; flex-shrink: 0;
        display: flex; flex-direction: column; align-items: center; border-radius: 8px;
        overflow: hidden; }
      </component>
      <!-- <Head :title="name" /> -->
    </head>
    <body class="body-ios relative text-left overflow-x-hidden max-w-7xl mx-auto">
      <div
        :class="isShown ? 'active' : ''"
        class="top-header pb-[20px] px-[8px] pt-[20px] flex items-center justify-between"
      >
        <div class="flex items-center justify-start">
          <svg
            class="shrink-0"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="ic_fluent_ios_arrow_left_24_filled"
                fill="#0077f5"
                fill-rule="nonzero"
              >
                <path
                  d="M12.7270006,3.68663679 C13.1062197,3.28512543 13.0881482,2.6522184 12.6866368,2.27299937 C12.2851254,1.89378034 11.6522184,1.91185185 11.2729994,2.31336321 L2.77268886,11.3133632 C2.40871099,11.6987375 2.4086868,12.3011749 2.77263373,12.6865784 L11.2729442,21.6880264 C11.652131,22.0895682 12.2850366,22.1076905 12.6865784,21.7285038 C13.0881202,21.349317 13.1062426,20.7164114 12.7270558,20.3148696 L4.87515196,12.0000552 L12.7270006,3.68663679 Z"
                ></path>
              </g>
            </g>
          </svg>
          <p class="text-link">{{ gamesText }}</p>
        </div>
        <div
          v-if="pwaTemplate?.icon !== null && pwaTemplate?.icon !== undefined"
          class="flex items-center justify-end"
        >
          <img
            :src="`/upload/pwa/` + pwaTemplate?.icon"
            alt="app icon"
            class="shrink-0 w-[28px] h-[28px] object-contain rounded-[8px] mr-[3px]"
          />
          <span class="shrink-0 text-[8px] text-right text-gray w-[50px]">{{
            inAppText
          }}</span>
          <button
            class="ml-[12px] text-[12px] text-white bg-link px-3 rounded-[20px] py-1 uppercase min-w-[70px]"
          >
            {{ getBtnText }}
          </button>
        </div>
      </div>

      <header
        class="mx-[20px] pb-[19px] flex items-start justify-start pt-[20px] gap-[18px] border-b border-b-[#e8eaed]"
      >
        <div
          v-if="pwaTemplate?.icon !== null && pwaTemplate?.icon !== undefined"
          class="icon icon-main shrink-0 overflow-hidden"
        >
          <img
            class="w-full h-auto"
            :src="`/upload/pwa/` + pwaTemplate?.icon"
            alt="app icon"
          />
        </div>

        <div class="flex flex-col w-full mt-[-5px]">
          <h1
            class="mt-[6px] font-semibold text-[20px] tracking-wide max-w-[190px] leading-[1.1]"
          >
            {{ name }}
          </h1>

          <template v-if="categoryArray?.length > 0">
            <h2
              v-for="currentCategory in categoryArray"
              :key="currentCategory"
              class="mt-[5px] text-[15px] leading-[1.2] text-gray"
            >
              {{ currentCategory }}
            </h2>
          </template>

          <div class="flex items-center justify-between mt-[43px]">
            <button id="pwa-install-btn" class="main-button">{{ installBtnText }}</button>
            <svg
              class="shrink-0"
              fill="#0077f5"
              width="31px"
              height="31px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z" />
              <path d="M24 7h2v21h-2z" />
              <path
                d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"
              />
            </svg>
          </div>
        </div>
      </header>

      <div
        class="pl-[20px] pb-[10px] px-[8px] swiper mySwiperIOS mt-[9px] mb-[15px] md:max-w-[520px] ml-0"
      >
        <div class="swiper-wrapper gap-[4px]">
          <div class="swiper-slide md:max-w-[130px] cell">
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-gray font-medium text-[11px] uppercase">
                {{ reviewsCount }} {{ reviewsText }}
              </span>
            </div>
            <div
              class="mt-[8px] pl-5 self-start flex items-center justify-center flex-col gap-[3px]"
            >
              <span class="text mt-[4px] font-semibold text-gray">4,9</span>
              <div class="mt-[2px] flex items-center justify-center">
                <svg
                  class="fill-gray w-[14px] h-[14px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-gray w-[14px] h-[14px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-gray w-[14px] h-[14px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-gray w-[14px] h-[14px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-gray w-[14px] h-[14px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="swiper-slide md:max-w-[130px] cell">
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-gray font-medium text-[11px] uppercase">
                {{ ageText }}
              </span>
            </div>
            <div class="mt-[8px] flex items-center justify-center flex-col gap-[3px]">
              <p class="text mt-[4px] font-semibold text-gray">4+</p>
              <p class="text-gray mt-[2px] text-[10px]">
                {{ yearsText }}
              </p>
            </div>
          </div>
          <div class="swiper-slide md:max-w-[130px] cell">
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-gray font-medium text-[11px] uppercase">
                {{ scheduleText }}
              </span>
            </div>
            <div class="mt-[8px] flex items-center justify-center flex-col gap-[3px]">
              <p class="text mt-[4px] font-semibold text-gray">
                <span class="text-[14px]">#</span>47
              </p>
              <p
                v-if="categoryArray?.length > 0"
                v-for="currentCategory in categoryArray"
                :key="currentCategory"
                class="text-gray mt-[2px] text-[10px]"
              >
                {{ currentCategory }}
              </p>
            </div>
          </div>
          <div class="swiper-slide md:max-w-[130px] cell">
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-gray font-medium text-[11px] uppercase">
                {{ developerText }}
              </span>
            </div>
            <div class="mt-[8px] flex items-center justify-center flex-col gap-[3px]">
              <svg
                class="shrink-0"
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z"
                  fill="#b1b1b1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                  stroke="#b1b1b1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.30969 20.52C6.27753 19.7534 6.40079 18.9882 6.67199 18.2704C6.94319 17.5526 7.35674 16.8971 7.88781 16.3433C8.41888 15.7894 9.05649 15.3488 9.76226 15.0477C10.468 14.7467 11.2274 14.5916 11.9947 14.5916C12.762 14.5916 13.5214 14.7467 14.2272 15.0477C14.9329 15.3488 15.5705 15.7894 16.1016 16.3433C16.6326 16.8971 17.0462 17.5526 17.3174 18.2704C17.5886 18.9882 17.7118 19.7534 17.6797 20.52"
                  fill="#b1b1b1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-gray mt-[2px] text-[10px]">
                {{ author }}
              </p>
            </div>
          </div>
          <div class="swiper-slide md:max-w-[130px] cell">
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-gray font-medium text-[11px] uppercase">
                {{ langText }}
              </span>
            </div>
            <div class="mt-[8px] flex items-center justify-center flex-col gap-[3px]">
              <p class="text mt-[4px] font-semibold text-gray">EN</p>
              <p class="text-gray mt-[2px] text-[10px]">English</p>
            </div>
          </div>
          <div class="swiper-slide md:max-w-[130px] cell">
            <div
              class="text-[12px] text-gray-500 flex items-center justify-center gap-[2px]"
            >
              <span class="text-gray font-medium text-[11px] uppercase">
                {{ sizeText }}
              </span>
            </div>
            <div class="mt-[8px] flex items-center justify-center flex-col gap-[3px]">
              <p class="text mt-[4px] font-semibold text-gray">26,9</p>
              <p class="text-gray mt-[2px] text-[10px]">MB</p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-[20px] swiper myFirstSwiperIOS max-w-[1125px] ml-0 mb-[11px]">
        <ul class="swiper-wrapper">
          <template
            v-if="
              youtubeVideo !== null &&
              youtubeVideo?.length > 0 &&
              youtubeVideo.startsWith('https://www.youtube.com/embed/')
            "
          >
            <li class="swiper-slide video-slide" style="height: unset">
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
            v-else-if="
              customVideo !== null && customVideo !== undefined && !youtubeVideo?.length
            "
          >
            <li class="swiper-slide video-slide" style="height: unset">
              <video controls autoplay :src="customVideo"></video>
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
              <img
                class="w-full h-full object-cover"
                :src="'/upload/pwa/' + banner.path"
                alt="Banner"
              />
            </li>
          </template>
          <template v-if="pwaTemplate?.banners?.length === 3">
            <li
              v-for="banner in pwaTemplate?.banners"
              :key="banner.path"
              class="swiper-slide image-slide"
            >
              <img
                class="w-full h-full object-cover"
                :src="'/upload/pwa/' + banner.path"
                alt="Banner"
              />
            </li>
          </template>
        </ul>
      </div>

      <div
        class="border-b border-b-[#e8eaed] mx-[20px] pb-[24px] flex items-center justify-between"
      >
        <div class="flex items-center justify-start">
          <svg
            class="fill-[#404040]"
            width="17px"
            height="17px"
            viewBox="0 0 128 128"
            data-name="Слой 1"
            id="Слой_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="cls-2"
              d="M90,128H38a9.89,9.89,0,0,1-10-9.75V9.75A9.89,9.89,0,0,1,38,0H90a9.89,9.89,0,0,1,10,9.75v108.5A9.89,9.89,0,0,1,90,128ZM38,4a5.89,5.89,0,0,0-6,5.75v108.5A5.89,5.89,0,0,0,38,124H90a5.89,5.89,0,0,0,6-5.75V9.75A5.89,5.89,0,0,0,90,4Z"
            />
            <path
              class="cls-2"
              d="M75.05,12H52.95C50.22,12,48,9.43,48,6.28V2.49h4V6.28c0,1,.57,1.72.95,1.72H75.05c.38,0,.95-.69.95-1.72V3.11h4V6.28C80,9.43,77.78,12,75.05,12Z"
            />
          </svg>
          <svg
            class="ml-2 fill-[#5F5F5F]"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5,4.5 L5,19.5 C5,20.3284271 5.67157288,21 6.5,21 L17.5113578,21 C18.3397849,21 19.0113578,20.3284271 19.0113578,19.5 L19.0113578,4.5 C19.0113578,3.67157288 18.3397849,3 17.5113578,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 Z M4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L17.5113578,2 C18.8920696,2 20.0113578,3.11928813 20.0113578,4.5 L20.0113578,19.5 C20.0113578,20.8807119 18.8920696,22 17.5113578,22 L6.5,22 C5.11928813,22 4,20.8807119 4,19.5 L4,4.5 Z M11,19 C11,18.448 11.448,18 12,18 C12.552,18 13,18.448 13,19 C13,19.552 12.552,20 12,20 C11.448,20 11,19.552 11,19 Z M10.5,5 C10.2238576,5 10,4.77614237 10,4.5 C10,4.22385763 10.2238576,4 10.5,4 L13.5,4 C13.7761424,4 14,4.22385763 14,4.5 C14,4.77614237 13.7761424,5 13.5,5 L10.5,5 Z"
            />
          </svg>
          <p class="ml-3 text-gray text-[12px] font-medium">iPhone {{ appsText }}</p>
        </div>
        <svg
          class="origin-center -rotate-90 shrink-0"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#b1b1b1" fill-rule="nonzero">
              <path
                d="M12.7270006,3.68663679 C13.1062197,3.28512543 13.0881482,2.6522184 12.6866368,2.27299937 C12.2851254,1.89378034 11.6522184,1.91185185 11.2729994,2.31336321 L2.77268886,11.3133632 C2.40871099,11.6987375 2.4086868,12.3011749 2.77263373,12.6865784 L11.2729442,21.6880264 C11.652131,22.0895682 12.2850366,22.1076905 12.6865784,21.7285038 C13.0881202,21.349317 13.1062426,20.7164114 12.7270558,20.3148696 L4.87515196,12.0000552 L12.7270006,3.68663679 Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div class="pb-[21px] pl-[20px] pr-[10px]">
        <div class="relative mt-[12px]">
          <p
            :class="showDescription ? 'mask-off' : 'mask'"
            class="text-[14px] tracking-wide text-dark-gray"
          >
            {{ description }}
          </p>
          <template v-if="description?.length > 150">
            <button
              @click="toggleDesctiption"
              type="button"
              :class="showDescription ? 'hidden' : ''"
              class="text-[#2A5EE3] absolute bottom-[2px] right-[8px] text-[14px]"
            >
              {{ moreText }}
            </button>
          </template>
        </div>
      </div>

      <div
        class="pb-[38px] mx-[20px] flex items-center justify-between border-b border-b-[#e8eaed]"
      >
        <div>
          <p class="text-link text-[13px]">{{ author }}</p>
          <p class="text-gray text-[10px]">{{ developerText }}</p>
        </div>
        <svg
          class="origin-center rotate-180 shrink-0"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#b1b1b1" fill-rule="nonzero">
              <path
                d="M12.7270006,3.68663679 C13.1062197,3.28512543 13.0881482,2.6522184 12.6866368,2.27299937 C12.2851254,1.89378034 11.6522184,1.91185185 11.2729994,2.31336321 L2.77268886,11.3133632 C2.40871099,11.6987375 2.4086868,12.3011749 2.77263373,12.6865784 L11.2729442,21.6880264 C11.652131,22.0895682 12.2850366,22.1076905 12.6865784,21.7285038 C13.0881202,21.349317 13.1062426,20.7164114 12.7270558,20.3148696 L4.87515196,12.0000552 L12.7270006,3.68663679 Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>

      <div class="pb-[17px] mx-[20px]">
        <div class="mt-[3px] flex items-center justify-between">
          <h2 class="secondary-title">{{ ratingReviewsText }}</h2>
          <span class="font-light text-link tracking-wide">{{ allReviewsText }}</span>
        </div>

        <div class="font-sf mt-[8px] flex items-start justify-start gap-[23px]">
          <div class="-mt-[21px] text-center">
            <p class="text-dark-gray text-[61px] font-bold">{{ rating }}</p>
            <p class="-mt-[16px] text-dark-gray font-semibold">{{ fromText }} 5</p>
          </div>
          <div class="grow mt-[4px]">
            <div class="progress">
              <div class="flex items-center justify-center shrink-0">
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
              </div>
              <div class="line">
                <div
                  :style="{ width: fiveRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="w-[40px] flex items-center justify-end shrink-0">
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
              </div>
              <div class="line">
                <div
                  :style="{ width: fourRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="w-[40px] flex items-center justify-end shrink-0">
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
              </div>
              <div class="line">
                <div
                  :style="{ width: threeRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="w-[40px] flex items-center justify-end shrink-0">
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
              </div>
              <div class="line">
                <div
                  :style="{ width: twoRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div class="w-[40px] flex items-center justify-end shrink-0">
                <svg
                  class="fill-[#e8eaed] w-2 h-2 shrink-0"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22.8"
                >
                  <path
                    class="cls-1"
                    d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"
                  />
                </svg>
              </div>
              <div class="line">
                <div
                  :style="{ width: oneRatingQuantity + '%' }"
                  class="progress-bar"
                ></div>
              </div>
            </div>
            <div
              class="text-right text-gray text-[15px] mt-[10px] font-light tracking-wide"
            >
              311 {{ reviewsText }}
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-[20px] swiper myReviewSwiperIOS max-w-[1125px] pb-[26px] border-b border-b-[#e8eaed]"
      >
        <ul v-if="reviewsArray?.length > 0" class="swiper-wrapper">
          <li
            v-for="review in reviewsArray"
            :key="review.author"
            class="swiper-slide h-[220px] py-3 px-5 bg-[#f2f1f7] rounded-[7px]"
          >
            <div class="text-[13px] w-full flex items-center justify-between">
              <p class="font-medium">
                {{ review.icon }}
              </p>
              <p class="text-gray">13.02</p>
            </div>
            <div class="w-full flex items-center justify-between">
              <div class="rating__stars-box">
                <div
                  class="stars"
                  :style="{ '--rating': review.rating }"
                  :aria-label="`Rating of this product is ${review.rating} out of 5`"
                ></div>
              </div>
              <p class="text-[13px] text-gray tracking-wider">{{ review.author }}</p>
            </div>
            <div class="mt-[9px] text-[13px] line-clamp-5">
              <p class="">{{ review.body }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="mx-[20px] pb-[28px] border-b border-b-[#e8eaed]">
        <div class="mt-[6px] flex items-center justify-between">
          <h2 class="secondary-title tracking-wider">{{ whatsNewText }}</h2>
          <span class="font-light text-link tracking-wide">{{ versionHistoryText }}</span>
        </div>
        <div class="flex items-center justify-between mt-[3px]">
          <p class="text-[14px] text-gray">{{ versionText }} 0.4.0</p>
          <p class="text-[14px] text-gray">5 {{ agoText }}</p>
        </div>
        <div class="mt-[10px]">
          <p class="text-[14px]">- {{ bugsText }}</p>
        </div>
      </div>
      <div class="mx-[20px] pb-[26px] border-b border-b-[#e8eaed]">
        <div class="mt-[6px] flex items-start justify-between">
          <h2 class="leading-[1.4] secondary-title tracking-wider max-w-[130px]">
            {{ appPrivacy }}
          </h2>
          <p class="mt-[2px] text-[15px] font-light text-link tracking-wide">
            {{ moreText }}
          </p>
        </div>
        <div class="pr-[8px] text-[14px] text-gray font-light">
          <p class="tracking-wide leading-[1.4]">
            {{ developerText }} <span class="font-medium">({{ author }})</span>
            {{ appPrivacyText }}
            <span class="text-link tracking-wider pr-2">{{ devPrivacy }}</span
            >.
          </p>
        </div>

        <div class="mt-[16px] px-5 pb-5 pt-[25px] w-full rounded-[16px] bg-white shad">
          <div class="mx-auto w-9 h-9 flex items-center justify-center">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="#0077f5" stroke-width="1.5" />
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="#0077f5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3
            class="text-center tracking-wide font-semibold mt-[7px] text-[15px] leading-[1.3]"
          >
            {{ dataColl }}
          </h3>
          <p
            class="px-[20px] text-center tracking-wide mt-[5px] text-[14px] leading-[1.2] text-gray"
          >
            {{ devColl }}
          </p>
        </div>
        <div>
          <p class="mt-[12px] tracking-wider text-[14px] text-gray font-light">
            {{ followDataText }} <span class="text-link">{{ moreText }}</span>
          </p>
        </div>
      </div>
      <div class="mx-[20px] pb-[22px] border-b border-b-[#e8eaed]">
        <div class="mt-[6px] flex items-start justify-between">
          <h2 class="leading-[1.4] secondary-title tracking-wider max-w-[80px]">
            {{ infoText }}
          </h2>
        </div>
        <div
          class="tracking-wide pt-[9px] text-[14px] flex items-center justify-between border-b border-b-[#e8eaed] pb-[11px]"
        >
          <p class="text-gray">{{ developerText }}</p>
          <p class="">{{ author }}</p>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between border-b border-b-[#e8eaed] pb-[12px]"
        >
          <p class="text-gray">{{ sizeText }}</p>
          <p class="">{{ fileSize }} МБ</p>
        </div>
        <div
          v-if="categoryArray?.length > 0"
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between border-b border-b-[#e8eaed] pb-[12px]"
        >
          <p class="text-gray">{{ categoryText }}</p>
          <p v-for="storeCategory in categoryArray" :key="storeCategory" class="">
            {{ storeCategory }}
          </p>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between border-b border-b-[#e8eaed] pb-[12px]"
        >
          <p class="text-gray">{{ compatibility }}</p>
          <p class="flex items-center justify-center gap-[10px] w-fit">
            <span class="">{{ compatibilityText }}</span>
            <svg
              class="shrink-0 w-4 h-4 origin-center -rotate-90"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  id="ic_fluent_ios_arrow_left_24_filled"
                  fill="#b1b1b1"
                  fill-rule="nonzero"
                >
                  <path
                    d="M12.7270006,3.68663679 C13.1062197,3.28512543 13.0881482,2.6522184 12.6866368,2.27299937 C12.2851254,1.89378034 11.6522184,1.91185185 11.2729994,2.31336321 L2.77268886,11.3133632 C2.40871099,11.6987375 2.4086868,12.3011749 2.77263373,12.6865784 L11.2729442,21.6880264 C11.652131,22.0895682 12.2850366,22.1076905 12.6865784,21.7285038 C13.0881202,21.349317 13.1062426,20.7164114 12.7270558,20.3148696 L4.87515196,12.0000552 L12.7270006,3.68663679 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </p>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between border-b border-b-[#e8eaed] pb-[12px]"
        >
          <p class="text-gray">{{ langText }}</p>
          <p class="">English</p>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between border-b border-b-[#e8eaed] pb-[12px]"
        >
          <p class="text-gray">{{ ageText }}</p>
          <p class="flex items-center justify-center gap-[10px] w-fit">
            <span class="">18+</span>
            <svg
              class="shrink-0 w-4 h-4 origin-center -rotate-90"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  id="ic_fluent_ios_arrow_left_24_filled"
                  fill="#b1b1b1"
                  fill-rule="nonzero"
                >
                  <path
                    d="M12.7270006,3.68663679 C13.1062197,3.28512543 13.0881482,2.6522184 12.6866368,2.27299937 C12.2851254,1.89378034 11.6522184,1.91185185 11.2729994,2.31336321 L2.77268886,11.3133632 C2.40871099,11.6987375 2.4086868,12.3011749 2.77263373,12.6865784 L11.2729442,21.6880264 C11.652131,22.0895682 12.2850366,22.1076905 12.6865784,21.7285038 C13.0881202,21.349317 13.1062426,20.7164114 12.7270558,20.3148696 L4.87515196,12.0000552 L12.7270006,3.68663679 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </p>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between pb-[12px]"
        >
          <p class="text-gray">{{ copyrightText }}</p>
          <p class="">© {{ author }}</p>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between pb-[12px] border-b border-b-[#e8eaed]"
        >
          <p class="text-link">{{ appPrivacy }}</p>
          <svg
            class="shrink-0 w-5 h-5"
            fill="#0077f5"
            width="20px"
            height="20px"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 9.1211 36.2500 C 9.1211 47.8047 15.5195 52.9844 24.4492 52.9844 C 30.1211 52.9844 34.3398 51.1094 37.7148 47.5703 C 42.4023 42.6016 43.9492 35.0782 44.8398 32.125 C 45.5430 29.8047 46.8789 26.8282 46.8789 25.2578 C 46.8789 24.2500 45.5430 23.3594 44.6523 23.3594 C 42.6367 23.3594 41.8867 24.2734 40.6914 26.8047 C 39.3789 29.5938 37.7852 34.7969 36.5195 34.7969 C 35.7930 34.7969 35.5352 33.5078 35.5352 31.0469 L 35.5352 8.4297 C 35.5352 7.1875 34.7852 6.0625 33.1914 6.0625 C 31.6211 6.0625 30.8476 7.1875 30.8476 8.4297 L 30.8476 26.9453 C 30.0976 26.7344 29.2305 26.5703 28.2930 26.4297 L 28.2930 5.3594 C 28.2930 4.1172 27.5195 3.0156 25.9492 3.0156 C 24.3789 3.0156 23.6055 4.1172 23.6055 5.3594 L 23.6055 26.2656 C 22.7383 26.3125 21.8945 26.4063 21.0508 26.5469 L 21.0508 7.1641 C 21.0508 5.9219 20.2539 4.7969 18.7070 4.7969 C 17.1601 4.7969 16.3633 5.9219 16.3633 7.1641 L 16.3633 27.8594 C 15.4492 28.2344 14.5820 28.6797 13.8086 29.1719 L 13.8086 14.4531 C 13.8086 13.2109 13.0820 12.0860 11.5117 12.0860 C 9.8945 12.0860 9.1211 13.2109 9.1211 14.4531 Z"
            />
          </svg>
        </div>
        <div
          class="tracking-wide pt-[14px] text-[14px] flex items-center justify-between pb-[12px]"
        >
          <p class="text-link">{{ reportText }}</p>
          <svg
            class="shrink-0 w-5 h-5"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z"
              stroke="#0077f5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="mx-[20px] pb-[12px] border-b border-b-[#e8eaed]">
        <div class="mt-[6px] flex items-start justify-between">
          <h2 class="leading-[1.4] secondary-title tracking-wider">{{ supportText }}</h2>
        </div>
        <div class="flex items-center justify-start gap-[16px]">
          <img
            class="shrink-0 w-[46px] h-auto object-contain"
            :src="gameCenterIcon"
            alt="game center icon"
          />
          <div>
            <h4 class="font-light">{{ gameCenter }}</h4>
            <p class="text-[13px] leading-[1.3] text-gray font-light">
              {{ gameCenterText }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="selectedPwas?.length > 0" class="ml-[20px] pr-[20px] pb-[39px]">
        <div class="mt-[6px] flex items-start justify-between">
          <h2 class="leading-[1.4] secondary-title tracking-wider">{{ alsoLikeText }}</h2>
          <p
            class="text-center font-light tracking-wide mt-[5px] text-[15px] leading-[1.2] text-link"
          >
            {{ moreText }}
          </p>
        </div>
        <div class="swiper myAlsoLikedSwiperIOS pb-[26px] mt-[6px]">
          <ul class="swiper-wrapper">
            <li
              v-for="(pwasSlide, index) in chunkedPwas"
              :key="index"
              class="swiper-slide"
            >
              <ul class="flex flex-col items-center justify-center gap-[20px] w-full">
                <li
                  v-for="(pwaSlide, idx) in pwasSlide"
                  :key="idx"
                  class="flex items-center justify-between w-full"
                >
                  <div class="flex items-start justify-center gap-[12px]">
                    <div class="shrink-0 w-[60px] h-[60px] rounded-[8px] overflow-hidden">
                      <img
                        :src="`/upload/pwa/${pwaSlide?.template?.icon}`"
                        alt="app icon"
                      />
                    </div>
                    <div class="max-w-[140px] ml-0 shrink-0">
                      <p class="text-[15px] tracking-wider leading-[1.2] line-clamp-2">
                        {{ pwaSlide?.name[currentLanguageId] ?? pwaSlide.name["1"] }}
                      </p>
                      <p
                        v-if="
                          pwaSlide?.category[currentLanguageId] !== null &&
                          pwaSlide?.category[currentLanguageId] !== undefined
                        "
                        class="text-[12px] text-gray"
                        v-for="category in pwaSlide?.category[currentLanguageId]"
                        :key="category"
                      >
                        {{ category }}
                      </p>
                      <p
                        v-else-if="
                          pwaSlide?.category['1'] !== null &&
                          pwaSlide?.category['1'] !== undefined
                        "
                        class="text-[12px] text-gray"
                        v-for="(category, index) in pwaSlide?.category['1']"
                        :key="category + index"
                      >
                        {{ category }}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="text-[13px] font-semibold shrink-0 uppercase text-link rounded-[12px] min-w-[70px] bg-[#eeeef0] px-3 py-1"
                  >
                    {{ getBtnText }}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <component is="script" v-if="loadScripts">
        new Swiper(".mySwiperIOS", { slidesPerView: 3.2, }); new
        Swiper(".myFirstSwiperIOS", { slidesPerView: "auto", spaceBetween: 13, }); new
        Swiper(".myReviewSwiperIOS", { slidesPerView: 1.05, spaceBetween: 10, }); new
        Swiper(".myAlsoLikedSwiperIOS", { slidesPerView: 1.05, spaceBetween: 10, });
      </component>
    </body>
  </html>
</template>

<style scoped></style>
