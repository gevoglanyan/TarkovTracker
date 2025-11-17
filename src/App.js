import React, { useState } from "react";
import "./App.css";

export default function App() {
  const tasksByTrader = {
    Therapist: [
      { name: "First in Line", requirements: " ", Level: 1 },
      { name: "Shortage", requirements: "First in Line", Level: 1, image:"Zavala.jpg"},
      { name: "Sanitary Standards - Part 1", requirements: "Shortage", Level: 4 },
    ],
    Prapor: [
      { name: "Shooting Cans", requirements: " ", Level: 1 },
      { name: "Debut", requirements: "Shooting Cans", Level: 2 },
      { name: "Luxurious Life", requirements: "Debut", Level: 1 },
      { name: "Background Check", requirements: "Luxurious Life", Level: 2 },
      { name: "Delivery From the Past", requirements: "Background Check", Level: 5 },
      { name: "BP Depot", requirements: "Delivery From the Past", Level: 5 },
      { name: "Belka and Strelka", requirements: "BP Depot", Level: 5 },
      { name: "Search Mission", requirements: "Debut", Level: 5 },
      { name: "Shootout Picnic", requirements: "Background Check", Level: 3, image:"Zavala.jpg"},
    ],
    Skier: [
      { name: "Burning Rubber", requirements: " ", Level: 1 },
      { name: "Supplier", requirements: "Burning Rubber", Level: 5 },
    ],
    Mechanic: [
      { name: "Saving the Mole", requirements: " ", Level: 2 },
      { name: "Gunsmith - Part 1", requirements: "Saving the Mole", Level: 2 },
      { name: "Gunsmith - Part 2", requirements: "Gunsmith - Part 1", Level: 5 },
      { name: "Introduction", requirements: "Gunsmith - Part 1:", Level: 2 },
      { name: "Friend from Norvinsk - Part 1", requirements: "Introduction", Level: 5 },
      { name: "Friend from Norvinsk - Part 2", requirements: "Friend from Norvinsk - Part 1", Level: 5 },
      { name: "Friend from Norvinsk - Part 3", requirements: "Friend from Norvinsk - Part 2", Level: 5 },
      { name: "Friend from Norvinsk - Part 4", requirements: "Friend from Norvinsk - Part 3", Level: 5 },
      { name: "Friend from Norvinsk - Part 5", requirements: "Friend from Norvinsk - Part 4", Level: 5 },
      { name: "Breathing Room", requirements: "Friend from Norvinsk - Part 5", Level: 5 },
      { name: "Progression Difficulties - Part 1", requirements: "Game Review - Part 1", Level: 5 },
      { name: "Progression Difficulties - Part 2", requirements: "Progression Difficulties - Part 1", Level: 5 },
      { name: "Last Spurt - Pioneer", requirements: "Game Review - Part 2", Level: 5 },
      { name: "Friend from Norvinsk - Alternative Solution", requirements: "Friend from Norvinsk - Part 3", Level: 5 },
      { name: "Game Review - Part 1", requirements: "Breathing Room", Level: 5 },
      { name: "Game Review - Part 2", requirements: "Progression Difficulties - Part 2", Level: 5 },
      { name: "Game Review - Part 3", requirements: "Last Spurt - Pioneer", Level: 5 },
    ],
    Jaeger: [
      { name: "The Tarkov Shooter - Part 1", requirements: "Acquaintance", Level: 2 },
      { name: "The Tarkov Shooter - Part 2", requirements: "The Tarkov Shooter - Part 1: ", Level: 2 },
      { name: "The Tarkov Shooter - Part 3", requirements: "The Tarkov Shooter - Part 2", Level: 2 },
      { name: "The Tarkov Shooter - Part 4", requirements: "The Tarkov Shooter - Part 3", Level: 2 },
      { name: "The Tarkov Shooter - Part 5", requirements: "The Tarkov Shooter - Part 4", Level: 2 },
      { name: "The Tarkov Shooter - Part 6", requirements: "The Tarkov Shooter - Part 5", Level: 2 },
      { name: "The Tarkov Shooter - Part 7", requirements: "The Tarkov Shooter - Part 6", Level: 2 },
      { name: "The Tarkov Shooter - Part 8", requirements: "The Tarkov Shooter - Part 7", Level: 2 },
      { name: "Acquaintance", requirements: "Introduction", Level: 2 },
      { name: "The Survivalist Path - Unprotected but Dangerous", requirements: "Acquaintance", Level: 2 },
      { name: "The Survivalist Path - Thrifty", requirements: "The Survivalist Path - Unprotected but Dangerous", Level: 2 },
      { name: "The Survivalist Path - Zhivchik", requirements: "The Survivalist Path - Thrifty", Level: 2 },
      { name: "The Survivalist Path - Wounded Beast", requirements: "The Survivalist Path - Zhivchik", Level: 2 },
      { name: "The Survivalist Path - Tough Guy", requirements: "The Survivalist Path - Wounded Beast", Level: 2 },
      { name: "The Survivalist Path - Cold Blooded", requirements: "The Survivalist Path - Wounded Beast", Level: 2 },
      { name: "The Survivalist Path - Eagle-Owl", requirements: "The Survivalist Path - Tough Guy", Level: 2 },
      { name: "The Survivalist Path - Combat Medic", requirements: "The Survivalist Path - Eagle-Owl", Level: 2 },
      { name: "The Survivalist Path - Junkie", requirements: "The Survivalist Path - Combat Medic", Level: 2 },
      { name: "The Huntsman Path - Trophy", requirements: "The Huntsman Path - Secured Perimeter", Level: 2 },
      { name: "The Huntsman Path - Forest Cleaning", requirements: "The Huntsman Path - Secured Perimeter", Level: 2 },
      { name: "The Huntsman Path - Controller", requirements: "The Huntsman Path - Forest Cleaning", Level: 2 },
      { name: "The Huntsman Path - Justice", requirements: "The Huntsman Path - Trophy, Active", Level: 2 },
      { name: "The Huntsman Path - Evil Watchman", requirements: "The Huntsman Path - Forest Cleaning", Level: 2 },
      { name: "Rough Tarkov", requirements: "Acquaintance", Level: 2 },
      { name: "Every Hunter Knows This", requirements: "Rough Tarkov", Level: 2 },
      { name: "Work Smarter", requirements: "Acquaintance", Level: 2 },
      { name: "Rite of Passage", requirements: "Work Smarter", Level: 2 },
      { name: "The Huntsman Path - Secured Perimeter", requirements: "The Tarkov Shooter - Part 3, The Survivalist Path - Tough Guy", Level: 2 },
      { name: "The Delicious Sausage", requirements: "The Survivalist Path - Thrifty", Level: 5 },
      { name: "Claustrophobia", requirements: "The Huntsman Path - Forest Cleaning", Level: 2 },
    ],
    Fence: [
      { name: "External Interest", requirements: "Progression Difficulties - Part 2", Level: 5 }
    ]
  };

  const [completed, setCompleted] = useState([]);
  const [openTraders, setOpenTraders] = useState({});
  const [infoTask, setInfoTask] = useState(null); 

  let touchTimeout;

  const handleTouchStart = (task) => {
    touchTimeout = setTimeout(() => {
      setInfoTask(task); 
    }, 500);
  };

  const handleTouchEnd = () => {
    clearTimeout(touchTimeout); 
  };

  const toggleTask = (taskName) => {
    if (completed.includes(taskName)) {
      setCompleted(completed.filter((t) => t !== taskName));
    } else {
      setCompleted([...completed, taskName]);
    }
  };

  const toggleTrader = (trader) => {
    setOpenTraders({ ...openTraders, [trader]: !openTraders[trader] });
  };

  const handleRightClick = (e, task) => {
    e.preventDefault(); 
    setInfoTask(task);
  };

  const totalTasks = Object.values(tasksByTrader).flat().length;

  return (
    <div className="app-wrapper">
      <h1 className="title">Tarkov Quest Tracker</h1>

      <br />

      <h2 className="subtitleWhite">
        Left Click = <span className="subtitleGreen">Completed</span>
      </h2>
      <h2 className="subtitleWhite">
        Right Click = <span className="subtitleGreen">More Information</span>
      </h2>

      <br />

      <h2 className="subtitleWhite">
        Note - <span className="subtitleGreen">On Mobile Hold Task</span>
      </h2>
  
      <br /> <br />

      <div className="tasks-container container">
        {Object.keys(tasksByTrader).map((trader) => (
          <div key={trader} className="trader-section">
            <h2 className="trader-title" onClick={() => toggleTrader(trader)}>
              {trader} <span className="toggle-arrow">{openTraders[trader] ? "-" : "+"}</span>
            </h2>

            {openTraders[trader] && (
              <div className="tasks-list">
                <div className="level-range">
                  Level Requirement: {Math.min(...tasksByTrader[trader].map(t => t.Level))} - {Math.max(...tasksByTrader[trader].map(t => t.Level))}
                </div>
                {tasksByTrader[trader].map((task) => (
                  <div
                    key={task.name}
                    className={`task-box ${completed.includes(task.name) ? "completed" : ""}`}
                    onClick={() => toggleTask(task.name)}        
                    onContextMenu={(e) => handleRightClick(e, task)} 
                    onTouchStart={() => handleTouchStart(task)}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="task-header">
                      <div className="task-name">{task.name}</div>

                      {task.requirements && task.requirements.trim() !== "" && (
                        <div className="task-step">
                          Complete: {task.requirements.replace(/: /g, " → ")}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

              </div>
            )}
          </div>
        ))}
      </div>

      {infoTask && (
        <div className="task-info-overlay" onClick={() => setInfoTask(null)}>
          <div className="task-info-box">
            <h3>{infoTask.name}</h3>
            <p><strong>Complete:</strong> {infoTask.requirements || "None"}</p>
            <p><strong>Level Requirement:</strong> {infoTask.Level || "N/A"}</p>

            <br />

            {infoTask.image && (
              <img
                src={`/images/${infoTask.image}`}
                alt={infoTask.name}
                style={{ maxWidth: "50%", marginTop: "10px", borderRadius: "8px" }}
              />
            )}

            <br /> <br />

            <p><strong>Objective:</strong></p>

            <button onClick={() => setInfoTask(null)}>Close</button>
          </div>
        </div>
      )}

      <br /> <br />

      <div className="tracking-container container">
        <div className="progress-box">
          <span className="progress-count">{completed.length}</span> / <span className="progress-total">{totalTasks}</span> Tasks Completed
        </div>
      </div>

      <br /> <br />

      <h1 className="footer">
        Website Created by&nbsp; 
        <a href="https://gevoglanyan.com" target="_blank" rel="noopener noreferrer">
          Harutyun Gevoglanyan
        </a>
      </h1>

    </div>
  );
}
