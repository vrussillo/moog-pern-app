import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Account.css";

toast.configure();

const Account = ({ setAuth }) => {
  const [username, setName] = useState([]);
  const [id, setId] = useState([]);
  const [email, setEmail] = useState([]);

  const getUser = async (id) => {
    try {
      const res = await fetch(`/account/${id}`, {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setName(parseData.username);
      setId(parseData.id);
      setEmail(parseData.email);
      // setProfile(parseData);
      // setProfile(users.filter((user) => user.id !== id));
      // console.log(parseData.id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <div className="account-div">
        <div className="account-div2">
          <h1 className="account-header">Account Details</h1>
          <h2 className="account-header-2">Welcome {username}</h2>
          <h2 className="mt-5">{email}</h2>

          <Link className="btn-signup" to={`/account/${id}`}>
            Edit
          </Link>
          <button onClick={(e) => logout(e)} className="account-btn">
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Account;
