import { Header } from './Header/Header';
import React from 'react';
import Link from 'next/link';
interface ILayout {
  children: React.ReactNode
}
export const Layout = ({children}: ILayout) => {
  return (
    <>
      <Header>
      <div className="logo">
        <Link href='/'>
          <span>
            Launches magazine
          </span>
        </Link>
          
        </div>
      </Header>
      {children}
    </>
  )
}