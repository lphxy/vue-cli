import Vue from 'vue';
import Router from 'vue-router';

import Shelf from '@/pages/shelf';
Vue.use(Router);
export default new Router({
    /***不会出现#页面地址 */
	mode: 'history',
	routes: [{
			path: '/',
			name: 'shelf',
			component: Shelf
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
