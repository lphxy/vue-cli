<template>
    <section class="shelf">
       <header-bar></header-bar>
       

    </section>
</template>

<script>
  //headerbar 驼峰 或者不驼峰组件命名
  //import headerbar from '@/components/Header';
  import headerBar from '@/components/Header';
export default {
   components:{
    headerBar
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