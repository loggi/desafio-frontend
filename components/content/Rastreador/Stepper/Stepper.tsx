import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

import { DataStatus } from '../../../../interfaces';

import style from '../Rastreador.module.sass'

export const VerticalLinearStepper = ({status}: { status: DataStatus }) => {

  return (
    <Box className={style.box}>
      <Typography gutterBottom variant="h5">
          Package status
      </Typography>

      <Stepper orientation="vertical">
        {status.map((step: {label: string, description: string}, index: number) => (
          <Step key={step.label}>
            <StepLabel
              optional={ index < 1 && <Typography variant="caption">Last step</Typography> }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="caption">{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}