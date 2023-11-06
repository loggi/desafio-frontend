import {
  StepConnector,
  StepIconProps,
  colors,
  stepConnectorClasses,
  styled,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import HomeIcon from "@mui/icons-material/Home";

export const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  backgroundColor: colors.grey[300],
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: colors.green[100],
  }),
  ...(ownerState.completed && {
    backgroundColor: colors.green[500],
  }),
}));

export const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: colors.green[100],
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: colors.green[500],
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: colors.grey[500],
    borderRadius: 1,
  },
}));

export function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <WarehouseIcon />,
    2: <FlightTakeoffIcon />,
    3: <LocalShippingIcon />,
    4: <HomeIcon />,
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
