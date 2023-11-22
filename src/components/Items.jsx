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
      </div>
    </div>
  );
};

export default Items;
