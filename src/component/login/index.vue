<template>
  <div class="login" :style="'height:' + fullHeight + 'px;'">
    <view class="circle"></view>
    <view class="navigate-back" @click="navigateBack"
      ><u-icon name="arrow-left" color="#ffffff" size="22"></u-icon
    ></view>
    <view class="title">
      <view class="slogan">运动天天乐 ，渝享好生活</view>
      <view class="big-title">重庆市首届全民健身嘉年华</view>
      <view class="min-title">暨九龙坡区体育消费节</view>
    </view>
    <view class="login-btn" hover-class="login-btn-hover" @click="login">
      <u-icon name="weixin-fill" color="#ffffff" size="34px" bold></u-icon>
      <view class="txt">微信授权登录</view>
    </view>
    <image
      class="bottom-bg"
      src="https://static.daoba.com/consume/login_pic.png"
    ></image>
  </div>
</template>

<script>
import { getUserInfo } from "../../common/loginWx";
export default {
  name: "login",
  props: {},
  data() {
    return {
      fullHeight: 0,
    };
  },
  created() {
    let that = this;
    /**
     * 获取当前元素到顶部的距离
     */
    uni.getSystemInfo({
      success(res) {
        console.log("屏幕可用高度" + res.windowHeight);
        //屏幕的高度-距离顶部的距离为剩下的内容高度
        that.fullHeight = res.windowHeight;
        console.log(that.fullHeight);
      },
    });
  },
  computed: {},
  methods: {
    login() {
      console.log("登录");

      getUserInfo();
      //   uni.getUserProfile({
      //     desc: "授权头像/昵称以使用完整功能",
      //     success: (res) => {
      //       uni.hideLoading();
      //       console.log(res);
      //     },
      //   });
    },
    navigateBack() {
      uni.navigateBack({
        delta: 1,
        success: (res) => {
          console.log("返回上一页");
        },
      });
    },
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style scoped lang="scss">
.login {
  background-image: linear-gradient(to bottom, #3b3e9a, #5497d2);
  width: 100%;
  padding-top: 300rpx;
  .circle {
    width: 455rpx;
    height: 455rpx;
    border-radius: 50%;
    background-color: #3b3e9a;
    margin: 0 auto;
  }
  .navigate-back {
    position: absolute;
    top: 110rpx;
    left: 20rpx;
  }
  .title {
    text-align: center;
    color: #ffffff;
    margin-top: -400rpx;
    .slogan {
      font-size: 48rpx;
      margin-bottom: 50rpx;
    }
    .big-title {
      font-size: 60rpx;
      font-weight: bold;
      margin-bottom: 30rpx;
    }
    .min-title {
      font-size: 48rpx;
      font-weight: bold;
    }
  }
  .login-btn {
    width: 520rpx;
    height: 110rpx;
    border: 1px solid #ffffff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #ffffff;
    border-radius: 100rpx;
    font-size: 32rpx;
    font-weight: bold;
    position: relative;
    z-index: 100;
    top: 600rpx;
    .txt {
      margin-left: 20rpx;
    }
  }
  .login-btn-hover {
    background-color: #5497d2;
  }
  .bottom-bg {
    width: 100%;
    height: 700rpx;
    position: absolute;
    bottom: 0;
  }
}
</style>
