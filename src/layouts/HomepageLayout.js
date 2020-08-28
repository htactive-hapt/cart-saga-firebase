import React from 'react'
import ContainerHeader from '../components/Header'
import Footer from '../components/Footer'

const HomepageLayout = props => {
    return (
        <div className='fullHeight'>
            <ContainerHeader {...props} />
            {props.children}
            {/* <Footer /> */}
        </div>
    )
}

export default HomepageLayout