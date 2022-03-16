import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Templates.css";

const Templates = () => {
  const [id, setId] = useState([]);
  const getUser = async (id) => {
    try {
      const res = await fetch(`/templates/${id}`, {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });
      const parseData = await res.json();
      setId(parseData.id);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <body className="templates-body">
        <div className="templates-div">
          <h1 className="header-patchbook-dark">
            Grandmother - Dark Patchbook{" "}
          </h1>

          <Link to={`/templates/dark/${id}`}>
            <img
              src="../templates/Covers/DarkCover.png"
              className="cover-img"
              alt="Dark"
            />
          </Link>
          <h1 className="header-patchbook-lbd">Grandmother - LBD Patchbook </h1>
          <Link to={`/templates/lbd/${id}`}>
            <img
              className="cover-img"
              src="../templates/Covers/LBDCover.png"
              alt="LBD"
            />
          </Link>
          <h1 className="header-patchbook-md">
            Grandmother - Mike Dean Patchbook{" "}
          </h1>
          <Link to={`/templates/mikedean/${id}`}>
            <img
              className="cover-img"
              src="../templates/Covers/MikeDeanCover.png"
              alt="Mike Dean"
            />
          </Link>
        </div>
      </body>
    </Fragment>
  );
};

export default Templates;
