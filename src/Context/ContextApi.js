import { createContext, useState, useContext } from "react";
import {users} from '../apis/api';

const AuthContext = createContext();


export function useAuth() {
  return useContext(AuthContext);
}

export function ContextApi({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  //the Cart
  const [cart, setCart] = useState([]);

  function login({ username, password }) {
    setLoading(true)
    const currentUser = users.filter(currUser => currUser.email === username && currUser.password === password)
    if(currentUser.length === 0){
      setError('Invalid Username or password. Try Again');
      setLoading(false);
    }else {
      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
      setLoading(false);
    }
  }

  const values = {
    loading,
    user,
    login,
    error,
    setError,
    setUser,
    cart,
    setCart
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}