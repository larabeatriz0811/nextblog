import Image from 'next/image';
import Head from 'next/head';
export default function Profile() {
    return ( 
    <>
    <Head>
        <title>Profile</title>
      </Head>
    
    <Image
    src="/imagens/profile.jpg"
    height={400}
    width={400}
    alt="Your Name"
  />;
  </>
    )
}