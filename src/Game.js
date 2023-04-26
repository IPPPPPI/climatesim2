import React, { useState } from "react";
import image from "./org_cat.png";

/*Template
  {
    id: "0",
    name: "",
    effects: {
      population: 0,
      happiness: 0,
      environment: 0,
      money: 0,
      year: 0,
      yeargrowth: 0,
      populationgrowth: 0,
      happinessgrowth: 0,
      environmentgrowth: 0,
      moneygrowth: 0,
    },
    children: [],
  },
*/

// Define the data model
const technologyTreeData = [
  {
    id: "0",
    name: "Eletric Car",
    effects: {
      population: 0,
      happiness: 10,
      environment: -10,
      money: -1000,
      year: 0,
      yeargrowth: 0,
      populationgrowth: 0,
      happinessgrowth: 5,
      environmentgrowth: 5,
      moneygrowth: 0,
    },
    children: [
      {
        id: "1",
        name: "Battery",
        effects: {
          population: 0,
          happiness: 10,
          environment: -25,
          money: -100,
          year: 0,
          yeargrowth: 0,
          populationgrowth: 0,
          happinessgrowth: 0,
          environmentgrowth: -10,
          moneygrowth: 50,
        },
        children: [
          {
            id: "2",
            name: "Solar Panel",
            effects: {
              population: 0,
              happiness: 0,
              environment: -10,
              money: -100,
              year: 0,
              yeargrowth: 0,
              populationgrowth: 0,
              happinessgrowth: 5,
              environmentgrowth: 5,
              moneygrowth: 0,
            },
            children: [],
          },
          {
            id: "3",
            name: "Wind turbine",
            effects: {
              population: 100,
              happiness: 0,
              environment: -10,
              money: -100,
              year: 0,
              yeargrowth: 0,
              populationgrowth: 0,
              happinessgrowth: 5,
              environmentgrowth: 5,
              moneygrowth: 0,
            },
            children: [],
          },
          {
            id: "4",
            name: "Hydro power",
            effects: {
              population: 100,
              happiness: 0,
              environment: -15,
              money: -100,
              year: 0,
              yeargrowth: 0,
              populationgrowth: 0,
              happinessgrowth: 10,
              environmentgrowth: 10,
              moneygrowth: 0,
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Gas Car",
    effects: {
      population: 100,
      happiness: 10,
      environment: -20,
      money: -100,
      year: 0,
      yeargrowth: 0,
      populationgrowth: -20,
      happinessgrowth: 10,
      environmentgrowth: -10,
      moneygrowth: 100,
    },
    children: [
      {
        id: "7",
        name: "Internal Engine",
        effects: {
          population: 0,
          happiness: 0,
          environment: -5,
          money: -50,
          year: 0,
          yeargrowth: 0,
          populationgrowth: 0,
          happinessgrowth: 0,
          environmentgrowth: -2,
          moneygrowth: 0,
        },
        children: [
          {
            id: "8",
            name: "Oil drilling",
            effects: {
              population: -200,
              happiness: 0,
              environment: -20,
              money: -50,
              year: 0,
              yeargrowth: 0,
              populationgrowth: 0,
              happinessgrowth: -10,
              environmentgrowth: -20,
              moneygrowth: 100,
            },
            children: [],
          },
          {
            id: "10",
            name: "Oil refining",
            effects: {
              population: 100,
              happiness: 0,
              environment: -10,
              money: -50,
              year: 0,
              yeargrowth: 0,
              populationgrowth: 0,
              happinessgrowth: 0,
              environmentgrowth: -10,
              moneygrowth: 100,
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "13",
    name: "Train",
    effects: {
      population: 100,
      happiness: 10,
      environment: 0,
      money: -200,
      year: 0,
      yeargrowth: 0,
      populationgrowth: 10,
      happinessgrowth: 5,
      environmentgrowth: -10,
      moneygrowth: 100,
    },
    children: [
      {
        id: "15",
        name: "Steam Engine",
        effects: {
          population: 100,
          happiness: 10,
          environment: 0,
          money: -100,
          year: 0,
          yeargrowth: 0,
          populationgrowth: 0,
          happinessgrowth: 0,
          environmentgrowth: -5,
          moneygrowth: 0,
        },
        children: [
          {
            id: "16",
            name: "Steel refining",
            effects: {
              population: 100,
              happiness: 0,
              environment: 0,
              money: -10,
              year: 0,
              yeargrowth: 0,
              populationgrowth: -10,
              happinessgrowth: 10,
              environmentgrowth: -20,
              moneygrowth: 0,
            },
            children: [
              {
                id: "17",
                name: "Coal Mining",
                effects: {
                  population: 200,
                  happiness: 0,
                  environment: 0,
                  money: 100,
                  year: 0,
                  yeargrowth: 0,
                  populationgrowth: -50,
                  happinessgrowth: 0,
                  environmentgrowth: -20,
                  moneygrowth: 200,
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "19",
    name: "Nuclear Waste Treatment",
    effects: {
      population: 20,
      happiness: -5,
      environment: -5,
      money: -2000,
      year: 0,
      yeargrowth: 0,
      populationgrowth: 10,
      happinessgrowth: -5,
      environmentgrowth: 30,
      moneygrowth: 1000,
    },
    children: [
      {
        id: "20",
        name: "Nuclear reactor",
        effects: {
          population: 0,
          happiness: 0,
          environment: -2,
          money: 0,
          year: -100,
          yeargrowth: 0,
          populationgrowth: 0,
          happinessgrowth: 0,
          environmentgrowth: 0,
          moneygrowth: 0,
        },
        children: [
          {
            id: "21",
            name: "Uranium Enrichment",
            effects: {
              population: 10,
              happiness: 0,
              environment: -5,
              money: -100,
              year: 0,
              yeargrowth: 0,
              populationgrowth: 10,
              happinessgrowth: 0,
              environmentgrowth: -5,
              moneygrowth: 0,
            },
            children: [
              {
                id: "22",
                name: "Uranium mining",
                effects: {
                  population: 200,
                  happiness: 0,
                  environment: 0,
                  money: -50,
                  year: 0,
                  yeargrowth: 0,
                  populationgrowth: 10,
                  happinessgrowth: 5,
                  environmentgrowth: -50,
                  moneygrowth: 20,
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Define the Stats component
const Stats = ({
  year,
  population,
  happiness,
  environment,
  money,
  yeargrowth,
  populationgrowth,
  happinessgrowth,
  environmentgrowth,
  moneygrowth,
}) => {
  return (
    <div className="statDisplay">
      <h2>Stats</h2>
      <p>Year: {year}</p>
      <p>Population: {population}</p>
      <p>Happiness: {happiness}</p>
      <p>Environment: {environment}</p>
      <p>Money: {money}</p>
      <p>Year Growth: {yeargrowth}</p>
      <p>Population Growth: {populationgrowth}</p>
      <p>Happiness Growth: {happinessgrowth}</p>
      <p>Environment Growth: {environmentgrowth}</p>
      <p>Money Growth: {moneygrowth}</p>
    </div>
  );
};

//Check the user's prerequisite research requirement and confirms if the user has already research it
//example:blocks user from research eletric car without battery
const TechnologyNode = ({ node, onClick }) => {
  const [researched, setResearched] = useState(node.researched);

  const handleClick = () => {
    if (canResearch(node)) {
      onClick(node.effects);
      setResearched(true);
      node.researched = true;
    } else {
      alert("You must research all prerequisites first!");
    }
  };

  const canResearch = (node) => {
    if (node.children.length === 0) {
      return true;
    }
    return node.children.every((child) => {
      return child.researched;
    });
  };

  return (
    <div>
      <p>{node.name}</p>
      <button className="tooltip" onClick={handleClick}>
        {researched ? "Researched" : "Research"}
        <span className="tooltiptext">
          Cost:{" "}
          {Object.entries(node.effects)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ")}
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
    <div className="screen">
      <h1>Tech Tree</h1>
      {treeData.map((node) => (
        <TechnologyNode key={node.id} node={node} onClick={onClick} />
      ))}
    </div>
  );
};

const App = () => {
  // Initialize the stats state
  const [stats, setStats] = useState({
    year: 2000,
    population: 1000,
    happiness: 50,
    environment: 50,
    money: 300,
    moneygrowth: 200,
    happinessgrowth: 5,
    environmentgrowth: -10,
    yeargrowth: 1,
    populationgrowth: 50,
  });

  // Define the onClick function (for tech)
  const handleNodeClick = (effects) => {
    setStats((prevState) => {
      return {
        year: prevState.year + effects.year,
        population: prevState.population + effects.population,
        happiness: prevState.happiness + effects.happiness,
        environment: prevState.environment + effects.environment,
        money: prevState.money + effects.money,
        yeargrowth: stats.yeargrowth + effects.yeargrowth,
        populationgrowth: prevState.populationgrowth + effects.populationgrowth,
        moneygrowth: stats.moneygrowth + effects.moneygrowth,
        happinessgrowth: stats.happinessgrowth + effects.happinessgrowth,
        environmentgrowth: stats.environmentgrowth + effects.environmentgrowth,
      };
    });
  };

  const yearClick = () => {
    setStats((prevState) => {
      return {
        year: prevState.year + stats.yeargrowth,
        population: prevState.population + stats.populationgrowth,
        happiness: prevState.happiness + stats.happinessgrowth,
        environment: prevState.environment + stats.environmentgrowth,
        money: prevState.money + stats.moneygrowth,
        yeargrowth: stats.yeargrowth,
        populationgrowth: stats.populationgrowth,
        moneygrowth: stats.moneygrowth,
        happinessgrowth: stats.happinessgrowth,
        environmentgrowth: stats.environmentgrowth,
      };
    });
  };

  // Define the GameOver component
  const GameOver = () => {
    return (
      <div>
        <h1>Game Over</h1>
        <p>Your stats have reached zero. Please try again.</p>
      </div>
    );
  };

  // Check if any stat has reached zero and render the GameOver component if true
  // year limit is set to 20 year starting from 2000
  if (
    stats.year >= 2020 ||
    stats.population <= 0 ||
    stats.happiness <= 0 ||
    stats.environment <= 0 ||
    stats.money <= 0
  ) {
    return <GameOver />;
  }

  // Render the TechnologyTree and Stats components if the game is not over
  return (
    <>
      <Stats {...stats} />
      <img src={image} alt=""></img>
      <TechnologyTree treeData={technologyTreeData} onClick={handleNodeClick} />
      <button onClick={yearClick}>Next Year</button>
    </>
  );
};

export default App;
