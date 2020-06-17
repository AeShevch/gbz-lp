import CountSelector from "./count-selector";
import AOS from 'aos';

const countSelector = new CountSelector(`js-count-selector`);
countSelector.init();

AOS.init({duration: 800});
