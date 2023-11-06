import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ army, onRelease }) => {
  return (
    <div className="YourBotArmy">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <Bot bot={bot} />
          <button onClick={() => onRelease(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
