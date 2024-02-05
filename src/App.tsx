import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Contacts from './components/Contacts/Contacts';

const App:React.FC = () => {
  return (
      <>
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
                  <Contacts />
              )} />

            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </main>
      </>
  )
};

export default App;
