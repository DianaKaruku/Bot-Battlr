import React from 'react';

const Bot = ({ bot, onAddToArmy, onShowDetails }) => {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="Bot">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      <button onClick={() => onShowDetails(bot)}>Show Details</button>
    </div>
  );
};

export default Bot;
