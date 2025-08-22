import React from 'react'
import bgImg from './bgImg.png'

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center min-h-screen flex flex-col md:flex-row items-start px-8 md:px-16 text-white"
    >
      {/* Overlay for readability */}
      <div className="absolute" />

      {/* Main content */}
      <div className="relative z-10 backdrop-blur-sm bg-white/10 p-6 md:p-10 rounded-2xl max-w-3xl mt-20 space-y-8 shadow-2xl">
        
        {/* Intro */}
        <div className="text-4xl font-bold">
          <h1>
            Hi! I'm{" "}
            <span className="text-amber-300 text-5xl">SHIVA MANI VADLA</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-2xl font-light">
          <h1>Building scalable web solutions from front to back.</h1>
        </div>

        {/* Career Vision */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold text-amber-400">
            Career Vision
          </h1>
          <p className="leading-relaxed text-justify">
            I am a passionate Full Stack Developer with expertise in Java,
            Spring Boot, and React. My vision is to build scalable and
            high-performance applications that make an impact. I continuously
            strive to enhance my backend proficiency, particularly with
            technologies like Spring Boot and Servlets. Long-term, I aim to grow
            into a technical leadership role where I can contribute to
            innovative projects and mentor aspiring developers.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold text-amber-400">
            Education Timeline
          </h1>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              B.Tech, Bharat Institute of Engineering and Technology - 2024,
              CGPA: 7.04
            </li>
            <li>
              Sri Chaitanya Junior College - 2020, Aggregate: 89.2%
            </li>
            <li>
              Ravindra Bharathi School - 2018, GPA: 9.2
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
