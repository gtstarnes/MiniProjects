import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <p className="font-bold">Hello World</p>
      <nav>
        <ul>
          <li><Link to="/socrates">Socrates</Link></li>
          <li><Link to="/plato">Plato</Link></li>
          <li><Link to="/aristotle">Aristotle</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default App
