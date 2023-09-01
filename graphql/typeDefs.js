const { gql } = require("apollo-server-express");

module.exports = gql`
  type Brand {
    id: ID!
    name: String!
    createdAt: String!
  }

  type Query {
    getBrands(sortBy: String!): [Brand]
  }
  type Mutation {
    createBrand(name: String!): String!
  }
`;
