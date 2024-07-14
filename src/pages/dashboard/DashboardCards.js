import React from "react";

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Award from "./Award";
import Transactions from "./Transactions";
import Incorrect from "./Incorrect";
import GBActiceInfo from "./GBActiceInfo";
import WeeklyOverview from "./WeeklyOverview";
import Table from "../dashboard/Table"
import Table1 from "../dashboard/Table1"
import CircularCharts from "./CircularCharts";

const DashboardCards = () => {
  return (
    <div>
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award/>
      </Grid>

      <Grid item xs={12} md={4}>
       <Transactions/>
      </Grid>

      <Grid item xs={12} md={4}>
        <Incorrect/>
      </Grid>

      <GBActiceInfo/>

      
      <Grid item xs={12} md={6}>
        <WeeklyOverview/>
      </Grid>

      <Grid item xs={12} md={6}>
        <Table/>
      </Grid>

      <Grid item xs={12} md={6}>
        <WeeklyOverview/>
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklyOverview/>
      </Grid>

      <Grid item xs={12} md={12}>
        <Table1/>
      </Grid>

      <Grid item xs={12} md={12}>
        <Table1/>
      </Grid>

      {/* <Grid item xs={12} md={12}>
        <CircularCharts/>
      </Grid> */}

    </Grid>
    </div>
  );
};

export default DashboardCards;
