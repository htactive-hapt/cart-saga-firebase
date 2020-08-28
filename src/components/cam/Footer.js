import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

function ContentFooter() {
    return (
        <div>
            <Layout>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>,
        </div>
    );
}

export default ContentFooter;

