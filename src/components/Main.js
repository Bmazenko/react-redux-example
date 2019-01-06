import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './Home';
import { About } from './About';
import ItemList from './ItemList';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/items' component={ItemList}/>
    </Switch>
)

export default Main;