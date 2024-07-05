import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Breadcrumb from './assets/components/Breadcrumb';
import Content from './assets/components/Content';
import Detail from './assets/components/Detail'






function Layout({ children }) {
  return (
    <>
      <Header />
      <Breadcrumb />
      {children}
    </>
  )
}


export default function App() {
  return (
      <Routes>
        <Route path="/" element={
          <Layout>
            <Content />
          </Layout>
        }></Route>
        <Route path="/detail" element={
          <Layout>
            <Detail />
          </Layout>
        }></Route>

      </Routes>
  )
}