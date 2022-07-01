import { LaunchDetail } from '../../components/LaunchDetail/LaunchDetail';
import { getLaunch, IDetailLaunch } from '../api/apiLaunches';


export async function getServerSideProps({params:{id}}:{params:{id:string}}) {

  const {launch}:{launch: IDetailLaunch} = await getLaunch(id);
  return {
    props: {
      launch:launch
    }
  }
}
const Launch = ({launch}:{launch: IDetailLaunch}) => {
  return (
    <LaunchDetail launch={launch}/>

  )
}

export default Launch