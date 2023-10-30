import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function LinksStoreApp() {
  return (
    <Box
      sx={{
        paddingLeft: {
          xs: 3,
          sm: 12,
          lg: 0,
        },
        paddingRight: {
          xs: 3,
          sm: 12,
          lg: 0,
        },
        marginBottom: {
          xs: 2,
          lg: 0,
        },
        marginTop: {
          xs: 3,
          lg: 0,
        },
      }}
    >
      <Button
        component={Link}
        href="/"
        variant="outlined"
        fullWidth
        sx={{ paddingTop: 1.3, paddingBottom: 1.3 }}
      >
        <Image
          src="/images/google-play-store.svg"
          alt="app store image"
          width={139}
          height={38}
        />
      </Button>
      <Button
        component={Link}
        href="/"
        variant="outlined"
        fullWidth
        sx={{ marginTop: 2, paddingTop: 1.3, paddingBottom: 1.3 }}
      >
        <Image
          src="/images/app-store.svg"
          alt="app store image"
          width={123}
          height={38}
        />
      </Button>
    </Box>
  );
}
