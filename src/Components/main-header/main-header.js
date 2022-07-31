import './Main-header.css';
import Nav from '../nav/nav';
import FoodCard from '../food-card/food-card';

const MainHeader = () => {
  return (
    <div className="container">
      <header>
      <Nav/>
        <div className="title">Welcome To Burgers And Beers</div>
        <a className="scroll-btn" href="#menu">
          <p>Click To</p> <p>Scroll Down</p>
        </a>
      </header>
      <FoodCard/>
    </div>
  );
};

export default MainHeader;