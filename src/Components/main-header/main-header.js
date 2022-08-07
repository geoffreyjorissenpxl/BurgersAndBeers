import "./Main-header.css";
import Nav from "../nav/nav";

const MainHeader = () => {
  const scrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight * 0.93);
  };
  return (
    <div className="header">
      <div className="title">Welcome To Burgers And Beers</div>
      <a className="scroll-btn" href="#" onClick={scrollDown}>
        <p>Click To</p> <p>Scroll Down</p>
      </a>
    </div>
  );
};

export default MainHeader;
