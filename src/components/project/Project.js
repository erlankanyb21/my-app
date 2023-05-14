import "./style.css"

const Project = ({ title, img}) => {
    return (
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    );
  };
  
  export default Project;