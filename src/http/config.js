// 区分环境 ,HbuilderX编辑运行时dev开发环境，发行后自动时生成环境
let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  console.log("开发环境", process.env.NODE_ENV);
  baseUrl = "https://app.matchn.cn";
} else {
  console.log("生产环境", process.env.NODE_ENV);
  baseUrl = "https://app.matchn.cn";
}
export default baseUrl;
