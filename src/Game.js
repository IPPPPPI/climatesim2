import produce from "immer";
import { useEffect, useState } from "react";
import { create } from "zustand";

const events = {
  initial: {
    description:
      "Hello, I am your You are the newly elected mayor of Oaktown, a town who is in the middle of a climate disaster. Now you will be making decision for the next four years. Good Luck Mr.Mayor!",
    yes: "gascars_question",
    no: "sad",
  },
  gascars_question: {
    description: "Do you want to ban Gas Car within the city limit?",
    statsChanges: {
      money: -20,
    },
    yes: "allow_cars",
  },
  gets_cars: {
    description:
      "Okay, I am sure the motorist would be fine with this decision rightttttt. Man no",
  },
};

const useStore = create((set, get) => ({
  money: 0,
  population: 1000,
  event: "initial",
  setEvent: (event) => {
    set(
      produce((state) => {
        state.event = event;
        Object.entries(events[event].statsChanges).forEach(([key, value]) => {
          state[key] += value;
        });
      })
    );
  },
}));

export default function Game() {
  const { money, population, event, setEvent } = useStore();
  const eventData = events[event];
  return (
    <>
      <p>{eventData.description}</p>
      {money}
      {eventData.yes && (
        <button type="button" onClick={() => setEvent(eventData.yes)}>
          Yes
        </button>
      )}
      {eventData.no && (
        <button type="button" onClick={() => setEvent(eventData.no)}>
          No
        </button>
      )}
    </>
  );
}
