<template>
  <view class="page">
    <view class="top"> </view>
    <view class="main">
      <view class="title">10,000,000 消费券 正在发放</view>
      <ticketList :getTicket="true" :ticketList="ticketList" />
    </view>
  </view>
</template>

<script>
import ticketList from "../../component/ticket-list/index";
export default {
  components: {
    ticketList,
  },
  data() {
    return {
      title: "Hello",
      ticketList: [
        { id: 1, status: 0, name: "抢券" },
        { id: 2, status: 0, name: "抢券" },
      ],
    };
  },
  onLoad() {
    this.getHomeData();
  },
  methods: {
    async getHomeData() {
      let data = await this.$http.home.getWebsiteMain();
      console.log("请求接口", data);
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  .top {
    width: 100%;
    height: 1000rpx;
    background: url("https://static.daoba.com/consume/ticket_bg.png");
    background-size: 100% 100%;
  }
  .main {
    width: 100%;
    height: 970rpx;
    background-image: linear-gradient(to bottom, #3b3e9a, #5391cb);
    padding: 0 45rpx;
    box-sizing: border-box;
    .title {
      font-size: 39rpx;
      color: $white;
      font-weight: bold;
      text-align: center;
      line-height: 160rpx;
    }
  }
}
</style>
