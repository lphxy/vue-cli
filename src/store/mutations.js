
/***引入类型 */
import {
	INIT_STATE
} from './mutation-types';
/***操作缓存 */
import {
	setStore,
	getStore,
	removeStore
} from '../util/util';

export default {
/****初始化操作 */
[INIT_STATE](state) {
	   /****缓存里有数据从缓存中取 */
		let initBookList = getStore('SHEFLBOOK');
		if (initBookList) {
			state.shelfBookList = JSON.parse(initBookList);
		}
		let initSearchHistory = getStore('SEARCHHISTORY');
		if (initSearchHistory) {
			state.searchHistory = JSON.parse(initSearchHistory);
		}
       /****缓存里有数据从缓存中取  是否夜间模式 */
		state.nightMode = getStore('NIGHTMODE') === 'true' ? true : false;
		/***设置字体大小 */
		state.fontSize = Number.isInteger(getStore('FONTSIZE')) ? parseInt(getStore('FONTSIZE')) : 14;
		/****设置皮肤 */
		state.skinColor = getStore('SKINCOLOR');
	}




}