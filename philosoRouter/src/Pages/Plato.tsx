import React from 'react';
import { Link } from 'react-router-dom';
import { plato } from '../PhilosoInfo';
import PhilosoCard from '../Components/PhilosoCard';

const Plato = () => {
  return (
    <div>
        <nav>
          <ul className="flex justify-center gap-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socrates">Socrates</Link></li>
            <li><Link to="/aristotle">Aristotle</Link></li>
          </ul>
        </nav>
        <PhilosoCard name={plato.name} date={plato.date} summary={plato.summary} life={plato.life} ideas={plato.ideas} />

    </div>
  )
}

export default Plato