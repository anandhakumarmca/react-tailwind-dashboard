import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Info from "./components/info";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import KYCForm from "./components/kyc";
import SuccessPage from "./components/success";
import PaymentPage from "./components/payment";
import PaymentApprovalForm from "./components/approval";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kyc" element={<KYCForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/approval" element={<PaymentApprovalForm />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
