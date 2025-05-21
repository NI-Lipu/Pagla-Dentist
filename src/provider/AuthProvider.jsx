import { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
   updateProfile,
} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)
   console.log(user)

   // Google Login
   const loginWithGoogle = () => {
      return signInWithPopup(auth, provider)
   }

   // Register With Email and Password
   const registerWithEmailAndPassword = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // Update Profile
   const profileUpdate = (obj) => {
      return updateProfile(auth.currentUser, obj)
   }

   // Log-Out
   const logOut = () => {
      signOut(auth)
   }

   const authInfo = {
      user,
      setUser,
      loading,
      loginWithGoogle,
      registerWithEmailAndPassword,
      profileUpdate,
      logOut,
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         unsubscribe()
      }
   }, [])
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
