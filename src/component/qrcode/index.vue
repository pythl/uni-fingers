<template>
  <view class="qrcode">
    <canvas
      id="qrcode"
      canvas-id="qrcode"
      style="width: 200px; height: 200px"
    ></canvas>
    <view class="code">{{ DrawText }}</view>
  </view>
</template>

<script>
import UQRCode from "uqrcodejs"; // npm install uqrcodejs
import { mapState } from "vuex";
export default {
  name: "qrcode",
  components: {},
  props: {
    DrawText: {
      type: String,
      default: "https://uqrcode.cn/doc",
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      myCanvas: (state) => state.myCanvas,
    }),
  },
  methods: {
    createDrawQrcode() {
      if (this.DrawText) {
        // 获取uQRCode实例
        // var qr = new UQRCode();
        if (!this.myCanvas) {
          var qr = new UQRCode();
        } else {
          var qr = this.myCanvas;
        }
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
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {
    this.createDrawQrcode();
  },
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

<style scoped lang="scss">
.qrcode {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  .code {
    width: 260px;
    line-height: 80rpx;
    font-weight: 600;
    text-align: center;
    background-color: $white;
    color: $COL333;
  }
}
</style>
