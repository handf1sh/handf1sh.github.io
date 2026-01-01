import { useState } from 'react'
import './App.css'

const carImgs = [
  "/carousel/TwoMonth_bg1.JPG",
  "/carousel/TwoMonth_bg2.JPG",
  "/carousel/TwoMonth_bg3.JPG",
  "/carousel/TwoMonth_bg4.JPG",
  "/carousel/TwoMonth_bg5.JPG"
];
const carAlts = [
  "This is image 1",
  "This is image 2",
  "This is image 3",
  "This is image 4",
  "This is image 5"
]
const carCaps = [
  "This is caption 1",
  "This is caption 2",
  "This is caption 3",
  "This is caption 4",
  "This is caption 5"
]

export default function App() {
  const [count, setCount] = useState(0)
  const [carIdx, setCarImg] = useState(0)
  const next = () => setCarImg((carIdx + 1) % carImgs.length);
  const prev = () => setCarImg((carIdx - 1 + carImgs.length) % carImgs.length);


  return (
    <>
      <header>
        <h1>Lukas Hezel Portfolio</h1>
      </header>
      <div className='body'>
        <div className="carousel"> 
          <button onClick={prev}>‹</button> 
          <div className="carImgCap"> 
            <div className="imgWrapper"> 
              <img src={carImgs[carIdx]} alt={carAlts[carIdx]} /> 
            </div> 
            <div className="caption"> 
              {carCaps[carIdx]}
            </div> 
          </div>
          <button onClick={next}>›</button> 
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Work in Progress (as you can tell lol)...
          </p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          
        </div>
      </div>
    </>
  )
}

