import React from 'react'
import './Navbar.css'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { AiFillAlert } from 'react-icons/ai'
import { useState } from 'react'
function Navbar() {

    const [nav, setNav] = useState(false) ////Handling the  navbar in 940px size, then hiding and showing the nav-menu with a click
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h1>BEACHES.</h1>
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>
            <div className='nav-icons'>
                <BiSearch className="icon" style={{ marginRight: '1rem' }} />
                <BsPerson className="icon" />
            </div>
            <div className='hamburger' onClick={handleNav}>

                {!nav ? (<HiAcademicCap className='icon' />) : (<AiFillAlert className='icon' style={{ color: '#000' }} />)}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <li>Home</li>
                    <li>Destination</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
                <div className='mobile-menu-button'>
                    <div className='menu-icons'>
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='social-icons'>
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar