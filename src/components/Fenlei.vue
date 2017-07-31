<template>
  <div class="fenlei root-box">
	<div class="kong"></div>
  	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>	<p>分类</p>

  	   <t-header></t-header>
    
    <nav-tab></nav-tab>
    </div>
</template>

<script>
	import NavTab from './Navtab'
import THeader from './OutmaiComponents/THeader'
	
export default {
  name: 'fenlei',
  data () {
    return {
   
    }
  },
  components:{THeader}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kong{
	margin-top: 0.9rem;
}
</style>
