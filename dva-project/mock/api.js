export default {
  'GET /user': (request, response) => {
    console.log(request);
    response.send({
      msg: '登陆成功'
    })
  }
}
