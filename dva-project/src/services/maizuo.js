import request from "../utils/request";

// 获取影院列表
export function getCinemaList() {
  return request(
    `https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=5359427`,
    {
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        "X-Host": `mall.film-ticket.cinema.list`,
      },
    }
  ).then((res) => res.data.data.cinemas);
}
