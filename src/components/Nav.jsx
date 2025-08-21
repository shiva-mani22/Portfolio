import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <div className=' border-2 h-23  flex items-center '>

    <div className='text-5xl text-[#adff2f]  w-[10%]  flex items-center justify-center'>
      <img src="/assets/1.png" alt="logo"/>
    </div>

    <div className='  h-[50%] w-[90%] flex justify-evenly items-center '>
      <div className='text-white hover:text-[#adff2f] hover:text-xl'>
      <Link to="/">Home</Link>
    </div>

    <div className='text-white hover:text-[#adff2f] hover:text-xl'>
      <Link to="skills">Skills</Link>
    </div>

    <div className='text-white hover:text-[#adff2f] hover:text-xl'>
      <Link to="projects">Projects</Link>
    </div>
    
    <div className='text-white hover:text-[#adff2f] hover:text-xl'>
      <Link to="contact">Contact</Link>
    </div>

    </div>




    <h1></h1>
   </div>
  )
}

export default Nav