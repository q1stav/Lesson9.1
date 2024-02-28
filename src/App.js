import React, { useState } from "react";
import GameFieldContainer from "./components/GameFieldContainer";
import {
  calculateWinner,
  calculateDraw,
} from "./components/InformationContainer";
import InformationContainer from "./components/InformationContainer";
import {} from "./styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { NEW_GAME, nextTurn } from "../src/actions";
import { selectArray } from "./selectors/select-array";

const App = () => {
  const field = useSelector(selectArray);
  const dispatch = useDispatch();
  const [xIsNext, setXIsNext] = useState(true);
  let winner = calculateWinner(field);
  let draw = calculateDraw(field);

  const handleClick = (index) => {
    const fieldCopy = field;
    if (winner || fieldCopy[index]) return;
    if (!draw) return;
    console.log(xIsNext);
    fieldCopy[index] = xIsNext ? "X" : "O";
    dispatch(nextTurn({ index: index, sim: fieldCopy[index] }));
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="startButton"
        onClick={() => {
          dispatch(NEW_GAME);
          setXIsNext(true);
        }}
      >
        Новая игра
      </button>
    );
  };
  

  return (
    <div className="App">
      <InformationContainer turn={xIsNext} winner={winner} draw={draw} />
      <GameFieldContainer click={handleClick} />
      {startNewGame()}
    </div>
  );
};

export default App;
