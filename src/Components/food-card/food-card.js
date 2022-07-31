import "./food-card.css";

const FoodCard = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-title">
        OUR COMBINATION OF BURGERS AND BEERS WILL MAKE YOUR TASTEBUDS EXPLODE
      </div>

      <div className="menu-container">
        <div className="menu-article">
          <img src="/meat-burger-article.jpg" alt="Meat our burgers" />
          <div className="article-description">
            <div className="article-title">Meat Our Burgers!</div>
            <p>
              at ac arcu. Aenean ut arcu suscipit elit efficitur fringilla.
              Vestibulum varius auctor eros. Fusce ex nisl, sodales vel sapien
              id, sollicitudin sagittis eros. Cras neque metus, porttitor et
              egestas ut, placerat a ante. Sed pretium, est ac commodo gravida,
              dolor velit ultricies tortor, non vulputate tortor nisl ac massa.
            </p>
            <a href="#" id="burgers-btn">View burgers</a>
          </div>
        </div>

        <div className="menu-article">
          <div className="article-description">
            <div className="article-title">The Tastiest Beers!</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat tempus tristique. Sed velit ligula, feugiat sit amet
                semper quis, interdum non augue. Praesent at aliquet turpis.
                Duis at elit et tortor pharetra gravida. Nullam egestas
                efficitur nibh, eget viverra urna feugiat a. Sed sodales, tellus
                sed porttitor maximus, libero felis lacinia ex, sit amet
                hendrerit eros purus id libero. Integer ut nibh eget nibh mollis
                congue at ac arcu. Aenean ut arcu suscipit elit efficitur
                fringilla. Vestibulum varius auctor eros. Fusce ex nisl, sodales
                vel sapien id, sollicitudin sagittis eros. Cras neque metus,
                porttitor et egestas ut, placerat a ante. Sed pretium, est ac
                commodo gravida, dolor velit ultricies tortor, non vulputate
                tortor nisl ac massa.
              </p>
              <a href="#" id="beers-btn">View Beers</a>
          </div>
          <img src="/beer-article.jpg" alt="beer bottles" />
        </div>
        <div className="menu-article">
          <img src="/veggie-article.jpg" alt="Veggie burgers" />
          <div className="article-description">
            <div className="article-title">Try A Veggie Burger!</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat tempus tristique. Sed velit ligula, feugiat sit amet
                semper quis, interdum non augue. Praesent at aliquet turpis.
                Duis at elit et tortor pharetra gravida. Nullam egestas
                efficitur nibh, eget viverra urna feugiat a. Sed sodales, tellus
                sed porttitor maximus, libero felis lacinia ex, sit amet
                hendrerit eros purus id libero. Integer ut nibh eget nibh mollis
                congue at ac arcu. Aenean ut arcu suscipit elit efficitur
                fringilla. Vestibulum varius auctor eros. Fusce ex nisl, sodales
                vel sapien id, sollicitudin sagittis eros. Cras neque metus,
                porttitor et egestas ut, placerat a ante. Sed pretium, est ac
                commodo gravida, dolor velit ultricies tortor, non vulputate
                tortor nisl ac massa.
              </p>
              <a href="#" id="veggies-btn">View Veggie Burgers</a>
          </div>
        </div>
        <div className="menu-article">
          <div className="article-description">
            <div className="article-title">Don't Like Beer? Grab A Soda!</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat tempus tristique. Sed velit ligula, feugiat sit amet
                semper quis, interdum non augue. Praesent at aliquet turpis.
                Duis at elit et tortor pharetra gravida. Nullam egestas
                efficitur nibh, eget viverra urna feugiat a. Sed sodales, tellus
                sed porttitor maximus, libero felis lacinia ex, sit amet
                hendrerit eros purus id libero. Integer ut nibh eget nibh mollis
                congue at ac arcu. Aenean ut arcu suscipit elit efficitur
                fringilla. Vestibulum varius auctor eros. Fusce ex nisl, sodales
                vel sapien id, sollicitudin sagittis eros. Cras neque metus,
                porttitor et egestas ut, placerat a ante. Sed pretium, est ac
                commodo gravida, dolor velit ultricies tortor, non vulputate
                tortor nisl ac massa.
              </p>
              <a href="#" id="beers-btn">View Sodas</a>
          </div>
          <img src="/soda-article.jpg" alt="Soda" />
        </div>
      </div>
    </section>
  );
};

export default FoodCard;
