<template>
  <view class="ticket-list">
    <view>
      <u-toast ref="uToast"></u-toast>
    </view>
    <view class="ticket-item" v-for="(item, index) in ticketList" :key="index">
      <view class="left">
        <view>
          <text style="font-size: 24rpx">¥</text>
          <text>200</text>
        </view>
      </view>
      <image
        class="img"
        src="../../static/image/common/ticket_line.png"
        mode="scaleToFill"
      />
      <view class="right">
        <view>
          <view class="name">体育消费券</view>
          <view class="info">满400可用</view>
          <view class="info">有效期至2023.3.3</view>
        </view>
        <view
          class="btn"
          hover-class="btn-hover"
          @click="ticketDetail(item)"
          :class="
            item.status == 0 ? 'red' : item.status == 1 ? 'yellow' : 'gray'
          "
        >
          {{ item.name }}
        </view>
      </view>
    </view>
    <view class="use" :style="{ color: !getTicket ? '#999999' : '' }">
      <view class="use-info use-title">使用须知</view>
      <view class="use-info">1. 该券不叠加不找零；</view>
      <view class="use-info">2. 每个账号仅限使用3张消费券</view>
      <view class="use-info">3. 仅限线下使用，消费时请向商家出示券码</view>
    </view>
    <u-popup
      :show="isShowPopup"
      :round="10"
      mode="center"
      @close="closepopUp"
      :duration="100"
      closeable
      :safeAreaInsetBottom="false"
      :safeAreaInsetTop="true"
      :overlay="false"
      :closeOnClickOverlay="false"
    >
      <qrcode :DrawText="DrawText" />
    </u-popup>
  </view>
</template>

<script>
import qrcode from "../../component/qrcode/index.vue";
import UQRCode from "uqrcodejs"; // npm install uqrcodejs
export default {
  name: "ticket-list",
  props: {
    //是否抢券
    getTicket: {
      type: Boolean,
      default: false,
    },
    //券数据
    ticketList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: { qrcode },
  data() {
    return {
      timer: null,
      isShowPopup: false,
      DrawText: "1211",
    };
  },
  computed: {},
  methods: {
    ticketDetail(item) {
      switch (item.status) {
        //抢券
        case 0:
          this.$refs.uToast.show({
            type: "warning",
            message: "抢券成功",
            duration: 1000,
            icon: "success",
            complete(res) {
              uni.navigateTo({
                url: "/pages/ticket/my-ticket/index",
              });
            },
          });
          break;
        //使用券
        case 1:
          this.isShowPopup = true;
          this.DrawText = "321323";
          break;
        //已使用
        case 2:
          break;
      }
    },
    createDrawQrcode() {
      if (this.DrawText) {
        // 获取uQRCode实例
        var qr = new UQRCode();
        // 设置二维码内容
        qr.data = this.DrawText;
        // 设置二维码大小，必须与canvas设置的宽高一致
        qr.size = 200;
        // 调用制作二维码方法
        qr.make();
        // 获取canvas上下文
        var canvasContext = uni.createCanvasContext("qrcode", this); // 如果是组件，this必须传入
        // 设置uQRCode实例的canvas上下文
        qr.canvasContext = canvasContext;
        // 调用绘制方法将二维码图案绘制到canvas上
        qr.drawCanvas();
      }
    },
    closepopUp() {
      this.isShowPopup = false;
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
    beforeDestroy() {
      clearTimeout(this.timer);
    },
  },
};
</script>

<style scoped lang="scss">
.ticket-list {
  width: 100%;
  .ticket-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    .left {
      width: 180rpx;
      height: 170rpx;
      background-color: $bg0d5;
      border-radius: 10rpx 0 0 10rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $FF3F2B;
      font-size: 74rpx;
      font-weight: bold;
    }
    .img {
      width: 25rpx;
      height: 170rpx;
    }
    .right {
      width: 456rpx;
      height: 170rpx;
      background-color: $white;
      border-radius: 0 10rpx 10rpx 0;
      padding: 30rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        color: $COL333;
        font-size: 36rpx;
        font-weight: 600;
      }
      .info {
        font-size: 24rpx;
        color: $COL999;
      }

      .btn {
        width: 160rpx;
        height: 70rpx;
        line-height: 70rpx;
        background-color: $FFBC2B;
        border-radius: 5rpx;
        text-align: center;
        color: $white;
        font-weight: bold;
      }
      .btn-hover {
        opacity: 0.8;
      }
      .gray {
        background-color: $BBBBBB;
      }
      .red {
        background-color: $FF3F2B;
      }
      .yellow {
        background-color: $FFBC2B;
      }
    }
  }

  .use {
    color: $white;
    margin-top: 20rpx;
    .use-title {
      font-size: 24rpx;
      font-weight: bold;
    }
    .use-info {
      font-size: 24rpx;
      line-height: 45rpx;
    }
    .get-ticket {
      color: $COL999;
    }
  }
  .qcode {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 240px;
    height: 100%;
    background-color: $white;
  }
}
</style>
