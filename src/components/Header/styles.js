import { styled } from "@mui/material";
export const listItemStyles = {
    marginRight: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
};

export const listAndLogoStyles = {
    display: 'flex',
    alignItems: 'center',
}

export const ListContainer = styled('ul')({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    '@media (max-width: 900px)': {
      display: 'none',
    },
  });


  