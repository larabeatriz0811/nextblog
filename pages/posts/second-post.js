import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function SecondPost() {
    return (
    <Layout>
    <Head>
 <title>Second Post</title>
 <link rel="icon" href="/favicon.ico" />
</Head> 
<Script
       src="https://connect.facebook.net/en_US/sdk.js"
       strategy="lazyOnload"
       onLoad={() =>
         console.log(`script loaded correctly, window.FB has been populated`)
       }
     />

    <h1> Eu amo você! </h1>
    
    </Layout>
    );
}