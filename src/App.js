import { useEffect, useState } from 'react';
import "./styles/main.css"
import { getData } from './api/getData';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import ScrollToTop from './utlis/scrollToTop';
import About from './pages/About';
import Order from './pages/Order';
import AdminPage from './components/admin/AdminPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './pages/Projects';


function App() {
  const [userOrder, setuserOrder] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => setuserOrder(data.data))
  }, [])
  console.log(userOrder, '');

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Works' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
