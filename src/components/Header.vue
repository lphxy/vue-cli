<template>
 <!--html header-->
 <header class="header">
    <!--标题头-->
	<h2 class="header-logo">{{headerTitle }}</h2>

   
   <!--右边搜索框-->
   <div class="header-search">
       <!--点击直接跳转到搜索路由页面跳转到search路由页面跳转路由-->
		<router-link :to="{ name: 'search' }">
		    <!--SVG图标应用-->
        	<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-search"></use>
            </svg>
		    <!--SVG图标应用-->

		</router-link>
	</div>

 </header>
</template>
<script>
//状态管理state
import { mapState } from 'vuex';
export default {
  //计算属性
  computed:{
   //默认headertitle是RM
  ...mapState([
   'headerTitle'

  ])


  }


}
</script>

<style lang="scss">
/**header  css*/
.header {
    /**头部固定*/
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
    width: 100%;//宽度100% 手机屏幕
    height: 40px;//高度  40px
    overflow: hidden;//内容超出会被修剪，并且其余内容是不可见的 
    // border-bottom: 1px solid #ed424b;
	color: #fff; //字体颜色白色
	background-color: #ed424b; //背景色红色
    box-sizing: border-box;////有可能居中内容
	z-index: 99;//沿着Z轴*/
   /*absolute*生成绝对定位的元素 */
   h2.header-logo {
        position: absolute; /**相对于h2元素定位**/
        top: 12px;
        left: 15px;
        color: #fff;
        line-height: 20px;
    }
   /***标题设置***/ 
   /**搜索框**/
   .header-search {
        position: absolute;
        display: inline-block;
        top: 12px;
        right: 15px;

        .icon {
            width: 20px;
            height: 20px;
        }
    }
   /**搜索框**/


}



</style>
