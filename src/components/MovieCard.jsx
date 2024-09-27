import React from "react";

// JSX PART I
/*
  Jak jsme si již řekli, JSX je syntaxe, která nám umožňuje psát HTML podobný kód přímo v JavaScriptu.
  Umožňuje nám tedy do našeho "HTML" kódu vkládat data a zobrazovat je. Zde napříkldat komponenta
  MovieCard příjímá props title, age a description a zobrazuje je v HTML tagu H3 nebo p.
  Je důležité si pamatovat, že v JSX musí vždy existovat parent HTML tag (v našem případě div), který vše zaobaluje.
  Nelze za tento div žádný jiný HTML kód přidat, jelikož by pak nebyl jeden ale hned dva parent elementy.
  Můžeš tedy pouze vkládat do divu ale už nic za ně, nebo před něj. Jestli nicméně jako hlavní element použiješ
  div nebo span nebo h3 je čistě na tobě. V reactu dokonce existuje tzv. React fragment, což je jen prázdný tag <></>, 
  kterým můžeš parent tag nahradit. V HTML se místo něj nevykreslí nic, jen jeho obsah.
*/

const MovieCard = ({ title, age, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{age}</p>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
