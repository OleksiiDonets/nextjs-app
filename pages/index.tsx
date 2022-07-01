import { getLaunches, ILaunch } from './api/apiLaunches'
import { GridCard } from '../components/GridCard/GridCard'
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';
import { useState,useEffect } from 'react';
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
  useEffect(() => {
    fetchMore()
    .then(repsonse => {
      setArray([...array, ...repsonse])
    }) 
  },[offset]);

  const fetchMore = async () => {
    const elem = await getLaunches(offset);
     return elem
  };
  const loadMore = () => {
    setOffset(offset+13)
  };
  return (
    <>
      <GridCard>
        { 
          array.length > 0 ? (
            array.map( (launch, index) => (
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
      <div className={styles.load_more}>
        <Button variant='outline' label='Load more' onClick={loadMore}/>
      </div>
    </>
  )
}

export default Home
