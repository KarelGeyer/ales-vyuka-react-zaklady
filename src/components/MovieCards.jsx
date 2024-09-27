import React, { useState } from "react";
import MovieCard from "./MovieCard";

const movie = {
  id: 5,
  title: "Iron man",
  age: "+16",
  tags: "Akce * Napínavý",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
};

const MovieCards = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Režisér a film",
      age: "+13",
      tags: "Vtipný * Napínavý * Rodina",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
    },
    {
      id: 2,
      title: "Nebezpečná Helga",
      age: "+13",
      tags: "Vtipný * Napínavý * Rodina",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
    },
    {
      id: 3,
      title: "Krajina lásky",
      age: "+16",
      tags: "Gangster * Napínavý * Násilí",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
    },
    {
      id: 4,
      title: "Útok z oblak",
      age: "+16",
      tags: "Gangster * Napínavý * Násilí",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
    },
  ]);

  const addMovie = () => {
    const doesMovieExist = movies.find(
      (singleMovie) => singleMovie.id === movie.id
    );
    if (doesMovieExist) return;
    setMovies([...movies, movie]);
  };

  // JSX PART II
  // Upozornění: než budeš pokračovat, je důležité se nejdříve naučit jak funguje USESTATE.
  /* 
    Zde můžeme vidět, že do JSX nemusíme vkládat pouze jen data ale i funkcionality.
    V případě této komponenty máme pole filmů, které chceme nějakým způsobem zobrazit
    v naší aplikaci. Abychom data nějak zapoudřili, máme komponentu MovieCard, která
    zobrazuje jednotlivý film. Co tady tedy děláme? Máme zde jeden input, do kterého můžeme
    psát název filmu. Tento input má onChange event, který volá funkci setSearchMovie.
    Tato funkce nastaví do state searchMovie hodnotu, kterou uživatel do inputu napsal.
    Tuto hodnotu poté vezmeme a pomocí metody filter z pole movies vyfiltrujeme pouze ty
    filmy, které obsahují v názvu znakový řetězec, který uživatel do inputu napsal. Tyto vyfiltrované
    filmy poté zobrazíme pomocí metody map, která nám vytvoří nové pole s komponentami MovieCard a zobrazí
    je na obrazovce. Pokud uživatel do inputu nic nenapíše, zobrazíme všechny filmy.
    Toto chování je zajištěno ternárním operátorem, který zjistí, zda je searchMovie prázdný string.
    Pokud ano, zobrazí všechny filmy, pokud ne, zobrazí pouze ty, které obsahují v názvu řetězec, který uživatel
    zadal.
  */

  return (
    <div>
      <input
        type="text"
        name="search movies"
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      {searchMovie !== ""
        ? movies
            .filter((movie) =>
              movie.title
                .toLocaleLowerCase()
                .includes(searchMovie.toLocaleLowerCase())
            )
            .map((movie) => {
              return (
                <MovieCard
                  title={movie.title}
                  age={movie.age}
                  description={movie.description}
                />
              );
            })
        : movies.map((movie) => {
            return (
              <MovieCard
                title={movie.title}
                age={movie.age}
                description={movie.description}
              />
            );
          })}

      <button onClick={addMovie}>Add movie</button>
    </div>
  );
};

export default MovieCards;
