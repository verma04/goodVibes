import Head from 'next/head'
import { useGetTests} from '@/apollo/actions';
import Landing from '@/components/Landing/Landing'
import withApollo from '@/hoc/withApollo';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

 function Home({data}) {

  


  return (
    
    <div>
        <Head>
        <title>Home - Good Vibes Entertainment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Home - Home Vibes, Contact Us  - Good Vibes Entertainment"/>
<meta name="description" content="Good Vibes Entertainment is a production house based in New Delhi, offering creative development, video production, photography, and post-production services worldwide."/>
<meta name="subject" content="Contact Us  - Good Vibes Entertainment"/>
<meta name="copyright"content="Good Vibes Entertainment LLP"/>
<meta name="language" content="EN"/>

<meta name="summary" content="Good Vibes Entertainment is a production house based in New Delhi, offering creative development, video production, photography, and post-production services worldwide."/>

<meta name="url" content="https://thegoodvibes.co.in"/>
<meta name="identifier-URL" content="https://thegoodvibes.co.in"/>

<meta http-equiv="Cache-Control" content="no-cache"/>
     
      </Head>
     <Landing  data={data} /> 
    </div>
   
  )
}



export const getStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: "https://b98994e90c.nxcli.net/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
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
    }
    `,
  });
  
  return {
    props: {
      data: data.page,
    },
    revalidate: 1,
  };
}

export default withApollo(Home);