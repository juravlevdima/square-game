import { Switch, Route, Redirect } from 'react-router-dom'

import MainMenu from './components/MainMenu.js'
import GamePage from './components/GamePage.js'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <MainMenu />} />
      <Route exact path="/game" component={() => <GamePage />} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
