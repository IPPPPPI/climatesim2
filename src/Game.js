import produce from "immer";
import { create } from "zustand";
import "./App.css";

//events for the games that will run down
const money = 500000;
const population = 100000;
const happiness = 100;
const environment = 100;
const populationchange = 0;
const moneychange = 0;
const environmentchange = 0;
const happinesschange = 0;
let year = 2000;

export default function Game() {
  return (
    <>
      <div className="statbox">
        <div className="catbox">
          <p>Population: {population}</p>
        </div>
        <div className="catbox">
          <p>${money}</p>
        </div>
        <div className="catbox">
          <p>Environment: {environment}</p>
        </div>
        <div className="catbox">
          <p>Happiness: {happiness}</p>
        </div>
        <div className="catbox">
          <p>Year: {year}</p>
        </div>
      </div>
    </>
  );
}
