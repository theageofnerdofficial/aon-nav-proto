import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import countries from './countries';

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
    sort: {
      byProperty: {
        ascending(arr, property) {
          arr.sort((a, b) => {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
          });
        },
        descending(arr, property) {
          arr.sort((a, b) => {
            if (a[property] > b[property]) return -1;
            if (a[property] < b[property]) return 1;
            return 0;
          });
        },
      },
    },
  },

  dom: {
    pos: {
      getOffset(el) {
        let _x = 0;
        let _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
        }
        return { top: _y, left: _x };
      },
    },
  },

  num: {
    percentage: (numerator, denominator) => (numerator / denominator) * 100,

    zeroPad: (num, places) => String(num).padStart(places, '0'),
  },

  str: {
    makeTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    },
    parseHTML(str) {
      return <React.Fragment>{ReactHtmlParser(str)}</React.Fragment>;
    },
  },

  location: {
    getCodeByCountry(country) {
      let code;
      countries.forEach((c) => {
        if (c.name === country) code = c.code;
      });
      return code;
    },
    getFlagByCountry(country) {
      let flag;
      countries.forEach((c) => {
        if (c.name === country) flag = c.flag;
      });
      return flag;
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
