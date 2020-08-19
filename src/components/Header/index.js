import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} className='img-logo' alt='Logo' />
                    </Link>
                </div>
                <div className='registerLink'>
                    <ul>
                        <li>
                            <Link to='/register'>
                                Register
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header