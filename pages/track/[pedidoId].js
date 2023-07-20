import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router"

export default function Track() {
    const router = useRouter();
    const { pedidoId } = router.query;

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>

                <Typography variant="h4" component="h1" gutterBottom>
                    Traking page {pedidoId}
                </Typography>
            </Box>
        </Container>
    )
}