import Head from 'next/head'
import Landing from '@/components/About/About'
import withApollo from '@/hoc/withApollo';
 function Home() {
  return (
    
    <div>
      <Head>
        <title>About - Good Vibes Entertainment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="About Us - Good Vibes, Contact Us  - Good Vibes Entertainment"/>
<meta name="description" content="Good Vibes is a New Delhi based video production company & a talent agency, with a team of young and passionate professionals who aim to break the conventional mould and present the audience with freshly brewed content.  Our team of creative storytellers know how to directly write for your audience, design within your brand guidelines, and communicate through a clear process, ensuring your workload gets lighter and a lot more fun. We offer creative development, video production, photography, and post-production services worldwide. Our clients include global brands, ad agencies, small businesses, nonprofits, government, and many more."/>
<meta name="subject" content="About Us  - Good Vibes Entertainment"/>
<meta name="copyright"content="Good Vibes Entertainment LLP"/>
<meta name="language" content="EN"/>

<meta name="summary" content="Good Vibes is a New Delhi based video production company & a talent agency, with a team of young and passionate professionals who aim to break the conventional mould and present the audience with freshly brewed content.  Our team of creative storytellers know how to directly write for your audience, design within your brand guidelines, and communicate through a clear process, ensuring your workload gets lighter and a lot more fun. We offer creative development, video production, photography, and post-production services worldwide. Our clients include global brands, ad agencies, small businesses, nonprofits, government, and many more."/>

<meta name="url" content="https://thegoodvibes.co.in/about"/>
<meta name="identifier-URL" content="https://thegoodvibes.co.in/about"/>

<meta http-equiv="Cache-Control" content="no-cache"/>
     
     
    
      </Head>
      <Landing/>
    </div>
   
  )
}
export default withApollo(Home);