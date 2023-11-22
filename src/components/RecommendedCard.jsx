const RecommendedCard = ({ name }) => {
  return (
    <div className="recommended-card">
      <div className="like">
        <i className="fa fa-heart" aria-hidden="true" />
      </div>
      <div className="img"></div>
      <h4 className="name">{name}</h4>
      <div className="price">
        <div className="new">$1,500.00</div>
        <div className="old">$2,500.00</div>
      </div>
      <button className="buy">Buy Now</button>
    </div>
  );
};

export default RecommendedCard;
