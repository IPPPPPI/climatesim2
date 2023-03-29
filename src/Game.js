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
  },
  solar_invest: {
    description: "Money 30000 ",
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
    description: "Money 30000 ",
    statsChanges: {
      money: -30000,
      happiness: 10,
      environment: 2,
    },
  },
  nuclear_invested: {
    statsChanges: {
      money: -40000,
      happiness: -10,
      environment: 10,
    },
  },
  hydro_invested: {
    statsChanges: {
      money: -20000,
      happiness: 8,
      environment: 3,
    },
  },
  wind_invested: {
    statsChanges: {
      money: -10000,
      happiness: 5,
      environment: 4,
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
  goBackwards: () => {
    set(
      produce((state) => {
        let done = false;
        for (let eventKey in events) {
          const event = events[eventKey];
          for (let nodeKey in event) {
            const node = event[nodeKey];
            if (node === state.event) {
              state.event = eventKey;
              done = true;
            }
            break;
          }
          if (done) break;
        }
      })
    );
  },
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
  const {
    money,
    population,
    happiness,
    environment,
    event,
    goBackwards,
    setEvent,
  } = useStore();
  const eventData = events[event];
  return (
    <>
      <br></br>
      <p>Resources</p>
      <p>Happiness level: {happiness}</p>
      <p>Money: ${money}</p>
      <p>Population: {population} people</p>
      <p>Environment: {environment}</p>

      <button className="backButton" onClick={() => goBackwards()}>
        Go Back
      </button>
      {Object.entries(eventData).map(([key, value]) => {
        return (
          eventData[key] && (
            <button
              className="button1"
              onClick={() => setEvent(eventData[key])}
            >
              {key[0].toUpperCase() + key.slice(1).toLowerCase()} Power
              <div className={`${key}TT`}>{`${events.description}`}</div>
            </button>
          )
        );
      })}
      {/* {eventData.solar && (
        <button
          className="button1"
          type="button"
          onClick={() => setEvent(eventData.solar)}
        >
          Solar Power
          <div className="solarTTB">
            <span className="solarTT">Money -20000</span>
          </div>
        </button>
      )}
      {eventData.nuclear && (
        <button
          className="button2"
          type="button"
          onClick={() => setEvent(eventData.nuclear)}
        >
          Nuclear power
          <div className="nuclearTTB">
            <span className="nuclearTT">Money -40000</span>
          </div>
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
      )} */}
    </>
  );
}
