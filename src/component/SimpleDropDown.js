import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const SimpleDropDown = () => {
  const options = [{ id: 1, label: "aa" }];
  const [value, setValue] = useState();
  return (
    <>
      <Autocomplete
        value={value}
        disablePortal
        id="simple-drop-down"
        options={options}
        sx={{ width: 300 }}
        getOptionLabel={option => option.label}
        renderInput={params => (
          <TextField {...params} label="Movie" variant="standard" />
        )}
        onChange={(e, value) => {
          setValue(value);
          console.log(value, "value1");
        }}
      />
    </>
  );
};

export default SimpleDropDown;
