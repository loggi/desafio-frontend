"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SearchPackage } from "@/assets";
import { Hidden } from "@mui/material";
import { SelectFilter, MediaCard } from "@/components";
import { getShipmentByPost } from "@/service";

const HomePage = () => {
  const [shipment, setShipment] = useState([]);
  const handleOnSubmitForm = async (filterType: string, value: string) => {
    try {
      const data = await getShipmentByPost(filterType, value);
      setShipment(data);
    } catch (err) {}
  };
  return (
    <Grid
      container
      spacing={10}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={6}>
        <Typography
          variant="h5"
          component="div"
          marginBottom={2}
          color="GrayText"
        >
          Acompanhe seu pedido
        </Typography>
        <SelectFilter onSubmit={handleOnSubmitForm} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Hidden smDown>
          <MediaCard
            img={SearchPackage}
            text="Buscando mais facilidade? Faça login e tenha tudo em um unico lugar!"
          />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HomePage;
