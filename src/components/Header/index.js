import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo.png'

const Header = props => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <div className='logo'>
                    <img src={Logo} className='img-logo' alt='Logo' />
                </div>
            </div>
        </header>
    )
}

export default Header