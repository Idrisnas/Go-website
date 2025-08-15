export const getStoreLink = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    return "https://play.google.com/store/apps/details?id=com.gocaby.rider&pcampaignid=web_share";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "https://apps.apple.com/ng/app/goapp-ride-delivery-food/id6444678067";
  }
  return "https://play.google.com/store/apps/details?id=com.gocaby.rider&pcampaignid=web_share";
};
export default getStoreLink;