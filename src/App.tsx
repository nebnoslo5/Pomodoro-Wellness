import { useState } from 'react'
import pushupGif from './assets/pushup-gif.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        {/* <div className="hero">
          
        </div> */}
        <img src={pushupGif} className="base" width="170" height="179" alt="" />
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
