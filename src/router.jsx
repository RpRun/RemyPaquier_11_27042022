import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Error from "./views/Error/Error";
import Lodge from "./views/Lodge/Lodge";

const Router = () => {
  return (
    <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path=":id" element={<Lodge />} />
      <Route path="/*" element={ <Navigate replace to='/error-page' /> } />
      <Route path="/error-page" element={<Error />} />
    </Routes>
  );
};

export default Router;
