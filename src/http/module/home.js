import http from "../http";
export function getWebsiteMain() {
  return http.get("/match/websiteMain/statisticalData");
}
