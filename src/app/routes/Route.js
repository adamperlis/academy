/* eslint-disable no-process-env */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  // hashHistory,
  browserHistory
 }                              from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  App,
  ConnectedHome,
  ConnectedInnovationServices,
  ConnectedProductDesign,
  ConnectedDesignSprint,
  ConnectedContactUs,
  ConnectedWork,
  ConnectedTime,
  ConnectedAbout
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';
import configureStore           from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-92024351-1');

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

function updateRouteFn() {
  window.scrollTo(0, 0);
  logPageView()
}
export const Routes = () => {
  return (
    <Provider store={store}>
      <div>
        <Router onUpdate={() => updateRouteFn() } history={syncedHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={ConnectedHome} />
            <Route path="/designSprint" component={ConnectedDesignSprint} />
            <Route path="/Work" component={ConnectedWork} />
            <Route path="/Time" component={ConnectedTime} />
            {/*<Route path="/InnovationServices" component={ConnectedInnovationServices} />*/}
            <Route path="/ProductDesign" component={ConnectedProductDesign} />
            <Route path="/ContactUs" component={ConnectedContactUs} />
            <Route path="/About" component={ConnectedAbout} />
            <Route path="*" component={PageNotFound} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};
