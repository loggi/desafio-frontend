import Button from "@mui/material/Button";


function ButtonConfirm({ text }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "var(--black)",
        color: "var(--white)",
        border: "2px solid var(--light-blue)",
        "&:hover": {
          backgroundColor: "var(--light-blue)",
          color: "var(--white)",
        },
      }}
    >
      {text}
    </Button>
  );
}



export default ButtonConfirm;
