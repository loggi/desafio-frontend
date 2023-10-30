import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export function TrackerDetailsSkeleton() {
  return (
    <Box
      sx={{
        padding: {
          xs: 4,
          sm: 12,
          lg: 4,
        },
        paddingLeft: {
          xs: 3,
        },
        paddingRight: {
          xs: 3,
        },
      }}
    >
      <Skeleton variant="rectangular" width={"100%"} height={75} />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={72}
        sx={{ marginTop: 2, marginBottom: 2 }}
      />
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2.5 }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: {
            xs: 3,
          },
        }}
      >
        <Box sx={{ margin: 1 }}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
}
