<template>
  <view class="content">
    <view>
      <!-- <u-button type="primary" text="确定"></u-button> -->
      <text>抢劵页面</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
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
