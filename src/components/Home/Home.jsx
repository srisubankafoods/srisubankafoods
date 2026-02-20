import React from 'react'
import './Home.css'
import Images from './images.jsx'
function Home() {
  return (
    <>
    <div id="Home-page">
    <div className="homehead">
      <h1 className='h1'>Eat Smart. </h1>
      <h1 className='h11'>Eat Millets. </h1>
      <h4>"<em>Sustainable,healthy,and delicious choices for every day.</em>"</h4>
    </div>
    <Images />
    </div>
    </>
  )
}

export default Home