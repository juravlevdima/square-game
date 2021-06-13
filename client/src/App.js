import { Switch, Route, Redirect } from 'react-router-dom'

import MainMenu from './components/MainMenu.js'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <MainMenu />} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
