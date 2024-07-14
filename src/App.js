// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Mainlayout";
import Dashboard from "./pages/dashboard/Dashboard";
import FinancialDashboard from "./pages/financal-dashboard/financialDashboard";
// import Companies from './pages/Companies';
// import Branches from './pages/Branches';
// import AllUsers from './pages/AllUsers';
// import AddUser from './pages/AddUser';
// import Packets from './pages/Packets';
// import Orders from './pages/Orders';
// import SimCard from './pages/SimCard';
// import AddSimQR from './pages/AddSimQR';
// import BuyEsim from './pages/BuyEsim';
// import Packages from './pages/Packages';
// import Plans from './pages/Plans';
import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />
          <Route path="financial-dashboard" element={<FinancialDashboard />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="dealer-management/companies" element={<Companies />} />
          <Route path="dealer-management/branches" element={<Branches />} />
          <Route path="user-management/all-users" element={<AllUsers />} />
          <Route path="user-management/add-user" element={<AddUser />} />
          <Route path="reports/packets" element={<Packets />} />
          <Route path="reports/orders" element={<Orders />} />
          <Route path="reports/sim-card" element={<SimCard />} />
          <Route path="package-management/add-sim-qr" element={<AddSimQR />} />
          <Route path="package-management/buy-esim" element={<BuyEsim />} />
          <Route path="package-management/packages" element={<Packages />} />
          <Route path="package-management/plans" element={<Plans />} />  */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
