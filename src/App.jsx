import React from 'react'
import Nav from './components/Nav'
import "./App.css"
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div className='bg-[#171d32] overflow-auto size-full '><RouterProvider router={routes} ></RouterProvider> <Toaster></Toaster></div>
  )
}

export default App