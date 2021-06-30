import Head from 'next/head'
import { useGetTests} from '@/apollo/actions';
import Landing from '@/components/Landing/Landing'
import withApollo from '@/hoc/withApollo';


 function Home() {

 


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
      <Landing />
    </div>
   
  )
}


export default withApollo(Home);