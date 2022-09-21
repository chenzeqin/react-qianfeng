export default {
  "GET /user": (request, response) => {
    console.log(request);
    response.send({
      msg: "success",
      user: {
        name: "kobe",
        id: "1",
      },
    });
  },
  "POST /user/login": (request, response) => {
    response.send({
      msg: "success",
      token: "auth-token-ok",
    });
  },
};
