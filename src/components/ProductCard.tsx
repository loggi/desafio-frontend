"use client";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";

import {
  HowToReg,
  Inventory,
  LocalShipping,
  Warehouse,
} from "@mui/icons-material";

import { CardMedia } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(33, 218, 242) 0%, #05f 50%,rgb(15, 31, 173) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "rgb(33, 218, 242)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[500]
        : theme.palette.grey[300],
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[700]
      : theme.palette.grey[400],
  zIndex: 1,
  color:
    theme.palette.mode === "dark"
      ? theme.palette.grey[700]
      : theme.palette.grey[50],
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(33, 218, 242) 0%,#05f, rgb(15, 31, 173) 100%)",
    boxShadow: "0 0px 2px 6px rgb(0 186 255)",
    border: "2px solid white",
  }),
  ...(ownerState.completed && {
    backgroundColor: "rgb(33, 218, 242)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Warehouse />,
    2: <Inventory />,
    3: <LocalShipping />,
    4: <LocalShipping />,
    5: <HowToReg />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Preparando pedido",
  "Pedido postado",
  "Pedido coletado",
  "Pedido em transito",
  "Você receberá hoje",
];

export default function ProductCard() {
  return (
    <Card sx={{ display: "flex", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ ml: 1, mb: 1 }}>
          <Typography color="text.secondary" variant="h6" component="div">
            Tênis Nike Air Force 1
          </Typography>
        </Box>

        <Box sx={{ color: "grey.400", display: "flex", alignItems: "center" }}>
          <Inventory sx={{ ml: 1 }} />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ ml: 1 }}
          >
            Data de entrega estimada:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ ml: 1, color: "primary.main", fontWeight: "bold" }}
          >
            {new Date().toLocaleDateString("pt-BR")} -{" "}
            {new Date().toLocaleDateString("pt-BR")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: ["flex-start", "flex-start", "center"],
            pl: 1,
            pb: 1,
            mt: 2,
            gap: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 115,
              height: 115,
              borderRadius: "5%",
              display: ["none", "none", "block"],
            }}
            image="https://images.tcdn.com.br/img/img_prod/738204/tenis_farm_espacial_coracao_2469_1_a187257e1ac0f29933311f4fad58a9e4.jpg"
            alt="Live from space album cover"
          />
          <Card
            sx={{
              backgroundColor: "grey.50",
              border: "1px solid",
              borderColor: "grey.200",
              py: 2,
            }}
          >
            <Stepper
              alternativeLabel
              activeStep={2}
              connector={<ColorlibConnector />}
              sx={{
                display: "flex",
                flexDirection: ["column", "column", "row"],
              }}
            >
              {steps.map(label => (
                <Step
                  key={label}
                  sx={{
                    display: "flex",
                  }}
                >
                  <StepLabel
                    StepIconComponent={ColorlibStepIcon}
                    sx={{
                      minWidth: 150,
                      display: "flex",
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Card>
        </Box>
      </Box>
    </Card>
  );
}
