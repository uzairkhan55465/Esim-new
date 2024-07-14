// src/pages/Dashboard.js
import React from "react";
import EsimLogo from "../../assets/Images/esimlogo.svg";
import DashboardCards from "./DashboardCards";
import SalesCards from "./SalesCards";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={EsimLogo} alt="Esim" className="w-[35px] h-[35px]" />
          <p className="text-[18px] font-[600] ps-2 pe-2">eSIM GSM</p>
        </div>
        <div className="">
          <div className="flex items-center">
            <div className="ps-2 pe-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-7"
                style={{ cursor: "pointer" }}
                onClick={()=> navigate("/customer-profile")}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <div className="ps-1 pe-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-3 mb-8 text-[#fff] bg-[#fff] p-[1.5px]" />
      <DashboardCards />
      <SalesCards />
    </div>
  );
};

export default Dashboard;
