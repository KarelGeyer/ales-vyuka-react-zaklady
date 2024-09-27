import React, { useEffect, useState } from "react";
import axios from "axios";
import UserBox from "./UserBox";

const UserBoxes = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // USEEFFECT HOOK II
  /*
    Zde vidíme nejčastější použití useEffect hooku. Načítání dat z API.
    Používáme k tomu knihovnu axios, která nám umožňuje snadno komunikovat s jakoukoliv
    externí API. V tomto případě se jedná o API jsonplaceholder, které nám poskytuje data
    o uživatelích.

    Když se tedy komponenta načte, zavolá se useEffect hook, který nám nastaví loading na true,
    aby se zobrazilo loading..., zavolá axios.get, který získá data z API, zpracuje je a nastaví
    je do state users. Nakonec nastaví loading na false, aby se zobrazila data.

    useEffect hook má druhý parametr, který je pole závislostí. Zde je pole prázdné, protože chceme
    useEffect hook zavolat jen jednou. Kdyby se volal víckrát, znovu bychom museli 
    načítat data z API, což by bylo zbytečné když už ty data jednou máme, o zbytečném zatížení
    serveru ani nemluvě, který by byl nucený přijímat naše requesty každou chvíli.
  */

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((usersData) => {
        const formattedUsers = [];
        usersData.forEach((u) => {
          formattedUsers.push({
            id: u.id,
            username: u.name,
            adress: `${u.address.street}, ${u.address.city}`,
            email: u.email,
          });
        });
        setUsers(formattedUsers);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? "loading..." : users.map((u) => <UserBox key={u.id} {...u} />)}
    </div>
  );
};

export default UserBoxes;
