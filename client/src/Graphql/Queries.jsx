import { gql } from "@apollo/client";

export const GET_BRANDS = gql`
  query getBrands($sortBy: String!) {
    getBrands(sortBy: $sortBy) {
      name
      createdAt
    }
  }
`;
