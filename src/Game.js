import produce from "immer";
import { create } from "zustand";
import "./App.css";

//events for the games that will run down
const events = {
  initial: {
    description:
      "Hello, I am your secertary. You are the newly elected mayor of Oaktown, a town who is in the middle of a climate disaster. Now you will be making decision for the next four years. Good Luck Mayor!",
    yes: "gascars_question",
  },
  gascars_question: {
    description: "Do you want to ban Gas Car within the city limit?",
    yes: "banned_cars",
    no: "allowed_cars",
  },
  banned_cars: {
    description:
      "Okay, I am sure our car driver won't get mad right? It seem our major party donor had left. Not suprising. We got to save the environment first." +
      " Anyway, next agenda in the list, Should we subsidize 'more tree in the city' petition? ",
    statsChanges: {
      money: -20000,
      happiness: 5,
      environment: 3,
    },
    yes: "allow_trees",
    no: "no_trees",
  },
  allowed_cars: {
    description:
      "Good choice, I mean in what kind of person bans car the first thing in their mayor term? I mean that is asking for trouble." +
      " Oh right I just checked the our government fund, someone just donated 100,000 dollar." +
      " Next agenda on the list, we have recieved a subsidize 'more tree in the city' petition. It seem our party sponsor want us to reject the Bill.",
    statsChanges: {
      money: 100000,
      happiness: -2,
      environment: -3,
    },
    yes: "allow_trees",
    no: "no_trees",
  },
  allow_trees: {
    description:
      "Who doesn't like trees for shade. I am sure people are happy from this decision." +
      "WOW, what was that shake? Oh it seem a nearby city was struck with a major earthquake. Luckily we were pretty far from the center." +
      "It seem a report had came out that a nearby coal plants collapsed due to the earthquake. Should we use this opptunity to replace it with Solar?",
    statsChanges: {
      money: -1000,
      happiness: 5,
      environment: 5,
    },
    yes: "replace_coal",
    no: "don't_replace_coal",
  },
  no_trees: {
    description:
      "Really? I mean we have to save money somehow I guess." +
      "WOW, what was that shake? Oh it seem a nearby city was struck with a major earthquake. Luckily we were pretty far from the center." +
      "It seem a report had came out that a nearby coal plants collapsed due to the earthquake. Should we use this opptunity to replace it with Solar?",
    statsChanges: {
      happiness: -20,
    },
    yes: "replace_coal",
    no: "don't_replace_coal",
  },
};

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
      <p>{eventData.description}</p>
      <br></br>
      <p>Resources</p>
      <p>Happiness level: {happiness}</p>
      <p>Money: ${money}</p>
      <p>Population: {population} people</p>
      <p>Environment: {environment} level</p>

      {eventData.yes && (
        <button
          className="button1"
          type="button"
          onClick={() => setEvent(eventData.yes)}
        >
          Yes
        </button>
      )}
      {eventData.no && (
        <button
          className="button2"
          type="button"
          onClick={() => setEvent(eventData.no)}
        >
          No
        </button>
      )}
    </>
  );
}
