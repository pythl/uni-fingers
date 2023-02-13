<template>
  <view class="main_box">
    <qrcode />
  </view>
</template>

<script>
import qrcode from "../../component/qrcode/index.vue";
export default {
  name: "business",
  components: { qrcode },
  props: {},
  data() {
    return {
      id: "123456",
    };
  },
  computed: {},
  methods: {
    async loadList() {
      await uQRCode
        .make({
          canvasId: "qrcode",
          componentInstance: this,
          text: this.id,
          size: uni.upx2px(450),
          margin: 20,
          backgroundColor: "#ffffff", //背景颜色
          foregroundColor: "#000000",
          fileType: "jpg",
          correctLevel: uQRCode.defaults.correctLevel,
        })
        .then((res) => {
          console.log(res);
        });
    },
    getScanCode() {
      const _this = this;
      uni.scanCode({
        // scanType: ['qrCode'],   扫描的类型
        success(res) {
          //这里即拿到了扫描出的数据
          _this.code = res.result;
        },
        fail(err) {
          console.log("扫码失败", err);
        },
        complete(end) {
          console.log("扫码结束", end);
        },
      });
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

<style scoped></style>
