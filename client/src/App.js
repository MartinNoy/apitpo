import React from 'react';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import About from './Views/About';
import Home from './Views/Home';
import SingIn from './Views/SingIn';
import SingUp from './Views/SingUp';
import NavBar from './Components/NavBar';
import withRoot from './Assets/js/withRoot';
import AppFooter from './Components/AppFooter';
import SearchClases from './Views/Student/searchClases';
function App() {
  return (
    <Router>
      <div>
      <NavBar/>
      <Switch>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SingIn/>}/>
        <Route path='/sign-up' element={<SingUp/>}/>
        <Route path='/search-clases' element={<SearchClases/>}/>
      </Switch>
      <AppFooter/>
    </div>
    </Router>
  );
}

export default withRoot(App);
