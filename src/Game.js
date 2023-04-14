import React, { useState } from "react";

// Define the data model
const technologyTreeData = [
  {
    id: "1",
    name: "Technology 1",
    effects: {
      population: 10,
      happiness: 5,
      environment: -5,
      money: -50,
      year: 5,
    },
    children: [
      {
        id: "2",
        name: "Technology 2",
        effects: {
          population: 20,
          happiness: 10,
          environment: -10,
          money: -100,
          year: 3,
        },
        children: [],
      },
      {
        id: "3",
        name: "Technology 3",
        effects: {
          population: 30,
          happiness: 15,
          environment: -15,
          money: -150,
          year: 2,
        },
        children: [],
      },
    ],
  },
  {
    id: "4",
    name: "Technology 4",
    effects: {
      population: 50,
      happiness: 25,
      environment: -25,
      money: -250,
      year: -5,
    },
    children: [],
  },
];

// Define the Stats component
const Stats = ({ year, population, happiness, environment, money }) => {
  return (
    <div>
      <h2>Stats</h2>
      <p>Year: {year}</p>
      <p>Population: {population}</p>
      <p>Happiness: {happiness}</p>
      <p>Environment: {environment}</p>
      <p>Money: {money}</p>
    </div>
  );
};

// Define the TechnologyNode component
const TechnologyNode = ({ node, onClick }) => {
  const [researched, setResearched] = useState(false);

  const handleClick = () => {
    if (!researched) {
      onClick(node.effects);
      setResearched(true);
    }
  };

  return (
    <div>
      <h3>{node.name}</h3>
      <button className="tooltip" onClick={handleClick}>
        {researched ? "Researched" : "Research"}
        <span className="tooltiptext">
          Effects: {JSON.stringify(node.effects)}
        </span>
      </button>
      {node.children.map((child) => (
        <TechnologyNode key={child.id} node={child} onClick={onClick} />
      ))}
    </div>
  );
};

// Define the TechnologyTree component
const TechnologyTree = ({ treeData, onClick }) => {
  return (
    <div>
      <h1>Technology Tree</h1>
      {treeData.map((node) => (
        <TechnologyNode key={node.id} node={node} onClick={onClick} />
      ))}
    </div>
  );
};

// Define the App component
const App = () => {
  // Initialize the stats state
  const [stats, setStats] = useState({
    year: 2000,
    population: 100,
    happiness: 50,
    environment: 50,
    money: 500,
  });

  // Define the onClick function
  const handleNodeClick = (effects) => {
    setStats((prevState) => {
      return {
        year: prevState.year + effects.year,
        population: prevState.population + effects.population,
        happiness: prevState.happiness + effects.happiness,
        environment: prevState.environment + effects.environment,
        money: prevState.money + effects.money,
      };
    });
  };

  return (
    <div>
      <TechnologyTree treeData={technologyTreeData} onClick={handleNodeClick} />
      <Stats {...stats} />
    </div>
  );
};

export default App;
