import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserList from "./Components/UsersList";
// import UserDetail from "./Components/UserDetail";
// import  from "./Components/Accepted";
// import Rejected from "./Components/Rejected";

const UserList = lazy(() => import("./Components/UsersList"));
const UserDetail = lazy(() => import("./Components/UserDetail"));
const Accepted = lazy(() => import("./Components/Accepted"));
const Rejected = lazy(() => import("./Components/Rejected"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <UserList />
          </React.Suspense>
        }
      />
      <Route
        path="/details/:id"
        element={
          <React.Suspense fallback={<>...</>}>
            <UserDetail />
          </React.Suspense>
        }
      />
      <Route
        path="/accepted"
        element={
          <React.Suspense fallback={<>...</>}>
            <Accepted />
          </React.Suspense>
        }
      />
      <Route
        path="/rejected"
        element={
          <React.Suspense fallback={<>...</>}>
            <Rejected />
          </React.Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);
