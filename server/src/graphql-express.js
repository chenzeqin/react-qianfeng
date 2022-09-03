var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
    age: Int,
    habits: [String]
    getAcount: Acount
  }
  type Acount {
    name: String,
    age: Int,
    locatioin: String
  }
`);

var root = {
  hello: () => 'Hello world!',
  name: () => 'kobe',
  age: () => 24,
  habits: () => ['ball', 'ball', 'ball'],
  getAcount() {
    return {
      name: 'curry',
      age: 30,
      location: 'golden state',
    };
  },
};

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // 开启调试器
  })
);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
