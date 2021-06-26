import React from "react";
import "./login.css";
import avatar from "./avatar.png";

const Login = () => {
  return (
    <>
      <div class="container">
        <div className="row lg-row-height">
          <div className="col-md-4"></div>
          <div className="col-md-4 justify-content-center align-self-center">
            <div className=" border border-1 border-info rounded-3 py-2 px-2">
              <div className="row mb-4">
                <div className="col-md-12 col-sm-12 text-center">
                  <img src={avatar} alt="" className="w-25 rounded-circle" />
                </div>
              </div>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    class="btn btn-link text-decoration-none btn-sm "
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 "></div>
        </div>
      </div>
    </>
  );
};
export default Login;
