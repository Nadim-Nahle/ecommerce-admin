import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import ReactAdmin from './ReactAdmin';
import RequireAuth from './RequireAuth';
import Orders from './Order';

const App = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/orders" element={<Orders />} />
        {/* Define other routes using the <Route> component */}
        <Route element={<RequireAuth  />}>
        <Route path="/*" element={<ReactAdmin />} />
        </Route>
      </Routes>
    
  );
};

export default App;
