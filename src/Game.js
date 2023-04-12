import produce from "immer";
import { create } from "zustand";
import { useState } from "react";
import "./App.css";
import "./Technology.js";
import { Technology } from "./Technology.js";

/*
const moneyStore = create((set) => ({
  money: 500000,
  population: 100000,
  happiness: 100,
  environment: 100,
  populationchange: 0,
  moneychange: 0,
  environmentchange: 0,
  happinesschange: 0,
  year: 2000,
}));
*/
//events for the games that will run down

let money = 500000;
let population = 100000;
let happiness = 100;
let environment = 100;
let populationchange = 0;
let moneychange = 0;
let environmentchange = 0;
let happinesschange = 0;
let year = 2000;

export default function Game() {
  /*const {
    money,
    population,
    happiness,
    environment,
    moneychange,
    happinesschange,
    environmentchange,
    populationchange,
    year,
  } = moneyStore();
*/

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
      {Clickables()}
    </>
  );
}

function Clickables() {
  const [techOpen, setTechOpen] = useState(false);
  return (
    <div>
      {techOpen ? (
        <>
          <button>ABB</button>
          <button
            className="techButton"
            type="button"
            onClick={() => setTechOpen(false)}
          >
            Close
          </button>
        </>
      ) : (
        <>
          <button
            className="techButton"
            type="button"
            onClick={() => setTechOpen(true)}
          >
            Technology
          </button>
        </>
      )}
    </div>
  );
}
