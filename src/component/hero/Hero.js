import React from 'react'
import './Hero.css'
import { BiSearch } from 'react-icons/bi'
import Video from '../../assets/videoBg.mp4'
function Hero() {

    const submit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="hero">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            {/* <video src={Video} autoPlay loop muted></video> */}
            <div className='overlay'></div>
            <div className='content'>
                <h1>First Class Travel</h1>
                <h2>Top 1% location WorldWide</h2>
                <form className='form' onSubmit={submit}>
                    <div>
                        <input type='text' placeholder='Search Destinations'></input>
                    </div>
                    <div>
                        <button><BiSearch className='icon' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero;