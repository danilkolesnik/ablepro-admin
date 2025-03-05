export const dynamicStyle = (text: string) => {
  const isArabic = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(text);
  return isArabic ? { direction: 'rtl' } : {};
};
