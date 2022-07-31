import FoodCard from "../Components/food-card/food-card";
import MainHeader from "../Components/main-header/main-header";
import './main-page.css';

const MainPage = () => {
    return (
      <div>
        <MainHeader />
        <section className="menu" id="menu">
          <div className="menu-title">
            OUR COMBINATION OF BURGERS AND BEERS WILL MAKE YOUR TASTEBUDS
            EXPLODE
          </div>
          <FoodCard />
        </section>
      </div>
    );
}
 
export default MainPage;