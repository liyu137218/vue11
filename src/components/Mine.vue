<template>
  <div class="mine root-box">	
  	<p><a href=""><span class="iconfont icon-go-back"></span></a> <a href=""><span class="load">楚楚街登录</span></a>  </p>


<div class="layer Ndisplay warm">
  <p class="text align-ct">
    <span class="bd_radius ftFFF ft08 lh18"></span>
  </p>
</div>
<p class="mb40 positionR">
  <i class="logo Bdisplay positionA"></i>
  <img src="/img/test/user/icon_bg.png" class="img100" alt="">
</p>
<div class="login ft3">
  <ul>
    <li>
      <input type="tel" placeholder="手机号" class="ft09" data-tip="手机号" id="userName">
    </li>
    <li>
      <input type="password" placeholder="密码" class="ft09" data-tip="密码" id="passWord">
    </li>
    <li class="pdr Ndisplay" id="verify">
      <input type="text" placeholder="图形验证码" data-tip="图形验证码" class="ft09 big">
      <p class="code bgFFF positionA"></p>
    </li>
    <li class="pdr Ndisplay" id="sms">
      <input id="inputSms" type="text" placeholder="短信验证码" class="ft09 big">
      <button class="bgred bd_radius ftFFF p10 positionA" id="clickSms">发送短信验证码</button>
    </li>
  </ul>  
  <p class="mt5 clearfix"><a href="javascript:;" class="fr forget"><span class="ftA">忘记密码？</span></a></p>
  <div class="ft1 align-ct positionR">
    <a href="javascript:;" class="btn bgred mt40 Bdisplay bd_radius toLogin"><span class="ftFFF">登录</span></a>
    <p class="mt20 createNew">
      <a href="javascript:;"><span class="ft3">创建新账号</span></a>
    </p>
  </div>
  </div>




  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped long="scss">
	.mine{
		font-size: 40px;
	}
	.iconfont{
		font-size: 80px;
	}
	
</style>
