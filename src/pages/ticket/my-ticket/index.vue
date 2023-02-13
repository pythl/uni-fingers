<template>
  <view class="page" :style="'height:' + fullHeight + 'px;'">
    <ticketList :ticketList="ticketList" />
  </view>
</template>

<script>
import ticketList from "../../../component/ticket-list/index.vue";
export default {
  name: "my-ticket",
  components: { ticketList },
  props: {},
  data() {
    return {
      fullHeight: 0,
      ticketList: [
        { id: 2, status: 1, name: "去使用" },
        { id: 3, status: 2, name: "已使用" },
      ],
    };
  },
  computed: {},
  methods: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {
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
.page {
  padding: 45rpx;
  background-color: #f2f2f2;
}
</style>
