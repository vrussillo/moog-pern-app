import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import Account from "./pages/Account";
import Templates from "./pages/Templates";
import Create from "./pages/Create";
import Home from "./pages/Home";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignupForm";
import EditForm from "./auth/EditForm";
import Dark from "./pages/Dark";
import LBD from "./pages/LBD";
import MikeDean from "./pages/MikeDean";
// import HeartButton from "./components/Favorites";

function WebRoutes() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const AuthSignUp = () => {
    return !isAuthenticated ? (
      <SignUpForm setAuth={setAuth} />
    ) : (
      <Navigate to="/login" />
    );
  };

  const AuthLogin = () => {
    return !isAuthenticated ? (
      <LoginForm setAuth={setAuth} />
    ) : (
      <Navigate to="/account" />
    );
  };

  const AuthEditForm = (children) => {
    return isAuthenticated ? (
      <EditForm {...children} setAuth={setAuth} />
    ) : (
      <Navigate to="/login" />
    );
  };

  const AuthAccount = (children) => {
    return isAuthenticated ? (
      <Account {...children} setAuth={setAuth} />
    ) : (
      <Navigate to="/login" />
    );
  };

  const AuthTemplates = (children) => {
    return isAuthenticated ? (
      <Templates {...children} setAuth={setAuth} />
    ) : (
      <Navigate to="/signup" />
    );
  };

  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/templates" element={<AuthTemplates />}></Route>
        <Route exact path="/templates/dark/:id" element={<Dark />}></Route>
        <Route exact path="/templates/lbd/:id" element={<LBD />}></Route>
        <Route
          exact
          path="/templates/mikedean/:id"
          element={<MikeDean />}
        ></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/account" element={<AuthAccount />}></Route>
        <Route exact path="/account/:id" element={<AuthEditForm />}></Route>
        <Route exact path="/signup" element={<AuthSignUp />}></Route>
        <Route exact path="/login" element={<AuthLogin />}></Route>
        {/* <Route exact path="/like" element={<HeartButton />}></Route> */}
      </Routes>
    </Fragment>
  );
}

export default WebRoutes;
