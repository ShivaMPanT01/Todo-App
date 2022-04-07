import { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const userLoggedIn = localStorage.getItem("isLoggedIn");

      if (userLoggedIn) {
         setIsLoggedIn(true);
      }
   }, []);

   const loginHandler = () => {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
   };

   const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
   };

   return (
      <AuthContext.Provider
         value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
