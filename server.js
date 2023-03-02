const path = require('path');
const express = require('express');

const { ApolloServer } = require('@apollo/server');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
  typeDefs: typesArray
});

const root = {
  products: [
    {
      id: 'redshoe',
      description: 'Red Shoe',
      price: 42.12,
      reviews: [],
    },
    {
      id: 'bluejean',
      description: 'Blue Jeans',
      price: 55.55,
      reviews: [],
    }
  ],
  orders: [
    {
      date: '2005-05-05',
      subtotal: 90.22,
      items: [ 
        {
          product: {
            id: 'redshoe',
            description: 'Old Red Shoe',
            price: 45.11,
          },
          quantity: 2,
        }
      ]
    }
  ]
}

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen(3000, () => {
    console.log('Running GraphQL server...');
  });
}

startApolloServer();