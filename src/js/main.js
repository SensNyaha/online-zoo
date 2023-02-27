if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('.header__theme').classList.add('active');
    document.body.classList.add('dark');
}
else {
    localStorage.setItem('theme', 'light');
}

import promoSlider from "./blocks/promoSlider.js";
import howSlider from './blocks/howSlider.js'
import petsSlider from "./blocks/petsSlider.js";
import testimonialSlider from './blocks/testimonialSlider.js';
import map from "./blocks/map.js";
import burgerMenu from './blocks/burgerMenu.js';
import changeTheme from "./blocks/changeTheme.js";
import modalControl from "./blocks/modalControl.js";
import zoosPage from "./blocks/zoosPage.js";
import zoosAside from "./blocks/zoosAside.js";
import mapSlider from "./blocks/mapSlider.js";

try {
    promoSlider();
} catch {}

try {
    howSlider();
} catch {}

try {
    petsSlider()
} catch {}

try {
    testimonialSlider();
} catch {}

try {
    map()
} catch {}

try {
    burgerMenu()
} catch {}

try {
    changeTheme()
} catch {}

try {
    modalControl()
} catch {}

try {
    zoosPage()
} catch {}

try {
    zoosAside()
} catch {}

try {
    mapSlider()
} catch {}