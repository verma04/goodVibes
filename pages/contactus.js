import Head from 'next/head'
import Landing from '@/components/contactus/contact'

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing/>
    </div>
   
  )
}
