import Logo from "./Logo";

const Footer = () => {
  const pages = [
    {
      title: "Product",
      pages: [
        "Landingpage",
        "Features",
        "Documentation",
        "Referral Program",
        "Pricing",
      ],
    },
    {
      title: "Services",
      pages: ["Documentation", "Design", "Themes", "Illustrations", "UI Kit"],
    },
    {
      title: "Company",
      pages: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    { title: "More", pages: ["Documentation", "License", "Changelog"] },
  ];
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="company">
          <Logo />
          <p>Build a modern and creative website with crealand</p>
          <p className="circles">••••</p>
        </div>
        <div className="pages">
          {pages.map((el) => (
            <div className="pages-col">
              <h3>{el.title}</h3>
              {el.pages.map((el) => (
                <p>{el}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="credit">
        💙 Copyright © 2019. Crafted with love by Hazem.
      </div>
    </div>
  );
};

export default Footer;
