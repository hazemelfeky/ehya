const RecommendedCardSpecial = ({ name, time }) => {
  return (
    <div className="recommended-card special">
      <h4 className="name">{name}</h4>
      <h4 className="time">
        <span>{time[0]}</span> : <span>{time[1]}</span> : <span>{time[2]}</span>
      </h4>
      <div className="img"></div>
      <button className="buy">Buy Now $1,500.00</button>
    </div>
  );
};

export default RecommendedCardSpecial;
