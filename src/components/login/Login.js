import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Login.module.css";

const Login = (props) => {
   const authCtx = useContext(AuthContext);

   const submitHandler = (e) => {
      e.preventDefault();
      authCtx.onLogin();
   };

   return (
      <section className={classes.login}>
         <h1>Personal Notes</h1>
         <form onSubmit={submitHandler}>
            <div className={classes.control}>
               <label htmlFor="email">E-mail</label>
               <input type="email" id="email" placeholder="example@gmail.com" />
            </div>
            <div className={classes.control}>
               <label htmlFor="passowrd">Password</label>
               <input type="passowrd" id="passowrd" placeholder="Password" />
            </div>
            <div className={classes.actions}>
               <button>Login</button>
               <a href="/" className={classes["new-account"]}>
                  Don't have an account ? (LINK)
               </a>
            </div>
         </form>
      </section>
   );
};

export default Login;
