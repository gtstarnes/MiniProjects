import React from 'react';

interface PhilosoCardProps {
    name: string;
    date: string;
    life: string[];
    ideas: string[];
}

const PhilosoCard = ({name, date, life, ideas}: PhilosoCardProps) => {
  return (
    <div className="card">
        <h1>{name}</h1>
        <h3>{date}</h3>
        <img></img>
        <section>
            <h2>Main Contributions to Philosophy</h2>
            <ul>
                {ideas.map((idea, id) => (
                    <li key={id}>{idea}</li>
                ))}
            </ul>
        </section>
        <section>
            <h2>Life and Times</h2>
            <ul>
                {life.map((event, id) => (
                    <li key={id}>{event}</li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default PhilosoCard