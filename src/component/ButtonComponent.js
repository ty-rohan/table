import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({
  text = "submit",
  handleButtonClick,
  size = "small",
  disabled = false,
  fullWidth = false,
  variant = "contained",
  color = "primary",
  startIcon,
  endIcon,
}) => {
  return (
    <>
      <Button
        size={size}
        onClick={handleButtonClick}
        color={color}
        disabled={disabled}
        fullWidth={fullWidth}
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
