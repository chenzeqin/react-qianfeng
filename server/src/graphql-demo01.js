var express = require('express');
var { graphql, buildSchema } = require('graphql');

var app = express();

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
var rootValue = { hello: () => 'Hello world!' };
var source = '{ hello }';
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  graphql({ schema, source, rootValue }).then((response) => {
    res.send(response);
  });
});

app.listen(3000, () => {
  console.log('localhost:3000');
});
