import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from "react";
import getConfig from 'next/config';
import { offsetLimitPagination } from '@apollo/client/utilities';

const { publicRuntimeConfig } = getConfig();

let apolloClient:any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://api.spacex.land/graphql'
    }),
    cache: new InMemoryCache({
      typePolicies:{
        Query:{
          fields:{
            launches: offsetLimitPagination()
          }
        }
      }
    })
  })
};

export function initializeApollo(initialState: {} | null = null){
  const _apolloClient = createApolloClient();
  if(initialState){
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

// const client = new ApolloClient({
//   uri: 'https://api.spacex.land/graphql',
//   cache: new InMemoryCache({
//     typePolicies:{
//       Launch:{
//         keyFields:["id", "mission_name"]
//       }
//     }
//   }),
// });

// export default client