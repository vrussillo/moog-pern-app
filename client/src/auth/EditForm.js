import { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/EditForm.css";
// import Account from "../pages/Account";

toast.configure();

const EditForm = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { id } = useParams();

  const { username, password, email } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onEditForm = async (e) => {
    e.preventDefault();

    try {
      const body = { username, password, email };

      const response = await fetch(`/authentication/account/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.username || parseRes.email) {
        // localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Edit Successfully", {
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

  const deleteUser = async (id) => {
    try {
      if (id == id) {
        const deleteUser = await fetch(`/authentication/account/${id}`, {
          method: "DELETE",
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
            <h2 className="mb-3">Edit Account</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={onEditForm}>
                  <div className="form-group">
                    <label className="form-labels">Username:</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      autoComplete="current-username"
                      placeholder="username"
                      value={username}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label className="form-labels">Password:</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div> */}

                  <div className="form-group">
                    <label className="form-labels">Email:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      autoComplete="current-email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  {/* {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null} */}

                  <button type="submit" className="btn-edit">
                    Submit Edit
                  </button>
                </form>
                <Link className="btn-edit" to="/account">
                  Back
                </Link>
                <button
                  className="btn-edit-delete"
                  onClick={() => deleteUser(id)}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default EditForm;
