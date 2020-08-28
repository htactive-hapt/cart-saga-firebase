import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './styles.scss';
const { Footer } = Layout;


const ContentFooter = () => {
    return (
        <footer className='footer'>
            <div className='wrap'>
                <Footer style={{ textAlign: 'center', border: 2 }}>&#169; Fashion Shop - Ecommerce Project</Footer>
            </div>
        </footer>
    );
}

export default ContentFooter;