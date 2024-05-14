import React from "react";
import "../App.css"
const Login = () => {
  return (
    <div>
      <div className="wrapper">
  <div className="logo">
    <img
      src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
      alt=""
    />
  </div>
  <div className="text-center mt-4 name">LOG IN</div>
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
      <span className="far fa-user" />
      <input type="text" name="userName" id="userName" placeholder="Username" />
    </div>
    <div className="form-field d-flex align-items-center">
      <span className="fas fa-key" />
      <input type="password" name="password" id="pwd" placeholder="Password" />
    </div>
    <button className="btn mt-3">Login</button>
  </form>
  <div className="text-center fs-6">
    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
  </div>
</div>
    </div>
  );
};

export default Login;
