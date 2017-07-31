<template>
  <div class="t-header ">
   <div class="top border_bt zindex">
        <a href="javascript:;" class="icon"></a>
        <a href="javascript:;" class="car"></a>
      	<ul class="clearfix nav">
            <li class="active"><a href="javascript:;">楚楚街精选</a></li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 't-header',
  data () {
    return {
   
    }
  }
}
//Vue.component()
</script>

<style scoped long='scss'>
.t-header{
	position: fixed;
	top: 0;
}
.top {
    width: 100%;
    height: 0.9rem;
    background: #FFF;
    padding: 7px 0;
    position: fixed;
    top: 0;
    left: 0;
}
.top .icon {
    position: absolute;
    top: 12px;
    left: 20px;
    width:0.6rem;
    height: 0.6rem;
    background: url(../../../static/img/sousuo.png) no-repeat;
    background-size: 0.6rem0.6rem;
    display: inline-block;
}
.top .car {
    position: absolute;
    top: 12px;
    right: 20px;
    width: 0.6rem;
    height: 0.6rem;
    background: url(../../../static/img/scale.png) no-repeat;
    background-size: 0.6rem 0.6rem;
    display: inline-block;
}
.top ul {
    width: 255px;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    border: solid 1px #f99;
    border-radius: 3px;
}
.top ul li {
    width: 255px;
    height: 60px;
    line-height:60px;
    text-align: center;
    display: inline-block;
    font-size: 33px;
    float: left;
    cursor: pointer;
}

</style>
