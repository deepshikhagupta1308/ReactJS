import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./Components/UsersList";
import UserDetail from "./Components/UserDetail";
import Accepted from "./Components/Accepted";
import Rejected from "./Components/Rejected";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/details/:id" element={<UserDetail />} />
      <Route path="/accepted" element={<Accepted />} />
      <Route path="/rejected" element={<Rejected />} />
    </Routes>
  </BrowserRouter>
);
