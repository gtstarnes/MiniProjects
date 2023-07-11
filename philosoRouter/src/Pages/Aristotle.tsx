import React from 'react';
import { Link } from 'react-router-dom';

const Aristotle = () => {
  return (
    <div>
        <p>Aristotle</p>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socrates">Socrates</Link></li>
            <li><Link to="/plato">Plato</Link></li>
            <li><Link to="/aristotle">Aristotle</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Aristotle