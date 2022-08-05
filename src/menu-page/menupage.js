
import CardDetail from '../Components/card-detail/card-detail';
import './menupage.css';

const MenuPage = ({sodas, beers, burgers, veggies}) => {

    return (
      <section className="menu" id="articles">
        <div className="menu-title">
          Explore Our Menu
        </div>
        <div className="menu-container">
          <div className="sub-title" id="burgers">
            Burgers
          </div>
          {burgers.map((b) => (
            <CardDetail consumption={b} />
          ))}

          <div className="sub-title">Veggie Burgers</div>
          {veggies.map((v) => (
            <CardDetail consumption={v} />
          ))}

          <div className="sub-title">Beers</div>
          {beers.map((b) => (
            <CardDetail consumption={b} />
          ))}

          <div className="sub-title">Sodas</div>
          {sodas.map((s) => (
            <CardDetail consumption={s} />
          ))}
        </div>
      </section>
    );
}
 
export default MenuPage;