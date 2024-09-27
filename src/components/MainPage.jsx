import React, { useState } from "react";
import Counter from "./Counter";
import MovieCards from "./MovieCards";
import UserBoxes from "./User/UserBoxes";
import Timer from "./Timer";

const MainPage = ({ theme }) => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className={theme}>
      <MovieCards />
      <Counter />
      <UserBoxes />
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "hide" : "show"} timer
      </button>
    </div>
  );
};

export default MainPage;
