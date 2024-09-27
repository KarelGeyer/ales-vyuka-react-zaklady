import React, { useState, useEffect } from "react";

// USEFFECT HOOK
/*
 Tento hook řeší tzv. "LifeCycle komponenty". V Reactu máme 3 základní LifeCycle metody:
 - componentDidMount - spustí se hned po načtení komponenty
 - componentDidUpdate - spustí se po každé změně stavu nebo props
 - componentWillUnmount - spustí se před odstraněním komponenty
 useEffect hook je kombinací všech těchto metod a zajišťuje správnou funkcionalitu
 komponenty po celou dobu její existence, tedy po celou dobu, kdy je komponenta 
 vykreslená na obrazovce. useEffect hook má dva parametry, první je funkce, která
  se má spustit a druhý je pole, kterému říkáme dependency array.

  1. UseEffect se spoustí vždy po vykreslení komponenty, pokud dependency array v useEffectu
  chybí. Např.

  useEffect(() => {
    console.log("Ahoj");
  });

  2. Tento useEffect se spustí po každém vykreslení komponenty. Pokud ale chceme, aby se useEffect
  spustil jen jednou, po načtení komponenty, musíme mu přidat prázdné pole jako druhý parametr.
  Např.

  useEffect(() => {
    console.log("Ahoj");
  }, []);

  Prázdné dependy pole zajišťuje, že se useEffect spustí jen jednou, po načtení komponenty a bez
  ohledu na to, co se v komponentě děje a mění, znovu se již nespustí.

  3. Tento useEffect se spustí vždy, když se změnít hodnota state seconds
  
  useEffect(() => {
    console.log(seconds);
  }, [seconds]);

  Zde nám dependency array hlídá, jakou hodnotu má state seconds. Pokud se hodnota seconds změní (např. když zavoláme
  setSeconds), obrazovka se překreslí, useEffect zaznamená změnu a spustí se znovu.
*/

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(
    () => {
      // Body useEffectu zasupuje metodu componentDidMount - čili co se má stát bezprostředně po načtení komponenty
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () =>
        clearInterval(
          interval
        ); /*return nám zastupuje componentWillUnmount - tedy co se má stát, pokud se komponenta odebre z vykreslování*/
      // Toto nazýváme jako tzv. Cleanup funkci, která se spouští pokaždé, když je komponenta odebraná z renderu.
      // Jelikož jsme vytvořili interval, který žije v paměti počítače, dokud ho neodebereme,
      // musíme zajistit jeho smazání, když komponenta bude odstraněna z vykreslování.
      // Pokud bychom to neudělali, představili bychom do aplikace tzv. memory leak.
      // Memory leak je stav, kdy se v paměti počítače hromadí nepotřebné informace a způsobuje
      // zpomalení aplikace a v horším případě i pád aplikace. Běžně toto řeší Garbage Collector,
      // některé případy nicméně neřeší a musíme uvolnění paměti zajistit sami - jako třeba v tomto
      // případě.
      // Jednoduše, pokud bychom nezavolali naší cleanup funkci, interval by se nikdy nezastavil a
      // a naopak by se stále tvořili nové instance intervalu pokaždé, když bychom komponentu znovu
      // vykreslili ale žádný by se nikdy neodebral z paměti, dokud bychom celou aplikaci nevypnuli.
    },
    [] /*Dependency array zastupuje componentDidUpdate*/
  );

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
};

export default Timer;
