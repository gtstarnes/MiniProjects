import React from 'react';

interface PhilosoCardProps {
    name: string;
    date: string;
    summary: string;
    life: string[];
    ideas: string[];
}

const PhilosoCard = ({name, date, summary, life, ideas}: PhilosoCardProps) => {
  return (
    <div className="card flex flex-col gap-4 w-[90%] mx-auto bg-[#F9F6F0] rounded-md p-8 shadow-md">
        <h1 className="self-center text-6xl">{name}</h1>
        <h3 className="self-center mt-[-10px]">{date}</h3>
        <img></img>
        <section>
            <h2>Summary</h2>
            <p>{summary}</p>
        </section>
        <section>
            <h2 className="text-lg font-bold">Main Contributions to Philosophy</h2>
            <ul className="list-disc ml-8">
                {ideas.map((idea, id) => (
                    <li key={id}>{idea}</li>
                ))}
            </ul>
        </section>
        <section>
            <h2 className="text-lg font-bold">Life and Times</h2>
            <ul className="list-disc ml-8">
                {life.map((event, id) => (
                    <li key={id}>{event}</li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default PhilosoCard