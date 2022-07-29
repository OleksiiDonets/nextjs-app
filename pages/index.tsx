import { ILaunch, GET_LAUNCHES } from './api/apiLaunches';
import { GridCard } from '../components/GridCard/GridCard';
import { Card } from '../components/Card/Card';
import { useEffect } from 'react';
import { useInfiniteScroll } from '../hooks/hooks';
import styles from '../styles/Home.module.css';
import { useQuery } from "@apollo/client";
import { initializeApollo } from '../lib/apollo-client';

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
     query: GET_LAUNCHES,
     variables:{
      offset:0
    }
  })
  return {
    props: { initialApolloState: apolloClient.cache.extract() },
  };
}



const Home = () => {
  const {statusLoad, setStatusLoad, setStatusObservebale} = useInfiniteScroll('card_elem');
  const { loading, error, data, fetchMore  } = useQuery(GET_LAUNCHES,{
    variables:{
      offset:0
    }
  });

  useEffect(() => {
    if(statusLoad){
      fetchMore({
        variables:{
          offset:data.launches.length+1
        }
      })
      .then(result => {
        if(!result.data.loading && result.data.launches.length > 0){
          setStatusObservebale(true)
          setStatusLoad(false)
        }
      })
    }
  },[statusLoad]);
  return (
    <>
      <GridCard>
        { 
          data.launches.length > 0 ? (
            data.launches.map((launch:any, index:any) => (
              <Card 
                key={index}
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
    </>
  )
}

export default Home
