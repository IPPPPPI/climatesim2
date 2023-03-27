import produce from "immer";
import { create } from "zustand";
import "./App.css";

//events for the games that will run down
const events = {
  initial: {
    solar: "solar_invest",
    nuclear: "nuclear_invest",
    hydro: "hydro_invest",
    wind: "wind_invest",
    back: "go_back",
  },
  solar_invest: {
    solar: "solar_invested",
  },
  nuclear_invest: {
    nuclear: "nuclear_invested",
  },
  hydro_invest: {
    hydro: "hydro_invested",
  },
  wind_invest: {
    wind: "wind_invested",
  },
  solar_invested: {
    statsChanges: {
      money: -20000,
      happiness: 5,
      environment: 3,
    },
  },
  nuclear_invested: {
    statsChanges: {
      money: -10000,
      happiness: 5,
      environment: 3,
    },
  },
  hydro_invested: {
    statsChanges: {
      money: 20000,
      happiness: 5,
      environment: 3,
    },
  },
  wind_invested: {
    statsChanges: {
      money: 40000,
      happiness: 5,
      environment: 3,
    },
  },
};

/*
const nodes = {
  initial: {

  },
  initial1: {
    parent: "initial",
    cost: {
      money: 20
    }
  },
  initial2: {
    parent: "initial",
    cost: {}
  }
}
*/

//checks the events above to see what valiue it need to change (Special thanks to Mr.Pig)
const useStore = create((set, get) => ({
  money: 100000,
  population: 10000,
  happiness: 100,
  environment: 50,
  event: "initial",
  setEvent: (event) => {
    set(
      produce((state) => {
        state.event = event;
        if (events[event].statsChanges)
          Object.entries(events[event].statsChanges).forEach(([key, value]) => {
            state[key] += value;
          });
      })
    );
  },
}));

//the display of screen
export default function Game() {
  const { money, population, happiness, environment, event, setEvent } =
    useStore();
  const eventData = events[event];
  return (
    <>
      <br></br>
      <p>Resources</p>
      <p>Happiness level: {happiness}</p>
      <p>Money: ${money}</p>
      <p>Population: {population} people</p>
      <p>Environment: {environment} level</p>
      {eventData.solar && (
        <button
          className="button1"
          type="button"
          onClick={() => setEvent(eventData.solar)}
        >
          Solar Power
          <div className="solarTTB">
            <span className="solarTT">Money -200</span>
          </div>
        </button>
      )}
      {eventData.nuclear && (
        <button
          className="button2"
          type="button"
          onClick={() => setEvent(eventData.nuclear)}
        >
          Wind power
        </button>
      )}
      {eventData.hydro && (
        <button
          className="button3"
          type="button"
          onClick={() => setEvent(eventData.hydro)}
        >
          Hydro power
        </button>
      )}
      {eventData.wind && (
        <button
          className="button4"
          type="button"
          onClick={() => setEvent(eventData.wind)}
        >
          Wind power
        </button>
      )}
    </>
  );
}
