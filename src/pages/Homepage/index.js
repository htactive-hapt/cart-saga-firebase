import React from 'react'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'
import './styles.scss'
import ShowProducts from '../../components/Products/ShowProduct'

const Homepage = props => {
    return (
        <section className='homepage'>
            <Slider />
           
            {/* <Footer /> */}
        </section>
    )
}

export default Homepage