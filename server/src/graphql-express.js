var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// getFilm(id:Int!):Film : !是必填意思
var schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
    age: Int,
    habits: [String]
    getAcount: Acount,
    getFilmList: [Film],
    getFilm(id:Int!):Film
  }
  type Acount {
    name: String,
    age: Int,
    locatioin: String
  }
  type Film {
    id: Int,
    name:String
  }
`);

const filmList = [
  { id: 1, name: '泰坦尼克号' },
  { id: 2, name: '阿甘正传' },
];

var root = {
  // 简单类型
  hello: () => 'Hello world!',
  name: () => 'kobe',
  age: () => 24,
  // 复杂类型
  habits: () => ['ball', 'ball', 'ball'],
  getAcount() {
    return {
      name: 'curry',
      age: 30,
      location: 'golden state',
    };
  },
  getFilmList() {
    return filmList;
  },
  // 传参  定义是传入一个id，实参其实是obj
  getFilm({ id }) {
    console.log(filmList, id);
    return filmList.find((item) => item.id === id);
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
