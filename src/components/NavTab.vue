<template>
  <div class="nav-tab">
   		<router-link to='/outmai'>
   			<span class="iconfont icon-diqiu"></span>主页
   		</router-link>
   		<router-link to='/jiujiu'>
   			<span class="iconfont icon-9"></span>9块9
   		</router-link>
   		<router-link to='/order'>
   			<span class="iconfont icon-fenlei"></span>分类
   		</router-link>
   		<router-link to='/mine'>
   			<span class="iconfont icon-wode"></span>我的
   		</router-link>
  </div>
</template>

<script>
 	 import Vue from 'vue'
 	 const NavTab=Vue.extend({
 	 		name:'navtab'
 	 })
 	 Vue.component('nav-tab',NavTab)
 	 export default NavTab
</script>

<style scoped lang="scss">
.nav-tab{
			position: fixed;
			bottom: 0;left: 0;width: 100%;
	    padding-top: .1rem ;
	    padding-bottom: .1rem ;
	    background-color: #fff;
	    height: 1.333333rem;
	    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
	    display: flex;
	    border-top: 2px solid aqua;
	a{
			flex-grow: 1;
    	display: flex;
    	flex-flow: column;
    	align-items: center;
    	justify-content: space-around;
    	font-size: .3rem;
    	color: #777;
	    	.iconfont{
	    		font-size: .6rem;
	    	}
				&.router-link-active{
					color: #eb0046;
				}
		}	
}
</style>
