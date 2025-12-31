import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Lukas Hezel Portfolio</h1>
      </header>
      <body>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Work in Progress (as you can tell lol)...
          </p>
        </div>
      </body>
    </>
  )
}

