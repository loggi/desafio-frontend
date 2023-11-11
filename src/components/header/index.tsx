import Image from "next/image";

import { AppBar, Toolbar } from "@mui/material";

export function Header() {
  return (
    <AppBar position="fixed" sx={{ display: "flex" }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <Image src="/loggi-logo.svg" alt="Loggi" width={90} height={30} />
      </Toolbar>
    </AppBar>
  );
}
