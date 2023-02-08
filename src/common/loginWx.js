class LoginWx {
  constructor() {
    this.code = "code";
  }

  async loginAuth(encryptedData, iv, loginCode, resolve, reject) {
    const { data } = await request({
      url: "xxxxx（注册接口：获取openId的接口）",
      data: {
        code: loginCode,
      },
    });

    // 如果没有获取到openId,重新拿code并发送请求
    if (!data) {
      const { code } = await login();

      this.loginAuth(encryptedData, iv, code, resolve, reject);

      return;
    }

    // 缓存openId
    wx.setStorage({
      key: "openId",
      data,
      success: () => {
        console.log("缓存openId成功");
      },
    });

    await loginUnRelease(encryptedData, iv, data, resolve, reject);
  }
  async loginUnRelease(encryptedData, iv, openId, resolve, reject) {
    const { data } = await request({
      url: "xxxxxxx（登录接口：获取token）",
      data: {
        encryptedData,
        iv,
        openId,
      },
    });

    // 如果没有获取到token,提示登录失败
    if (!data) {
      wx.hideLoading();

      wx.showToast({
        title: "登录失败",
        icon: "error",
        mask: true,
      });

      resolve(false); // 导出登录失败状态

      return;
    }

    // 缓存token
    wx.setStorage({
      key: "token",
      data,
      success: () => {
        wx.hideLoading(); // 关闭提示框

        wx.showToast({
          title: "登录成功",
          icon: "success",
          mask: true,
        });

        resolve(true); // 导出登录成功状态
      },
    });
  }
}

export function getUserInfo() {
  uni.getUserInfo({
    desc: "授权头像/昵称以使用完整功能", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      console.log(res);
    },
  });
}
// export default {
//   loginWx,
// };
