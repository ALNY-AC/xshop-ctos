import Vue from 'vue';
import './directive.js';
import './filter.js';
import url from './url.js';

import Http from './Http.js';
import './components.js';
import './Origin.js';
import ElementUI from 'element-ui';
import '../styles/element-variables.scss';
import { pcaa } from 'area-data';
import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';
import VCharts from 'v-charts'

Vue.prototype.$pcaa = pcaa;

Vue.use(VueAreaLinkage)
Vue.use(VCharts)

Vue.use(ElementUI, {
    size: 'small'
});

import '@/styles/styles.scss';

Vue.prototype.$Url = url;
Vue.prototype.$http = Http;



