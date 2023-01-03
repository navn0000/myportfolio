import Head from 'next/head'
import Layout from '../components/Layout'
import HomePage from './home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NaveenKumar | Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="../assests/logo.jpg" />
      </Head>
      <HomePage />
     
    </div>
  )
}
