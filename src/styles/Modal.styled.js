import styled from "styled-components";

export const ModalStyle = styled.div`
  color: black;
  border-radius: 8px;
  background-color: #E6F8fF;
  opacity: 85%;
  position: fixed;
  top: 5rem;
  bottom: 5rem;
  left: 25%;
  right: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`
export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgb(0,0,0,0.7);
`
