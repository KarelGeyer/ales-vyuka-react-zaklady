import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { useState } from "react";
import { THEME_DARK, THEME_LIGHT } from "./helpers/constants";

function App() {
  const [theme, setTheme] = useState(THEME_DARK);

  const handleTheme = () =>
    setTheme(theme == THEME_DARK ? THEME_LIGHT : THEME_DARK);

  return (
    <div className="App">
      {/* TOTO JSOU KOMPONENTY */}
      <Header username={"karel"} themeHandler={handleTheme} />
      <MainPage theme={theme} />
      <Footer />
    </div>
  );
}

// KOMPONENTA
/* 
Když se podíváš do komponenty Header.jsx, zjistíš, že je zde vytvořená funkce s názvem
Header a ta je exportovaná na řádku 14. Zde je importovaná na řádku 2 a použita na řádku 17.
Tímto stylem v podstatě voláme funkci header, která nám vrací JSX. To se následně vyrendreuje
na obrazovce jako klasický HTML.
V Reactu je komponenta základní stavební prvek aplikace. Dnes se používají hlavně funkční komponenty.
Komponenty nám umožňují rozdělit UI do samostatných částí, které můžeme znovu použít. Jde o to, že nějaký
UI prvek můžeme vytvořit jednou a pak ho používat v různých částech aplikace jak se nám zlíbí.
V Reactu můžeme komponenty skládat do sebe, takže můžeme mít komponentu, která obsahuje jinou komponentu.
V komponentě Header např. máme komponentu UserCard, která zobrazuje informace o uživateli (více viz. Props sekce níže).
Teď je nicméně nutné pochopit, co komponenta je a jak se používá. Jak bylo zmíněno výše, komponenta je základní stavební prvek aplikace.
Je to cokoliv, co chceš použít a u čeho existuje šance, že to budeš chtít znovu použít. Například nějaká uživatelská karta,
kartička se zobrazením počasí nebo času, tlačítko, formulář, atd... Je to jednoduše izolovaný kus kódu, který má nějaký
vstup a nějaký výstup. Vstup se nazývá props (properties) a výstup je JSX, který se vykreslí na obrazovce jako HTML.
*/

// PROPS
/*
 Props není v podstatě nic jiného, než posílání argumentů do funkce. V Reactu se používá pro předávání dat
z rodičovské komponenty do dceřiné komponenty. V případě Header.jsx se můžeš podívat, že má ve svém JSX komponentu
UserCard. V tomto případě je rodičovská komponenta Header a dceřiná komponenta UserCard. Když se podíváš přímo na definici
komponenty Header (řádek 4), zjistíš, že má dva props - username a themeHandler. Theme handler je funkce a ještě se k ní dostaneme.
Zaměříme se zatím na jednodušší username. Komponenta přijímá tento argument, aby ho zobrazila ve svém JSX.
Aby tato data mohla zobrazit, musí je nějakým způsobem dostat (nečekaně xD). To se děje pomocí props. Tyto props dostává
zde na řádku 17, kde voláme funkci Header. Props username={"karel"} zajišťuje, že se nám v komponentě Header zobrazí jméno Karel.
Nicméně nic to nemění na tom, že je to pořád jen funkce, které v reactu říkáme komponenta a argument a parameter, kterým v Reactu v 
kontextu práce s komponentami říkáme props. Nic víc zatím vlastně není.
*/

export default App;
