import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  }))
  return(
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </QueryClientProvider>
  ) 
}

export default MyApp
