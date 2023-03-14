import { GridCard } from '../components/GridCard/GridCard'
import { Card } from '../components/Card/Card';
import { Select } from '../components/Select/Select';
import { useState,} from 'react';
import { useFilter, loadLaunches } from '../hooks/hooks';
import { sortItems,  orderItems, ILaunchResponse, ILaunch, IPropsSelect, IFilter} from '../common/types';
import { useInView } from 'react-intersection-observer';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Loader } from '../components/Loader/Loader';
import { GetServerSideProps} from 'next';
import { dehydrate, QueryClient, useInfiniteQuery} from '@tanstack/react-query';

const Home = () => {
  const { models, operations } = useFilter();
  const {data, fetchNextPage,refetch, ...result} = useInfiniteQuery({
    queryKey:['launches', models],
    queryFn:({pageParam = 1}) =>  loadLaunches(pageParam, models),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    getPreviousPageParam: firstPage => firstPage.prevPage
  });

  const [filterOpen, setFilterOpen] = useState(false)

  const [ sortOrder, setSortOrder] = useState<string | number>("asc");
  const [ sortParam, setSortParam ] = useState<string | number>("date_utc")

  const {ref } = useInView({
    threshold:0,
    onChange: (inView) => {
      if(inView){
        fetchNextPage()
      }
    }
  });
  
  const sortListener =  async (value: IPropsSelect) => {
    if(value.name === 'sort'){
       await setSortParam(value.value);
    }else {
      await setSortOrder(value.value);
    }
    operations.updateFilter({
      [sortParam]: sortOrder
    });
    refetch()
    
  }

  return (
    <>
      <div className="px-[5%] py-8">
        <div>
          <h2 className="text-3xl mb-4" >
            <span className="inline-flex items-center justify-center">Filters <a href="#" onClick={() => setFilterOpen(!filterOpen)} ><ChevronUpDownIcon className="w-5 h-5" /></a></span> 
          </h2>
        </div>
        <div className={`${filterOpen ? 'flex transition-all duration-300': 'hidden'}  flex-wrap gap-8 flex-row  `}>
          <Select filterName="sort" labelSelect="Sort by:" arrItems={sortItems} onSelect={sortListener}/>
          <Select filterName="order" labelSelect="Order by:" arrItems={orderItems} onSelect={sortListener}/>
          {/* {
            dataRockets ? (
            <Select filterName="rocketName" labelSelect="Rocket:" arrItems={dataRockets.rockets} onSelect={sortHandler} />) : ('')
          } */}
        </div>
      </div>

      <GridCard>
        {
          data?.pages.map((group,i ) => (
            <>
              {
                group.docs.map((launch:ILaunch) => (
                 <Card 
                  key={launch.id}
                  idLaunch={launch.id}
                  cover={launch.links?.patch.small}
                  title={launch.name}
                  description={launch.details}
                  hoverable
                >
                </Card>   
                ))
              }
            </>
          ))
        }
      </GridCard>
       <div ref={ref} className='text-center m-3 p2 h-5'>
            <Loader />       
        </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey:['launches'],
    queryFn: () => loadLaunches(1, {"sucess": "asc"}),
  })

  return {
    props: {
      launches:JSON.parse(JSON.stringify (dehydrate(queryClient)))
    }
  }
}

export default Home
