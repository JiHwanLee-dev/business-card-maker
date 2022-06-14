import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { authService } from "../service/fireBase";

// AppContext 객체를 생성한다.
export const UserContext = createContext({ user: null });

const Userprovider = (props) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        console.log(uid);
        const { displayName, email } = user;
        setuser({
          displayName,
          email,
        });
        // ...
      } else {
        console.log("signOut");
        // User is signed out
        // ...
        setuser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default Userprovider;
