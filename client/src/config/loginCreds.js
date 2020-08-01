import settings from './settings';

const loginCreds = {
  storageItem: {
    set(o) {
      if (!localStorage.getItem(settings.localStorage.login.id)) {
        localStorage.setItem(settings.localStorage.login.id, o.id);
      }
      if (!localStorage.getItem(settings.localStorage.login.username)) {
        localStorage.setItem(settings.localStorage.login.username, o.username);
      }
    },
    getId() {
      return localStorage.getItem(settings.localStorage.login.id);
    },
    getUsername() {
      return localStorage.getItem(settings.localStorage.login.username);
    },
    getDarkmode() {
      return localStorage.getItem(settings.localStorage.darkmode);
    },
  },
};

export default loginCreds;
