<template>
    <section class="shelf">
        <!--header bar组件-->
       <header-bar></header-bar>
       <!--   if else 判断是否书架有书shelfBookList-->
        <shelf-list v-if="shelfBookList.length > 0"></shelf-list>
        <empty v-else></empty>
       <!--底部导航栏-->
       <tab-bar></tab-bar>
       <!--页面加载动画gif图  设置属性 :option="{top:10,bottom:20}"-->
      <page-loading v-if="isShowPageLoading"></page-loading>
    </section>
</template>
<script>
  import { mapState, mapMutations } from 'vuex';
  //headerbar 驼峰 或者不驼峰组件命名
  //import headerbar from '@/components/Header';
  import headerBar from '@/components/Header';
  import tabBar from '@/components/Tabbar';
  import pageLoading from '@/components/Pageloading';
  import { SHELF_PAGE } from '../util/util';
  import empty from '@/components/Empty';
  import shelfList from '@/components/ShelfList';
  export default {
   /*****页面数据 */
   data(){
    return {
    isShowPageLoading:true,//默认显示加载图标
    //默认为空
    shelfBookList:[]
    }
   },
   components:{
    headerBar,
    tabBar,
    pageLoading,
    empty,
    shelfList
   },
   //初始化页面初始化页面标题
   created(){
    /****设置数据状态 */
    this.SET_HEADER_INFO({
      title: '我的书架',
	  type: SHELF_PAGE
   });
   this.isShowPageLoading=false;
   },
   methods:{
    //改变标题
    ...mapMutations([
			'SET_HEADER_INFO'
		])
   }
}
</script>
/*margin: 20px;（上、下、左、右各20px。）
margin: 20px 40px;（上、下20px；左、右40px。）
margin: 20px 40px 60px;（上20px；左、右40px；下60px。）
margin: 20px 40px 60px 80px;（上20px；右40px；下60px；左80px。）
*/
<style  lang="scss">
/**设置header 50px tabbar70px*/
.shelf {
    //除了内容  上面有50px margin  下面有70px
    margin: 50px 0 70px;
}
</style>