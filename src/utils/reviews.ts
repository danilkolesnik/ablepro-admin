import userIcon from "@/assets/icons/pwa/user.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatPfp = (review:any) => {
    if((review?.demoPfp === null || review?.demoPfp === undefined ) && (review?.pfp === null || review?.pfp === undefined)) {
        return userIcon
    }

    if(review?.fresh) {
        return review.demoPfp;
    }

    if(review.pfp.includes('https://')) return review.pfp;
    return `/storage/${review.pfp}`;
}

export { formatPfp }
