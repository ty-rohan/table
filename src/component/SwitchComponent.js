import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomeSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  height: 35,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before,&:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 13,
    height: 13,
    margin: 2,
  },
}));

const SwitchComponent = ({ checked }) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<CustomeSwitch checked={checked} />}
          label=""
        />
      </FormGroup>
    </>
  );
};

export default SwitchComponent;
