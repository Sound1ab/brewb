import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// Directives
import progressiveImage from '@/directives/progressiveimage.js';
import designMode from '@/directives/designMode.js';

// Mixin imports
import {fetchImg} from './mixins/fetchImg';

// Global Directives
Vue.directive('progressive-image', progressiveImage());
Vue.directive('design-mode', designMode());

// Mixin globals
Vue.mixin(fetchImg);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	components: {App},
	router,
	store,
	template: '<App/>'
}).$mount('#app')
