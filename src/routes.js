import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

import Aboutme from './components/about/aboutme';
import Knowledge from './components/knowledge/knowledge';
import Experience from './components/experience/experience';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Aboutme}/>
    <Route path="knowledge" component={Knowledge}/>
    <Route path="career" component={Experience}/>
  </Route>
);
