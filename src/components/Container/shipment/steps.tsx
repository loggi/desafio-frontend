"use client";
import * as React from "react";
import { Box, Hidden, Step, StepLabel, Stepper, colors } from "@mui/material";
import { ColorlibConnector, ColorlibStepIcon } from "./step-style";
import { DeliveryStatus } from "@/types/Shipment";
import { getCurrentStep } from "./steps-utils";

const steps = [
  "Separando pacote",
  "Em transito",
  "Saindo para entrega",
  "Entregue",
];

type TSteps = {
  activeSteps: DeliveryStatus;
};

export function Steps({ activeSteps }: TSteps) {
  const step = getCurrentStep(activeSteps);
  return (
    <Box sx={{ width: "100%" }}>
      <Hidden smDown>
        <Stepper
          alternativeLabel
          activeStep={step}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Hidden>
      <Hidden smUp>
        <Stepper activeStep={step} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
                color={colors.grey[200]}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Hidden>
    </Box>
  );
}
