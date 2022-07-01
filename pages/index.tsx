import type { NextPage } from 'next'
import { getLaunches, ILaunch } from './api/apiLaunches'
import { GridCard } from '../components/GridCard/GridCard'
import { Card } from '../components/Card/Card';

export async function getServerSideProps() {
  const data = await getLaunches();
  return {
    props: {
      launches:data.launches
    }
  }
}
const Home = ({ launches }:{launches: ILaunch[]}) => {
  console.log(launches)

  return (
    <GridCard>
      { 
        launches.length > 0 ? (
          launches.map( (launch, index) => (
            <Card 
              key={launch.id}
              idLaunch={launch.id}
              cover={launch.links?.mission_patch}
              title={launch.launch_site?.site_name_long}
              description={launch.details}
              hoverable
            >
            </Card>
          ))
        ): (' Loading ...')
       
      }
    </GridCard>
   
  )
}

export default Home
