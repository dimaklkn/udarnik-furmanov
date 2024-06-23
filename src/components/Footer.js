import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container">
      <div className="footer__credits">{year} ⓒ Музей Д.А. Фурманова</div>
      <div className="footer__attribution">Coded by Dima Klyukin</div>
    </footer>
  );
};

export default Footer;
