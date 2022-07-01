import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { LaunchDetail } from '../../components/LaunchDetail/LaunchDetail';
import { getLaunch } from '../api/apiLaunches';


export async function getServerSideProps() {
  const data = await getLaunch(13);
  return {
    props: {
      launch:data.launch
    }
  }
}
const Launch = (props) => {
  const {query:{id}} = useRouter();
  console.log(props)
  return (
    <LaunchDetail />

  )
}

export default Launch