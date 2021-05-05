import Head from 'next/head'
import { useGetCafes } from '@/apollo/actions';
import Landing from '@/components/Landing/Landing'
import withApollo from '@/hoc/withApollo';


 function Home() {

 
  const { data , loading , error } = useGetCafes();
  const cafes = data && data.cafes || [];

  console.log(error)

  console.log(data)

  return (
    
    <div>
        <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing/>
    </div>
   
  )
}


export default withApollo(Home);