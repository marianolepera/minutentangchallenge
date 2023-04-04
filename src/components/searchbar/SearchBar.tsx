import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const TypeSearch = () => {

  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };


  return (
    <div id="app">
      <FormControl  sx={{margin:0}}>
        <TextField
          sx={{width:327}}
          size="small"
          placeholder="Search burger, pizza, drink or ect..."
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
              >
                <ClearIcon />
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </div>
  );
};

export default TypeSearch;
