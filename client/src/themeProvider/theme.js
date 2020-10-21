import themeDefault from './theme_default.json';

export const lightTheme = {
  body: themeDefault.light.bg.primary,
  heroBgImgOpacity: themeDefault.light.hero.opacity,
  heroBgCol: themeDefault.light.hero.bgCol,
  modalBody: themeDefault.light.bg.primary,
  navBtnBg: themeDefault.light.navBtn.bgGradient,
  navBtnBorder: themeDefault.light.navBtn.borderCol,
  navBtnCol: themeDefault.light.navBtn.text,
  navBtnColActive: themeDefault.light.navBtn.textActive,
  loginBtn: themeDefault.light.bg.secondary,
  text: themeDefault.light.text.primary,
};

export const darkTheme = {
  body: themeDefault.dark.bg.primary,
  heroBgCol: themeDefault.dark.hero.bgCol,
  heroBgImgOpacity: themeDefault.dark.hero.opacity,
  modalBody: themeDefault.dark.bg.primary,
  navBtnBg: themeDefault.dark.navBtn.bgGradient,
  navBtnBorder: themeDefault.dark.bg.accent,
  navBtnColActive: themeDefault.dark.text.primary,
  loginBtn: themeDefault.dark.bg.secondary,
  text: themeDefault.dark.text.primary,
};
