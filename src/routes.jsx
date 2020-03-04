import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Launches from './views/Launches';
import Layout from './views/Layout';

/**
 * Routers can be complex, so here is a good place to elaborate on what we're trying
 * to do with the router:
 *
 * 1) the "main" view of the app is the launch list. Since this app is not
 *    authenticated, it should be safe to redirect to this URL in any exception
 *    scenario (including 4XX & 5XX status codes, etc)
 * 2) the "query" view of the app. This URL takes the flight_number and
 *    launch_site.site_id properties from the launch object, and returns an
 *    expanded view of the flight activity
 * 3) Currently, "not found" will simply go to the main view
 */
const Routes = () => (
  <Router>
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Launches}/>
          <Route path="/launches/:flightNumber/:siteId" component={Launches}/>
          <Route component={Launches} />
        </Switch>
      </Layout>
    </div>
  </Router>
);

export default Routes;
