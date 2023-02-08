<template>
  <view class="page">
    <view class="bj"></view>
    <view class="full-height" :style="'min-height: ' + fullHeight + 'rpx;'">
      <!-- 头像 -->
      <view class="me-info">
        <view class="avatar-bj">
          <view class="avatar">
            <image
              class="img"
              src="https://img1.mydrivers.com/Img/20091223/04591020.jpg"
            ></image>
          </view>
        </view>
        <view
          class="login-btn"
          @click="handleLogin"
          v-show="!isLogin"
          style="cursor: pointer"
          hover-class="name-hover"
          >登录 | 注册</view
        >
        <view class="name" v-show="isLogin">Tanghulu@789</view>
      </view>
      <!-- 功能 -->
      <view class="my-list">
        <view
          class="my-item"
          v-for="item in myList"
          :key="item.id"
          hover-class="my-item-hove"
          hover-stay-time="100"
        >
          <view class="row">
            <text>{{ item.name }}</text>
            <u-icon name="arrow-right"></u-icon>
          </view>
          <u-line></u-line>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "me",
  components: {},
  props: {},
  data() {
    return {
      fullHeight: 0, //页面余下高度
      isLogin: false,
      myList: [
        { id: 1, name: "我的消费券" },
        { id: 2, name: "商家入驻" },
        { id: 3, name: "我的店铺" },
        { id: 4, name: "扫码核销" },
      ],
    };
  },
  created() {
    let that = this;
    /**
     * 获取当前元素到顶部的距离
     */
    uni
      .createSelectorQuery()
      .select(".full-height")
      .boundingClientRect(function (data) {
        console.log("得到布局位置信息" + JSON.stringify(data));
        uni.getSystemInfo({
          success(res) {
            console.log("屏幕可用高度" + res.windowHeight);
            //屏幕的高度-距离顶部的距离为剩下的内容高度
            that.fullHeight = res.windowHeight - data.top;
            console.log(that.fullHeight);
          },
        });
      })
      .exec();
  },
  computed: {},
  methods: {
    handleLogin() {
      uni.navigateTo({
        url: "/component/login/index",
        success: (res) => {
          console.log(res);
        },
      });
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .bj {
    width: 100%;
    height: 320rpx;
    background: url("https://static.daoba.com/consume/banner.png");
    background-size: 100% 100%;
  }
  .full-height {
    width: 100%;
    box-sizing: border-box;
    border-radius: 30rpx 30rpx 0 0;
    margin-top: -30rpx;
    position: relative;
    background-color: #fff;
    // 头像
    .me-info {
      min-width: 210rpx;
      height: 210rpx;
      top: -40rpx;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      z-index: 999;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      .avatar-bj {
        width: 150rpx;
        height: 150rpx;
        box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.2);
        border-radius: 100rpx;
        box-sizing: border-box;
        background: #ececec;
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar {
          width: 130rpx;
          height: 130rpx;
          background-color: #ffffff;
          border-radius: 100rpx;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          .img {
            width: 130rpx;
            height: 130rpx;
            border-radius: 100rpx;
            box-sizing: border-box;
          }
        }
      }
      .name {
        color: #333333;
        font-size: 28rpx;
        font-weight: bold;
      }
      .login-btn {
        color: #333333;
        font-size: 32rpx;
        font-weight: bold;
      }
      .name-hover {
        color: red;
      }
    }
    //我的菜单
    .my-list {
      padding: 260rpx 30rpx 0;
      color: #333333;
      .my-item {
        width: 100%;
        .row {
          display: flex;
          justify-content: space-between;
          font-size: 28rpx;
          font-weight: bold;
          line-height: 100rpx;
          height: 100rpx;
          padding: 0 10rpx;
          cursor: pointer;
          .name {
            font-size: 28rpx;
            font-weight: bold;
          }
        }
      }
      .my-item-hove {
        background-color: #5497d2;
        border-radius: 10rpx;
      }
    }
  }
}
</style>
