import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Contacts from './components/Contacts/Contacts';
import AboutUs from './components/AboutUs/AboutUs';

const App:React.FC = () => {
  return (
      <>
          <header>
              <nav className="navbar navbar-expand-lg navbar-light bg-light-subtle mb-3">
                  <div className="container-fluid">
                      <span className="text-uppercase text-logo">ПИК</span>
                      <ul className="navbar-nav mr-auto text-uppercase">
                          <li className="nav-item">
                              <NavLink to="/" className="nav-link" >Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="continue" className="nav-link">contacts</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/about-us" className="nav-link">about us</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink to="/profile" className="nav-link">profile</NavLink>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={(
                <Home />
            )} >
                <Route path="continue" element={(
                    <Contacts />
                )} />
            </Route>


              <Route path="/about-us" element={(
                  <AboutUs />
              )} />

            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </main>
      </>
  )
};

export default App;
