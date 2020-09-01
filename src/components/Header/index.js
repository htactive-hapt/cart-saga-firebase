import React from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { signOutUser } from './../../redux/User/user.actions';
import { auth } from '../../firebase'

import Logo from './../../assets/logo.jpg'

import { Layout } from 'antd';

import { SearchOutlined, FacebookOutlined, InstagramOutlined, QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

const { Sider, Content } = Layout;


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const ContainerHeader = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUser());
    };
    return (
        <header className='header'>
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
                        {currentUser && (
                            <Col span={12}><div id="top-menu-right">
                                <ul>
                                    <li><a href="#"><BellOutlined /> Thông báo</a></li>
                                    <li><a href="#"><QuestionCircleOutlined /> Trợ giúp</a></li>
                                    <li>
                                        <Link to="/dashboard">
                                            {currentUser.displayName}
                                        </Link>
                                    </li>
                                    <li><a href="#" onClick={() => signOut()}>Logout</a></li>
                                </ul>
                            </div></Col>
                        )}
                        {!currentUser && (
                            <Col span={12}><div id="top-menu-right">
                                <ul>
                                    <li><a href="#"><BellOutlined /> Thông báo</a></li>
                                    <li><a href="#"><QuestionCircleOutlined /> Trợ giúp</a></li>
                                    <li><Link to='/signup'>Đăng Ký |</Link></li>
                                    <li><Link to='/signin'>Đăng Nhập |</Link></li>
                                </ul>
                            </div></Col>
                        )}
                    </Row>


                </div>

                <div className="bottom-menu">
                    <Layout>
                        <Sider>
                            <Link to='/'>
                                <img src={Logo} className='img-logo' alt='Logo' />
                            </Link>
                        </Sider>
                        <Layout>
                            <Content>
                                <div className="item-search">
                                    <input placeholder="Mua gì hôm nay -- Đến cùng Shopee"></input>
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

        </header>
    )
}
ContainerHeader.defaultProps = {
    currentUser: null
}
export default ContainerHeader