import "./Main-header.css";
import Nav from "../nav/nav";
import FoodCard from "../food-card/food-card";

const MainHeader = () => {
  return (
    <div className="header">
      <Nav />
        <div className="title">Welcome To Burgers And Beers</div>
        <a className="scroll-btn" href="#menu">
          <p>Click To</p> <p>Scroll Down</p>
        </a>
    </div>
  );
};

export default MainHeader;
