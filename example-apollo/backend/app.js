const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');

const ecommerces = [
  {
    name: "Tiki",
    day: '222',
    location: 'Q10'
  },
  {
    name: 'Lazada',
    day: '333',
    location: 'CN'
  },
];

const typeDefs = `
  type Query {
   ecommerces: [Ecommerce]
  }
  type Ecommerce {
   name: String,
   day: String,
   location: String
  }
`;

const resolvers = {
  Query: {
    ecommerces: () => ecommerces
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('/graphql/ui', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

app.listen(3000, () => {
  console.log('http://localhost:3000/graphql/ui Graphql');
});