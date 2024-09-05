
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import * as React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";





export const Layout = () => {
  return (
    <>
    <Header/>
      <main className="main">
          <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
      </main>
      <Footer/>
   
    </>
  )
}


