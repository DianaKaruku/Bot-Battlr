import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, onAddToArmy, onShowDetails }) => {
  return (
    <div className="BotCollection">
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} onShowDetails={onShowDetails} />
      ))}
    </div>
  );
};

export default BotCollection;
