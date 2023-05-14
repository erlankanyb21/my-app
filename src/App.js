import { useEffect, useState } from 'react';
import "./styles/main.css"
import { getData } from './api/getData';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getData()
    .then((data) => setStudents(data.data))
  }, [])
  console.log(students, 'students');
  //Верстка 
  return (
    <div className="App">
      
      <h1>hello motherfucking world</h1>

    </div>
  );
}

export default App;
