import React from "react";
import UserCard from "./UserCard";

// Props - username, themeHandler jsou parametry, které komponenta přijímá
// Kdekoliv komponentu voláš, je potřeba jít předat tato data, aby mohla fungovat správně
// Props můžou být jakákoliv data, jakéhokoliv datového typu - stringy, number, objekt,
// pole nebo i funkce, jako třeba themeHandler.

// EVENTY
// Je to stejné jako v Javascriptu klasický event listener, jen v Reactu se
// to píše trochu jinak. V Reactu se event listener píše jako onClick, onChange,
// onSubmit atd... a do těchto event listenerů se vkládá funkce, která se má spustit.
// V tomto případě máme button, který má event listener onClick, který volá funkci themeHandler,
// která je definovaná v App.js a je předána jako props do této komponenty.

const Header = ({ username, themeHandler }) => {
  return (
    <div>
      <h1>Toto je header</h1>
      <UserCard username={username} />
      <button onClick={themeHandler}>Toggle theme</button>
    </div>
  );
};

export default Header;
