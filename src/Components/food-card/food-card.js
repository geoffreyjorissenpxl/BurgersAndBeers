import "./food-card.css";

const FoodCard = (props) => {
  return (
    <div className="menu-article">
      <img src={props.photo} id="photo" alt="Meat our burgers" />
      <div id="article-description">
        <div className="article-title">{props.title}</div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
