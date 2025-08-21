import React from 'react'

const skillCategories  = [
  {
    category: "Programming",
    skills: [
      { name: "Java", logo: "assets/java.png" },
      { name: "SQL", logo: "assets/sql.png" }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Spring Boot", logo: "assets/spring-boot-logo.png" },
      { name: "Hibernate", logo: "assets/hibernate-logo.png" },
      { name: "Servlet", logo: "assets/servlet1.png" }
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML", logo: "assets/html.png" },
      { name: "CSS", logo: "assets/css-logo.png" },
      { name: "JavaScript", logo: "assets/js.png" },
      { name: "React JS", logo: "assets/react2.png" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", logo: "assets/my sql.png" },
      { name: "SQL Plus", logo: "assets/sql.png" }
    ]
  },
  {
    category: "Tools / IDEs",
    skills: [
      { name: "Eclipse", logo: "assets/eclipse.png" },
      { name: "Visual Studio", logo: "assets/vs code.png" },
      { name: "MySQL Workbench", logo: "assets/my sql.png" }
    ]
  }
];


const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>

        <div className="space-y-12">
          {skillCategories.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 border-b border-blue-600 pb-1">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-white/20 transition"
                  >
                    <img src={skill.logo} alt={skill.name} className="w-15 h-15 object-contain mb-3" />
                    <p className="text-lg font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
)
}

export default Skills