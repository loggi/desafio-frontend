"use client";
import * as React from "react";
import { Box, Hidden, Step, StepLabel, Stepper, colors } from "@mui/material";
import { ColorlibConnector, ColorlibStepIcon } from "./step-style";

const steps = [
  "Separando pacote",
  "Em transito",
  "Saindo para entrega",
  "Entregue",
];

export function Steps() {
  return (
    <Box sx={{ width: "100%" }}>
      <Hidden smDown>
        <Stepper
          alternativeLabel
          activeStep={1}
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
        <Stepper activeStep={1} orientation="vertical">
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
