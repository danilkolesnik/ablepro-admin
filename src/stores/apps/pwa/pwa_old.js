import {ref, computed} from 'vue'
import {ANDROID} from "@/utils/constants.js";
import {defineStore} from "pinia";

// by convention, composable function names start with "use"
export const usePwaStore = defineStore('pwa', () => {

    const currentPWALanguage = ref({
        id: 1,
        name: 'English/Any',
        code: 'en',
    });



    const name = ref({
        1: 'Pwa Name'
    });
    const userTag = ref('');
    const facebookPixel = ref('');
    const facebookToken = ref('');
    const subjectId = ref('');
    const author = ref({
        1: 'PWA Author'
    });
    const rating = ref({
        1: 4.3
    });
    const reviewsCount = ref({
        1: 120
    });
    const installsCount = ref({
        1: '3250'
    });
    const category = ref({
        1: ['Gambling']
    });
    const description = ref({
        1: 'PWA Description'
    });
    const fiveRatingQuantity = ref({
        1: 70
    });
    const fourRatingQuantity = ref({
        1: 30
    });
    const threeRatingQuantity = ref({1: 0});
    const twoRatingQuantity = ref({1: 0});
    const oneRatingQuantity = ref({1: 0});
    const selectedPwaVersions = ref({});
    const generateReviews = ref(true);
    const reviewsArray = ref({
        1: []
    });
    const youtubeVideo = ref({1: ''});
    const customVideo = ref({1: null});
    const flowId = ref(null);
    const domainId = ref(null);
    const platformType = ref(ANDROID);
    const selectedPwas = ref([]);
    const pwaTemplate = ref(null);
    const pwaCategoryId = ref(null);
    const pwaSubCategoryId = ref(null);
    const pixelId = ref(null);
    const relatedPushes = ref([]);

    const installsText = ref({
        1: 'installs'
    });
    const reviewsText = ref({
        1: 'reviews'
    });
    const fileSize = ref({1: 0});
    const adInfo = ref({
        1: 'Contains ads · In-app purchases'
    });
    const inApp = ref({
        1: 'In-app purchases'
    });
    const getBtnText = ref({
        1: 'Get'
    })
    const eighteenAgeText = ref({
        1: 'Rated for 18+'
    });
    const editorsChoiceText = ref({
        1: 'Editor\'s Choice'
    });
    const aboutText = ref({
        1: 'About this game'
    });
    const wishlistAddText = ref({
        1: 'Add to wishlist'
    });
    const downloadAvailableText = ref({
        1: 'This app is available for all of your devices'
    });
    const installBtnText = ref({
        1: 'Install'
    });
    const initBtnText = ref({
        1: 'Initializing...'
    });
    const downloadBtnText = ref({
        1: 'Downloading...'
    });
    const installationBtnText = ref({
        1: 'Installing...'
    });
    const openBtnText = ref({
        1: 'Open'
    });
    const cancelBtnText = ref({
        1: 'Cancel'
    });
    const phoneText = ref({
        1: 'Phones'
    });
    const deviceText = ref({
        1: 'Device'
    });
    const tabsText = ref({
        1: 'Tablets'
    });
    const ratingReviewsText = ref({
        1: 'Rating and reviews'
    });
    const reviewsVerifiedText = ref({
        1: 'Ratings and reviews are verified'
    });
    const findHelpfulText = ref({
        1: 'Did you find this helpful?'
    });
    const allReviewsText = ref({
        1: 'See all reviews'
    });
    const yesText = ref({
        1: 'Yes'
    });
    const noText = ref({
        1: 'No'
    });
    const whatsNewText = ref({
        1: 'What\'s new'
    });
    const lastUpdateText = ref({
        1: 'Last updated'
    });
    const developerContactText = ref({
        1: 'Developer contact'
    });
    const siteText = ref({
        1: 'Site'
    });
    const emailText = ref({
        1: 'Email'
    });
    const addressText = ref({
        1: 'Address'
    });
    const privacyPolicyText = ref({
        1: 'Privacy Policy'
    });
    const moreText = ref({
        1: 'More'
    });
    const shareText = ref({
        1: 'Share'
    });
    const shareFamilyText = ref({
        1: 'You can share this content with family members. Learn more in the family library.'
    });
    const refundPolicyText = ref({
        1: 'Refund Policy'
    });
    const allPricesText = ref({
        1: 'All prices include VAT.'
    });
    const gamesText = ref({
        1: 'Games'
    });
    const appsText = ref({
        1: 'Apps'
    });
    const booksText = ref({
        1: 'Books'
    });
    const dataSecurityText = ref({
        1: 'Data security'
    });
    const dataSecurity = ref({
        1: 'Security is deмined by how the app collects and shares your data. The methods of ensuring privacy and data protection may vary depending on app usage, region, and user age. The developer providing this information can update it.'
    });
    const shareDataText = ref({
        1: 'This app may share certain types of data with third parties'
    });
    const shareData = ref({
        1: 'Device identifiers or other identifiers'
    });
    const dataCollectionText = ref({
        1: 'Data is not collected'
    });
    const devCollectionText = ref({
        1: 'The developer does not collect any data from this app.'
    });
    const followData = ref({
        1:'The following data may be collected but is not linked to your identity.'
    })
    const dataCollection = ref({
        1: 'More about how developers declare data collection'
    });
    const dataTransmittedText = ref({
        1: 'Data is transmitted in encrypted form'
    });
    const dataDeleteText = ref({
        '1': 'Data cannot be deleted'
    });
    const dataDelete = ref({
        '1': 'Data cannot be deleted'
    });
    const rateAppText = ref({
        1: 'Rate the app'
    });
    const appSupportText = ref({
        1: 'App support'
    });
    const appSupport = ref({
        1: 'Visit the developer\'s website'
    });
    const playPassText = ref({
        1: 'Play Pass'
    });
    const playPointsText = ref({
        1: 'Play Points'
    });
    const giftCardsText = ref({
        1: 'Gift cards'
    });
    const useBonusText = ref({
        1: 'Use bonus'
    });
    const shareThoughtsText = ref({
        1: 'Share your thoughts'
    });
    const writeReviewText = ref({
        1: 'Write a review'
    });
    const peopleReview = ref({
        1: 'people found this review helpful'
    })
    const isUseful = ref({
        1: 'Was this review helpful?'
    })

    // ios

    const ageIOS = ref({
        1: 'Age'
    });
    const yearsIOS = ref({
        1: 'Years'
    });
    const scheduleIOS = ref({
        1: 'Schedule'
    });
    const developerIOS = ref({
        1: 'Developer'
    });
    const sizeIOS = ref({
        1: 'Size'
    });
    const langIOS = ref({
        1: 'Language'
    });
    const fromIOS = ref({
        1: 'from'
    });
    const whatsNew = ref({
        1: "What's new"
    });
    const versionHistory = ref({
        1: 'Version history'
    });
    const versionIOS = ref({
        1: 'Version'
    });
    const agoIOS = ref({
        1: 'days ago'
    });
    const bugsIOS = ref({
        1: 'Many bugs fixed'
    })
    const appPrivacy = ref({
       1: 'App privacy'
    });
    const appPrivacyText = ref({
        1: 'has stated that app privacy practices may include handling data as described below. For more information, see '
    });
    const devPrivacy = ref({
        1: 'developer’s privacy policy.'
    });
    const infoIOS = ref({
        1: 'Information'
    });
    const categoryIOS = ref({
        1: 'Category'
    });
    const compatibilityIOS = ref({
        1: 'Compatibility'
    });
    const compatibilityTextIOS = ref({
        1: 'Compatible with this iPhone'
    });
    const copyrightIOS = ref({
        1: 'Copyright'
    });
    const reportIOS = ref({
        1: 'Report a problem'
    });
    const supportIOS = ref({
        1: 'Supports'
    })
    const gameCenter = ref({
        1: 'Game Center'
    });
    const gameCenterText = ref({
        1: 'Play with friends, track and compare scores and achievements, challenge other players, and compete in multiplayer games.'
    });
    const alsoLike = ref({
        1: 'You might also like'
    });

    const provider = ref({
        1: 'Provider'
    });
    //old
    const checkDevice = ref({
        1: 'Device check...'
    });
    const relatedGames = ref({
        1: 'May also interest'
    });

    //new android
    const readMore = ref({
        1: 'Read more'
    })
    const announcementText = ref({
        1: 'The announcement is placed by the app developer'
    })
    const updatedText = ref({
        1: 'Updated'
    })
    const ocVersionText = ref( {
    1: 'Required OS version'
    })
    const laterVersion = ref({
        1: 'and later versions'
    })
    const distributorText = ref({
        1: 'Distributor'
    })
    const moreThanText = ref({
        1: 'More than'
    })
    const activeCompatibility = ref({
        1: 'Compatibility with active devices'
    })
    const workOnYourDevice = ref({
        1: 'Works on your Android device'
    })
    const releaseDate = ref({
        1: 'Release Date'
    })
    //desktop
    const moviesText = ref({
        1:'Movies'
    })
    const kidsText = ref({
        1: 'For Kids'
    })
    const clockText = ref({
        1: 'Clock'
    })
    const tvText = ref({
        1:'TV'
    })
    const devImproveText = ref({
        1: 'constantly improves its products. This often means adding new features and optimizing existing games and functionalities so that our players can enjoy the game even more. Therefore, we recommend regularly updating the app to the latest version to take full advantage of everything has to offer.'
    })
    const kidsFamily = ref({
        1: 'Kids and Family'
    })
    const parentsText = ref({
        1: 'Parent\'s Guide'
    })
    const familyAccess = ref({
        1: 'Family Access'
    })
    const termsOfUseText = ref({
        1: 'Terms of Use'
    })

    // getters
    const getName = (language = currentPWALanguage.value) => computed(() => name.value[language.id]);
    const getFullName = computed(() => name.value)
    const getUserTag = computed(() => userTag.value);
    const getFacebookPixel = computed(() => facebookPixel.value);
    const getFacebookToken = computed(() => facebookToken.value);
    const getSubjectId = computed(() => subjectId.value);
    const getAuthor = (language = currentPWALanguage.value) => computed(() => author.value[language.id]);
    const getFullAuthor = computed(() => author.value)
    const getRating = (language = currentPWALanguage.value) => computed(() => rating.value[language.id]);
    const getFullRating = computed(() => rating.value);
    const getReviewsCount = (language = currentPWALanguage.value) => computed(() => reviewsCount.value[language.id]);
    const getFullReviewsCount = computed(() => reviewsCount.value);
    const getInstallsCount = (language = currentPWALanguage.value) => computed(() => installsCount.value[language.id]);
    const getFullInstallsCount = computed(() => installsCount.value);
    const getCategory = (language = currentPWALanguage.value) => computed(() => category.value[language.id]);
    const getFullCategory = computed(() => category.value);
    const getDescription = (language = currentPWALanguage.value) => computed(() => description.value[language.id]);
    const getFullDescription = computed(() => description.value)
    const getFiveRatingQuantity= (language = currentPWALanguage.value) => computed(() => fiveRatingQuantity.value[language.id]);
    const getFullFiveRatingQuantity = computed(() => fiveRatingQuantity.value);
    const getFourRatingQuantity= (language = currentPWALanguage.value) => computed(() => fourRatingQuantity.value[language.id]);
    const getFullFourRatingQuantity = computed(() => fourRatingQuantity.value);
    const getThreeRatingQuantity = (language = currentPWALanguage.value) => computed(() => threeRatingQuantity.value[language.id]);
    const getFullThreeRatingQuantity = computed(() => threeRatingQuantity.value);
    const getTwoRatingQuantity = (language = currentPWALanguage.value) => computed(() => twoRatingQuantity.value[language.id]);
    const getFullTwoRatingQuantity = computed(() => twoRatingQuantity.value);
    const getOneRatingQuantity = (language = currentPWALanguage.value) => computed(() => oneRatingQuantity.value[language.id]);
    const getFullOneRatingQuantity = computed(() => oneRatingQuantity.value);

    const getSelectedPwaVersions = computed(() => selectedPwaVersions.value);
    const getGenerateReviews = computed(() => generateReviews.value);
    const getReviewsArray = (language = currentPWALanguage.value) => computed(() => reviewsArray.value[language.id]);
    const getFullReviewsArray = computed(() => reviewsArray.value);
    const getYoutubeVideo= (language = currentPWALanguage.value) => computed(() => youtubeVideo.value[language.id]);
    const getFullYoutubeVideo = computed(() => youtubeVideo.value);
    const getCustomVideo = (language = currentPWALanguage.value) => computed(() => customVideo.value[language.id]);
    const getFullCustomVideo = computed(() => customVideo.value);
    const getFlowId = computed(() => flowId.value);
    const getDomainId = computed(() => domainId.value);
    const getPlatformType = computed(() => platformType.value);
    const getSelectedPwas = computed(() => selectedPwas.value);
    const getPwaTemplate = computed(() => pwaTemplate.value);
    const getPixelId = computed(() => pixelId.value);
    const getRelatedPushes = computed(() => relatedPushes.value);

    const getPwaCategoryId = computed(() => pwaCategoryId.value);
    const getPwaSubCategoryId = computed(() => pwaSubCategoryId.value);

    const getCurrentPWALanguage = computed(() => currentPWALanguage.value);


    const getInstallsText = (language = currentPWALanguage.value) => computed(() => installsText.value[language.id]);
    const getFullInstallsText = computed(() => installsText.value);
    const getReviewsText = (language = currentPWALanguage.value) => computed(() => reviewsText.value[language.id]);
    const getFullReviewsText = computed(() => reviewsText.value);
    const getFileSize = (language = currentPWALanguage.value) => computed(() => fileSize.value[language.id]);
    const getFullFileSize = computed(() => fileSize.value);
    const getAdInfo = (language = currentPWALanguage.value) => computed(() => adInfo.value[language.id]);
    const getFullAdInfo = computed(() => adInfo.value);
    const getInAppText = (language = currentPWALanguage.value) => computed(() => inApp.value[language.id]);
    const getFullInAppText = computed(() => inApp.value);
    const getAgeIOS = (language = currentPWALanguage.value) => computed(() => ageIOS.value[language.id]);
    const getFullAgeIOS =  computed(() => ageIOS.value);
    const getYearsIOS = (language = currentPWALanguage.value) => computed(() => yearsIOS.value[language.id]);
    const getFullYearsIOS = computed(() => yearsIOS.value);
    const getScheduleIOS = (language = currentPWALanguage.value) => computed(() => scheduleIOS.value[language.id]);
    const getFullScheduleIOS = computed(()=> scheduleIOS.value);
    const getDeveloperIOS = (language = currentPWALanguage.value) => computed(() => developerIOS.value[language.id]);
    const getFullDeveloperIOS = computed(() => developerIOS.value);
    const getLangIOS = (language = currentPWALanguage.value) => computed(() => langIOS.value[language.id]);
    const getFullLangIOS = computed(() => langIOS.value);
    const getSizeIOS = (language = currentPWALanguage.value) => computed(() => sizeIOS.value[language.id]);
    const getFullSizeIOS = computed(() => sizeIOS.value);
    const getFromIOS = (language = currentPWALanguage.value) => computed(() => fromIOS.value[language.id]);
    const getFullFromIOS = computed(() => fromIOS.value);
    const getWhatsNew = (language = currentPWALanguage.value) => computed(() => whatsNew.value[language.id]);
    const getFullWhatsNew = computed(() => whatsNew.value);
    const getVersionHistory = (language = currentPWALanguage.value) => computed(() => versionHistory.value[language.id]);
    const getFullVersionHistory = computed(() => versionHistory.value);
    const getVersionIOS = (language = currentPWALanguage.value) => computed(() => versionIOS.value[language.id]);
    const getFullVersionIOS = computed(()=> versionIOS.value);
    const getAgoIOS = (language = currentPWALanguage.value) => computed(() => agoIOS.value[language.id]);
    const getFullAgoIOS = computed(() => agoIOS.value);
    const getBugsIOS = (language = currentPWALanguage.value) => computed(() => bugsIOS.value[language.id]);
    const getFullBugsIOS = computed(() => bugsIOS.value);
    const getAppPrivacy = (language = currentPWALanguage.value) => computed(() => appPrivacy.value[language.id]);
    const getFullAppPrivacy = computed(() => appPrivacy.value);
    const getAppPrivacyText = (language = currentPWALanguage.value) => computed(() => appPrivacyText.value[language.id]);
    const getFullAppPrivacyText = computed(() => appPrivacyText.value);
    const getDevPrivacy = (language = currentPWALanguage.value) => computed(() => devPrivacy.value[language.id]);
    const getFullDevPrivacy = computed(() => devPrivacy.value);
    const getInfoIOS = (language = currentPWALanguage.value) => computed(() => infoIOS.value[language.id]);
    const getFullInfoIOS = computed(() => infoIOS.value);
    const getCategoryIOS = (language = currentPWALanguage.value) => computed(() => categoryIOS.value[language.id]);
    const getFullCategoryIOS = computed(() => categoryIOS.value);
    const getCompatibilityIOS = (language = currentPWALanguage.value) => computed(() => compatibilityIOS.value[language.id]);
    const getFullCompatibilityIOS = computed(() => compatibilityIOS.value);
    const getCompatibilityTextIOS = (language = currentPWALanguage.value) => computed(() => compatibilityTextIOS.value[language.id]);
    const getFullCompatibilityTextIOS = computed(() => compatibilityTextIOS.value);
    const getGetBtnText = (language = currentPWALanguage.value) => computed(() => getBtnText.value[language.id]);
    const getFullGetBtnText = computed(() => getBtnText.value);
    const getCopyRightIOS = (language = currentPWALanguage.value) => computed(() => copyrightIOS.value[language.id]);
    const getFullCopyRightIOS = computed(() => copyrightIOS.value);
    const getSupportIOS = (language = currentPWALanguage.value) => computed(() => supportIOS.value[language.id]);
    const getFullSupportIOS = computed(() => supportIOS.value);
    const getGameCenter = (language = currentPWALanguage.value) => computed(() => gameCenter.value[language.id]);
    const getFullGameCenter = computed(() => gameCenter.value);
    const getGameCenterText = (language = currentPWALanguage.value) => computed(() => gameCenterText.value[language.id]);
    const getFullGameCenterText = computed(() => gameCenterText.value);
    const getAlsoLike = (language = currentPWALanguage.value) => computed(() => alsoLike.value[language.id]);
    const getFullAlsoLike = computed(() => alsoLike.value);
    const getReportIOS = (language = currentPWALanguage.value) => computed(() => reportIOS.value[language.id]);
    const getFullReportIOS = computed(() => reportIOS.value);
    const getEighteenAgeText = (language = currentPWALanguage.value) => computed(() => eighteenAgeText.value[language.id]);
    const getFullEighteenAgeText = computed(() => eighteenAgeText.value);
    const getEditorsChoiceText = (language = currentPWALanguage.value) => computed(() => editorsChoiceText.value[language.id]);
    const getFullEditorsChoiceText = computed(() => editorsChoiceText.value);
    const getAboutText = (language = currentPWALanguage.value) => computed(() => aboutText.value[language.id]);
    const getFullAboutText = computed(() => aboutText.value);
    const getWishlistAddText = (language = currentPWALanguage.value) => computed(() => wishlistAddText.value[language.id]);
    const getFullWishlistAddText = computed(() => wishlistAddText.value);
    const getDownloadAvailableText = (language = currentPWALanguage.value) => computed(() => downloadAvailableText.value[language.id]);
    const getFullDownloadAvailableText = computed(() => downloadAvailableText.value);
    const getInstallBtnText = (language = currentPWALanguage.value) => computed(() => installBtnText.value[language.id]);
    const getFullInstallBtnText = computed(() => installBtnText.value);
    const getInitBtnText = (language = currentPWALanguage.value) => computed(() => initBtnText.value[language.id]);
    const getFullInitBtnText = computed(() => initBtnText.value);
    const getDownloadBtnText = (language = currentPWALanguage.value) => computed(() => downloadBtnText.value[language.id]);
    const getFullDownloadBtnText = computed(() => downloadBtnText.value);
    const getInstallationBtnText = (language = currentPWALanguage.value) => computed(() => installationBtnText.value[language.id]);
    const getFullInstallationBtnText = computed(() => installationBtnText.value);
    const getOpenBtnText = (language = currentPWALanguage.value) => computed(() => openBtnText.value[language.id]);
    const getFullOpenBtnText = computed(() => openBtnText.value);
    const getCancelBtnText = (language = currentPWALanguage.value) => computed(() => cancelBtnText.value[language.id]);
    const getFullCancelBtnText = computed(() => cancelBtnText.value);
    const getPhoneText = (language = currentPWALanguage.value) => computed(() => phoneText.value[language.id]);
    const getFullPhoneText = computed(() => phoneText.value);
    const getDeviceText = (language = currentPWALanguage.value) => computed(() => deviceText.value[language.id]);
    const getFullDeviceText = computed(() => deviceText.value);
    const getTabsText = (language = currentPWALanguage.value) => computed(() => tabsText.value[language.id]);
    const getFullTabsText = computed(() => tabsText.value);
    const getRatingReviewsText = (language = currentPWALanguage.value) => computed(() => ratingReviewsText.value[language.id]);
    const getFullRatingReviewsText = computed(() => ratingReviewsText.value);
    const getReviewsVerifiedText = (language = currentPWALanguage.value) => computed(() => reviewsVerifiedText.value[language.id]);
    const getFullReviewsVerifiedText = computed(() => reviewsVerifiedText.value);
    const getFindHelpfulText = (language = currentPWALanguage.value) => computed(() => findHelpfulText.value[language.id]);
    const getFullFindHelpfulText = computed(() => findHelpfulText.value);
    const getAllReviewsText = (language = currentPWALanguage.value) => computed(() => allReviewsText.value[language.id]);
    const getFullAllReviewsText = computed(() => allReviewsText.value);
    const getYesText = (language = currentPWALanguage.value) => computed(() => yesText.value[language.id]);
    const getFullYesText = computed(() => yesText.value);
    const getNoText = (language = currentPWALanguage.value) => computed(() => noText.value[language.id]);
    const getFullNoText = computed(() => noText.value);
    const getWhatsNewText = (language = currentPWALanguage.value) => computed(() => whatsNewText.value[language.id]);
    const getFullWhatsNewText = computed(() => whatsNewText.value);
    const getLastUpdateText = (language = currentPWALanguage.value) => computed(() => lastUpdateText.value[language.id]);
    const getFullLastUpdateText = computed(() => lastUpdateText.value);
    const getDeveloperContactText = (language = currentPWALanguage.value) => computed(() => developerContactText.value[language.id]);
    const getFullDeveloperContactText = computed(() => developerContactText.value);
    const getSiteText = (language = currentPWALanguage.value) => computed(() => siteText.value[language.id]);
    const getFullSiteText = computed(() => siteText.value);
    const getEmailText = (language = currentPWALanguage.value) => computed(() => emailText.value[language.id]);
    const getFullEmailText = computed(() => emailText.value);
    const getAddressText = (language = currentPWALanguage.value) => computed(() => addressText.value[language.id]);
    const getFullAddressText = computed(() => addressText.value);
    const getPrivacyPolicyText = (language = currentPWALanguage.value) => computed(() => privacyPolicyText.value[language.id]);
    const getFullPrivacyPolicyText = computed(() => privacyPolicyText.value);
    const getMoreText = (language = currentPWALanguage.value) => computed(() => moreText.value[language.id]);
    const getFullMoreText = computed(() => moreText.value);
    const getShareText = (language = currentPWALanguage.value) => computed(() => shareText.value[language.id]);
    const getFullShareText = computed(() => shareText.value);
    const getShareFamilyText = (language = currentPWALanguage.value) => computed(() => shareFamilyText.value[language.id]);
    const getFullShareFamilyText = computed(() => shareFamilyText.value);
    const getRefundPolicyText = (language = currentPWALanguage.value) => computed(() => refundPolicyText.value[language.id]);
    const getFullRefundPolicyText = computed(() => refundPolicyText.value);
    const getAllPricesText = (language = currentPWALanguage.value) => computed(() => allPricesText.value[language.id]);
    const getFullAllPricesText = computed(() => allPricesText.value);
    const getPeopleReview = (language = currentPWALanguage.value) => computed(() => peopleReview.value[language.id]);
    const getFullPeopleReview = computed(() => peopleReview.value);
    const getIsUsefull = (language = currentPWALanguage.value) => computed(() => isUseful.value[language.id]);
    const getFullIsUseful = computed(() => isUseful.value);
    const getGamesText = (language = currentPWALanguage.value) => computed(() => gamesText.value[language.id]);
    const getFullGamesText = computed(() => gamesText.value);
    const getAppsText = (language = currentPWALanguage.value) => computed(() => appsText.value[language.id]);
    const getFullAppsText = computed(() => appsText.value);
    const getBooksText = (language = currentPWALanguage.value) => computed(() => booksText.value[language.id]);
    const getFullBooksText = computed(() => booksText.value);
    const getDataSecurityText = (language = currentPWALanguage.value) => computed(() => dataSecurityText.value[language.id]);
    const getFullDataSecurityText = computed(() => dataSecurityText.value);
    const getDataSecurity = (language = currentPWALanguage.value) => computed(() => dataSecurity.value[language.id]);
    const getFullDataSecurity = computed(() => dataSecurity.value);
    const getShareDataText = (language = currentPWALanguage.value) => computed(() => shareDataText.value[language.id]);
    const getFullShareDataText = computed(() => shareDataText.value);
    const getShareData = (language = currentPWALanguage.value) => computed(() => shareData.value[language.id]);
    const getFullShareData = computed(() => shareData.value);
    const getDataCollectionText = (language = currentPWALanguage.value) => computed(() => dataCollectionText.value[language.id]);
    const getFullDataCollectionText = computed(() => dataCollectionText.value);
    const getDataCollection = (language = currentPWALanguage.value) => computed(() => dataCollection.value[language.id]);
    const getFullDataCollection = computed(() => dataCollection.value);
    const getDevCollectionText = (language = currentPWALanguage.value) => computed(() => devCollectionText.value[language.id]);
    const getFullDevCollectionText = computed(() => devCollectionText.value);
    const getFollowData = (language = currentPWALanguage.value) => computed(() => followData.value[language.id]);
    const getFullFollowData = computed(() => followData.value);
    const getDataTransmittedText = (language = currentPWALanguage.value) => computed(() => dataTransmittedText.value[language.id]);
    const getFullDataTransmittedText = computed(() => dataTransmittedText.value);
    const getDataDeleteText = (language = currentPWALanguage.value) => computed(() => dataDeleteText.value[language.id]);
    const getFullDataDeleteText = computed(() => dataDeleteText.value);
    const getDataDelete = (language = currentPWALanguage.value) => computed(() => dataDelete.value[language.id]);
    const getFullDataDelete = computed(() => dataDelete.value);
    const getRateAppText = (language = currentPWALanguage.value) => computed(() => rateAppText.value[language.id]);
    const getFullRateAppText = computed(() => rateAppText.value);
    const getAppSupportText = (language = currentPWALanguage.value) => computed(() => appSupportText.value[language.id]);
    const getFullAppSupportText = computed(() => appSupportText.value);
    const getAppSupport = (language = currentPWALanguage.value) => computed(() => appSupport.value[language.id]);
    const getFullAppSupport = computed(() => appSupport.value);
    const getPlayPassText = (language = currentPWALanguage.value) => computed(() => playPassText.value[language.id]);
    const getFullPlayPassText = computed(() => playPassText.value);
    const getPlayPointsText = (language = currentPWALanguage.value) => computed(() => playPointsText.value[language.id]);
    const getFullPlayPointsText = computed(() => playPointsText.value);
    const getGiftCardsText = (language = currentPWALanguage.value) => computed(() => giftCardsText.value[language.id]);
    const getFullGiftCardsText = computed(() => giftCardsText.value);
    const getUseBonusText = (language = currentPWALanguage.value) => computed(() => useBonusText.value[language.id]);
    const getFullUseBonusText = computed(() => useBonusText.value);
    const getShareThoughtsText = (language = currentPWALanguage.value) => computed(() => shareThoughtsText.value[language.id]);
    const getFullShareThoughtsText = computed(() => shareThoughtsText.value);
    const getWriteReviewText = (language = currentPWALanguage.value) => computed(() => writeReviewText.value[language.id]);
    const getFullWriteReviewText = computed(() => writeReviewText.value);


    const getCheckDevice = (language = currentPWALanguage.value) => computed(() => checkDevice.value[language.id]);
    const getFullCheckDevice = computed(() => checkDevice.value);
    const getRelatedGames = (language = currentPWALanguage.value) => computed(() => relatedGames.value[language.id]);
    const getFullRelatedGames = computed(() => relatedGames.value);
    const getProvider = (language = currentPWALanguage.value) => computed(() => provider.value[language.id]);
    const getFullProvider = computed(() => provider.value);
    const getReadMore = (language = currentPWALanguage.value) => computed(() => readMore.value[language.id]);
    const getFullReadMore = computed(() => readMore.value);
    const getAnnouncementText = (language = currentPWALanguage.value) => computed(() => announcementText.value[language.id]);
    const getFullAnnouncementText = computed(() => announcementText.value);
    const getUpdatedText = (language = currentPWALanguage.value) => computed(() => updatedText.value[language.id]);
    const getFullUpdatedText = computed(() => updatedText.value);
    const getOCVersionText = (language = currentPWALanguage.value) => computed(() => ocVersionText.value[language.id]);
    const getFullOCVersionText = computed(() => ocVersionText.value);
    const getLaterVersion = (language = currentPWALanguage.value) => computed(() => laterVersion.value[language.id]);
    const getFullLaterVersion = computed(() => laterVersion.value);
    const getDistributorText = (language = currentPWALanguage.value) => computed(() => distributorText.value[language.id]);
    const getFullDistributorText = computed(() => distributorText.value);
    const getMoreThanText = (language = currentPWALanguage.value) => computed(() => moreThanText.value[language.id]);
    const getFullMoreThanText = computed(() => moreThanText.value);
    const getActiveCompatibility = (language = currentPWALanguage.value) => computed(() => activeCompatibility.value[language.id]);
    const getFullActiveCompatibility = computed(() => activeCompatibility.value);
    const getWorkOnYourDevice = (language = currentPWALanguage.value) => computed(() => workOnYourDevice.value[language.id]);
    const getFullWorkOnYourDevice = computed(() => workOnYourDevice.value);
    const getReleaseDate = (language = currentPWALanguage.value) => computed(() => releaseDate.value[language.id]);
    const getFullReleaseDate = computed(() => releaseDate.value);
    const getMoviesText = (language = currentPWALanguage.value) => computed(() => moviesText.value[language.id]);
    const getFullMoviesText = computed(() => moviesText.value);
    const getKidsText = (language = currentPWALanguage.value) => computed(() => kidsText.value[language.id]);
    const getFullKidsText = computed(() => kidsText.value);
    const getClockText = (language = currentPWALanguage.value) => computed(() => clockText.value[language.id]);
    const getFullClockText = computed(() => clockText.value);
    const getTVText = (language = currentPWALanguage.value) => computed(() => tvText.value[language.id]);
    const getFullTVText = computed(() => tvText.value);
    const getDevImproveText = (language = currentPWALanguage.value) => computed(() => devImproveText.value[language.id]);
    const getFullDevImproveText = computed(() => devImproveText.value);
    const getKidsFamily = (language = currentPWALanguage.value) => computed(() => kidsFamily.value[language.id]);
    const getFullKidsFamily = computed(() => kidsFamily.value);
    const getParentsText = (language = currentPWALanguage.value) => computed(() => parentsText.value[language.id]);
    const getFullParentsText = computed(() => parentsText.value);
    const getFamilyAccess = (language = currentPWALanguage.value) => computed(() => familyAccess.value[language.id]);
    const getFullFamilyAccess = computed(() => familyAccess.value);
    const getTermsOfUseText = (language = currentPWALanguage.value) => computed(() => termsOfUseText.value[language.id]);
    const getFullTeemsOfUseText = computed(() => termsOfUseText.value);


    // setters
    function setName(newName, language = currentPWALanguage.value) {
        name.value[language.id] = newName;
    }
    function setFullName(newFullName) {
        name.value = newFullName;
    }
    function setUserTag(newUserTag) {
        userTag.value = newUserTag;
    }
    function setFacebookPixel(newPixel) {
        facebookPixel.value = newPixel;
    }
    function setFacebookToken(newToken) {
        facebookToken.value = newToken;
    }
    function setSubjectId(newSubjectId) {
        subjectId.value = newSubjectId;
    }
    function setAuthor(newAuthor, language = currentPWALanguage.value) {
        author.value[language.id] = newAuthor;
    }
    function setFullAuthor(newAuthor) {
        author.value = newAuthor;
    }
    function setRating(newRating, language = currentPWALanguage.value) {
        rating.value[language.id] = newRating;
    }

    function setReviewsCount(newReviewsCount, language = currentPWALanguage.value) {
        reviewsCount.value[language.id] = newReviewsCount;
    }
    function setInstallsCount(newInstallsCount, language = currentPWALanguage.value) {
        installsCount.value[language.id] = newInstallsCount;
    }
    function setCategory(newCategory, language = currentPWALanguage.value) {
        category.value[language.id] = newCategory;
    }
    function setFullCategory(newCategory) {
        category.value = newCategory;
    }
    function setDescription(newDescription, language = currentPWALanguage.value) {
        description.value[language.id] = newDescription;
    }
    function setFullDescription(newDescription) {
        description.value = newDescription;
    }
    function setFiveRatingQuantity(newFiveRatingQuantity, language = currentPWALanguage.value) {
        fiveRatingQuantity.value[language.id] = newFiveRatingQuantity;
    }
    function setFourRatingQuantity(newFourRatingQuantity, language = currentPWALanguage.value) {
        fourRatingQuantity.value[language.id] = newFourRatingQuantity;
    }
    function setThreeRatingQuantity(newThreeRatingQuantity, language = currentPWALanguage.value) {
        threeRatingQuantity.value[language.id] = newThreeRatingQuantity;
    }
    function setTwoRatingQuantity(newTwoRatingQuantity, language = currentPWALanguage.value) {
        twoRatingQuantity.value[language.id] = newTwoRatingQuantity;
    }
    function setOneRatingQuantity(newOneRatingQuantity, language = currentPWALanguage.value) {
        oneRatingQuantity.value[language.id] = newOneRatingQuantity;
    }
    function setSelectedPwaVersions(selectedVersions) {
        selectedPwaVersions.value = selectedVersions;
    }
    function setGenerateReviews(newGenerateReviews) {
        generateReviews.value = newGenerateReviews;
    }
    function setReviewsArray(newReviewsArray, language = currentPWALanguage.value) {
        reviewsArray.value[language.id] = newReviewsArray;
    }
    function setFullReviewsArray(newReviewsArray) {
        reviewsArray.value = newReviewsArray;
    }
    function setYoutubeVideo(newYoutubeVideo, language = currentPWALanguage.value) {
        youtubeVideo.value[language.id] = newYoutubeVideo;
    }
    function setFullYoutubeVideo(newYoutubeVideo) {
        youtubeVideo.value = newYoutubeVideo;
    }
    function setCustomVideo(newCustomVideo, language = currentPWALanguage.value) {
        customVideo.value[language.id] = newCustomVideo;
    }
    function setFullCustomVideo(newCustomVideo) {
        customVideo.value = newCustomVideo;
    }
    function setFlowId(newFlowId) {
        flowId.value = newFlowId;
    }
    function setDomainId(newDomainId) {
        domainId.value = newDomainId;
    }

    function setPixelId(newPixelId) {
        pixelId.value = newPixelId;
    }

    function setRelatedPushes(newRelatedPushes) {
        relatedPushes.value = newRelatedPushes;
    }

    function setPlatformType(newPlatformType) {
        platformType.value = newPlatformType;
    }
    function setSelectedPwas(newSelectedPwas) {
        selectedPwas.value = newSelectedPwas;
    }
    function setPwaTemplate(newPwaTemplate) {
        pwaTemplate.value = newPwaTemplate;
    }
    function setPwaCategoryId(newPwaCategoryId) {
        pwaCategoryId.value = newPwaCategoryId;
    }
    function setPwaSubCategoryId(newPwaSubCategoryId) {
        pwaSubCategoryId.value = newPwaSubCategoryId;
    }
    function setCurrentPWALanguage(newCurrentPWALanguage) {
        currentPWALanguage.value = newCurrentPWALanguage
    }

    function setInstallsText(newInstallsText, language = currentPWALanguage.value) {
        installsText.value[language.id] = newInstallsText;
    }
    function setFullInstallsText(newInstallsText) {
        installsText.value = newInstallsText;
    }
    function setReviewsText(newReviewsText, language = currentPWALanguage.value) {
        reviewsText.value[language.id] = newReviewsText;
    }
    function setFullReviewsText(newReviewsText) {
        reviewsText.value = newReviewsText
    }
    function setFileSize(newFileSize, language = currentPWALanguage.value) {
        fileSize.value[language.id] = newFileSize;
    }

    function setFullFileSize(newFileSize) {
        fileSize.value = newFileSize;
    }

    function setAdInfo(newAdInfo, language = currentPWALanguage.value) {
        adInfo.value[language.id] = newAdInfo;
    }
    function setFullAdInfo(newAdInfo) {
        adInfo.value = newAdInfo;
    }
    function setInApp(newInAppText, language = currentPWALanguage.value){
        inApp.value[language.id] = newInAppText
    }
    function setFullInApp(newInApp) {
        inApp.value = newInApp;
    }
    function setAgeIOS(newAgeIOS, language = currentPWALanguage.value){
        ageIOS.value[language.id] = newAgeIOS;
    }
    function setFullAgeIOS (newAgeIOS) {
        ageIOS.value = newAgeIOS;
    }
    function setYearsIOS(newYearsIOS, language = currentPWALanguage.value){
        yearsIOS.value[language.id] = newYearsIOS;
    }
    function setFullYearsIOS(newYearsIOS) {
        yearsIOS.value = newYearsIOS;
    }
    function setScheduleIOS(newScheduleIOS, language = currentPWALanguage.value){
        scheduleIOS.value[language.id] = newScheduleIOS;
    }
    function setFullScheduleIOS(newScheduleIOS) {
        scheduleIOS.value = newScheduleIOS;
    }
    function setLangIOS(newLangIOS, language = currentPWALanguage.value){
        langIOS.value[language.id] = newLangIOS
    }
    function setFullLangIOS(newLangIOS){
        langIOS.value = newLangIOS;
    }
    function setSizeIOS(newSizeIOS, language = currentPWALanguage.value){
        sizeIOS.value[language.id] = newSizeIOS
    }
    function setFullSizeIOS(newSizeIOS){
        sizeIOS.value = newSizeIOS;
    }
    function setDeveloperIOS(newDeveloperIOS, language = currentPWALanguage.value){
        developerIOS.value[language.id] = newDeveloperIOS
    }
    function setFullDeveloperIOS(newDeveloperIOS){
        developerIOS.value = newDeveloperIOS;
    }
    function setFromIOS(newFromIOS, language = currentPWALanguage.value){
        fromIOS.value[language.id] = newFromIOS
    }
    function setFullFromIOS(newFromIOS){
        fromIOS.value = newFromIOS;
    }
    function setGetBtnText(newGetBtnText, language = currentPWALanguage.value){
        getBtnText.value[language.id] = newGetBtnText
    }
    function setFullGetBtnText(newGetBtnText){
        getBtnText.value = newGetBtnText;
    }
    function setWhatsNew (newWhatsNew, language = currentPWALanguage.value){
        whatsNew.value[language.id] = newWhatsNew
    }
    function setFullWhatsNew(newWhatsNew){
        whatsNew.value = newWhatsNew;
    }
    function setVersionHistory(newVersionHistory, language = currentPWALanguage.value){
        versionHistory.value[language.id] = newVersionHistory;
    }
    function setFullVersionHistory(newVersionHistory){
        versionHistory.value = newVersionHistory;
    }
    function setVersionIOS(newVersionIOS, language = currentPWALanguage.value){
        versionIOS.value[language.id] = newVersionIOS;
    }
    function setFullVersionIOS(newVersionIOS) {
        versionIOS.value = newVersionIOS;
    }
    function setAgoIOS(newAgoIOS, language = currentPWALanguage.value){
        agoIOS.value[language.id] = newAgoIOS;
    }
    function setFullAgoIOS(newAgoIOS) {
        agoIOS.value = newAgoIOS;
    }
    function setBugsIOS(newBugsIOS, language = currentPWALanguage.value){
        bugsIOS.value[language.id] = newBugsIOS;
    }
    function setFullBugsIOS(newBugsIOS) {
        bugsIOS.value = newBugsIOS;
    }
    function setAppPrivacy(newAppPrivacy, language = currentPWALanguage.value){
        appPrivacy.value[language.id] = newAppPrivacy
    }
    function setFullAppPrivacy(newAppPrivacy) {
        appPrivacy.value = newAppPrivacy;
    }
    function setAppPrivacyText(newAppPrivacyText, language = currentPWALanguage.value){
        appPrivacyText.value[language.id] = newAppPrivacyText
    }
    function setFullAppPrivacyText(newFullAppPrivacyText){
        appPrivacyText.value = newFullAppPrivacyText;
    }
    function setDevPrivacy(newDevPrivacy, language = currentPWALanguage.value){
        devPrivacy.value[language.id] = newDevPrivacy
    }
    function setFullDevPrivacy(newDevPrivacy) {
        devPrivacy.value = newDevPrivacy;
    }
    function setInfoIOS(newInfoIOS, language = currentPWALanguage.value){
        infoIOS.value[language.id] = newInfoIOS;
    }
    function setFullInfoIOS(newInfoIOS) {
        infoIOS.value = newInfoIOS;
    }
    function setCategoryIOS(newCategoryIOS, language = currentPWALanguage.value){
        categoryIOS.value[language.id] = newCategoryIOS
    }
    function setFullCategoryIOS(newCategoryIOS){
        categoryIOS.value = newCategoryIOS;
    }
    function setCompatibilityIOS(newCompatibilityIOS, language = currentPWALanguage.value){
        compatibilityIOS.value[language.id] = newCompatibilityIOS
    }
    function setFullCompatibilityIOS(newCompatibilityIOS){
        compatibilityIOS.value = newCompatibilityIOS
    }
    function setCompatibilityTextIOS(newCompatibilityTextIOS, language = currentPWALanguage.value){
        compatibilityTextIOS.value[language.id] = newCompatibilityTextIOS
    }
    function setFullCompatibilityTextIOS(newCompatibilityTextIOS){
        compatibilityTextIOS.value = newCompatibilityTextIOS
    }
    function setCopyrightIOS(newCopyright, language = currentPWALanguage.value){
        copyrightIOS.value[language.id] = newCopyright
    }
    function setFullCopyRightIOS(newCopyright) {
        copyrightIOS.value = newCopyright
    }
    function setReportIOS(newReport, language = currentPWALanguage.value){
        reportIOS.value[language.id] = newReport
    }
    function setFullReportIOS(newReport, ){
        reportIOS.value = newReport
    }
    function setSupportIOS(newSupport, language = currentPWALanguage.value){
        supportIOS.value[language.id] = newSupport
    }
    function setFullSupportIOS(newSupport){
        supportIOS.value = newSupport
    }
    function setGameCenter(newGameCenter, language = currentPWALanguage.value){
        gameCenter.value[language.id] = newGameCenter
    }
    function setFullGameCenter(newGameCenter){
        gameCenter.value = newGameCenter
    }
    function setGameCenterText(newGameCenterText, language = currentPWALanguage.value){
        gameCenterText.value[language.id] = newGameCenterText
    }
    function setFullGameCenterText(newGameCenterText){
        gameCenterText.value = newGameCenterText
    }
    function setAlsoLike(newAlsoLike, language = currentPWALanguage.value){
        alsoLike.value[language.id] = newAlsoLike
    }
    function setFullAlsoLike(newAlsoLike){
        alsoLike.value = newAlsoLike
    }
    function setEighteenAgeText(newEighteenAgeText, language = currentPWALanguage.value) {
        eighteenAgeText.value[language.id] = newEighteenAgeText;
    }
    function setFullEighteenAgeText(newEighteenAgeText) {
        eighteenAgeText.value = newEighteenAgeText;
    }
    function setEditorsChoiceText(newEditorsChoiceText, language = currentPWALanguage.value) {
        editorsChoiceText.value[language.id] = newEditorsChoiceText;
    }
    function setFullEditorsChoiceText(newEditorsChoiceText) {
        editorsChoiceText.value = newEditorsChoiceText;
    }
    function setAboutText(newAboutText, language = currentPWALanguage.value) {
        aboutText.value[language.id] = newAboutText;
    }
    function setFullAboutText(newAboutText) {
        aboutText.value = newAboutText;
    }
    function setWishlistAddText(newWishlistAddText, language = currentPWALanguage.value) {
        wishlistAddText.value[language.id] = newWishlistAddText;
    }
    function setFullWishlistAddText(newWishlistAddText) {
        wishlistAddText.value = newWishlistAddText;
    }
    function setDownloadAvailableText(newDownloadAvailableText, language = currentPWALanguage.value) {
        downloadAvailableText.value[language.id] = newDownloadAvailableText;
    }
    function setFullDownloadAvailableText(newDownloadAvailableText) {
        downloadAvailableText.value = newDownloadAvailableText;
    }
    function setInstallBtnText(newInstallBtnText, language = currentPWALanguage.value) {
        installBtnText.value[language.id] = newInstallBtnText;
    }
    function setFullInstallBtnText(newInstallBtnText) {
        installBtnText.value = newInstallBtnText;
    }
    function setInitBtnText(newInitBtnText, language = currentPWALanguage.value) {
        initBtnText.value[language.id] = newInitBtnText;
    }
    function setFullInitBtnText(newInitBtnText) {
        initBtnText.value = newInitBtnText;
    }
    function setDownloadBtnText(newDownloadBtnText, language = currentPWALanguage.value) {
        downloadBtnText.value[language.id] = newDownloadBtnText;
    }
    function setFullDownloadBtnText(newDownloadBtnText) {
        downloadBtnText.value = newDownloadBtnText;
    }
    function setInstallationBtnText(newInstallationBtnText, language = currentPWALanguage.value) {
        installationBtnText.value[language.id] = newInstallationBtnText;
    }
    function setFullInstallationBtnText(newInstallationBtnText) {
        installationBtnText.value = newInstallationBtnText;
    }
    function setOpenBtnText(newOpenBtnText, language = currentPWALanguage.value) {
        openBtnText.value[language.id] = newOpenBtnText;
    }
    function setFullOpenBtnText(newOpenBtnText) {
        openBtnText.value = newOpenBtnText;
    }
     function setCancelBtnText(newCancelBtnText, language = currentPWALanguage.value) {
        cancelBtnText.value[language.id] = newCancelBtnText
     }
    function setFullCancelBtnText(newCancelBtnText) {
        cancelBtnText.value = newCancelBtnText
    }
    function setPhoneText(newPhoneText, language = currentPWALanguage.value) {
        phoneText.value[language.id] = newPhoneText
    }
    function setFullPhoneText(newPhoneText) {
        phoneText.value = newPhoneText
    }
    function setDeviceText(newDeviceText, language = currentPWALanguage.value) {
        deviceText.value[language.id] = newDeviceText
    }
    function setFullDeviceText(newDeviceText) {
        deviceText.value = newDeviceText
    }
    function setTabsText(newTabsText, language = currentPWALanguage.value) {
        tabsText.value[language.id] = newTabsText
    }
    function setFullTabsText(newTabsText) {
        tabsText.value = newTabsText
    }
    function setRatingReviewsText(newRatingReviewsText, language = currentPWALanguage.value) {
        ratingReviewsText.value[language.id] = newRatingReviewsText;
    }
    function setFullRatingReviewsText(newRatingReviewsText) {
        ratingReviewsText.value = newRatingReviewsText;
    }

    function setReviewsVerifiedText(newReviewsVerifiedText, language = currentPWALanguage.value) {
        reviewsVerifiedText.value[language.id] = newReviewsVerifiedText;
    }
    function setFullReviewsVerifiedText(newReviewsVerifiedText) {
        reviewsVerifiedText.value = newReviewsVerifiedText;
    }
    function setPeopleReview(newPeopleReview, language = currentPWALanguage.value) {
        peopleReview.value[language.id] = newPeopleReview;
    }
    function setFullPeopleReview(newPeopleReview) {
        peopleReview.value = newPeopleReview;
    }
    function setIsUseful(newIsUseful, language = currentPWALanguage.value) {
        isUseful.value[language.id] = newIsUseful;
    }
    function setFullIsUseful(newIsUseful) {
        isUseful.value = newIsUseful;
    }
    function setFindHelpfulText(newFindHelpfulText, language = currentPWALanguage.value) {
        findHelpfulText.value[language.id] = newFindHelpfulText;
    }
    function setFullFindHelpfulText(newFindHelpfulText) {
        findHelpfulText.value = newFindHelpfulText;
    }
    function setAllReviewsText(newAllReviewsText, language = currentPWALanguage.value) {
        allReviewsText.value[language.id] = newAllReviewsText;
    }
    function setFullAllReviewsText(newAllReviewsText) {
        allReviewsText.value = newAllReviewsText;
    }
    function setYesText(newYesText, language = currentPWALanguage.value) {
        yesText.value[language.id] = newYesText;
    }
    function setFullYesText(newYesText) {
        yesText.value = newYesText;
    }
    function setNoText(newNoText, language = currentPWALanguage.value) {
        noText.value[language.id] = newNoText;
    }
    function setFullNoText(newNoText) {
        noText.value = newNoText;
    }
    function setWhatsNewText(newWhatsNewText, language = currentPWALanguage.value) {
        whatsNewText.value[language.id] = newWhatsNewText;
    }
    function setFullWhatsNewText(newWhatsNewText) {
        whatsNewText.value = newWhatsNewText;
    }
    function setLastUpdateText(newLastUpdateText, language = currentPWALanguage.value) {
        lastUpdateText.value[language.id] = newLastUpdateText;
    }
    function setFullLastUpdateText(newLastUpdateText) {
        lastUpdateText.value = newLastUpdateText;
    }
    function setDeveloperContactText(newDeveloperContactText, language = currentPWALanguage.value) {
        developerContactText.value[language.id] = newDeveloperContactText;
    }
    function setFullDeveloperContactText(newDeveloperContactText) {
        developerContactText.value = newDeveloperContactText
    }
    function setSiteText(newSiteText, language = currentPWALanguage.value) {
        siteText.value[language.id] = newSiteText;
    }
    function setFullSiteText(newSiteText) {
        siteText.value = newSiteText
    }
    function setEmailText(newEmailText, language = currentPWALanguage.value) {
        emailText.value[language.id] = newEmailText;
    }
    function setFullEmailText(newEmailText) {
        emailText.value = newEmailText
    }
    function setAddressText(newAddressText, language = currentPWALanguage.value) {
        addressText.value[language.id] = newAddressText;
    }
    function setFullAddressText(newAddressText) {
        addressText.value = newAddressText
    }
    function setPrivacyPolicyText(newPrivacyPolicyText, language = currentPWALanguage.value) {
        privacyPolicyText.value[language.id] = newPrivacyPolicyText;
    }
    function setFullPrivacyPolicyText(newPrivacyPolicyText) {
        privacyPolicyText.value = newPrivacyPolicyText
    }
    function setMoreText(newMoreText, language = currentPWALanguage.value) {
        moreText.value[language.id] = newMoreText;
    }
    function setFullMoreText(newMoreText) {
        moreText.value = newMoreText
    }
    function setShareText(newShareText, language = currentPWALanguage.value) {
        shareText.value[language.id] = newShareText;
    }
    function setFullShareText(newShareText) {
        shareText.value = newShareText
    }
    function setShareFamilyText(newShareFamilyText, language = currentPWALanguage.value) {
        shareFamilyText.value[language.id] = newShareFamilyText;
    }
    function setFullShareFamilyText(newShareFamilyText) {
        shareFamilyText.value = newShareFamilyText
    }
    function setRefundPolicyText(newRefundPolicyText, language = currentPWALanguage.value) {
        refundPolicyText.value[language.id] = newRefundPolicyText;
    }
    function setFullRefundPolicyText(newRefundPolicyText) {
        refundPolicyText.value = newRefundPolicyText
    }
    function setAllPricesText(newAllPricesText, language = currentPWALanguage.value) {
        allPricesText.value[language.id] = newAllPricesText;
    }
    function setFullAllPricesText(newAllPricesText) {
        allPricesText.value = newAllPricesText
    }
    function setGamesText(newGamesText, language = currentPWALanguage.value) {
        gamesText.value[language.id] = newGamesText;
    }
    function setFullGamesText(newGamesText) {
        gamesText.value = newGamesText
    }
    function setAppsText(newAppsText, language = currentPWALanguage.value) {
        appsText.value[language.id] = newAppsText;
    }
    function setFullAppsText(newAppsText) {
        appsText.value = newAppsText
    }
    function setBooksText(newBooksText, language = currentPWALanguage.value) {
        booksText.value[language.id] = newBooksText;
    }
    function setFullBooksText(newBooksText) {
        booksText.value = newBooksText
    }
    function setDataSecurityText(newDataSecurityText, language = currentPWALanguage.value) {
        dataSecurityText.value[language.id] = newDataSecurityText;
    }
    function setFullDataSecurityText(newDataSecurityText) {
        dataSecurityText.value = newDataSecurityText
    }
    function setDataSecurity(newDataSecurity, language = currentPWALanguage.value) {
        dataSecurity.value[language.id] = newDataSecurity;
    }
    function setFullDataSecurity(newDataSecurity) {
        dataSecurity.value = newDataSecurity
    }
    function setShareDataText(newShareDataText, language = currentPWALanguage.value) {
        shareDataText.value[language.id] = newShareDataText;
    }
    function setFullShareDataText(newShareDataText) {
        shareDataText.value = newShareDataText
    }
    function setShareData(newShareData, language = currentPWALanguage.value) {
        shareData.value[language.id] = newShareData;
    }
    function setFullShareData(newShareData) {
        shareData.value = newShareData
    }
    function setDataCollectionText(newDataCollectionText, language = currentPWALanguage.value) {
        dataCollectionText.value[language.id] = newDataCollectionText;
    }
    function setFullDataCollectionText(newDataCollectionText) {
        dataCollectionText.value = newDataCollectionText
    }
    function setDevCollectionText(newDevCollectionText, language = currentPWALanguage.value) {
        devCollectionText.value[language.id] = newDevCollectionText;
    }
    function setFullDevCollectionText(newDevCollectionText) {
        devCollectionText.value = newDevCollectionText;
    }
    function setFollowData(newFollowData, language = currentPWALanguage.value) {
        followData.value[language.id] = newFollowData;
    }
    function setFullFollowData(newFollowData) {
        followData.value = newFollowData;
    }
    function setDataCollection(newDataCollection, language = currentPWALanguage.value) {
        dataCollection.value[language.id] = newDataCollection;
    }
    function setFullDataCollection(newDataCollection) {
        dataCollection.value = newDataCollection
    }
    function setDataTransmittedText(newDataTransmittedText, language = currentPWALanguage.value) {
        dataTransmittedText.value[language.id] = newDataTransmittedText;
    }
    function setFullDataTransmittedText(newDataTransmittedText) {
        dataTransmittedText.value = newDataTransmittedText
    }
    function setDataDeleteText(newDataDeleteText, language = currentPWALanguage.value) {
        dataDeleteText.value[language.id] = newDataDeleteText;
    }
    function setFullDataDeleteText(newDataDeleteText) {
        dataDeleteText.value = newDataDeleteText
    }
    function setDataDelete(newDataDelete, language = currentPWALanguage.value) {
        dataDelete.value[language.id] = newDataDelete;
    }
    function setFullDataDelete(newDataDelete) {
        dataDelete.value = newDataDelete
    }
    function setRateAppText(newRateAppText, language = currentPWALanguage.value) {
        rateAppText.value[language.id] = newRateAppText;
    }
    function setFullRateAppText(newRateAppText) {
        rateAppText.value = newRateAppText
    }
    function setAppSupportText(newAppSupportText, language = currentPWALanguage.value) {
        appSupportText.value[language.id] = newAppSupportText;
    }
    function setFullAppSupportText(newAppSupportText) {
        appSupportText.value = newAppSupportText
    }
    function setAppSupport(newAppSupport, language = currentPWALanguage.value) {
        appSupport.value[language.id] = newAppSupport;
    }
    function setFullAppSupport(newAppSupport) {
        appSupport.value = newAppSupport
    }
    function setPlayPassText(newPlayPassText, language = currentPWALanguage.value) {
        playPassText.value[language.id] = newPlayPassText;
    }
    function setFullPlayPassText(newPlayPassText) {
        playPassText.value = newPlayPassText
    }
    function setPlayPointsText(newPlayPointsText, language = currentPWALanguage.value) {
        playPointsText.value[language.id] = newPlayPointsText;
    }
    function setFullPlayPointsText(newPlayPointsText) {
        playPointsText.value = newPlayPointsText
    }
    function setGiftCardsText(newGiftCardsText, language = currentPWALanguage.value) {
        giftCardsText.value[language.id] = newGiftCardsText;
    }
    function setFullGiftCardsText(newGiftCardsText) {
        giftCardsText.value = newGiftCardsText
    }
    function setUseBonusText(newUseBonusText, language = currentPWALanguage.value) {
        useBonusText.value[language.id] = newUseBonusText
    }
    function setFullUseBonusText(newUseBonusText) {
        useBonusText.value = newUseBonusText
    }
    function setShareThoughtsText(newShareThoughtsText, language = currentPWALanguage.value) {
        shareThoughtsText.value[language.id] = newShareThoughtsText
    }
    function setFullShareThoughtsText(newShareThoughtsText) {
        shareThoughtsText.value = newShareThoughtsText
    }
    function setWriteReviewText(newWriteReviewText, language = currentPWALanguage.value) {
        writeReviewText.value[language.id] = newWriteReviewText
    }
    function setFullWriteReviewText(newWriteReviewText) {
        writeReviewText.value = newWriteReviewText
    }
    function setFullRating(newRating) {
        rating.value = newRating;
    }
    function setFullReviewsCount(newReviewsCount) {
        reviewsCount.value = newReviewsCount;
    }
    function setFullInstallsCount(newInstallsCount) {
        installsCount.value = newInstallsCount;
    }
    function setFullFiveRatingQuantity(newFiveRatingQuantity) {
        fiveRatingQuantity.value = newFiveRatingQuantity;
    }
    function setFullFourRatingQuantity(newFourRatingQuantity) {
        fourRatingQuantity.value = newFourRatingQuantity;
    }
    function setFullThreeRatingQuantity(newThreeRatingQuantity) {
        threeRatingQuantity.value = newThreeRatingQuantity;
    }
    function setFullTwoRatingQuantity(newTwoRatingQuantity) {
        twoRatingQuantity.value = newTwoRatingQuantity;
    }
    function setFullOneRatingQuantity(newOneRatingQuantity) {
        oneRatingQuantity.value = newOneRatingQuantity;
    }

    function setCheckDevice(newCheckDevice, language = currentPWALanguage.value) {
        checkDevice.value[language.id] = newCheckDevice
    }
    function setFullCheckDevice(newCheckDevice) {
        checkDevice.value = newCheckDevice
    }
    function setRelatedGames(newRelatedGames, language = currentPWALanguage.value) {
        relatedGames.value[language.id] = newRelatedGames
    }
    function setFullRelatedGames(newRelatedGames) {
        relatedGames.value = newRelatedGames
    }
    function setProvider(newProvider, language = currentPWALanguage.value) {
        provider.value[language.id] = newProvider
    }
    function setFullProvider(newProvider) {
        provider.value = newProvider
    }
    function setReadMore(newReadMore, language = currentPWALanguage.value) {
        readMore.value[language.id] = newReadMore
    }
    function setFullReadMore(newReadMore) {
        readMore.value = newReadMore
    }
    function setAnnouncementText(newAnnouncementText, language = currentPWALanguage.value) {
        announcementText.value[language.id] = newAnnouncementText
    }
    function setFullAnnouncementText(newAnnouncementText) {
        announcementText.value = newAnnouncementText
    }
    function setUpdatedText(newUpdatedText, language = currentPWALanguage.value) {
        updatedText.value[language.id] = newUpdatedText
    }
    function setFullUpdatedText(newUpdatedText) {
        updatedText.value = newUpdatedText
    }
    function setOCVersionText(newOCVersionText, language = currentPWALanguage.value) {
        ocVersionText.value[language.id] = newOCVersionText
    }
    function setFullOCVersionText(newOCVersionText) {
        ocVersionText.value = newOCVersionText
    }
    function setLaterVersion(newLaterVersion, language = currentPWALanguage.value) {
        laterVersion.value[language.id] = newLaterVersion
    }
    function setFullLaterVersion(newLaterVersion) {
        laterVersion.value = newLaterVersion
    }
    function setDistributorText(newDistributorText, language = currentPWALanguage.value) {
        distributorText.value[language.id] = newDistributorText
    }
    function setFullDistributorText(newDistributorText) {
        distributorText.value = newDistributorText
    }
    function setMoreThanText(newMoreThanText, language = currentPWALanguage.value) {
        moreThanText.value[language.id] = newMoreThanText
    }
    function setFullMoreThanText(newMoreThanText) {
        moreThanText.value = newMoreThanText
    }
    function setActiveCompatibility(newActiveCompatibility, language = currentPWALanguage.value) {
        activeCompatibility.value[language.id] = newActiveCompatibility
    }
    function setFullActiveCompatibility(newActiveCompatibility) {
        activeCompatibility.value = newActiveCompatibility
    }
    function setWorkOnYourDevice(newWorkOnYourDevice, language = currentPWALanguage.value) {
        workOnYourDevice.value[language.id] = newWorkOnYourDevice
    }
    function setFullWorkOnYourDevice(newWorkOnYourDevice) {
        workOnYourDevice.value = newWorkOnYourDevice
    }
    function setReleaseDate(newReleaseDate, language = currentPWALanguage.value) {
        releaseDate.value[language.id] = newReleaseDate
    }
    function setFullReleaseDate(newReleaseDate) {
        releaseDate.value = newReleaseDate
    }
    function setMoviesText(newMoviesText, language = currentPWALanguage.value) {
        moviesText.value[language.id] = newMoviesText
    }
    function setFullMoviesText(newMoviesText) {
        moviesText.value = newMoviesText
    }
    function setKidsText(newKidsText, language = currentPWALanguage.value) {
        kidsText.value[language.id] = newKidsText
    }
    function setFullKidsText(newKidsText) {
        kidsText.value = newKidsText
    }
    function setClockText(newClockText, language = currentPWALanguage.value) {
        clockText.value[language.id] = newClockText
    }
    function setFullClockText(newClockText) {
        clockText.value = newClockText
    }
    function setTVText(newTVText, language = currentPWALanguage.value) {
        tvText.value[language.id] = newTVText
    }
    function setFullTVText(newTVText) {
        tvText.value = newTVText
    }
    function setDevImproveText(newDevImproveText, language = currentPWALanguage.value) {
        devImproveText.value[language.id] = newDevImproveText
    }
    function setFullDevImproveText(newDevImproveText) {
        devImproveText.value = newDevImproveText
    }
    function setKidsFamily(newKidsFamily, language = currentPWALanguage.value) {
        kidsFamily.value[language.id] = newKidsFamily
    }
    function setFullKidsFamily(newKidsFamily) {
        kidsFamily.value = newKidsFamily
    }
    function setParentsText(newParentsText, language = currentPWALanguage.value) {
        parentsText.value[language.id] = newParentsText
    }
    function setFullParentsText(newParentsText) {
        parentsText.value = newParentsText
    }
    function setFamilyAccess(newFamilyAccess, language = currentPWALanguage.value) {
        familyAccess.value[language.id] = newFamilyAccess
    }
    function setFullFamilyAccess(newFamilyAccess) {
        familyAccess.value = newFamilyAccess
    }
    function setTermsOfUseText(newTermsOfUseText, language = currentPWALanguage.value) {
        termsOfUseText.value[language.id] = newTermsOfUseText
    }
    function setFullTermsOfUseText(newTermsOfUseText) {
        termsOfUseText.value = newTermsOfUseText
    }


    return {
        // getters
        getName,
        getFullName,
        getUserTag,
        getFacebookPixel,
        getFacebookToken,
        getSubjectId,
        getAuthor,
        getFullAuthor,
        getRating,
        getReviewsCount,
        getInstallsCount,
        getCategory,
        getFullCategory,
        getDescription,
        getFullDescription,
        getFiveRatingQuantity,
        getFourRatingQuantity,
        getThreeRatingQuantity,
        getTwoRatingQuantity,
        getOneRatingQuantity,
        getSelectedPwaVersions,
        getGenerateReviews,
        getReviewsArray,
        getFullReviewsArray,
        getYoutubeVideo,
        getCustomVideo,
        getFlowId,
        getDomainId,
        getPlatformType,
        getSelectedPwas,
        getPwaTemplate,
        getPwaCategoryId,
        getPwaSubCategoryId,
        getCurrentPWALanguage,

        getInstallsText,
        getFullInstallsText,
        getReviewsText,
        getFullReviewsText,
        getFileSize,
        getAdInfo,
        getFullAdInfo,
        getInAppText,
        getFullInAppText,
        getAgeIOS,
        getFullAgeIOS,
        getYearsIOS,
        getFullYearsIOS,
        getScheduleIOS,
        getFullScheduleIOS,
        getDeveloperIOS,
        getFullDeveloperIOS,
        getLangIOS,
        getFullLangIOS,
        getSizeIOS,
        getFullSizeIOS,
        getFromIOS,
        getFullFromIOS,
        getWhatsNew,
        getFullWhatsNew,
        getVersionHistory,
        getFullVersionHistory,
        getVersionIOS,
        getFullVersionIOS,
        getAgoIOS,
        getFullAgoIOS,
        getBugsIOS,
        getFullBugsIOS,
        getAppPrivacy,
        getFullAppPrivacy,
        getAppPrivacyText,
        getFullAppPrivacyText,
        getDevPrivacy,
        getFullDevPrivacy,
        getInfoIOS,
        getFullInfoIOS,
        getCategoryIOS,
        getFullCategoryIOS,
        getCompatibilityIOS,
        getFullCompatibilityIOS,
        getCompatibilityTextIOS,
        getFullCompatibilityTextIOS,
        getGetBtnText,
        getFullGetBtnText,
        getCopyRightIOS,
        getFullCopyRightIOS,
        getSupportIOS,
        getFullSupportIOS,
        getGameCenter,
        getFullGameCenter,
        getGameCenterText,
        getFullGameCenterText,
        getAlsoLike,
        getFullAlsoLike,
        getReportIOS,
        getFullReportIOS,
        getEighteenAgeText,
        getFullEighteenAgeText,
        getEditorsChoiceText,
        getFullEditorsChoiceText,
        getAboutText,
        getFullAboutText,
        getWishlistAddText,
        getFullWishlistAddText,
        getDownloadAvailableText,
        getFullDownloadAvailableText,
        getInstallBtnText,
        getFullInstallBtnText,
        getInitBtnText,
        getFullInitBtnText,
        getDownloadBtnText,
        getFullDownloadBtnText,
        getInstallationBtnText,
        getFullInstallationBtnText,
        getOpenBtnText,
        getFullOpenBtnText,
        getCancelBtnText,
        getFullCancelBtnText,
        getPhoneText,
        getFullPhoneText,
        getDeviceText,
        getFullDeviceText,
        getTabsText,
        getFullTabsText,
        getRatingReviewsText,
        getFullRatingReviewsText,
        getReviewsVerifiedText,
        getFullReviewsVerifiedText,
        getFindHelpfulText,
        getFullFindHelpfulText,
        getAllReviewsText,
        getFullAllReviewsText,
        getYesText,
        getFullYesText,
        getNoText,
        getFullNoText,
        getWhatsNewText,
        getFullWhatsNewText,
        getLastUpdateText,
        getFullLastUpdateText,
        getDeveloperContactText,
        getFullDeveloperContactText,
        getSiteText,
        getFullSiteText,
        getEmailText,
        getFullEmailText,
        getAddressText,
        getFullAddressText,
        getPrivacyPolicyText,
        getFullPrivacyPolicyText,
        getMoreText,
        getFullMoreText,
        getShareText,
        getFullShareText,
        getShareFamilyText,
        getFullShareFamilyText,
        getRefundPolicyText,
        getFullRefundPolicyText,
        getAllPricesText,
        getFullAllPricesText,
        getPeopleReview,
        getFullPeopleReview,
        getIsUsefull,
        getFullIsUseful,
        getGamesText,
        getFullGamesText,
        getAppsText,
        getFullAppsText,
        getBooksText,
        getFullBooksText,
        getDataSecurityText,
        getFullDataSecurityText,
        getDataSecurity,
        getFullDataSecurity,
        getShareDataText,
        getFullShareDataText,
        getShareData,
        getFullShareData,
        getDataCollectionText,
        getFullDataCollectionText,
        getDataCollection,
        getFullDataCollection,
        getDevCollectionText,
        getFullDevCollectionText,
        getFollowData,
        getFullFollowData,
        getDataTransmittedText,
        getFullDataTransmittedText,
        getDataDeleteText,
        getFullDataDeleteText,
        getDataDelete,
        getFullDataDelete,
        getRateAppText,
        getFullRateAppText,
        getAppSupportText,
        getFullAppSupportText,
        getAppSupport,
        getFullAppSupport,
        getPlayPassText,
        getFullPlayPassText,
        getPlayPointsText,
        getFullPlayPointsText,
        getGiftCardsText,
        getFullGiftCardsText,
        getUseBonusText,
        getFullUseBonusText,
        getShareThoughtsText,
        getFullShareThoughtsText,
        getWriteReviewText,
        getFullWriteReviewText,
        getFullRating,
        getFullReviewsCount,
        getFullInstallsCount,
        getFullFiveRatingQuantity,
        getFullFourRatingQuantity,
        getFullThreeRatingQuantity,
        getFullTwoRatingQuantity,
        getFullOneRatingQuantity,
        getFullCustomVideo,
        getFullYoutubeVideo,
        getFullFileSize,

        getCheckDevice,
        getFullCheckDevice,
        getRelatedGames,
        getFullRelatedGames,
        getProvider,
        getFullProvider,
        getReadMore,
        getFullReadMore,
        getAnnouncementText,
        getFullAnnouncementText,
        getUpdatedText,
        getFullUpdatedText,
        getOCVersionText,
        getFullOCVersionText,
        getLaterVersion,
        getFullLaterVersion,
        getDistributorText,
        getFullDistributorText,
        getMoreThanText,
        getFullMoreThanText,
        getActiveCompatibility,
        getFullActiveCompatibility,
        getWorkOnYourDevice,
        getFullWorkOnYourDevice,
        getReleaseDate,
        getFullReleaseDate,
        getMoviesText,
        getFullMoviesText,
        getKidsText,
        getFullKidsText,
        getClockText,
        getFullClockText,
        getTVText,
        getFullTVText,
        getDevImproveText,
        getFullDevImproveText,
        getKidsFamily,
        getFullKidsFamily,
        getParentsText,
        getFullParentsText,
        getFamilyAccess,
        getFullFamilyAccess,
        getTermsOfUseText,
        getFullTeemsOfUseText,
        getPixelId,
        getRelatedPushes,


        // setters
        setName,
        setFullName,
        setUserTag,
        setFacebookPixel,
        setFacebookToken,
        setSubjectId,
        setAuthor,
        setFullAuthor,
        setRating,
        setReviewsCount,
        setInstallsCount,
        setCategory,
        setFullCategory,
        setDescription,
        setFullDescription,
        setFiveRatingQuantity,
        setFourRatingQuantity,
        setThreeRatingQuantity,
        setTwoRatingQuantity,
        setOneRatingQuantity,
        setSelectedPwaVersions,
        setGenerateReviews,
        setReviewsArray,
        setFullReviewsArray,
        setYoutubeVideo,
        setCustomVideo,
        setFlowId,
        setDomainId,
        setPlatformType,
        setSelectedPwas,
        setPwaTemplate,
        setPwaCategoryId,
        setPwaSubCategoryId,
        setCurrentPWALanguage,
        setInstallsText,
        setFullInstallsText,
        setReviewsText,
        setFullReviewsText,
        setFileSize,
        setAdInfo,
        setFullAdInfo,
        setInApp,
        setFullInApp,
        setAgeIOS,
        setFullAgeIOS,
        setYearsIOS,
        setFullYearsIOS,
        setScheduleIOS,
        setFullScheduleIOS,
        setLangIOS,
        setFullLangIOS,
        setSizeIOS,
        setFullSizeIOS,
        setDeveloperIOS,
        setFullDeveloperIOS,
        setFromIOS,
        setFullFromIOS,
        setGetBtnText,
        setFullGetBtnText,
        setWhatsNew,
        setFullWhatsNew,
        setVersionHistory,
        setFullVersionHistory,
        setVersionIOS,
        setFullVersionIOS,
        setAgoIOS,
        setFullAgoIOS,
        setBugsIOS,
        setFullBugsIOS,
        setAppPrivacy,
        setFullAppPrivacy,
        setAppPrivacyText,
        setFullAppPrivacyText,
        setDevPrivacy,
        setFullDevPrivacy,
        setInfoIOS,
        setFullInfoIOS,
        setCategoryIOS,
        setFullCategoryIOS,
        setCompatibilityIOS,
        setFullCompatibilityIOS,
        setCompatibilityTextIOS,
        setFullCompatibilityTextIOS,
        setCopyrightIOS,
        setFullCopyRightIOS,
        setReportIOS,
        setFullReportIOS,
        setSupportIOS,
        setFullSupportIOS,
        setGameCenter,
        setFullGameCenter,
        setGameCenterText,
        setFullGameCenterText,
        setAlsoLike,
        setFullAlsoLike,
        setEighteenAgeText,
        setFullEighteenAgeText,
        setEditorsChoiceText,
        setFullEditorsChoiceText,
        setAboutText,
        setFullAboutText,
        setWishlistAddText,
        setFullWishlistAddText,
        setDownloadAvailableText,
        setFullDownloadAvailableText,
        setInstallBtnText,
        setFullInstallBtnText,
        setInitBtnText,
        setFullInitBtnText,
        setDownloadBtnText,
        setFullDownloadBtnText,
        setInstallationBtnText,
        setFullInstallationBtnText,
        setOpenBtnText,
        setFullOpenBtnText,
        setCancelBtnText,
        setFullCancelBtnText,
        setPhoneText,
        setFullPhoneText,
        setDeviceText,
        setFullDeviceText,
        setTabsText,
        setFullTabsText,
        setRatingReviewsText,
        setFullRatingReviewsText,
        setReviewsVerifiedText,
        setFullReviewsVerifiedText,
        setPeopleReview,
        setFullPeopleReview,
        setIsUseful,
        setFullIsUseful,
        setFindHelpfulText,
        setFullFindHelpfulText,
        setAllReviewsText,
        setFullAllReviewsText,
        setYesText,
        setFullYesText,
        setNoText,
        setFullNoText,
        setWhatsNewText,
        setFullWhatsNewText,
        setLastUpdateText,
        setFullLastUpdateText,
        setDeveloperContactText,
        setFullDeveloperContactText,
        setSiteText,
        setFullSiteText,
        setEmailText,
        setFullEmailText,
        setAddressText,
        setFullAddressText,
        setPrivacyPolicyText,
        setFullPrivacyPolicyText,
        setMoreText,
        setFullMoreText,
        setShareText,
        setFullShareText,
        setShareFamilyText,
        setFullShareFamilyText,
        setRefundPolicyText,
        setFullRefundPolicyText,
        setAllPricesText,
        setFullAllPricesText,
        setGamesText,
        setFullGamesText,
        setAppsText,
        setFullAppsText,
        setBooksText,
        setFullBooksText,
        setDataSecurityText,
        setFullDataSecurityText,
        setDataSecurity,
        setFullDataSecurity,
        setShareDataText,
        setFullShareDataText,
        setShareData,
        setFullShareData,
        setDataCollectionText,
        setFullDataCollectionText,
        setDevCollectionText,
        setFullDevCollectionText,
        setFollowData,
        setFullFollowData,
        setDataCollection,
        setFullDataCollection,
        setDataTransmittedText,
        setFullDataTransmittedText,
        setDataDeleteText,
        setFullDataDeleteText,
        setDataDelete,
        setFullDataDelete,
        setRateAppText,
        setFullRateAppText,
        setAppSupportText,
        setFullAppSupportText,
        setAppSupport,
        setFullAppSupport,
        setPlayPassText,
        setFullPlayPassText,
        setPlayPointsText,
        setFullPlayPointsText,
        setGiftCardsText,
        setFullGiftCardsText,
        setUseBonusText,
        setFullUseBonusText,
        setShareThoughtsText,
        setFullShareThoughtsText,
        setWriteReviewText,
        setFullWriteReviewText,
        setFullRating,
        setFullReviewsCount,
        setFullInstallsCount,
        setFullFiveRatingQuantity,
        setFullFourRatingQuantity,
        setFullThreeRatingQuantity,
        setFullTwoRatingQuantity,
        setFullOneRatingQuantity,
        setFullCustomVideo,
        setFullYoutubeVideo,
        setFullFileSize,
        setCheckDevice,
        setFullCheckDevice,
        setRelatedGames,
        setFullRelatedGames,
        setProvider,
        setFullProvider,
        setReadMore,
        setFullReadMore,
        setAnnouncementText,
        setFullAnnouncementText,
        setUpdatedText,
        setFullUpdatedText,
        setOCVersionText,
        setFullOCVersionText,
        setLaterVersion,
        setFullLaterVersion,
        setDistributorText,
        setFullDistributorText,
        setMoreThanText,
        setFullMoreThanText,
        setActiveCompatibility,
        setFullActiveCompatibility,
        setWorkOnYourDevice,
        setFullWorkOnYourDevice,
        setReleaseDate,
        setFullReleaseDate,
        setMoviesText,
        setFullMoviesText,
        setKidsText,
        setFullKidsText,
        setClockText,
        setFullClockText,
        setTVText,
        setFullTVText,
        setDevImproveText,
        setFullDevImproveText,
        setKidsFamily,
        setFullKidsFamily,
        setParentsText,
        setFullParentsText,
        setFamilyAccess,
        setFullFamilyAccess,
        setTermsOfUseText,
        setFullTermsOfUseText,
        setRelatedPushes,
        setPixelId,
    }
});
