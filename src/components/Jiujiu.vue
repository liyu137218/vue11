<template>
  <div class="jiujiu root-box">
  	<div class="kong"></div>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>
  	<p>9.9</p>

  	
   <t-header></t-header>
   
   <nav-tab></nav-tab>

  </div>
</template>

<script>
	import NavTab from './Navtab'
import THeader from './OutmaiComponents/THeader'
	
export default {
  name: 'finder',
  data () {
    return {
    	
    }
  },
  components:{THeader}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">
.kong{
	margin-top: 0.9rem;
}

</style>
