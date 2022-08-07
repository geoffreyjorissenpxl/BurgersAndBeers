import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import Nav from './Components/nav/nav';
import MainHeader from './Components/main-header/main-header';
import MainPage from './main-page/mainpage';
import MenuPage from './menu-page/menupage';
import axios from 'axios';
import ContactPage from './contact-page/contact-page';

function App() {

  const [allSodas, setAllSodas] = useState([]);
  const [allBurgers, setAllBurgers] = useState([]);
  const [allVeggies, setAllveggies] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:3004/products")
      .then(res => {
        setAllSodas(res.data['sodas']);
        setAllBeers(res.data['beers']);
        setAllBurgers(res.data['burgers']);
        setAllveggies(res.data['veggies']);
      });
    };
    fetchData();

  }, []);

  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route
            path="/menu"
            element={
              <MenuPage
                sodas={allSodas}
                beers={allBeers}
                burgers={allBurgers}
                veggies={allVeggies}
              />
            }
          />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
