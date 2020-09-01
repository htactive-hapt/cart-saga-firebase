import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../redux/User/user.actions';

import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const AdminLayout = props => {
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(signOutUser());
    };

    return (
        <div className="adminLayout">
            <div className="controlPanel">
                <div className="sidebar">
                    <VerticalNav>
                        <ul>
                            <li>
                                <Link to="/admin">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="signOut" onClick={() => signOut()}>
                                    Sign Out
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

export default AdminLayout;
