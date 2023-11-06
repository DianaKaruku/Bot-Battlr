import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching bots:', error);
      });
  }, []);

  const addToArmy = (bot) => {
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  }

  const releaseBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  }

  const showBotDetails = (bot) => {
    setSelectedBot(bot);
  }

  return (
    <div className="App">
      <h1>Bot Collection</h1>
      <BotCollection bots={bots} onAddToArmy={addToArmy} onShowDetails={showBotDetails} />
      <YourBotArmy army={yourBotArmy} onRelease={releaseBot} />
      {selectedBot && <BotSpecs bot={selectedBot} />}
    </div>
  );
}

export default App;

