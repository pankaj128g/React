export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend.',
      tags: ['React', 'Node.js', 'MongoDB'],
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      icon: '✓'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather forecasting dashboard consuming REST APIs.',
      tags: ['React', 'API', 'Charts'],
      icon: '🌤️'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support and user authentication.',
      tags: ['React', 'Express', 'PostgreSQL'],
      icon: '📝'
    },
    {
      id: 5,
      title: 'Social Network',
      description: 'A social networking app with messaging and real-time notifications.',
      tags: ['React', 'WebSocket', 'Redux'],
      icon: '👥'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'This portfolio website built with React and modern web technologies.',
      tags: ['React', 'Vite', 'CSS3'],
      icon: '🌐'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
