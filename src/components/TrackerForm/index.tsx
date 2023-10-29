import React, { SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

type TrackerFormProps = {
  title: string;
  subTitle: string;
  inputPlaceholder: string;
  buttonLabel: string;
};

export function TrackerForm({
  title,
  subTitle,
  inputPlaceholder,
  buttonLabel,
}: TrackerFormProps) {
  const { palette } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(event: SyntheticEvent) {
    setIsLoading(true);
    event.preventDefault();
    const { orderId } = event.target as typeof event.target & {
      orderId: { value: string };
    };
    router.push(`/tracker/${orderId.value}`);
  }

  return (
    <Box
      component="form"
      sx={{
        padding: 4,
        paddingLeft: {
          xs: 3,
        },
        paddingRight: {
          xs: 3,
        },
        backgroundColor: palette.background.paper,
        borderRadius: 2,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" component="h1" fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subTitle}</Typography>
      <FormControl
        variant="standard"
        sx={{
          marginTop: 3,
          display: "block",
        }}
      >
        <TextField
          label={inputPlaceholder}
          variant="outlined"
          name="orderId"
          sx={{
            minWidth: { xs: "100%" },
          }}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: 2,
          paddingTop: 1.75,
          paddingBottom: 1.75,
          minWidth: { xs: "100%" },
        }}
      >
        {!isLoading ? (
          buttonLabel
        ) : (
          <CircularProgress color="inherit" size={25} />
        )}
      </Button>
    </Box>
  );
}
