const Items = () => {
  const data = [
    { name: "Modena Juice" },
    { name: "Leica M3 with APO" },
    { name: "Asus Zenbook" },
    { name: "iPad Pro 2018" },
  ];
  return (
    <div className="items">
      <div className="items-container container">
        <div className="items-head">
          <h2>🔥 Hot Item</h2>
          <button>See All Products</button>
        </div>
        <div className="slider">
          <div className="slider-container">
            {data.map((el) => (
              <div className="item" key={el.name}>
                <div className="img"></div>
                <div className="description">
                  <h4 className="name">{el.name}</h4>
                  <p>The specification here</p>
                </div>
                <div className="price">$1,500.00</div>
              </div>
            ))}
            <span className="slider-left">
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="most">
          {[1, 2 , 3].map((col) => (
            <div className="most-col" key={col}>
              <h3>Most Sold Laptop</h3>
              {[0, 1, 2, 3, 4].map((el) => (
                <div key={el} className="most-item">
                  <div className="most-item-img"></div>
                  <div className="most-item-details">
                    <div className="name">Name</div>
                    <div className="most-item-details-descripition">
                      <div className="stars">
                        <i className="fa fa-star" aria-hidden="true" />
                        4.8
                      </div>
                      <div className="sold">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />
                        Unit sold
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="most-details">
                <span>Leaderboard details</span>
                <span>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
