import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../components/Share/useAuth";

const handleLogin = (email, password, loginUser, location, navigate) => {
  loginUser(email, password, location, navigate);
};

const Login = () => {
  const {
    signInWithGoogle,
    loginUser,
    isLoading,
    authError,
    user,
    githubSignIn,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  //google
  const handelGoogleSignUp = (signInWithGoogle, location, navigate) => {
    signInWithGoogle(location, navigate);
  };

  //github

  const handleGithubSignUp = (githubSignIn, location, navigate) => {
    githubSignIn(location, navigate);
  };

  return (
    <div>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6 hidden lg:block">
                Hey, Enter your details to get sign in to your account.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                className="card-body"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  const password = e.target.password.value;

                  handleLogin(email, password, loginUser, location, navigate);
                }}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                    <Link
                      to="/signup"
                      className="label-text-alt link link-hover"
                    >
                      SignUp?
                    </Link>
                  </label>
                </div>

                <>
                  {isLoading && (
                    <>
                      <div className="alert shadow-lg">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info flex-shrink-0 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span>Please Wait....</span>
                        </div>
                      </div>
                    </>
                  )}
                </>

                {authError && (
                  <>
                    <div className="alert alert-error shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{authError}</span>
                      </div>
                    </div>
                  </>
                )}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="flex mx-auto mt-4 mb-2 ">
                <button
                  className="mr-5 border p-1 rounded-md btn-primary"
                  onClick={() =>
                    handelGoogleSignUp(signInWithGoogle, location, navigate)
                  }
                >
                  Google
                </button>
                <button
                  className="border p-1 rounded-md btn-primary"
                  onClick={() =>
                    handleGithubSignUp(githubSignIn, location, navigate)
                  }
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
