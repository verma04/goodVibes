import Head from 'next/head'
import Landing from '@/components/Landing/Landing'

export default function Home() {
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
