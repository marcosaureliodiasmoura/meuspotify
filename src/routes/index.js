import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Browser from '../pages/browser';
import Playlist from '../pages/playlist';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browser} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
