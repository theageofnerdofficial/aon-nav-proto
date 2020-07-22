import themeDefault from './theme_default';

export const lightTheme = {
  body: themeDefault.light.bg.primary,
  heroBgImgOpacity: themeDefault.light.hero.opacity,
  heroBgCol: themeDefault.light.hero.bgCol,
  modalBody: themeDefault.light.bg.primary,
  navBtnBg: themeDefault.light.bg.secondary,
  navBtnBorder: themeDefault.light.bg.accent,
  text: themeDefault.light.text.primary,
};

export const darkTheme = {
  body: themeDefault.dark.bg.primary,
  heroBgCol: themeDefault.dark.hero.bgCol,
  heroBgImgOpacity: themeDefault.dark.hero.opacity,
  modalBody: themeDefault.dark.bg.primary,
  navBtnBg: themeDefault.dark.bg.secondary,
  navBtnBorder: themeDefault.dark.bg.accent,
  navBtnColActive: themeDefault.dark.text.primary,
  text: themeDefault.dark.text.primary,
};
