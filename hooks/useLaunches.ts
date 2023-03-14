import axios from 'axios';
import { useQuery, useInfiniteQuery} from '@tanstack/react-query';
import { API_URL } from '../config';
import { ILaunch } from '../common/types';

const fetchLaunches = async (url: string) => {
  const dataLaunches = await fetch(`${API_URL}/${url}`,{
    method: "POST",
    body:JSON.stringify({
     "options":{
        "page":"2"
      }
    })
  })
  return dataLaunches.json()
}

function useLaunches(){
  return useInfiniteQuery({
    queryKey: ['launches'],
    queryFn: () => fetchLaunches('launches/query'),

  })
}
// function useLaunches() {
//   return useQuery<ILaunch[], null>({
//     queryKey:['launches'],
//     queryFn: () => fetchLaunches()
//   })
// }

export {useLaunches, fetchLaunches}