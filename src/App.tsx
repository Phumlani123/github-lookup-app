import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import GitHubDataProvider from './hooks/githubData/GithubDataProvider';
import UserActivityView from './views/UserActivity';
import UserSearchView from './views/UserSearch';
import Welcome from './views/Welcome';
import OfflineUsersList from './components/UsersList/OfflineUserList';

function App() {
  return (
    <div className="App">
      <GitHubDataProvider>
        <Router>
          <Route path='/' exact>
            <Welcome />
          </Route>
          <Switch>
            <Route path='/users' exact>
              <UserSearchView />
            </Route>
            <Route path='/offline-users' exact>
              <OfflineUsersList />
            </Route>
            <Route path='/user-activity/:username'>
              <UserActivityView />
            </Route> 
          </Switch>
        </Router>
      </GitHubDataProvider>
    </div>
  );
}

export default App;
