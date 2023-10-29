import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { TrackerDetailsSkeleton } from "./skeleton";

type TrackerDetailsProps = {
  orderData: OrderDetails;
  loading: boolean;
};

const messageStatus = {
  entregue: "O pacote chegou ao destino final.",
  "em trânsito": "Seu pedido está a caminho.",
};

export function TrackerDetails({ orderData, loading }: TrackerDetailsProps) {
  if (loading) {
    return <TrackerDetailsSkeleton />;
  }

  return (
    <Box
      sx={{
        paddingLeft: {
          xs: 3,
        },
        paddingRight: {
          xs: 3,
        },
      }}
    >
      <Alert severity="info" variant="filled">
        <AlertTitle>{orderData?.status}</AlertTitle>
        {messageStatus[orderData?.status?.toLowerCase()]}
      </Alert>

      <List>
        <ListItem>
          <ListItemText
            primary={"Códito de rastreamento"}
            secondary={orderData?.trackingNumber}
          />
        </ListItem>
      </List>

      <Stepper
        activeStep={orderData?.history?.length - 1}
        orientation="vertical"
        sx={{
          marginBottom: {
            xs: 3,
          },
          paddingLeft: 2,
        }}
      >
        {orderData?.history.map((step) => (
          <Step key={step.status}>
            <StepLabel>{step.status}</StepLabel>
            <StepContent>
              <Typography>{step.location}</Typography>
              <Typography color="textSecondary">
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "medium",
                  timeStyle: "long",
                }).format(new Date(step?.timestamp))}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
