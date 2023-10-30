"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useTheme } from "@mui/material/styles";
import { ShipmentCaptureCta } from "@/components/ShipmentCaptureCta";
import { TrackerDetails } from "@/components/TrackerDetails";

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
  const { palette } = useTheme();

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
    <Box
      sx={{
        backgroundImage: {
          lg: `linear-gradient(${palette.primary.main}, ${palette.primary.light})`,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 500px",
          },
          gap: {
            sx: 0,
            lg: 5,
          },
          padding: {
            xs: 0,
            lg: 8,
          },
          paddingTop: {
            xs: 0,
            lg: 16,
          },
          paddingBottom: {
            xs: 2,
            lg: 16,
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
