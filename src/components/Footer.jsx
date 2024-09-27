import React from "react";

const Footer = () => {
  const date = new Date();
  const currentDate = `${date.getDate()}. ${
    date.getMonth() + 1
  }. ${date.getFullYear()}`;

  return (
    <div>
      <h2>Toto je footer</h2>
      <p>{currentDate}</p>
    </div>
  );
};

export default Footer;
