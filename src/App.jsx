import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./page/home/home";
import Signin from "./page/signin/signin";
import Signup from "./page/signup/signup";
import Dashboard from "./page/dashboard/dashboard";
import CreateServer from "./page/createServer/createServer";
import ServerManage from "./page/serverManage/serverManage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateServer />} />
        <Route path="/manage" element={<ServerManage />} />
      </Routes>
    </Router>
  );
}

export default App;
