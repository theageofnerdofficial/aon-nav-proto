const utils = {
  arr: {
    randomize(arr) {
      let currentIndex = arr.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
      return arr;
    },
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

  str: {
    makeTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    },
  },

  time: {
    convertTo() {
      //
    },
  },

  urlify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const hasRegex = urlRegex.test(text);
    return hasRegex
      ? text.replace(
          urlRegex,
          (url) => `<a target="_blank" href="${url}">${url}</a>`
        )
      : text;
  },
};

export default utils;
