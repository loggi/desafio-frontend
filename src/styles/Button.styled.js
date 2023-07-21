import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 8px;
  border: 2px solid #0095FF;
  background-color: #FFFFFF;   padding: 5px;
  margin: 2px;
  height: 2rem;
  font-weight: 500;
  font-family: inherit;
  color: #0095FF;
  transition: border-color 0.25s;
  cursor: pointer;
  :hover {
    border-color: #002E77;
  }
`