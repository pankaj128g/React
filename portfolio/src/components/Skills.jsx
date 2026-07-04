export default function Skills() {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Authentication'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
    'Tools': ['Git', 'Docker', 'VS Code', 'NPM', 'Webpack', 'Vite']
  };

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              {skillList.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
