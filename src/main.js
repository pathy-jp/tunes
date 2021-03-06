import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router";

window.eventBus = mitt();

createApp(App).use(router).mount("#app");
