"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SearchPackage } from "@/assets";
import Image from "next/image";
import { Hidden } from "@mui/material";
import { SelectFilter } from "@/components";
const HomePage = () => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={12} sm={12} md={8}>
        <Typography
          variant="h5"
          component="div"
          marginBottom={2}
          color="GrayText"
        >
          Acompanhe seu pedido
        </Typography>
        <SelectFilter onSubmit={(filter, value) => {}} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Hidden smDown>
          <Image src={SearchPackage} alt="Search Package" />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HomePage;
