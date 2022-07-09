import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeProductSelection from "./components/Forms/EmployeeProductSelection";
import EmployeeRegistration from "./components/Forms/EmployeeRegistration";
import InvalidRoute from "./components/Forms/InvalidRoute";
import ReveiewScreen from "./components/Forms/ReviewScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/productSelection"
            element={<EmployeeProductSelection />}
          />
          <Route
            path="/employeeRegistration"
            element={<EmployeeRegistration />}
          />
          <Route path="/Review" element={<ReveiewScreen />} />
          <Route path="*" element={<InvalidRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
