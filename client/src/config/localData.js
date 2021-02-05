// Imports:
import settings from './settings';

const localData = {
  darkMode: {
    get() {
      return localStorage.getItem(settings.localStorage.darkmode);
    },
  },

  loginItems: {
    credentials: {
      set(o) {
        const { loginItems } = localData;
        // If there's no ID or username, set them"
        if (!loginItems.id.get()) loginItems.id.set(o);
        if (!loginItems.username.get()) loginItems.username.set(o);
      },
    },
    id: {
      get() {
        return localStorage.getItem(settings.localStorage.login.id);
      },
      set(o) {
        localStorage.setItem(settings.localStorage.login.id, o.id);
      },
    },
    username: {
      get() {
        return localStorage.getItem(settings.localStorage.login.username);
      },
      set(o) {
        localStorage.setItem(settings.localStorage.login.username, o.username);
      },
    },
  },
};

export default localData;
