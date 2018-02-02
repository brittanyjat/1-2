import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Shelves from './Components/Shelves';
import Bins from './Components/Bins';
import BinDetails from './Components/BinDetails';
import AddNew from './Components/AddNew';

export default (
    <Switch>
        <Route exact path='/' component={Shelves} />
        <Route path='/Shelf/:id' component={Bins} />
        <Route path='/bin/:id' component={BinDetails} />
        <Route path='/create/:id' component={AddNew} />
    </Switch>
)