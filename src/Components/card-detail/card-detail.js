import "./card-detail.css";

const CardDetail = ({cardLayout, consumption}) => {

  console.log('consump' + consumption);
  if(cardLayout === 'invert'){
    return (
      <div className="detail-article">
        <div className="detail-description">
          <div className="detail-title">{consumption.title} - ${consumption.price}</div>
          <p>{consumption.description}</p>
        </div>
        <img src={`/images/${consumption.photo}.jpg`} alt="Meat our burgers" />
      </div>
    );
  }else{
    return(
      <div className="detail-article">
        <img src={`/images/${consumption.photo}.jpg`} alt="Meat our burgers" />
        <div className="detail-description">
          <div className="detail-title">{consumption.title} - ${consumption.price}</div>
          <p>{consumption.description}</p>
        </div>
      </div>
    )
  }
};

export default CardDetail;
