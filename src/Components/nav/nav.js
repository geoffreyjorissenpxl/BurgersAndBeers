import "./nav.css"

const Nav = () => {
  return (
    <div>
         <nav className="navbar">
          <div className="nav-container">
            <div className="logo">Logo</div>
            <ul className="nav">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
    </div>
    
    
   
  );
};

export default Nav;
