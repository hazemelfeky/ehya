import RecommendedCard from "./RecommendedCard";
import RecommendedCardSpecial from "./RecommendedCardSpecial";
const Recommendation = () => {
  const data = [
    { name: "Modena Juice & Vege Blender Silver 1" },
    { name: "Leica M3 with APO-Summicron 50mm 1:2 1" },
    { name: "Asus Zenbook Pro 13” UX-430 US 2018 1" },
    {
      name: "Apple Watch 4 2020",
      special: true,
      time: [10, 20, 15],
    },
    { name: "Modena Juice & Vege Blender Silver 2" },
    { name: "Leica M3 with APO-Summicron 50mm 1:2 2" },
    { name: "Asus Zenbook Pro 13” UX-430 US 2018 2 " },
    { name: "iPad Pro 2018 with 256GB - Black2" },
  ];
  return (
    <div className="recommendation">
      <div className="recommendation-container container">
        <div className="recommendation-title">
          <h2>Product Recommendation</h2>
          <p>You can choose what our recommendation product here</p>
        </div>
        <div className="recommendation-grid">
          {data.map((el) =>
            el.special ? (
              <RecommendedCardSpecial
                key={el.name}
                name={el.name}
                time={el.time}
              />
            ) : (
              <RecommendedCard key={el.name} name={el.name} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
