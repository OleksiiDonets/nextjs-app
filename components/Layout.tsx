import { Header } from './Header/Header';
import React from 'react';
interface ILayout {
  children: React.ReactNode
}
export const Layout = ({children}: ILayout) => {
  return (
    <>
      <Header>
      <div className="logo">
          <span>
            Launches magazine
          </span>
        </div>
      </Header>
      {children}
    </>
  )
}