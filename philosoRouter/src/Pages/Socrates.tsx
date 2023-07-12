import React from 'react';
import { Link } from 'react-router-dom';
import { socrates } from '../PhilosoInfo';
import PhilosoCard from '../Components/PhilosoCard';

const Socrates = () => {
  return (
    <div>
        <nav>
            <ul className="flex justify-center gap-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plato">Plato</Link></li>
            <li><Link to="/aristotle">Aristotle</Link></li>
            </ul>
        </nav>
        <PhilosoCard name={socrates.name} date={socrates.date} life={socrates.life} ideas={socrates.ideas} />
    </div>
  )
}

export default Socrates