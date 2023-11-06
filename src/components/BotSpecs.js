import React from 'react';

const BotSpecs = ({ bot }) => {
  return (
    <div className="BotSpecs">
      <h2>{bot.name}'s Details</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
  );
};

export default BotSpecs;
