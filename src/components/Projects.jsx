import React from 'react'

const Projects = () => {
  const projects = [
  {
    title: "YourBill’s - Billing Software (React)",
    description:
      "YourBill's is a modern, user-friendly billing software built using React. It allows businesses to create invoices, manage payments, track inventory, and maintain customer records. The interface is clean, responsive, and works seamlessly across devices.",
    techStack: ["React", "Tailwind CSS"],
    github: "#", // Replace with actual URL
  },
  {
    title: "My Movie APIs - Ticket Booking (Spring Boot)",
    description:
      "This project is a Spring Boot-based backend system for a movie ticket booking application. It exposes RESTful APIs for booking, managing user accounts, and interacting with theater and movie data in real time.",
    techStack: ["Java", "Spring Boot", "REST APIs"],
    github: "#", // Replace with actual URL
  },
];

  return (
     <section className="text-white py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:bg-white/20 transition">
              <h3 className="text-2xl font-semibold text-blue-300 mb-3">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx} className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 underline hover:text-blue-300"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-green-400 underline hover:text-green-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects