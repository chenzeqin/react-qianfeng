var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/qianfeng-react');

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  // author: ObjectId,
  name: String,
  price: Number,
  date: Date,
});
// film 限制数据库集合（表）,对应表明 films,如果未创建表，会自动创建
const filmModel = mongoose.model('film', FilmSchema);

// getFilm(id:String!):Film : !是必填意思
var schema = buildSchema(`
  type Query {
    getFilmList: [Film],
    getFilm(id:String!):Film
  }
  type Mutation {
    addFilm(input:FilmInput):Film,
    deleteFilm(id:String!): Boolean
    updateFilm(id:String!, input: FilmInput): Film
  }
  input FilmInput {
    name: String,
    price: Float,
    date: Date
  }
  type Film {
    id: String,
    name:String,
    price: Float,
    date: Date
  }
  scalar Date
`);

var root = {
  getFilmList() {
    return filmModel.find();
  },

  // 传参  定义是传入一个id，实参其实是obj
  getFilm({ id }) {
    return filmModel.find({ _id: id }).then((res) => {
      if (res.length) {
        return res[0];
      }
      return null;
    });
  },

  addFilm({ input }) {
    return filmModel
      .create({
        name: input.name,
        date: new Date(),
        price: 100,
      })
      .then((res) => {
        return res;
      });
  },

  deleteFilm({ id }) {
    return filmModel.deleteOne({ _id: id }).then((res) => {
      return res.acknowledged;
    });
  },

  updateFilm({ id, input }) {
    filmModel
      .updateOne(
        {
          _id: id,
        },
        { ...input }
      )
      .then((res) => {
        console.log(res);
        return res;
      });
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
