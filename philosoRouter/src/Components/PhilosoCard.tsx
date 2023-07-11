import React from 'react';

interface PhilosoCardProps {
    name: string;
    date: string;
    life: string;
    ideas: string;
}

const PhilosoCard = ({name, date, life, ideas}: PhilosoCardProps) => {
  return (
    <div className="card">
        <h1>{name}</h1>
        <h3>{date}</h3>
        <img></img>
        <section>
            <h2>Life and Times</h2>
            <ul>{life}</ul>
        </section>
        <section>
            <h2>Main Contributions to Philosophy</h2>
            <ul>{ideas}</ul>
        </section>
    </div>
  )
}

export default PhilosoCard