import { Switch, Route, Redirect } from 'react-router-dom'

import Main from './components/Main.js'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Main />} />
      <Redirect to="/" />
    </Switch>
  )
}

export default App
