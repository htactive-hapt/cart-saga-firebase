import React from 'react'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import { Switch, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'
import './default.scss'

const App = props => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route path='/register' render={() => (
          <MainLayout>
            <Register />
          </MainLayout>
        )} />
      </Switch>
    </div>
  )
}

export default App
