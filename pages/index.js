import Head from 'next/head'
import { useGetTests} from '@/apollo/actions';
import Landing from '@/components/Landing/Landing'
import withApollo from '@/hoc/withApollo';


 function Home() {

 


  return (
    
    <div>
        <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
    </div>
   
  )
}


export default withApollo(Home);