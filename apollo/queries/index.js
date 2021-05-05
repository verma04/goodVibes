
import { gql } from 'apollo-boost';

// CITY QUERIES START ----------------------------

 



export const GET_CAFE = gql`
query MyQuery {
  portfolioTypes {
    edges {
      node {
        id
        termTaxonomyId
        name
        count
        uri
      }
    }
  }
}`







// AUTH QUERIES END ----------------------------
