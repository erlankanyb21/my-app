import Project from '../components/project/Project'
import { useEffect, useState } from 'react';
import { getWorks } from '../api/getData';

const Projects = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    getWorks()
      .then((data) => setWorks(data.data))
  }, [])
  console.log(works, 'works');

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Our Works</h2>
        <ul className="projects">
          {works.map((work) => (
            <Project
              key={work.id}
              title={work.name}
              img={work.imgUrl}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
