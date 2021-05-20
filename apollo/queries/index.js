
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
            __typename
          }
          __typename
        }
        menuOrder
        __typename
      }
      __typename
    }
    __typename
  }
}`


export const SERVICES = gql`
query MyQuery {
  services {
    edges {
      node {
        serviceId
        title
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        menuOrder
        litemodeIcon
        status
      }
    }
  }
}`


export const TEAM = gql`
query MyQuery {
  teams(first: 20) {
    edges {
      node {
        teamId
        title
        content
        menuOrder
        teamMemberDesignation
        teamMemberProfileUrl
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
    }
  }
}`


export const HOME = gql`
query MyQuery {
  page(id: "cG9zdDo3") {
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    homeclientsdiscription
    homeclientsclients
    homeclientsdays
    hometeamheading
    testimonialsheading
    homeclientsfilms
    homegalleyheading
    homegalleyone
    homegalleytwo
    clientsheading
    clientsgalley
  }
}`


export const CATEGORY = gql`
query MyQuery {
  portfolioTypes {
    edges {
      node {
        id
        name
        termTaxonomyId
        slug
      }
    }
  }
}`

export const VED = gql`
query MyQuery {
  portfolios {
    edges {
      node {
        portfolioId
        title
        content
        menuOrder
        portfolioVideoUrl
        featuredImage {
          node {
            title
            sourceUrl
          }
        }
        portfolioTypes {
          edges {
            node {
              name
              termTaxonomyId
            }
          }
        }
      }
    }
  }
}`

// AUTH QUERIES END ----------------------------
