export default {
  "GET /user": {
    name: "kobe",
    id: "1",
  },
  "POST /user/login": (request: any, response: any) => {
    response.send({
      msg: "success",
      token: "auth-token-ok",
    });
  },
};
