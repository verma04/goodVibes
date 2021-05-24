import Head from 'next/head'
import Landing from '@/components/work/work'
import withApollo from '@/hoc/withApollo';
 function Home() {
  return (
    
    <div>
       <Head>
        <title>Work</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing/>
    </div>
   
  )
}

export default withApollo(Home);
