import React, { useState } from "react";
import { DECREMENT, INCREMENT } from "../helpers/constants";

// USESTATE HOOK - nejdřív si přečti jak funguje JSX PART I v MovieCard.jsx
/*
Usestate hook ti z v reactu z velké části nahrazuje práci s proměnnými.
React ti totiž neumožňuje přímý přístup do Domu ale pouze do svého "Virtuálního Domu".
Ten si jednou vysvětlíme zvlášť, páč bych musel napsat román abych ho vysvětlil tady.
Řekneme si nicméně základ. V javascritup když si vytvoříš klasickou proměnnou, třeba
let x = 5 a někde v kódu ji změníš na 10, tak se ti změní i v Domu. Níže máš příklad,
u kterého si to můžeš ověřit. Když klikneš na buttony Increment a Decrement, tak se ti
změní hodnota counteru a změna se ti na obrazovce zobrazí. Když ale zkusíš to samé s 
buttony Bad Increment a Bad Decrement, tak se ti hodnota counteru nezmění.
React si totiž sám optimalizuje a určuje, kdy přesně se má obrazovka překreslit a kdy ne.
React ti obrazovku překeslí jen tehdy, když upravíš něco, co React přijímá jako signál pro
překreslení. A od toho máme useState hook. 

UseState hook funguje podobně jako v OOP getter a setter. 

deklarace    getter     setter      defaultní hodnota
const       [counter, setCounter] = useState(0);

counter používáš stejně jako proměnnou ke čtení dat, setCounter používáš k zápisu dat, tedy ke
změně hodnoty counteru.
counter začíná na 0, když zavoláme setCounter(5), tak se counter změní na 5 a obrazovka se překreslí.
*/

const Counter = () => {
  // Toto je v reactu funkční kód
  const [counter, setCounter] = useState(0);

  const counterHandler = (type) => {
    if (type == INCREMENT && counter < 10) setCounter(counter + 1);
    if (type == DECREMENT && counter > 0) setCounter(counter - 1);
  };

  // Toto nebude v reactu fungovat
  let badCounter = 0;

  const badCounterHandler = (type) => {
    if (type == INCREMENT && badCounter < 10) badCounter++;
    if (type == DECREMENT && badCounter > 0) badCounter--;
  };

  return (
    <>
      {/*Funkční kód v reactu */}
      <button onClick={() => counterHandler(INCREMENT)}>Increment</button>
      <button onClick={() => counterHandler(DECREMENT)}>Decrement</button>
      <div>{counter}</div>

      {/* Nefuknční kód v reactu */}
      <button onClick={() => badCounterHandler(INCREMENT)}>
        Bad Increment
      </button>
      <button onClick={() => badCounterHandler(DECREMENT)}>
        Bad Decrement
      </button>
      <div>{badCounter}</div>
    </>
  );
};

export default Counter;
