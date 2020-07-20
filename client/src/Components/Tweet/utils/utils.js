
const utils = {
  urlify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      (url) => `<a target="_blank" href="${url}">${url}</a>`
    );
  },
  removeLinkSuffix(link, urlBeginning = 'https://t.co', charactersToRemove) {
    if (
      link.substring(link.length - charactersToRemove).indexOf(urlBeginning) >=
      0
    ) {
      return link.substring(0, link.length - charactersToRemove);
    }
    return link;
  },
};

export default utils;
