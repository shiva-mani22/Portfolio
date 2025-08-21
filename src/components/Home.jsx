import React from 'react'
const Home = () => {
  return (
    
   <div className='bg-[url("assets/3.png")] bg-cover bg-center size-full overflow-hidden min-h-screen flex flex-row '>
    
     <div className='flex  flex-col text-amber-50 w-[59%] h-[100vh]  gap-2 relative top-20'> 
      
      <div className='text-4xl '>
        <h1>Hi! I'm <span className='text-amber-100 text-5xl font- font-bold'>SHIVA MANI VADLA ,</span></h1>
      </div>

      <div className='text-3xl'><h1>Building scalable web solutions from front to back.</h1> </div>
      
      <div className='py-10'>
        
        <h1 className="text-2xl font-semibold text-amber-300 text-justify">Career Vision</h1>
      <p> I am a passionate Full Stack Developer with expertise in Java, Spring Boot, and React. My vision is to build scalable and high-performance applications that make an impact. I continuously strive to enhance my backend proficiency, particularly with technologies like Spring Boot and Servlets. Long-term, I aim to grow into a technical leadership role where I can contribute to innovative projects and mentor aspiring developers.</p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-amber-300">Education Timeline</h1>
        <ul className="list-disc pl-6 ">
          <li>B.Tech, Bharat Institute of Engineering and Technology - 2024, CGPA: 7.04</li>
          <li>Sri Chaitanya Junior College - 2020, Aggregate: 89.2%</li>
          <li>Ravindra Bharathi School - 2018, GPA: 9.2</li>
        </ul>
      </div>
    </div >
   </div>
  )
}

export default Home