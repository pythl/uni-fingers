class LoadStatus {
  constructor() {
    this.requestCounter = 0; // 请求计数器
  }
  showLoading(title = "加载中") {
    uni.showLoading({
      title,
      mask: true,
    });
  }
  hideLoading() {
    uni.hideLoading();
  }
  // 显示loading
  startLoad() {
    if (this.requestCounter === 0) {
      this.showLoading();
    }
    this.requestCounter++;
  }
  // 结束相关请求
  endLoad() {
    if (this.requestCounter > 0) {
      this.requestCounter--;
    }
    if (this.requestCounter === 0) {
      this.hideLoading();
    }
  }
}

const loadStatus = new LoadStatus();
export default loadStatus;
