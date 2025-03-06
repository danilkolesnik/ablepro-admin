<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {wTrans} from 'laravel-vue-i18n';
import { usePwaStore } from "@/stores/apps/pwa/pwa_old";
import ageIcon from '@/assets/icons/pwa/other_18.jpeg';
import userIcon from '@/assets/icons/pwa/user.png';
import moreIcon from '@/assets/icons/pwa/more.png';
import shareIcon from '@/assets/icons/pwa/share.webp';
import cloudIcon from '@/assets/icons/pwa/cloud.png';
import lockIcon from '@/assets/icons/pwa/lock.png';
import removeIcon from '@/assets/icons/pwa/remove.png';
import { dynamicStyle } from "@/utils/dynamicStyles";
import { formatPfp } from "@/utils/reviews";
import {Head} from "@inertiajs/vue3";

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
const dataDelete = computed(() => pwaStore.getDataDelete().value);
const gamesText = computed(() => pwaStore.getGamesText().value);
const appsText = computed(() => pwaStore.getAppsText().value);
const booksText = computed(() => pwaStore.getBooksText().value);
const shareText = computed(() => pwaStore.getShareText().value);
const wishlistAddText = computed(() => pwaStore.getWishlistAddText().value);
const downloadAvailableText = computed(() => pwaStore.getDownloadAvailableText().value);
const shareFamilyText = computed(() => pwaStore.getShareFamilyText().value);
const lastUpdateText = computed(() => pwaStore.getLastUpdateText().value);
const rateAppText = computed(() => pwaStore.getRateAppText().value);
const allReviewsText = computed(() => pwaStore.getAllReviewsText().value);
const whatsNewText = computed(() => pwaStore.getWhatsNewText().value);
const appSupportText = computed(() => pwaStore.getAppSupportText().value);
const appSupport = computed(() => pwaStore.getAppSupport().value);
const playPassText = computed(() => pwaStore.getPlayPassText().value);
const playPointsText = computed(() => pwaStore.getPlayPointsText().value);
const giftCardsText = computed(() => pwaStore.getGiftCardsText().value);
const useBonusText = computed(() => pwaStore.getUseBonusText().value);
const refundPolicyText = computed(() => pwaStore.getRefundPolicyText().value);
const peopleText = computed(() => pwaStore.getPeopleReview().value);
const isUsefulText = computed(() => pwaStore.getIsUsefull().value);

const lastKnownScrollPosition = ref(0);
const isShown = ref(false);
const toggleHeader = () => {
    lastKnownScrollPosition.value = window.scrollY;
    isShown.value = lastKnownScrollPosition.value > 20;
}
const categoryArray = computed(() => category.value);
function getRandom(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.floor(max);
}
onMounted(() => {
    window.addEventListener('scroll', toggleHeader)
})
onUnmounted(() => {
    window.removeEventListener('scroll', toggleHeader)
})
const loadScripts = ref(false)

setTimeout(() => {
    loadScripts.value = true
}, 2000)
</script>

<template>
    <!DOCTYPE html>
    <html lang="en" class="overflow-x-hidden " id="desktop-template">
    <head>
        <meta charset="UTF-8"/>
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">

        <meta name="theme-color" content="#303030">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        <component :is="'script'" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></component>
        <component
        :is="'script'"
        src="/src/views/apps/pwa/application/templates/android/3.4.1.js"
      ></component>
        <component :is="'style'">
            :root {
                --star-color_my: #e3e3e3;
                --star-size: 20px;
                --review-star-size: 14px;
                --star-color: #e3e3e3;
                --star-background: #01875f;
            }

            #container {
                width: 72px;
                height: 72px;
            }
            html::-webkit-scrollbar {
            display: none;
            }
            body {
                font-family: "Google Sans", Roboto, Arial, sans-serif;
            }

            .top-header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                opacity: 1;
                visibility: visible;
                background-color: rgb(255, 255, 255);
                z-index: 100;
                transition: box-shadow 0.5s ease-out;
            }

            .top-header.shadow {
                box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
            }

            .google-header {
                color:rgb(95, 99, 104);
                fill: rgb(95, 99, 104);
                stop-color: rgb(95, 99, 104);
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 1.75rem;
                font-size: 1.375rem;
                letter-spacing: 0;
                font-weight: 500;
                align-items: center;
                display: flex;
                height: 100%;
                margin: 0 16px;
                white-space: nowrap;
                z-index: 1;
            }
            .google-icon {
                margin-right: 8px;
                height: 40px;
                width: 40px;
            }

            .google-material-icons {
                font-family: 'Google Material Icons';
                font-weight: normal;
                font-style: normal;
                font-size: 24px;
                line-height: 1;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                white-space: nowrap;
                word-wrap: normal;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                -webkit-font-smoothing: antialiased;
                color: rgb(95, 99, 104);
            }
            .top-btn {
                font-size: 24px;
                width: 48px;
                height: 48px;
                padding: 12px;
                color: black;
                fill: rgb(95, 99, 104);
            }
            .loader {
                position: fixed;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                z-index: 9998;
                background-color: rgb(250, 250, 250);
                overflow:hidden;
            }
            .loader-img {
                position: absolute;
                inset: 0px;
                z-index: 9999;
                height: 120px;
                width: 120px;
                margin: auto;
            }
            .icon-main {
                width: 72px;
                height:72px;
                border-radius: 20%;
                margin: 7px 24px 0 0;
                border-width: 0;
                box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
            }
            .icon-loading {
                width: 72px;
                height: 72px;
                border-radius: 20%;
            }

            .shadowXl {
                border-width: 0;
                box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
            }
            .bottomImage {
                bottom: -10px;
                filter: blur(10px);
                left: 20px;
                opacity: 50%;
                position: absolute;
                z-index: -1;
            }
            .header-link {
                font-family: "Open Sans", Roboto, Arial, sans-serif;
                line-height: 1.25rem;
                font-size: 14px;
                letter-spacing: .0178571429em;
                font-weight: 500;
                padding-right: 16px;
                padding-left: 16px;
                text-transform: none;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 64px;
                position: relative;
                color: rgb(95, 99, 104);
            }
            .header-link.current {
                color: #01875f;
            }
            .header-link.current::after {
                content: '';
                position: absolute;
                bottom: -8px;
                left:0;
                border-radius: 8px;
                height: 3px;
                width: 100%;
                display:block;
                background: #01875f;
            }
            .main-title {
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 2rem;
                font-size: 1.5rem;
                letter-spacing: 0;
                font-weight: 500;
                align-items: flex-end;
                display: flex;
                overflow-wrap: anywhere;
                width: 100%;
                word-break: keep-all;
            }
            .main-company {
                font-family: "Open Sans", Roboto, Arial, sans-serif;
                line-height: 1.5rem;
                font-size: 1rem;
                letter-spacing: .00625em;
                font-weight: 500;
                color: #01875f;
                fill: #01875f;
                stop-color: #01875f;
            }
            @media screen and (min-width: 600px) {
                .main-title  {
                    font-family: "Open Sans", Roboto, Arial, sans-serif;
                    line-height: 2.75rem;
                    font-size: 2.25rem;
                    letter-spacing: 0;
                    font-weight: 500;
                }
            }
            @media screen and (min-width: 1280px) {
                .main-title  {
                    font-family: "Open Sans", Roboto, Arial, sans-serif;
                    line-height: 4rem;
                    font-size: 3.5rem;
                    letter-spacing: 0;
                    font-weight: 500;
                }
            }
            .main-bottom {
                color: rgb(95, 99, 104);
                fill: rgb(95, 99, 104);
                stop-color: rgb(95, 99, 104);
                font-family: Roboto, Arial, sans-serif;
                line-height: 1rem;
                font-size: .75rem;
                letter-spacing: .025em;
                font-weight: 400;
            }
            .buy:not(:first-child)::before {
                content: " · ";
            }
            .main-button {
                border-radius: 8px;
                background-color: #01875f;
                color: white !important;
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 1.25rem;
                font-size: .875rem;
                letter-spacing: .0178571429em;
                font-weight: 500;
                height: 36px;
                margin: 6px 0;
                min-height: 36px;
                min-width: 160px;
                padding: 8px 16px;
                width: 100%;
                text-align: center;
            }
            .secondary-button {
                border-radius: 8px;
                border: 1px solid rgb(218, 220, 224);
                color: #01875f;
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 1.25rem;
                font-size: .875rem;
                letter-spacing: .0178571429em;
                font-weight: 500;
                height: 36px;
                margin: 6px 0;
                min-height: 36px;
                min-width: 160px;
                padding: 8px 16px;
                width: 100%;
                text-align: center;
            }
            .active {
                animation: spin 1s linear infinite;
            }
            .isDisabled {
                background-color: gray;
                color: #202124;
                cursor: not-allowed;
                pointer-events: none;
                user-select: none;
                opacity: 0.5;
                text-decoration: none;
            }
            .circle__spinner {
                width: 70px;
                height: 72px;
            }
            .circle__spinner .path {
                stroke: #0077f5;
                stroke-linecap: round;
                animation: test 5s linear infinite;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }

            @keyframes dash {
                0% {
                    stroke-dasharray: 1, 150;
                    stroke-dashoffset: 0;
                }

                100% {
                    stroke-dasharray: 130, 150;
                    stroke-dashoffset: 0;
                }
            }
            .secondary-title {
                color: rgb(32, 33, 36);
                fill: rgb(32, 33, 36);
                stop-color: rgb(32, 33, 36);
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 1.5rem;
                font-size: 1.125rem;
                letter-spacing: 0;
                font-weight: 500;
                display: flex;
                justify-content: space-between;
            }
            .rating-text {
                color: rgb(32, 33, 36);
                fill: rgb(32, 33, 36);
                stop-color: rgb(32, 33, 36);
                font-family: "Google Sans Display", Roboto, Arial, sans-serif;
                line-height: 4rem;
                font-size: 3.5rem;
                letter-spacing: 0;
                font-weight: 400;
            }
            .arrow {
                width: 25px;
                cursor: pointer;
            }

            .cell {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 24px;
            }

            .cell:not(:first-child)::before {
                background-color: rgb(232, 234, 237);
                content: '';
                display: block;
                height: 24px;
                left: 0;
                position: absolute;
                top: calc(50% - 12px);
                width: 1px;
            }

            .text {
                fill: #202124;
                stop-color: #202124;
                align-items: center;
                color: #202124;
                display: flex;
                font-family: 'Open Sans', 'Roboto', 'Arial', sans-serif;
                font-size: 12px;
                font-weight: 400;
                justify-content: center;
                letter-spacing: 0.0178571429em;
                line-height: 1.25rem;
            }
            @media screen and (min-width: 600px) {
                .text {
                    color: rgb(32, 33, 36);
                    fill: rgb(32, 33, 36);
                    stop-color: rgb(32, 33, 36);
                    font-family: "Open Sans", Roboto, Arial, sans-serif;
                    line-height: 1.25rem;
                    font-size: .875rem;
                    letter-spacing: .0178571429em;
                    font-weight: 500;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    white-space: normal;
                }
            }
            .small-text {
                color:rgb(95, 99, 104);
                fill: rgb(95, 99, 104);
                stop-color: rgb(95, 99, 104);
                font-family: Roboto, Arial, sans-serif;
                line-height: 1rem;
                font-size: .75rem;
                letter-spacing: .025em;
                font-weight: 400;
                margin-top: .5rem;
            }
            .title {
                color: rgb(32, 33, 36);
                fill: rgb(32, 33, 36);
                stop-color: rgb(32, 33, 36);
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 1.5rem;
                font-size: 1.125rem;
                letter-spacing: 0;
                font-weight: 500;
                display: flex;
                justify-content: space-between;
            }
            .icons {
                width: 18px;
                height: 18px;
            }

            .small-icons {
                width: 16px;
                height: 16px;
                fill: #01875f;
            }
            .review-icons  {
                width: 10px;
                height: 10px;
                fill: #01875f;
            }
            .review-text {
                color:rgb(95, 99, 104);
                margin-top: 8px;
                font-size: .875rem;
                letter-spacing: .0142857143em;
                line-height: 1.25rem;
                overflow-wrap: anywhere;
            }
            .related-games {
                display: grid;
                grid-template-rows: max-content;
                height: fit-content;
                row-gap: 2px;
            }
            .border-line{
                border-bottom: 1px solid rgb(232, 234, 237);
                margin-bottom: 36px;
                padding-top: 36px;

            }

            .image-slide {
                position: relative;
                width: auto;
                flex-shrink: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
                border-radius: 16px;
                overflow: hidden;
            }

            .image-slide > img,
            .video-slide > video
            {
                height: 204px;
            }

            .number {
                color:rgb(95, 99, 104);
                font-family: Roboto, Arial, sans-serif;
                line-height: 1rem;
                font-size: .75rem;
                letter-spacing: .025em;
                font-weight: 400;
                padding-right: 16px;
            }

            .progress {
                align-items: center;
                display: grid;
                grid-template-columns: -webkit-max-content auto;
                grid-template-columns: max-content auto;
            }

            .line {
                -webkit-font-smoothing: antialiased;
                -webkit-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                text-size-adjust: 100%;
                fill: #01875f;
                -webkit-tap-highlight-color: transparent;
                background-color: rgb(232, 234, 237);
                border: 0;
                border-radius: 9999px;
                box-sizing: border-box;
                color: inherit;
                font: inherit;
                font-size: 100%;
                height: 10px;
                letter-spacing: 0.0142857143em;
                margin: 0;
                padding: 0;
                text-rendering: optimizeLegibility;
                vertical-align: initial;
                visibility: visible;
                width: 100%;
            }

            .category-item {
                padding: 4px 15px 0 15px;
                min-height: 32px;
                height:auto;
                margin-top: 0;
                margin-bottom: 0;
                border-radius: 16px;
                border: 1px solid rgb(218, 220, 224);
                color: rgb(95, 99, 104);
                font-family: "Open Sans", Roboto, Arial, sans-serif;
                font-size: .875rem;
                letter-spacing: .0107142857em;
                font-weight: 500;
                text-transform: none;
                transition: border .28s cubic-bezier(.4,0,.2,1), box-shadow .28s cubic-bezier(.4,0,.2,1);
                box-shadow: none;
            }


            .swiper-button-prev,
            .swiper-button-next {
                opacity: 0;
            }
            .swiper-button-prev.swiper-button-disabled,
            .swiper-button-next.swiper-button-disabled{
                opacity: 0;
            }

            @media screen and (min-width:1280px) {
                .swiper-button-prev,
                .swiper-button-next {
                    background-color: #fff;
                    height: 56px;
                    width: 56px;
                    border-radius: 50%;
                    color:#5f6368;

                    opacity: 1;
                    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15);
                }
                .swiper-button-prev {
                    left: -28px;
                }
                .swiper-button-next {
                    right: -28px;
                }
                .swiper-button-prev::after,
                .swiper-button-next::after {
                    font-size: 20px !important;;
                }
            }
            .visually-hidden {
                position: absolute;
                white-space: nowrap;
                width: 1px;
                height: 1px;
                overflow: hidden;
                border: 0;
                padding: 0;
                clip: rect(0 0 0 0);
                clip-path: inset(50%);
                margin: -1px;
            }

            .progress-bar {
                background-color: #01875f;
                border-radius: inherit;
                height: 100%;
            }
            .backdrop.backdrop--is-hidden {
                opacity: 0;
                pointer-events: none;
            }
            .backdrop {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1000;
                width: 100vw;
                height: 100%;
                background-color: white;
                opacity: 1;
                overflow-y: scroll;
                transition: opacity 500ms ease-in-out, transform 250ms ease-in-out;
            }

            .backdrop.backdrop--is-hidden .modal {
                transform: translate(-50%, 100%) scale(1);
            }
            .shad {
                box-shadow: 0 3px 10px rgb(0 0 0 / 0.2)
            }
            .modal {
                position: absolute;
                top: 50%;
                overflow-y: auto;
                bottom: 0;
                left: 50%;
                width: 100%;
                height: 100%;
                padding-bottom: 30px;
                background-color: white;
                transform: translate(-50%, -50%) scale(1);
                transition: transform 500ms ease-in-out;
            }
            .modal__icon {
                width: 24px;
                height: 24px;
                color: #202124;
            }
            .modal-block {
                padding-left: 25px;
                padding-right: 25px;
                padding-bottom: 13px;
                border-bottom: 1px solid #5f6368;
            }
            .modal-title {
                margin-top: 15px;
                font-size: 15px;
                font-weight: 500;
                font-family: 'Open Sans', 'Roboto', 'Arial', sans-serif;
            }


            body.body-lock{
                overflow: hidden;
                scroll-snap-type: none;
            }
            body ::-webkit-scrollbar {
            height: 0;
            width: 0;

            }

            ::-webkit-scrollbar-thumb {
            background: none;
            }

            ::-webkit-scrollbar-track {
            background-color: inherit;
            }

            .goBack.active {
                animation-name: removeBackButton;
                animation-duration: 2s;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
            }



            @keyframes removeBackButton {
                from {
                    opacity:1;
                    visibility: visible;
                    pointer-events: none;
                }
                to {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }

            .footer-first-section {
                display: grid;
                grid-template-columns: 1fr;
                row-gap: 24px;
            }
            @media screen and (min-width: 840px) {
                .footer-first-section {
                    column-gap: 16px;
                    grid-template-columns: 244px auto;
                }

            }

            .rating__stars-box {
                display: flex;
                flex-direction: column;
                position: relative;
                box-sizing: border-box
            }

            .stars {
                --percent: calc(var(--rating) / 5 * 100%);
                display: inline-block;
                font-size: var(--star-size);
                font-family: Times;
                line-height: 1;
                width: max-content
            }

            .stars::before {
                background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color_my) var(--percent)) !important;
                -webkit-background-clip: text !important;
                content: "★★★★★";
                letter-spacing: 0;
                background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent
            }

        </component>
        <Head :title="name" />
    </head>
    <body class="desktop-html relative text-left overflow-x-hidden max-w-7xl mx-auto bg-white">
        <div :class="{'shadow': isShown, '': !isShown}" class="top-header  pb-[8px] pr-[8px] pt-[8px] md:pt-[5px] flex items-center justify-between">
            <div class="flex items-center justify-start">
                <span aria-label="Логотип Google Play" class="google-header font-openSans">
                    <svg class="google-icon" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0,0h40v40H0V0z"></path>
                        <path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path><path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path>
                        <path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path>
                    </svg>
                    <span class="font-openSans" aria-hidden="true">Google Play</span>
                </span>
            </div>
            <ul class="relative hidden tab:flex items-center justify-center mr-auto">
                <li class="header-link">{{ gamesText }}</li>
                <li class="header-link current">{{ appsText }}</li>
                <li class="header-link">{{wTrans('pwa.movies')}}</li>
                <li class="header-link">{{wTrans('pwa.books')}}</li>
                <li class="header-link">{{wTrans('pwa.children')}}</li>
            </ul>
        </div>

        <header class="relative mt-[56px] tab:mt-[78px] ml-5 md:ml-12 flex items-start justify-start py-5 max-w-[1296px] tab:w-[calc(100%-96px)]">
            <div v-if="pwaTemplate?.icon !== null && pwaTemplate?.icon !== undefined" class="icon icon-main shrink-0 overflow-hidden tab:hidden">
                <img class="w-full h-auto" :src="`/upload/pwa/` +  pwaTemplate?.icon" alt="app icon">
            </div>

            <div class="flex flex-col w-full">
                <h1 class="main-title">{{ name }}</h1>
                <h2 class="main-company mt-2 lg:mt-5">{{ author }}</h2>
                <div class="main-bottom">
                    <span class="add">{{ adInfo }}</span>
                </div>
            </div>
            <div v-if="pwaTemplate?.icon !== null && pwaTemplate?.icon !== undefined"  class="hidden tab:inline  absolute top-6 right-0">
                <img class=" w-[180px] rounded-[20%] shadowXl" :src="'/upload/pwa/'+ pwaTemplate.icon" alt="app icon">
                <img class="w-[140px]  bottomImage shadowXl rounded-[20%]" :src="'/upload/pwa/' + pwaTemplate.icon" alt="app icon">
            </div>
        </header>
        <section class="font-openSans py-3  mb-[24px] swiper mySwiperDesktopTemplate md:ml-6">
            <div class="swiper-wrapper gap-[4px]">
                <div class="swiper-slide md:max-w-fit cell ">
                    <div class=" flex items-center justify-center">
                        <span class="text mt-[2px] font-bold text-black ">{{ rating }}</span>
                        <span>
                           <svg class="fill-dark-bg  w-[10px] h-[10px]" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22.8">
                                <path class="cls-1" d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"></path>
                           </svg>
                       </span>
                    </div>
                    <div class="text-[12px] text-dark-gray  flex items-center justify-center gap-[2px] relative">
                        <span class="small-text text-dark-gray">{{ reviewsCount }}</span>
                        <span class="cursor-pointer absolute top-1 right-[-10px]">
                        <svg class="fill-[#202124]"  xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 -960 960 960"
                             width="10">
                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        </svg>
                    </span>
                    </div>
                </div>
                <div class="swiper-slide md:max-w-fit cell">
                    <div class="mx-auto text font-bold text-black">
                        {{ installsCount }}
                    </div>
                    <div class="text-[10px] text-gray-500 flex items-center justify-center gap-[2px]">
                        <span class="small-text  text-dark-gray ">{{ installsText }}</span>
                    </div>
                </div>
                <div class="swiper-slide md:max-w-fit cell ">
                    <div class="icons">
                        <svg class="fill-[#202124] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.67 64">
                            <path class="cls-1"
                                  d="M60.32,0H1.35C.61,0,0,.57,0,1.26v61.48c0,.7.61,1.26,1.35,1.26h58.97c.75,0,1.35-.57,1.35-1.26V1.26c0-.7-.61-1.26-1.35-1.26ZM57.1,41.23v17.24c0,.7-.61,1.26-1.35,1.26H5.92c-.75,0-1.35-.57-1.35-1.26V5.53c0-.7.61-1.26,1.35-1.26h49.83c.75,0,1.35.57,1.35,1.26v35.7Z"/>
                            <rect class="cls-1" x="27" y="12.5" width="7.41" height="23.42"/>
                            <polygon class="cls-1"
                                     points="45.3 27.26 30.84 41.73 16.37 27.26 21.36 22.27 30.84 31.74 40.31 22.27 45.3 27.26"/>
                            <rect class="cls-1" x="14.32" y="44.14" width="33.03" height="7.23"/>
                        </svg>
                    </div>
                    <div class="small-text  text-dark-gray ">{{ fileSize }} MB</div>
                </div>
                <div class="swiper-slide md:max-w-fit cell ">
                    <div class="icons">
                        <img :src="ageIcon" alt="Rated for 18+">
                    </div>
                    <div class="text-[10px] text-gray-500 flex items-center justify-center gap-[2px] mt-[0.5rem]">
                        <span class="small-text mt-0 text-dark-gray y">18+</span>
                        <span class="cursor-pointer">
                        <svg class="fill-[#202124] " xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 -960 960 960"
                             width="10">
                            <path  d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        </svg>
                    </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="font-openSans w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-[4px] md:gap-[24px] pb-[14px] mb-[14px] px-5 md:px-12">
            <button id="pwa-install-btn" type="button" class="main-button transition-all md:max-w-[160px]">
                {{ installBtnText }}
            </button>
            <div class="flex items-center justify-between gap-3 md:gap-[24px] py-3">
                <div class="w-fit flex items-center gap-[4px] ">
                    <svg class="shrink-0 fill-link" width="24" height="24" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>
                    <span class="text-link text-[14px] md:hidden">{{ shareText }}</span>
                </div>
                <div class="w-fit flex items-center gap-[4px]">
                    <svg class="shrink-0 fill-link" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"></path></svg>
                    <span class="text-link text-[14px] md:hidden">{{ wishlistAddText }}</span>
                </div>
            </div>
            <div id="pwa-buttons" class="visually-hidden transition-all flex items-center justify-center gap-[4px] max-w-[520px]">
                <button id="cansel-btn" class="w-1/2 border border-1 rounded-[20px] text-[#0B57CF] text-[12px] px-[20px] py-[4px]">
                    Скасувати
                    <svg class="animate hidden active visually-hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </button>
            </div>
        </section>

        <section class="px-5 md:px-12  md:mb-6 mt-4 text-start max-w-[1296px]">
            <div class="text text-[13px] flex items-start !justify-start mb-[8px]">
                <svg class="shrink-0 mr-3 fill-[#87898d]" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="inherit"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>
                <span class="text text-[13px] text-[#87898d]">{{ downloadAvailableText }}</span>
            </div>
            <div class="flex items-start justify-start text-[14px]">
                <svg class="shrink-0 mr-3 fill-[#87898d]" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="inherit"><path d="m480-840 440 330-48 64-72-54v380H160v-380l-72 54-48-64 440-330ZM294-478q0 53 57 113t129 125q72-65 129-125t57-113q0-44-30-73t-72-29q-26 0-47.5 10.5T480-542q-15-17-37.5-27.5T396-580q-42 0-72 29t-30 73Zm426 278v-360L480-740 240-560v360h480Zm0 0H240h480Z"/></svg>
                <p class="text text-[13px] text-[#87898d]">
                <span>
                    {{ shareFamilyText }}
                </span></p>
            </div>
        </section>

        <section class="flex flex-col xlTab:flex-row items-start justify-between">
            <div class="w-screen xlTab:w-[calc(100%-348px)] xlTab:max-w-[860px]">
                <section class="relative max-w-[860px] xl:ml-[30px]">
                    <div class="px-5 md:pl-12 xl:pl-5 swiper myFirstSwiperDesktop max-w-[860px] ml-0 mb-[11px]">
                        <ul class="swiper-wrapper">
                            <template v-if="youtubeVideo !== null && youtubeVideo?.length > 0 && youtubeVideo.startsWith('https://www.youtube.com/embed/')">
                                <li class="swiper-slide video-slide">
                                    <iframe
                                        class="h-full w-full"
                                        :src="youtubeVideo"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </li>
                            </template>
                            <template v-else-if="customVideo !== null && customVideo !== undefined">
                                <li class="swiper-slide video-slide">
                                    <video controls autoplay muted :src="customVideo"></video>
                                </li>
                            </template>
                            <template v-if="pwaTemplate?.banners !== null && pwaTemplate?.banners !== undefined">
                                <li v-for="banner in pwaTemplate?.banners" :key="banner.path" class="swiper-slide image-slide">
                                    <img :src="'/upload/pwa/' + banner.path" alt="Banner">
                                </li>
                            </template>
                            <template v-if="pwaTemplate?.banners?.length === 3">
                                <li v-for="banner in pwaTemplate?.banners" :key="banner.path" class="swiper-slide image-slide">
                                    <img :src="'/upload/pwa/' + banner.path" alt="Banner">
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </section>

                <section class="p-5 md:px-12">
                    <div class="pb-5 flex items-center justify-between">
                        <h2 class="title">{{ aboutText }}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="inherit"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </div>
                    <div class="mt-[12px]">
                        <p id="description" class="line-clamp-6 text-[14px] tracking-wide text-dark-gray ">
                            {{ description }}
                        </p>
                    </div>
                </section>

                <section class="pb-10 mx-5 md:mx-12 flex items-start justify-start flex-col">
                    <p class="text text-[13px] font-medium">{{ lastUpdateText }}</p>
                    <p class="text-gray text-[12px] mt-[2px] leading-[1.25rem]">10 июл. 2024 г.</p>
                </section>

                <section v-if="categoryArray?.length > 0" class="mx-5 md:mx-12 mb-[4px]">
                    <ul class="flex flex-wrap items-start justify-start gap-x-3 gap-y-4 mr-1">
                        <li v-for="storeCategory in categoryArray" :key="storeCategory" class="category-item">{{ storeCategory }}</li>
                    </ul>
                </section>

                <section class="px-5 md:px-12 pt-5 mb-[29px]">
                    <div class="flex items-center justify-between pb-5">
                        <h2 class="secondary-title ">{{ dataSecurityText }}</h2>
                        <svg class="shrink-0 fill-[#202124] " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </div>
                    <div>
                        <p class="text text-[.875rem] text-dark-gray">{{ dataSecurity }}</p>
                    </div>
                </section>

                <section class="bg-white mx-5 md:mx-12 pt-[12px] pb-[30px] px-[24px] border border-dark-gray rounded-[8px] mb-10">
                    <div class="flex items-start justify-start gap-[13px] mb-[8px]">
                        <img class="pt-2 w-[18px] shrink-0" :src="shareIcon" alt="share information">
                        <div class="mt-[4px]">
                            <p class="text-dark-gray text-[14px] tracking-wide">{{ shareDataText }}</p>
                            <p class="text-dark-gray text-[12px] leading-[1.5] tracking-wider mt-[3px]">{{ shareData }}</p>
                        </div>
                    </div>
                    <div class="flex items-start justify-start gap-[13px] mb-[16px]">
                        <img class=" w-[18px] shrink-0" :src="cloudIcon" alt="cloud information save">
                        <div class="mt-[4px]">
                            <p class="text-[14px] tracking-wide text-dark-gray ">{{ dataCollectText }}</p>
                            <p class="text-dark-gray text-[12px] leading-[1.5] tracking-wider mt-[6px]">
                                {{ dataCollect }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start gap-[13px] mb-[15px]">
                        <img class=" w-[18px] shrink-0" :src="lockIcon" alt="lock information">
                        <div class="mt-[4px]">
                            <p class="text-[14px] text-dark-gray ">{{ dataTransmittedText }}</p>
                        </div>
                    </div>
                    <div class="flex items-start justify-start gap-[13px] mb-[23px]">
                        <img class="w-[18px] shrink-0" :src="removeIcon" alt="remove information">
                        <div class="mt-[4px]">
                            <p class="text-[14px] text-dark-gray d">{{ dataDeleteText }}</p>
                            <p class="text-dark-gray text-[12px] leading-[1.5] tracking-wider mt-[6px]">
                              {{ dataDelete }}
                            </p>
                        </div>
                    </div>
                    <p class="text-[14px] text items-start justify-start text-link ">{{ moreText }}</p>
                </section>
                <section class="pb-[32px] ml-[20px] md:ml-12">
                    <div class="md:mr-12 flex flex-col md:items-center md:flex-row md:justify-between  md:pb-10">
                        <div class="pr-5 mt-[3px] flex items-center justify-between mr-[20px] w-full md:w-[200px]">
                            <h2 class="secondary-title md:mr-4">{{ rateAppText }}</h2>
                            <svg class="shrink-0 fill-[#202124]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                        </div>

                        <div class="my-[15px] md:my-0 flex items-center justify-between mr-[20px] ">
                            <p class="text text-gray fill-gray ">{{ reviewsVerifiedText }}
                                <span>
                            <svg class="shrink-0 ml-2" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12" fill="inherit">
                                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            </svg>
                        </span>
                            </p>
                        </div>
                    </div>

                    <div class="bg-white swiper myDeviceSwiperDesktop mb-10">
                        <div class="swiper-wrapper ">
                            <div class="swiper-slide max-w-fit bg-[#e6f3ef] border border-transparent rounded-full pt-[4px] pb-[5px] pl-[12px] pr-[12px]">
                                <div class="flex items-center justify-start gap-[5px]">
                                    <svg class="shrink-0 fill-[#056449]"  xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="inherit"><path d="M400-160h160v-40H400v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/></svg>
                                    <p class="text text-[#056449] font-medium text-[14px]">{{wTrans('pwa.phone')}}</p>
                                </div>
                            </div>
                            <div class="swiper-slide max-w-fit border border-gray rounded-full pt-[4px] pb-[5px] pl-[12px] pr-[12px]">
                                <div class="flex items-center justify-center gap-[5px]">
                                    <svg class="shrink-0 fill-dark-gray " xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="inherit"><path d="M420-800h120-120Zm0 640h120-120Zm-60 80-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L600-80H360Zm120-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H420l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T480-200q-19 0-37.5-2.5T404-210l16 50Z"/></svg>
                                    <p class="text text-[14px] ">{{wTrans('pwa.watch')}}</p>
                                </div>
                            </div>
                            <div class="swiper-slide max-w-fit border border-gray  rounded-full pt-[4px] pb-[5px] pl-[12px] pr-[12px]">
                                <div class="flex items-center justify-center gap-[5px]">
                                    <svg class="shrink-0 fill-dark-gray" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="inherit"><path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                                    <p class="text text-[14px] ">{{wTrans('pwa.TV')}}</p>
                                </div>
                            </div>
                            <div class="swiper-slide max-w-fit border border-gray rounded-full pt-[4px] pb-[5px] pl-[12px] pr-[12px]">
                                <div class="flex items-center justify-center gap-[5px]">
                                    <svg class="shrink-0 fill-dark-gray " height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                        <path  d="M510.163,392.022l-45.59-57.326V93.611c0-11.662-9.458-21.12-21.12-21.12H68.546
                                        c-11.662,0-21.115,9.458-21.115,21.12v241.085L1.837,392.022C0.648,393.517,0,395.367,0,397.287v25.373
                                        c0,9.311,7.542,16.849,16.849,16.849h478.302c9.307,0,16.849-7.538,16.849-16.849v-25.373
                                        C512,395.367,511.356,393.517,510.163,392.022z M77.226,102.291h357.548v202.606H77.226V102.291z M304.121,419.47h-96.242v-25.478
                                        h96.242V419.47z"/>
                                    </svg>
                                    <p class="text text-[14px] ">Chromebook</p>
                                </div>
                            </div>
                            <div class="swiper-slide max-w-fit border border-gray  rounded-full pt-[4px] pb-[5px] pl-[12px] pr-[12px]">
                                <div class="flex items-center justify-center gap-[5px]">
                                    <svg class="shrink-0 fill-dark-gray" fill="inherit" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M19,6 L5,6 C4.44771525,6 4,6.44771525 4,7 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7 C20,6.44771525 19.5522847,6 19,6 Z M12,14 C12.5522847,14 13,14.4477153 13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 C11,14.4477153 11.4477153,14 12,14 Z"/>
                                    </svg>
                                    <p class="text text-[14px] ">{{wTrans('pwa.tab')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-[8px] mr-5 md:mr-12 flex items-start justify-start gap-[26px]">
                        <div class="">
                            <p class="font-openSans rating-text ">{{ rating }}</p>
                            <div class="">
                                <div class="rating__stars-box">
                                    <div class="stars" :style="{'--rating': rating}"
                                         :aria-label="`Rating of this product is ${ rating } out of 5.`"></div>
                                </div>
                                <p class="small-text ">{{ reviewsCount }} {{ reviewsCount }}</p>
                            </div>
                        </div>
                        <div class="grow mt-[1px]">
                            <div class="progress" >
                                <div class="number ">5</div>
                                <div class="line ">
                                    <div :style="{'width':fiveRatingQuantity + '%'}" class="progress-bar "></div>
                                </div>
                            </div>
                            <div class="progress" >
                                <div class="number ">4</div>
                                <div class="line ">
                                    <div :style="{'width':fourRatingQuantity + '%'}" class="progress-bar "></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="number ">3</div>
                                <div class="line ">
                                    <div :style="{'width':threeRatingQuantity + '%'}" class="progress-bar "></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="number ">2</div>
                                <div class="line ">
                                    <div  :style="{'width':twoRatingQuantity + '%'}" class="progress-bar "></div>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="number ">1</div>
                                <div class="line ">
                                    <div  :style="{'width': oneRatingQuantity + '%'}" class="progress-bar "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section v-if="reviewsArray?.length > 0" class="mt-[28px] px-5 md:px-12">

                    <div v-for="review in reviewsArray" :key="review.author" class="pb-3">
                        <div class="mb-[12px] flex items-center justify-between">
                            <div class="flex items-center justify-start gap-[12px]">

                                <img class="w-8 h-8 rounded-full overflow-hidden object-cover" :src="formatPfp(review)" aria-hidden="true" loading="lazy">
                                <p class="text text-[.875rem]"
                                   :style="dynamicStyle(review.author)"
                                >{{ review.author }}</p>
                            </div>
                            <img class="w-5 h-5" :src="moreIcon" alt="more info">
                        </div>
                        <div class=" flex items-center justify-start gap-[10px] mt-4"  >
                            <div class="rating__stars-box">

                                <div class="stars" :style="{'--rating': review.rating, 'font-size': 'var(--review-star-size)'}"
                                     :aria-label="`Rating of this product is ${review.rating} out of 5.`">
                                </div>
                            </div>
                            <p class="text-[.75rem] text-dark-gray ">
                                {{ review.date}}
                            </p>

                        </div>
                        <p class=" font-openSans review-text">{{ review.body}}</p>
                        <p class="text-dark-gray  font-openSans  text-[.75rem] tracking-[0.025em] mt-[16px]" >{{ review.useful }} {{peopleText}}</p>

                        <div class="flex items-center justify-start gap-6 mt-3">
                            <p class="text-dark-gray  font-openSans  text-[.75rem] tracking-[0.025em]">{{isUsefulText}}</p>
                            <div class="flex items-center justify-center gap-[11px]">
                                <p class="text-dark-gray w-fit text-dark-secondary-gray font-medium border border-gray  rounded-full px-[15px] py-[4px] text-[14px]">
                                    {{ yesText }}</p>
                                <p  class="text-dark-gray w-fit font-medium text-dark-secondary-gray border border-gray  rounded-full px-[15px] py-[4px] text-[14px]">{{ noText }}</p>
                            </div>
                        </div>
                    </div>

                    <p class="mt-[20px] mb-[45px] font-medium text-[14px] text-link ">{{ allReviewsText }}</p>
                </section>

                <section class="mx-5 md:mx-12 mb-5">
                    <div class="mt-[3px] text-left pb-5">
                        <h2 class="secondary-title">{{ whatsNewText }}</h2>
                    </div>
                    <div>
                        <p class=" font-openSans review-text text-[.875rem]">{{ author }} {{wTrans('pwa.author_text')}} {{ author }} {{wTrans('pwa.total')}}</p>
                    </div>
                </section>
            </div>
            <div class="xlTab:w-[300px] shrink-0">
                <section class="mx-5 mb-5">
                    <div class="mt-[3px] text-left flex items-center gap-1 pb-5">
                        <h2 class="secondary-title ">{{ appSupportText }}</h2>
                        <svg class="shrink-0 stroke-[#202124]  w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.5L12 14.5L7 9.5" stroke="inherit" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <p class="font-openSans review-text text-[.875rem]">{{ appSupport }}</p>
                    </div>
                </section>
                <section v-if="selectedPwas?.length > 0" class="px-5">

                    <div class="flex items-start justify-between pb-[20px]">
                        <h2 class="secondary-title ">{{wTrans('pwa.related')}}</h2>
                        <svg class="shrink-0 fill-[#202124] " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                    </div>
                    <ul class="grid grid-cols-2 xlTab:grid-cols-1 gap-[24px]">

                        <li v-for="selectedPwa in selectedPwas" :key="selectedPwa.name"  class="flex items-center justify-between w-full overflow-hidden">
                            <div class="flex items-start justify-center gap-[12px]">
                                <div  v-if="selectedPwa?.template?.icon !== null && selectedPwa?.template?.icon !== undefined" class="shrink-0 w-[56px] h-[56px] rounded-[8px] overflow-hidden">
                                    <img :src="'/upload/pwa/' + selectedPwa.template.icon" alt="app icon">
                                </div>
                                <div class="related-games">
                                    <p class="small-text mt-0">{{ selectedPwa.name[currentLanguageId] ?? selectedPwa.name['1'] }}</p>
                                    <p class="flex items-center justify-start gap-[2px]">
                                        <span class="text-[11px] ">{{ selectedPwa.rating[currentLanguageId] ?? selectedPwa.rating['1'] }}</span>
                                        <svg fill="inherit" class="w-2 h-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22.8">
                                            <path class="cls-1" d="M4.59,22.8l1.95-8.43L0,8.7l8.64-.75L12,0l3.36,7.95,8.64.75-6.54,5.67,1.95,8.43-7.41-4.47-7.41,4.47Z"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <div class="flex items-center justify-start gap-3 mt-5">
                        <svg class="shrink-0 w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="inherit"><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/></svg>
                        <p class="review-text mt-0 font-medium">{{wTrans('pwa.complain')}}</p>
                    </div>
                </section>
            </div>
        </section>
        <section class="border-line mx-5 md:mx-12"></section>
        <div class="footer-first-section px-5 md:px-12">
            <section >
                <span class="text-[0.875rem] leading-[32px] font-medium text-[#5f6368]">Google Play</span>
                <p class="font-light text-[0.875rem] leading-[32px] text-[#5f6368]">Play Pass</p>
                <p class=" font-light text-[0.875rem] leading-[32px] text-[#5f6368]">Play Points</p>
                <p class=" font-light text-[0.875rem] leading-[32px] text-[#5f6368]">{{ giftCardsText }}</p>
                <p class=" font-light text-[0.875rem] leading-[32px] text-[#5f6368]">{{ useBonusText }}</p>
                <p class=" font-light text-[0.875rem] leading-[32px] text-[#5f6368]">{{ refundPolicyText }}</p>
            </section>
            <section >
                <span class="text-[0.875rem] leading-[32px] font-medium text-[#5f6368]">{{wTrans('pwa.fam')}}</span>
                <p class=" font-light text-[0.875rem] leading-[32px] text-[#5f6368]">{{wTrans('pwa.parenthood')}}</p>
                <p class=" font-light text-[0.875rem] leading-[32px] text-[#5f6368]">{{wTrans('pwa.family_access')}}</p>
            </section>
        </div>
        <footer class="pb-5 px-5 md:px-12 mt-8 flex flex-wrap items-center justify-start">
            <p class="font-light small-text mt-0 leading-[48px] mr-5">{{wTrans('pwa.using_terms')}}</p>
            <p class="font-light small-text mt-0 leading-[48px] mr-5">{{wTrans('pwa.conf')}}</p>
            <p class="font-light small-text mt-0 leading-[48px] mr-5">{{wTrans('pwa.developers')}}</p>
            <p class="font-light small-text mt-0 leading-[48px] mr-5">{{wTrans('pwa.abt')}}</p>
            <p class="font-light small-text mt-0 leading-[48px] mr-5">Google Store</p>
            <p class="font-light small-text mt-0 leading-[48px] mr-5">{{wTrans('pwa.prices')}}</p>
            <p class="font-light small-text mt-0 leading-[48px] xlTab:ml-auto">{{wTrans('pwa.locales')}}</p>
        </footer>
        <component :is="'script'" v-if="loadScripts">
            new Swiper(".mySwiperDesktopTemplate", {
                slidesPerView: 2.7,
            });
            new Swiper(".myDeviceSwiperDesktop", {
                slidesPerView: "2.1",
                spaceBetween: 7,
            });
             new Swiper(".myFirstSwiperDesktop", {
                spaceBetween: 13,
                slidesPerView: "auto",
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
    </component>
    </body>
    </html>
</template>

<style scoped>

</style>
