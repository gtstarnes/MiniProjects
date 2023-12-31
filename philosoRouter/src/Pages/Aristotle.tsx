import React from 'react';
import { Link } from 'react-router-dom';
import { aristotle } from '../PhilosoInfo';
import PhilosoCard from '../Components/PhilosoCard';

const Aristotle = () => {
  return (
    <div> 
        <nav>
          <ul className="flex justify-center gap-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socrates">Socrates</Link></li>
            <li><Link to="/plato">Plato</Link></li>
          </ul>
        </nav>
        <PhilosoCard name={aristotle.name} date={aristotle.date} summary={aristotle.summary} life={aristotle.life} ideas={aristotle.ideas} />
    </div>
  )
}

export default Aristotle