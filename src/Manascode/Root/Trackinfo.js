import React from 'react'
import './Tracks.css'
import {  Link } from 'react-router-dom';
const Trackinfo = () => {
    
   
  return (
    <div className='backg'>
            <div>
                <h1>Track 1</h1>
                <p>Inner peace is more essential than external peace. Meditation is one way to achieve it. Lets listen to this track</p>
                    <Link className='a1' to='/aud1'>Play</Link>
                
            </div>
            <div>
                <h1>Track 2</h1>
                <p>Meditation  help put you on the road to increased well-being and added mindfulness in just about no time.Enjoy the stillness and breath in this environment by listening to this track</p>
                <Link className='a1' to='/aud2'>Play</Link>
                
            </div>
            <div>
                <h1>Track 3</h1>
                <p>Meditation reducing negativity, and increasing patience, imagination and self-awareness. Is is something which every one must do to improve meantal and physical health.
                Meditation can boost self-compassion, resilience, memory and other qualities that help improve self-esteem.
                </p>
                    <Link className='a1' to='/aud3'>Play</Link>
                
            </div>
            
        </div>
  )
}

export default Trackinfo
