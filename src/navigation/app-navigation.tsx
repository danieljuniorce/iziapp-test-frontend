import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/sections/home/home'
import Details from '../containers/sections/details/details'

function AppNavigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppNavigation
