"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ShipmentCaptureCta } from "@/components/ShipmentCaptureCta";
import { TrackerDetails } from "@/components/TrackerDetails";
import { Alert, Snackbar } from "@mui/material";

type TrackerPageDetailsProps = {
  params: {
    slug: string[];
  };
};

export default function TrackerPageDetails({
  params,
}: TrackerPageDetailsProps) {
  const [orderData, setOrderData] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [, trackingNumber] = params.slug;

      await fetch(`/orders/${trackingNumber}`)
        .then(async (response) => {
          if (!response.ok) throw new Error("Failed to load order details");

          if (response.status && response.status > 399) {
            throw new Error(`${response.status} (${response.statusText})`);
          }

          const data = await response.json();

          setOrderData(data);
        })
        .catch((error) => {
          setOpenSnack(true);
          setErrorMessage(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, []);

  function handleCloseSnack() {
    setOpenSnack(false);
  }

  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: {
            sx: 0,
            md: 5,
          },
          paddingLeft: {
            xs: 0,
          },
          paddingRight: {
            xs: 0,
          },
          paddingTop: {
            xs: 2,
            md: 16,
          },
          paddingBottom: {
            md: 16,
          },
        }}
      >
        <TrackerDetails
          orderData={orderData}
          loading={loading || !!errorMessage}
        />
        <ShipmentCaptureCta />
      </Container>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnack}
        onClose={handleCloseSnack}
      >
        <Alert severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
