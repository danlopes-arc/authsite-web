import { ChakraProvider, Container } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GitHubAuth from './components/GitHubAuth'
import NavBar from './components/NavBar'
import LoggedOutRoute from './components/routes/LoggedOutRoute'
import PrivateRoute from './components/routes/PrivateRoute'

import Index from './pages/index'
import Login from './pages/login'
import Me from './pages/me'
import Register from './pages/register'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar></NavBar>
            <Container pt={10} maxWidth={1000}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/auth/github/callback" exact component={GitHubAuth} />
                <LoggedOutRoute path="/register" exact component={Register} />
                <LoggedOutRoute path="/login" exact component={Login} />
                <PrivateRoute path="/me" exact component={Me} />
              </Switch>
            </Container>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </Provider>
  )
}

export default App
