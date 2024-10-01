import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
    setLoading(true);
  };

  // Sign in user
  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
    setLoading(true);
  };

  // Sign out user
  const logOut = () => {
    return signOut(auth);
    setLoading(true);
  };

  // auth status listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  };
  
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
