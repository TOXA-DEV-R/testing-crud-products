import { createApp } from "vue";
import router from "./router/index";

import App from "./App.vue";
import { Notify, Quasar, Dialog } from "quasar";

import "./assets/css/style.css";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";

import store, { storeKey } from "./store";

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify,
      Dialog,
    },
  })
  .use(router)
  .use(store, storeKey)
  .mount("#app");
