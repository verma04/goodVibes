
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





export const GALLERY = gql`
query MyQuery {
  gallerys {
    edges {
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        content
        id
        galleryVideoUrl
      }
    }
  }
}`





export const TESTS = gql`
query MyQuery {
  testimonials {
    edges {
      node {
        id
        testimonialId
        title
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        menuOrder
      }
    }
  }
}`



// AUTH QUERIES END ----------------------------
