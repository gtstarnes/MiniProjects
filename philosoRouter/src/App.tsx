import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="absolute text-6xl top-20 font-bold w-full text-center">PhiloCARDS</h1>
      <nav className="flex h-screen items-center justify-center w-full border">
        <ul className="flex align-middle gap-10">
          <li><Link to="/socrates">Socrates</Link></li>
          <li><Link to="/plato">Plato</Link></li>
          <li><Link to="/aristotle">Aristotle</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default App
