<template>
  <div class="main root-box ">
  		<div class="kong"></div>
   	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>	<p>主页</p>
  
  	<t-header></t-header>
			
    <nav-tab></nav-tab>
  </div>
</template>

<script>
	import NavTab from './NavTab'
//	import Header from './header/Header'
import THeader from './OutmaiComponents/THeader'
	
export default {
  name: 'main',
  data () {
    return {
    
    }  
},
  components:{
    	THeader
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kong{
	margin-top: 0.9rem;
}
.outmai{
	font-size: 30px;
}
</style>
