import NextLink from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

type FooterSubMenuProps = {
  links: { id: string; href: string; name: string }[];
};

export default function FooterSubMenu({ links }: FooterSubMenuProps) {
  return (
    <List>
      {links.map((link) => (
        <ListItem
          key={link.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,

            marginTop: 1,
          }}
        >
          <Link
            component={NextLink}
            href={link.href}
            sx={{ width: "max-content", padding: 0 }}
            variant="caption"
          >
            {link.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
