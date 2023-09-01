const brandResolvers = require("./brands");

module.exports = {
  Query: {
    ...brandResolvers.Query,
  },
  Mutation: {
    ...brandResolvers.Mutation,
  },
};
