import Card from "../Components/card/card";
import MainHeader from "../Components/main-header/main-header";
import './main-page.css';

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <section className="article-section" >
        <div className="title">
          OUR COMBINATION OF BURGERS AND BEERS WILL MAKE YOUR TASTEBUDS EXPLODE
        </div>
        <div className="article-container">
          <div>
            <Card
              className="article"
              photo="/images/meat-burger-article.jpg"
              title="Meat The Burgers"
              description="In hac habitasse platea dictumst. Aliquam tincidunt enim interdum velit tristique, convallis condimentum libero vulputate. Nullam lorem felis, 
            luctus et blandit eget, scelerisque et leo. Suspendisse vitae suscipit lectus, eget ornare massa. Nunc a dui."
            />
            <a href="/menu/#burgers" className="more-btn-right">
              View burgers
            </a>
          </div>

          <div>
            <Card
              className="article"
              cardLayout="invert"
              photo="/images/beer-article.jpg"
              title="The Tastiest Beers!"
              description="Curabitur cursus nisi vel lacus aliquam efficitur. Etiam mattis egestas libero. Praesent nunc ligula, volutpat vel odio ac, 
            condimentum vestibulum diam. Phasellus consequat lacus ac risus porta porta. 
            In consectetur erat at semper tempor. Curabitur pellentesque libero quis lorem accumsan 
            molestie. Fusce sit amet sapien consectetur lorem finibus rhoncus id."
            />
            <a href="#" className="more-btn-left">
              View Beers
            </a>
          </div>

          <div>
            <Card
              className="article"
              photo="/images/veggie0.jpg"
              title="Try A Veggie Burger!"
              description="Sed nec ligula purus. 
            Nam sollicitudin tempor convallis. Aliquam elementum vitae nibh et gravida. 
            Suspendisse ipsum elit, luctus vitae nisi ac, scelerisque porttitor nibh. 
            Aenean accumsan dapibus sapien vitae placerat. Praesent massa mi, aliquet ac lobortis ac, tempor in urna."
            />
            <a href="#" className="more-btn-right">
              View Veggie Burgers
            </a>
          </div>
          <div>
            <Card
              className="article"
              cardLayout="invert"
              photo="/images/soda-article.jpg"
              title="Don't Like Beer? Have A Soda"
              description="Vivamus lorem leo, vehicula eu tempor vestibulum, cursus at tellus. Etiam viverra rutrum nulla, eu 
            faucibus leo pellentesque id. Quisque ut consequat tellus. 
            Proin sodales auctor magna, sed consequat nibh faucibus sit amet. Fusce et nisi tristique, consectetur felis id, pulvinar tellus. Ut nec blandit."
            />
            <a href="http://localhost:3000/menu#sodas" className="more-btn-left">
              View Sodas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default MainPage;