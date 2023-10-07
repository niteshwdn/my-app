import React from "react";
import { Link } from "react-router-dom";


function Mylogin() {
        return (
                <div className="container">
                        <div className="row coll">
                                <div className="col-12 ">
                                        <section style={{paddingLeft:"37%",marginTop:"5%"}}>
                                                <div className="login-box shadow border">
                                                        <form action="">
                                                                <h2>Login</h2>
                                                                <div class="input-box">
                                                                        <input type="email" required />
                                                                        <label class="nqav">Email</label>
                                                                </div>
                                                                <div class="input-box">
                                                                        <input type="password" required />
                                                                        <label>Password</label>
                                                                </div>
                                                                <div class="remember-forgot">
                                                                        <label><input type="checkbox" />Remember me</label>
                                                                        <Link to="#">Forgot Password?</Link>
                                                                </div>
                                                                <button class="butt" type="submit">Login</button>
                                                                <div className="register-link">
                                                                        <p>Don't have an account?<Link to="#">Register</Link></p>
                                                                </div>
                                                        </form>
                                                </div>
                                        </section>
                                </div>
                        </div>
                </div >
        )
}
export default Mylogin;