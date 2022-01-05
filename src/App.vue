<!--
 * @Author       : Zero
 * @Date         : 2022-01-05 10:20:32
 * @LastEditors  : Zero
 * @LastEditTime : 2022-01-05 14:32:54
 * @FilePath     : /middle_school_kids_today/src/App.vue
-->


<template>
  <div class="main">
    <div class="top">
      <span>第一周</span>
    </div>
    <div class="home-center">
      <div class="home-logo"></div>
      <a href="javascript:void(0);" class="start btn"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .top {
    background: url(./assets/images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    width: 5rem;
    height: 11rem;
    position: absolute;
    top: -1.3rem;
    right: 2.5rem;
    span {
      color: #a57c50;
      font-weight: bold;
      font-family: '\9ED1\4F53';
      font-size: 15px;
      position: absolute;
      bottom: 1.54rem;
      left: 0.1rem;
      text-align: center;
      display: block;
      width: 100%;
    }
  }

  .home-center {
    position: relative;
    .home-logo {
      background: url(./assets/images/1-2.png) no-repeat;
      background-size: 100% 100%;
      width: 20.25rem;
      height: 18rem;
      position: absolute;
      top: 6.5rem;
      left: 50%;
      margin-left: -10.125rem;
    }
    .btn {
      display: block;
      width: 6.4rem;
      height: 3.3rem;
      position: absolute;
      top: 25.7rem;
      left: 50%;
      margin-left: -3.2rem;
    }
  }
  
  .start {
    background: url(./assets/images/1-4.png) no-repeat;
    background-size: 100% 100%;
  }

  

</style>
