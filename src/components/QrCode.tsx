import { Apple, Google } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
export default function QrCode() {
  return (
    <>
      <Box>
        <Typography variant="h5" sx={{ maxWidth: ["100%", 400, 260] }}>
          Você e sua empresa podem fazer envios para todo o Brasil
        </Typography>
        <Typography variant="body2" sx={{ mt: 4, fontWeight: "300" }}>
          Agora também pelo nosso app:
        </Typography>
      </Box>
      <Grid
        sx={{ display: "flex", mt: 2, justifyContent: ["center", "start"] }}
        gap={2}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", mb: 1 }} gap={1}>
            <Apple sx={{ fontSize: 24 }} />
            App Store
          </Box>
          <Image
            alt="Loggy logo azul"
            src="https://s3-sa-east-1.amazonaws.com/loggi-production-static/tracker-web-ui/images/app-store-qrcode-7e4eff18c55cf3cf38ff7971902b62b0.svg"
            width={128}
            height={128}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", mb: 1 }} gap={1}>
            <Google sx={{ fontSize: 24 }} />
            Google Play
          </Box>
          <Image
            alt="Loggy logo azul"
            src="https://s3-sa-east-1.amazonaws.com/loggi-production-static/tracker-web-ui/images/google-play-qrcode-a120a5e37d6bcde826187e52b0db9a99.svg"
            width={128}
            height={128}
          />
        </Box>
      </Grid>
    </>
  );
}
