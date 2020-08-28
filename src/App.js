import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'

import AdminBar from './components/AdminBar';

import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'

import { Switch, Route } from 'react-router-dom'

import { checkUserSession } from './redux/User/user.actions'

import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

import './App.scss'

const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
    <div className='App'>
      <AdminBar />
      <Switch>
        <Route exact path='/' render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route path='/signup' render={() => (
          <MainLayout>
            <Register />
          </MainLayout>
        )} />
        <Route path='/signin' render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )} />
        <Route path='/forgot-password' render={() => (
          <MainLayout>
            <ForgotPassword />
          </MainLayout>
        )} />
        <Route path='/dashboard' render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path='/admin' render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
      </Switch>
    </div>
  )
}

export default App