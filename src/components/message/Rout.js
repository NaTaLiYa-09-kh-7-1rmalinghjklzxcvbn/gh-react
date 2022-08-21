import React from 'react';
import List from './List';
import AboutPage from './AboutPage';
import HomePage from './HomePage'
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Error from './Error';
import Layout from './Layout';


function Rout() {
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
export default Rout;