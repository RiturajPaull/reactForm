import React from 'react'
import './Destinations.css'
import Borabora from '../../assets/borabora.jpg'
import Borabora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Keywest from '../../assets/keywest.jpg'
function Destinations() {
    return (
        <div className='destinations'>
            <div className='container'>
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean Best Beach</p>
                <div className='img-container'>
                    <img className="span-3 image-grid-row-2" src={Borabora} alt=''></img>
                    <img src={Borabora2} alt=''></img>
                    <img src={Maldives} alt=''></img>
                    <img src={Maldives2} alt=''></img>
                    <img src={Keywest} alt=''></img>

                </div>
            </div>
        </div>
    )
}

export default Destinations