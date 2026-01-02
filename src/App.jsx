/* Imports *********************************************************/
import { useState } from 'react'
import './App.css'

/* Constants *******************************************************/
const carImgs = [
  "/carousel/TwoMonth_bg1.JPG",
  "/carousel/TwoMonth_bg2.JPG",
  "/carousel/TwoMonth_bg3.JPG",
  "/carousel/TwoMonth_bg4.JPG",
  "/carousel/TwoMonth_bg5.JPG",
  "/carousel/TwoMonthCollage.jpg"
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
  "This is caption 5",
  "A collage of images taken from an amateur high-altitude ballooning project I took part in."
]

/* Main Export *****************************************************/
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

      <div className='landing'>
        <p className='welcome'>
          Welcome!
        </p>
        <p>
          Thanks for visiting my personal portfolio webpage.
          I made it using React and base CSS, and I don't think it's too shabby for a side project.
          I'm using this page as a space to display the cool things I've done.
          Feel free to contact me or check out my profiles in these links:
        </p>
        <div className='links'>
          <a href="mailto:luke.hezel@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/luke-hezel-83545628a">LinkedIn</a>
          <a href="https://github.com/l-heze-l">Github</a>
        </div>
      </div>

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
        </div>
      </div>
    </>
  )
}

