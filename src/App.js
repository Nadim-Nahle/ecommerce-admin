import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import ReactAdmin from './ReactAdmin';
import RequireAuth from './RequireAuth';

const App = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<SignIn />} />
        
        {/* Define other routes using the <Route> component */}
        <Route element={<RequireAuth  />}>
        <Route path="/*" element={<ReactAdmin />} />
        </Route>
      </Routes>
    
  );
};

export default App;
