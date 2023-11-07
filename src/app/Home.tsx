"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SearchPackage } from "@/assets";
import { Hidden } from "@mui/material";
import { useRouter } from "next/navigation";
import { SelectFilter, MediaCard, ShipmentList } from "@/components";
import { getShipmentByPost } from "@/service";
import { Shipment } from "@/types/Shipment";
import { SHIPMENT_PAGE } from "@/config/route-utils";

const HomeContainer = () => {
  const router = useRouter();
  const [shipment, setShipment] = useState([]);
  const handleOnSubmitForm = async (filterType: string, value: string) => {
    try {
      const { data } = await getShipmentByPost(filterType, value);
      setShipment(data);
    } catch (err) {}
  };

  const handleOnClickItem = (shipment: Shipment) => {
    const URL = `/${SHIPMENT_PAGE}/${shipment.trackingNumber}`;
    console.log("URL: ", URL);
    router.push(URL);
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
          Rastreie seu pedido
        </Typography>
        <SelectFilter onSubmit={handleOnSubmitForm} />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Hidden smDown>
          <MediaCard
            img={SearchPackage}
            text="Buscando mais facilidade? Faça login e tenha tudo em um só lugar!"
          />
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        {shipment.length > 0 && (
          <ShipmentList shipments={shipment} onClick={handleOnClickItem} />
        )}
      </Grid>
    </Grid>
  );
};

export { HomeContainer };
