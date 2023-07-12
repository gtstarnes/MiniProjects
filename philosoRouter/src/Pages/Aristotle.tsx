import React from 'react';
import { Link } from 'react-router-dom';
import { aristotle } from '../PhilosoInfo';
import PhilosoCard from '../Components/PhilosoCard';

const Aristotle = () => {
  return (
    <div> 
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socrates">Socrates</Link></li>
            <li><Link to="/plato">Plato</Link></li>
            <li><Link to="/aristotle">Aristotle</Link></li>
            </ul>
        </nav>
        <PhilosoCard name={aristotle.name} date={aristotle.date} life={aristotle.life} ideas={aristotle.ideas} />
    </div>
  )
}

export default Aristotle