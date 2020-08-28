import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../redux/User/user.actions';

import Header from '../components/Header';
import VerticalNav from '../components/VerticalNav';
import Footer from '../components/Footer';

const DashBoardLayout = props => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUser());
    };

    return (
        <div className="dashboardLayout">
            <Header {...props} />
            <div className="controlPanel">
                <div className="sidebar">
                    <VerticalNav>
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <span className="signOut" onClick={() => signOut()}>
                                    Đăng xuất
                            </span>
                            </li>
                        </ul>
                    </VerticalNav>
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoardLayout;
