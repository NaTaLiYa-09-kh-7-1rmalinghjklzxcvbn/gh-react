import React from 'react';
import './styles/App.css';
import List from './components/List';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage'
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Error from './components/Error';
import Layout from './components/Layout';


function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/list'} element={<List />} />
        </Route>
        <Route path={'*'} element={<Error />} />
      </Routes>



    </div>
  );

}
export default App;
