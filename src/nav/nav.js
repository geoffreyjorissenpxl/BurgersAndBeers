import "./nav.css"

const Nav = () => {
  return (
    <div className="container">
      <header>
         <nav className="navbar">
          <div className="nav-container">
            <div className="logo">Logo</div>
            <ul className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="title">Welcome To Burgers And Beers</div>
        <a className="scroll-btn" href="#menu"><p>Click To</p> <p>Scroll Down</p></a>
      </header>

    <section className="menu" id="menu">
      <div className="menu-title">OUR COMBINATION OF BURGERS AND BEERS WILL MAKE YOUR TASTEBUDS EXPLODE</div>
      <div className="menu-container">
        
        <div className="menu-article">'
          <img src="/meat-burger-article.jpg" alt="Meat our burgers"/>
          <div>
            <div className="article-title">Meat Our Burgers!</div>
            <div>
              <p>
              at ac arcu. Aenean ut arcu suscipit elit efficitur fringilla. 
               Vestibulum varius auctor eros. Fusce ex nisl, sodales vel sapien id, sollicitudin sagittis eros. Cras neque metus, 
               porttitor et egestas ut, placerat a ante. Sed pretium, est ac commodo gravida, dolor velit ultricies tortor, 
               non vulputate tortor nisl ac massa.
            </p>
            </div>
          </div>
        </div>
        
        <div className="menu-article">
        <div>
            <div className="article-title">The Tastiest Beers!</div>
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tempus tristique. 
              Sed velit ligula, feugiat sit amet semper quis, interdum non augue. Praesent at aliquet turpis. 
              Duis at elit et tortor pharetra gravida. Nullam egestas efficitur nibh, eget viverra urna feugiat a.
               Sed sodales, tellus sed porttitor maximus, libero felis lacinia ex, sit amet hendrerit eros purus id libero. 
               Integer ut nibh eget nibh mollis congue at ac arcu. Aenean ut arcu suscipit elit efficitur fringilla. 
               Vestibulum varius auctor eros. Fusce ex nisl, sodales vel sapien id, sollicitudin sagittis eros. Cras neque metus, 
               porttitor et egestas ut, placerat a ante. Sed pretium, est ac commodo gravida, dolor velit ultricies tortor, 
               non vulputate tortor nisl ac massa.
            </p>
            </div>
          </div>
          <img src="/beer-article.jpg" alt="beer bottles"/>
        </div><div className="menu-article">'
          <img src="/veggie-article.jpg" alt="Veggie burgers"/>
          <div>
            <div className="article-title">Try A Veggie Burger!</div>
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tempus tristique. 
              Sed velit ligula, feugiat sit amet semper quis, interdum non augue. Praesent at aliquet turpis. 
              Duis at elit et tortor pharetra gravida. Nullam egestas efficitur nibh, eget viverra urna feugiat a.
               Sed sodales, tellus sed porttitor maximus, libero felis lacinia ex, sit amet hendrerit eros purus id libero. 
               Integer ut nibh eget nibh mollis congue at ac arcu. Aenean ut arcu suscipit elit efficitur fringilla. 
               Vestibulum varius auctor eros. Fusce ex nisl, sodales vel sapien id, sollicitudin sagittis eros. Cras neque metus, 
               porttitor et egestas ut, placerat a ante. Sed pretium, est ac commodo gravida, dolor velit ultricies tortor, 
               non vulputate tortor nisl ac massa.
            </p>
            </div>
          </div>
        </div><div className="menu-article">'
          <div>
            <div className="article-title">Don't Like Beer? Grab A Soda!</div>
            <div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat tempus tristique. 
              Sed velit ligula, feugiat sit amet semper quis, interdum non augue. Praesent at aliquet turpis. 
              Duis at elit et tortor pharetra gravida. Nullam egestas efficitur nibh, eget viverra urna feugiat a.
               Sed sodales, tellus sed porttitor maximus, libero felis lacinia ex, sit amet hendrerit eros purus id libero. 
               Integer ut nibh eget nibh mollis congue at ac arcu. Aenean ut arcu suscipit elit efficitur fringilla. 
               Vestibulum varius auctor eros. Fusce ex nisl, sodales vel sapien id, sollicitudin sagittis eros. Cras neque metus, 
               porttitor et egestas ut, placerat a ante. Sed pretium, est ac commodo gravida, dolor velit ultricies tortor, 
               non vulputate tortor nisl ac massa.
            </p>
            </div>
          </div>
          <img src="/soda-article.jpg" alt="Soda"/>
        </div>
      </div>
      
    </section>
    </div>
    
    
   
  );
};

export default Nav;
