import { Switch, Route, Redirect } from 'react-router-dom'

import MainMenu from './components/MainMenu.js'
import GamePage from './components/GamePage.js'
import RatingPage from './components/RatingPage.js'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <MainMenu />} />
      <Route exact path="/game" component={() => <GamePage />} />
      <Route exact path="/rating" component={() => <RatingPage />} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
