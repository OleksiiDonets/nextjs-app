import { LaunchDetail } from '../../components/LaunchDetail/LaunchDetail';
import { IDetailLaunch } from '../../common/types';
import { GetServerSidePropsContext } from 'next';
import { API_URL } from '../../config';
export async function getServerSideProps({req, query:{id}}:{req:GetServerSidePropsContext,query:{id:Number}}) {
  const res = await fetch(`${API_URL}/launches/${id}`);
  const data = await res.json()
  return{
    props:{launch:data}
  }
}
const Launch =({launch}:{launch:any}) =>{
  return(
    <LaunchDetail launch={launch}/>
  )
}

export default Launch