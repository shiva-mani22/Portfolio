import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'

const Main = () => {
  return (
    <>
        <Nav></Nav>
        <Outlet></Outlet>
    </>
  )
}

export default Main