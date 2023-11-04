import React, { useState } from 'react';
import { FIRBASE_AUTH } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignIn.css'; // Import your CSS file for styling
import useAuth from "./hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIRBASE_AUTH;
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const auth_key = process.env.REACT_APP_AUTH

  async function fetchUserById(userId) {
    const apiUrl = `http://127.0.0.1:5001/ecommerce-nadim/us-central1/api/users/${userId}`;
    const authHeader = auth_key;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'auth-api': authHeader,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status} - ${response.statusText}`);
      }
  
      const userData = await response.json(); // Read the response body once
  
      console.log('Fetched user:', userData);
      
      return userData.role; // Return the parsed data
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
    
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      // Check if the signed-in user has the "admin" role
      const role = await fetchUserById(user.uid)
      console.log(role)
      if (role === 'admin') {
        // User is an admin, allow access
        // Redirect to the admin dashboard or perform other actions
        setAuth('user')
        navigate("/")  
        console.log('Admin user signed in.');

      } else {
        // User does not have admin privileges, deny access
        // You can sign out the user or display an error message
        console.error('Access denied. User is not an admin.');
        await auth.signOut();
      }
    } catch (error) {
      // Handle sign-in errors (e.g., invalid credentials).
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
