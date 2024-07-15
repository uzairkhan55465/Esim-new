// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Mainlayout";
import Dashboard from "./pages/dashboard/Dashboard";
import FinancialDashboard from "./pages/financal-dashboard/financialDashboard";
import Companies from "./pages/DealerManagement/Companies";
// import Branches from './pages/Branches';
import AllUsers from './pages/usermanagement/AllUsers';
import AddUser from './pages/usermanagement/addUsers';
import SalesReports from './pages/reports/SalesReports';
import SalesReturn from './pages/reports/SalesReturn';
import Accounting from './pages/reports/accounting';
import AvalaibleEsims from './pages/EsimManagement/AvailableEsims';
import NewEsimPackages from './pages/EsimManagement/NewEsimPackage';
import Settings from './pages/Settings/Setting';
import MaintenanceMode from './pages/Settings/MaintenanceMode';
import "./App.css";
import CustomerManagement from "./pages/Customersmanagment/CusmtomerManagement";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="financial-dashboard" element={<FinancialDashboard />} />
          <Route path="dealer-management/companies" element={<Companies />} />
          <Route path="customer-management" element={<CustomerManagement />} />
          <Route path="user-management/all-users" element={<AllUsers />} />
          <Route path="user-management/add-user" element={<AddUser />} />
          <Route path="reports/sales-report" element={<SalesReports />} />
          <Route path="reports/sales-return" element={<SalesReturn />} />
          <Route path="reports/acounting" element={<Accounting />} />
          <Route path="esim-management/available-esims" element={<AvalaibleEsims />} />
          <Route path="esim-management/new-esims-packages" element={<NewEsimPackages />} />
          <Route path="settings/settings" element={<Settings />} />
          <Route path="settings/maintenance-mode" element={<MaintenanceMode />} />
          
          {/* <Route path="dealer-management/branches" element={<Branches />} />
          <Route path="user-management/all-users" element={<AllUsers />} />
       
       
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
