import React from 'react';
import Logo from '../../assets/logo.png'
import { Layout, Menu, Breadcrumb } from 'antd';
import { SearchOutlined, FacebookOutlined, InstagramOutlined, QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';
import './Header.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
const { Sider, Content } = Layout;


const TopHeader = props => {
    return (
        <div className="Container-header">
            <div className="top-menu">
                <Row>
                    <Col span={12}>
                        <div id="top-menu">
                            <ul>
                                <li><a href="#"> Kênh Người Bán |</a></li>
                                <li><a href="#">Tải Ứng Dụng |</a></li>
                                <li><a href="#">Kết Nối  <FacebookOutlined /> <InstagramOutlined /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={12}><div id="top-menu-right">
                        <ul>
                            <li><a href="#"><BellOutlined /> Thông báo</a></li>
                            <li><a href="#"><QuestionCircleOutlined /> Trợ giúp</a></li>
                            <li><a href="#">Đăng Ký |</a></li>
                            <li><a href="#">Đăng Nhập</a></li>
                        </ul>
                    </div></Col>
                </Row>


            </div>

            <div className="bottom-menu">
                <Layout>
                    <Sider><img src={Logo} /> </Sider>
                    <Layout>
                        <Content>
                            <div className="item-search">
                                <input></input>
                            </div>
                            <div className="icon-search">
                                <button><SearchOutlined /></button>
                            </div>
                        </Content>
                        <div id="bottom-menu">
                            <ul>
                                <li><a href="#"> Sandal Nữ</a></li>
                                <li><a href="#">Giày Nữ</a></li>
                                <li><a href="#">Balo Nữ</a></li>
                                <li><a href="#">Dép Nam</a></li>
                                <li><a href="#">Áo Nữ</a></li>
                                <li><a href="#">Váy Nữ</a></li>
                                <li><a href="#">Quần Nam</a></li>
                            </ul>
                        </div>
                    </Layout>
                </Layout>

            </div>

        </div>
    );
}

export default TopHeader