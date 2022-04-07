import { useContext } from "react";

import Login from "./components/login/Login";
import Todo from "./components/todo/Todo";
import AuthContext from "./store/auth-context";

function App() {
   const authCtx = useContext(AuthContext);

   return (
      <>
         {!authCtx.isLoggedIn && <Login />}
         {authCtx.isLoggedIn && <Todo />}
      </>
   );
}

export default App;
