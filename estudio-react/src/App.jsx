

import './App.css'

function App() {
  const frutas = ["manzana", "pera", "naranja"];


  return (
    <>
      <div className="container-practica">
        <ul>
          {frutas.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
