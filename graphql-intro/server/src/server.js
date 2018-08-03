require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const { types, resolvers } = require('./schema');

const { PORT } = process.env;

const options = {
  port: PORT,
  endpoint: '/graphql',
  playground: '/docs',
  tracing: true
};

const server = new GraphQLServer({
  typeDefs: types,
  resolvers
});

server.start(options, ({ port }) => console.log(`Server is running on ${port}`));
