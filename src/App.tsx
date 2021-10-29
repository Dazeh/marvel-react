  import React, {useState} from 'react';
  import './App.scss';

  import Header from './components/Header';
  import { Home } from './pages/Home';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

import { Series } from './pages/Series';

  export const LikedComicsContext = React.createContext({}); 


  function App() {


    const [likedComics, setLikedComics] = useState([])


      return (
      <>
      

      <Router>
        
        <Header />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            test about
          </Route>
          <Route path="/users">
           test
          </Route>
          <Route path="/series/:seriesId">
          <LikedComicsContext.Provider value={[likedComics, setLikedComics]}>
            <Series />
          </LikedComicsContext.Provider>

          </Route>
          <Route path="/">
            <LikedComicsContext.Provider value={[likedComics, setLikedComics]}>
              <Home />
            </LikedComicsContext.Provider>
          </Route>
        </Switch>
      </div>
    </Router>
      </>
      );
    
  }

  export default App;
