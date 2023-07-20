import { Button } from "@mui/material";

export default function ButtonSubmit({ text }) {
    return (
        <Button
            variant="contained"
            type="submit"
            sx={{
                color: '#FFFFFF',
                backgroundColor: '#00BAFF',
                margin: '1rem'
            }}
        >
            {text}
        </Button>
    );
}
