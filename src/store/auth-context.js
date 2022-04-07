import React from "react";

const AuthContext = React.createContext({
   isLoggedIn: false,
   onLogout: () => {},
   onLogin: (email, Password) => {},
});

export default AuthContext;
