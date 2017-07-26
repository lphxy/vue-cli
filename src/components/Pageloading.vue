<template>
<section class="page-loading" :style="styleObject">
	<img class="loading" src="../assets/page-animation.gif" alt="翻页加载动画">
</section>
</template>


<!--自定义属性实现高度的不同-->
<script>
//可以使用 props 把父组件数据数据传给子组件。
export default {
   name:'Pageloading',
   props:{
     //option Object
     option:Object
   },
   data(){
   return {
    //默认样式
    styleObject: {
				'top': '40px',
				'bottom': '60px'
			}
   }
},
//页面加载通过设置改变样式
created(){
    //如果
    if(this.option&&this.option.top){
     this.styleObject.top=this.option.top;
    }
    if(this.option&& this.option.bottom){
     this.styleObject.bottom=this.option.bottom;
    }

}
   
}


</script>



<style lang="scss">
.page-loading {
    position: fixed;
    // top: 40px;
    left: 0;
    right: 0;
    // bottom: 60px;
    z-index: 99999;
    background-color: #fff;

    img.loading {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-100%);
        width: 20%;
    }
}
</style>
