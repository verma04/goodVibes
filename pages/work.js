import Head from 'next/head'
import Landing from '@/components/work/work'
import withApollo from '@/hoc/withApollo';
 function Home() {
  return (
    
    <div>
       <Head>
        <title>Work - Good Vibes Entertainment</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta name="keywords" content="Work - Good Vibes, Work  - Good Vibes Entertainment"/>
<meta name="description" content="Portfolio Good Vibes Entertainment"/>
<meta name="subject" content="Contact Us  - Good Vibes Entertainment"/>
<meta name="copyright"content="Good Vibes Entertainment LLP"/>
<meta name="language" content="EN"/>

<meta name="summary" content="Portfolio Good Vibes Entertainment"/>

<meta name="url" content="https://thegoodvibes.co.in/work"/>
<meta name="identifier-URL" content="https://thegoodvibes.co.in/work"/>

<meta http-equiv="Cache-Control" content="no-cache"/>
     
     
     
      </Head>
      <Landing/>
    </div>
   
  )
}

export default withApollo(Home);
