
import { gql } from 'apollo-boost';

// CITY QUERIES START ----------------------------

 



export const GET_CAFE = gql`
query MyQuery {
  page(id: "cG9zdDo3") {
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    baRe
  }
}`







// AUTH QUERIES END ----------------------------
