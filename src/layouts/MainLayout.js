import React from 'react'
import ContainerHeader from '../components/Header'
import ContentFooter from '../components/Footer'

const MainLayout = props => {
    return (
        <div >
            <ContainerHeader {...props} />
            <div className='main'>
                {props.children}
            </div>
            <ContentFooter />
        </div>
    )
}

export default MainLayout
