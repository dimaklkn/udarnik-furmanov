import React from "react";

//import images
import udarnik from "../images/udarnik-title.png";
import pricing from "../images/pricing.png";
import logo from "../images/museum-logo-small.png";

const Header = () => {
  return (
    <header className="container header">
      <p className="header__motto">Пролетарии всех стран, соединяйтесь!</p>
      <div className="header__title">
        <a
          href="https://vk.com/muzei.furmanova"
          target="_blank"
          rel="noopener noreferrer"
          className="header__img-container-1"
        >
          <img src={logo} alt="" />
        </a>
        <div className="header__img-container-2">
          <img src={udarnik} alt="" />
        </div>
        <div className="header__img-container-3">
          <img src={pricing} alt="" />
        </div>
      </div>
      <p className="header__credits">
        Орган Фурмановского горкома ВКП(б) и горсовета Середского района ВКП(б)
        и райсовета депутатов трудящихся
      </p>
    </header>
  );
};

export default Header;
