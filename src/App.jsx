import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./page/home/home";
import Signin from "./page/signin/signin";
import Signup from "./page/signup/signup";
import Dashboard from "./page/dashboard/dashboard";
import CreateServer from "./page/createServer/createServer";
import ServerManage from "./page/serverManage/serverManage";
import Chat from "./page/chat/chat";
import TaskManage from "./page/taskManage/taskManage";
import EditPage from "./page/editPage/editPage";

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
        <Route path="/chat" element={<Chat />} />
        <Route path="/taskmanage" element={<TaskManage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
