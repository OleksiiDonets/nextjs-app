import { Header } from './Header/Header';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
interface ILayout {
  children: React.ReactNode
}
export const Layout = ({children}: ILayout) => {
  return (
    <>
    <Head>
      <title>Launches list - NextJs App</title>
    </Head>
      <Header>
      <div className="logo">
        <Link href='/'>
          <span>
            Launches list
          </span>
        </Link>
          
        </div>
      </Header>
      <main className='main'>
      {children}
      </main>
     
    </>
  )
}