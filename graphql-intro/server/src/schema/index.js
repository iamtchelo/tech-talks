const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const resolvers = require('./resolvers');

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

module.exports = {
  types: mergeTypes(typesArray, { all: true }),
  resolvers
};
