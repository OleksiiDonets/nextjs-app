import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head';

const Launch = () => {
  const {query:{id}} = useRouter();
  console.log(id)
  return (
    <Head>
      <title> Launch</title>
    </Head>

  )
}

export default Launch