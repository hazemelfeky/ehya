import HeroImage from "../assets/images/Image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-top">
          <div className="hero-top-left">
            <div className="bar"></div>
            <h1 className="hero-heading">
              Get Special Watch <br /> with Special Prices
            </h1>
            <ul className="hero-pros">
              <li>Newest OS Support</li>
              <li>Water and Dust Resis</li>
              <li>Long lasting battery Life</li>
              <li>Get a 20% Cashback right now</li>
            </ul>
            <div className="hero-join">
              <input placeholder="Insert your email" />
              <button>Join Pre-Order</button>
            </div>
          </div>
          <div className="hero-top-right hero-image">
            <img src={HeroImage} alt="hero-img" />
          </div>
        </div>
        <div className="hero-bot slider">{/* TODO */}</div>
      </div>
    </div>
  );
};

export default Hero;
