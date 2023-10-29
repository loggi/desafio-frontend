import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material";
import { useTrackerForm } from "./useTrackerForm";

import ptBR from "@/_mock/lang/pt-BR";

export function TrackerForm() {
  const { title, subTitle, inputPlaceholder, buttonLabel } = ptBR.trackingForm;
  const { palette } = useTheme();
  const { handleSubmit, handleChange, isLoading, error } = useTrackerForm();

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: palette.background.paper,
        borderRadius: 2,
        padding: {
          xs: 4,
          sm: 12,
          lg: 4,
        },
        paddingBottom: {
          lg: 4.2,
        },
        height: {
          lg: "fit-content",
        },
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
          name="trackCode"
          sx={{
            minWidth: { xs: "100%" },
          }}
          error={!!error}
          helperText={error || ""}
          onChange={handleChange}
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
