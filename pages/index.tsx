import { getLaunches, ILaunch } from './api/apiLaunches'
import { GridCard } from '../components/GridCard/GridCard'
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';
import { useState,useEffect } from 'react';
import { useInfiniteScroll } from '../hooks/hooks';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const launches = await getLaunches();
  return {
    props: {
      launches:launches
    }
  }
}
const Home = ({ launches }:{launches: ILaunch[]}) => {
  const [offset, setOffset] = useState(13);
  const [ array, setArray] = useState([...launches]);
  const {statusLoad, setStatusLoad, setStatusObservebale} = useInfiniteScroll('card_elem');
  useEffect(() => {
    if(statusLoad){
      fetchMore()
      .then(response => {
        setArray([...array, ...response])
        if(response.length>0){
          setStatusObservebale(true)
          setStatusLoad(false)
        }
      })
    }
  },[statusLoad]);

  const fetchMore = async () => {
    setOffset(offset+13)
    const elem = await getLaunches(offset);
    return elem
  };
  return (
    <>
      <GridCard>
        { 
          array.length > 0 ? (
            array.map((launch, index) => (
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
