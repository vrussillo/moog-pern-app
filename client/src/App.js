import { Fragment } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import WebRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <WebRoutes />
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
