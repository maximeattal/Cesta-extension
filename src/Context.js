import React, { useEffect, useState } from "react";
// import { useCookies } from 'react-cookie'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase-config";
const Context = React.createContext();

export default Context;

export const Provider = ({ children }) => {
  // const [cookies, setCookie, removeCookie] = useCookies([])
  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);
  const [user, setUser] = useState();
  const [userInfos, setUserInfos] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.emailVerified) {
          const info = await getDoc(doc(db, "users", user.uid));
          setUser(user);
          console.log("hello", info.data());
          setUserInfos(info.data());
        }
      }
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);
  return (
    <Context.Provider
      value={{
        signUp: signUp,
        signIn: signIn,
        forgotPassword: forgotPassword,
        user: user,
        setUser: setUser,
        userInfos: userInfos,
        setUserInfos: setUserInfos,
      }}
    >
      {!loadingData && children}
    </Context.Provider>
  );
};
