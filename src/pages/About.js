import "../components/about/About.css"
import { useEffect, useState } from 'react';
import { getAbout } from '../api/getData';

const About = () => {

  const [about, setAbout] = useState([]);
  
  useEffect(() => {
    getAbout()
      .then((data) => setAbout(data.data))
  }, [])
  console.log(about, 'about');

  if (about.length < 2) {
    return <div>Loading...</div>;
  }

  const firstAbout = about[0];
  const secondAbout = about[1];

  return (
    <main className="container-about">
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{firstAbout.title}</h1>
            <p>{firstAbout.description}</p>
          </div>
          <div className="col-md-6">
            <img src={firstAbout.imgUrl} width="400" alt={firstAbout.title} className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src={secondAbout.imgUrl} alt={secondAbout.title} className="card-img-top" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <h2 className="card-title">{secondAbout.title}</h2>
              <p className="card-text">{secondAbout.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;