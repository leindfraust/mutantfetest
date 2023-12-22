import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
    faMagnifyingGlass,
    faShoppingCart,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import {
    faTiktok,
    faYoutube,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faMagnifyingGlass,
    faUser,
    faShoppingCart,
    faCaretDown,
    faTiktok,
    faYoutube,
    faFacebook,
    faInstagram,
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
