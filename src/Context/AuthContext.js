import {createContext, useContext, useEffect, useState} from "react";
import {auth} from '../firebase/firebase';
import { onAuthStateChanged ,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [loading, setLoading] = useState(true);

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
          setCurrentUser(user)
          setLoading(false);
          
        })

       return () => unsubscribe();

      },[])

      const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
      }

     const logout = () => {
      return signOut(auth);
     }

      const signup = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
      }

      return(
        <AuthContext.Provider value={{currentUser, signup, login,logout}}>
           {!loading && children}
        </AuthContext.Provider>
      )

}

export const useAuth = () => useContext(AuthContext)