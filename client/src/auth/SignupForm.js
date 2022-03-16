import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SignupForm.css";

toast.configure();

const SignUpForm = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, password, email } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password, email };
      const response = await fetch("/authentication/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setAuth(false);
        toast.error(parseRes, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <body className="signup-body">
        <div className="SignupForm">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h2 className="mb-3">Sign Up</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={onSubmitForm}>
                  <div className="form-group">
                    <label className="form-labels">Username:</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="username"
                      value={username}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-labels">Password:</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-labels">Email:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  {/* {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null} */}

                  <button type="submit" className="btn-signup">
                    Submit
                  </button>
                </form>
                <Link className="btn-signup" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default SignUpForm;
