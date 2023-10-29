import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Handshake from "@mui/icons-material/Handshake";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import AirportShuttle from "@mui/icons-material/AirportShuttle";
import { useTheme } from "@mui/material/styles";
import ptBR from "@/_mock/lang/pt-BR";

export function OurServices() {
  const theme = useTheme();
  const IconServices = {
    default: () => <AirportShuttle />,
    LocalShipping: () => <LocalShipping />,
    Handshake: () => <Handshake />,
    RocketLaunch: () => <RocketLaunch />,
  };
  const { title, services } = ptBR.ourServices;

  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: 4,
          sm: 12,
          md: 4,
          lg: 0,
        },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        fontWeight={500}
        color={{ lg: "white" }}
        sx={{
          textAlign: { sm: "center", lg: "start" },
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        columns={12}
        alignItems="center"
        spacing={5}
        paddingTop={{
          xs: 3,
          sm: 4.5,
        }}
        direction={{ xs: "column", sm: "row" }}
      >
        {services.map((service) => (
          <Grid item key={service.title} xs={6} sm={6}>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                width: "100%",
                boxShadow: theme.shadows[6],
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Avatar
                sx={{ bgcolor: theme.palette.primary.light, marginBottom: 2 }}
              >
                {IconServices[service.iconName]?.() ?? IconServices.default()}
              </Avatar>
              <Typography variant="h6" component="h3" fontWeight={500}>
                {service.title}
              </Typography>
              <Typography variant="subtitle2">{service.text}</Typography>
              <Button sx={{ padding: 0, marginTop: 1 }}>
                {service.buttonLabel}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
