import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import {IFilter} from '../common/types';

export const useFilter = () => {
  const [filterValue, _updateFilter] = useState<IFilter>({
    "sucess": "asc",
  });

  const updateFilter = (filter:IFilter): void => {
    const newFilter = Object.assign({}, filter); 
    _updateFilter(newFilter)
  }
  return {
    models: {...filterValue},
    operations: {updateFilter}
  }
}


export const loadLaunches = async (pageParam:number, sortParam: IFilter) => {
  debugger;
  const response = await axios.post(`${API_URL}/launches/query`, {
    query: {
      upcoming: false
    },
    options: {
      page:pageParam,
      sort: sortParam
    }
  })
  return response.data
}