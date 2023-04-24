import React, { useState } from "react";
import image from "./org_cat.png";
// Define the data model

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

const technologyTreeData = [
  {
    id: "0",
    name: "Advance Eletricity",
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
    children: [
      {
        id: "1",
        name: "Battery",
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
        children: [
          {
            id: "2",
            name: "Solar Panel",
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
          {
            id: "3",
            name: "Wind power",
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
          {
            id: "4",
            name: "Hydro power",
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
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Eletric Car",
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
    children: [
      {
        id: "6",
        name: "Gas Car",
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
        children: [
          {
            id: "7",
            name: "Internal Engine",
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
            children: [
              {
                id: "8",
                name: "Piston",
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
                children: [
                  {
                    id: "9",
                    name: "Basic Physics",
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
                ],
              },
              {
                id: "10",
                name: "Refined Oil",
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
                children: [
                  {
                    id: "11",
                    name: "Basic Industry",
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
                  {
                    id: "12",
                    name: "Basic Chemistry",
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
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "13",
    name: "Train",
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
    children: [
      {
        id: "14",
        name: "Railroad",
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
        children: [
          {
            id: "15",
            name: "Steam Engine",
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
            children: [
              {
                id: "16",
                name: "Steel refining",
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
                children: [
                  {
                    id: "17",
                    name: "Coal Refining",
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
                  {
                    id: "18",
                    name: "Material Study",
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
                ],
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
      <h1>Technology Tree</h1>
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
    population: 100,
    happiness: 50,
    environment: 50,
    money: 500,
    moneygrowth: 250,
    happinessgrowth: 25,
    environmentgrowth: 25,
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
  // year limit is set to 100 year starting from 2000
  if (
    stats.year >= 2100 ||
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
