var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// getFilm(id:Float!):Film : !是必填意思
var schema = buildSchema(`
  type Query {
    getFilmList: [Film],
    getFilm(id:Float!):Film
  }
  type Mutation {
    addFilm(input:FilmInput):Film,
    deleteFilm(id:Float!):Float
    updateFilm(id:Float!, input: FilmInput): Film
  }
  input FilmInput {
    name: String,
  }
  type Film {
    id: Float,
    name:String
  }
`);

let filmList = [
  { id: 1, name: '泰坦尼克号' },
  { id: 2, name: '阿甘正传' },
];

var root = {
  getFilmList() {
    return filmList;
  },
  // 传参  定义是传入一个id，实参其实是obj
  getFilm({ id }) {
    console.log(filmList, id);
    return filmList.find((item) => item.id === id);
  },
  addFilm({ input }) {
    const newFilm = {
      id: Date.now(),
      name: input.name,
    };
    filmList.push(newFilm);
    return newFilm;
  },
  deleteFilm({ id }) {
    return filmList.filter((item) => item.id !== id).length
  },
  updateFilm({ id, input }) {
    console.log(id, input)
    let tempFilm = null;
    filmList = filmList.map((item) => {
      if (item.id === id) {
        tempFilm = {
          ...item,
          ...input,
        };
      }
      return item;
    });

    return tempFilm
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
