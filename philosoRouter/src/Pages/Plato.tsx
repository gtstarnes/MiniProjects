import React from 'react';
import { Link } from 'react-router-dom';
import { plato } from '../PhilosoInfo';
import PhilosoCard from '../Components/PhilosoCard';

const Plato = () => {
  return (
    <div>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socrates">Socrates</Link></li>
            <li><Link to="/aristotle">Aristotle</Link></li>
            </ul>
        </nav>
        <PhilosoCard name={plato.name} date={plato.date} life={plato.life} ideas={plato.ideas} />
    </div>
  )
}

export default Plato