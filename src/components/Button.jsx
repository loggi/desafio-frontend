import React from 'react';
import { Button } from '../styles/Button.styled';

const ButtonStyle = ({children, onClick, type}) => {
  return (
    <Button type={type} onClick={onClick}>{children}</Button>
  )
}

export default ButtonStyle
