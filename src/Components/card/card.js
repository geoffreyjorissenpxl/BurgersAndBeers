import "./card.css";

const Card = (props) => {
  if(props.cardLayout === 'invert'){
    return (
      <div className="menu-article">
        <div className="article-description">
          <div className="article-title">{props.title}</div>
          <p>{props.description}</p>
        </div>
        <img src={props.photo} alt="Meat our burgers" />
      </div>
    );
  }else{
    return(
      <div className="menu-article">
        <img src={props.photo} alt="Meat our burgers" />
        <div className="article-description">
          <div className="article-title">{props.title}</div>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }
};

export default Card;
