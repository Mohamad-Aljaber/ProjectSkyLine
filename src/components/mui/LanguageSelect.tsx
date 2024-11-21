import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const countries = [
    {
      text: "Arabic",
      pathImageFlag: "images/Flagsofcountries1.png",
      value: "arabic",
    },
    {
      text: "Turkey",
      pathImageFlag: "./images/Flagsofcountries2.png",
      value: "turkish",
    },
    {
      text: "France",
      pathImageFlag: "./images/Flagsofcountries3.png",
      value: "french",
    },
    {
      text: "USA",
      pathImageFlag: "./images/Flagsofcountries4.png",
      value: "english",
    },
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "1rem",
        left: "1rem",
      }}
    >
      <FormControl  sx={{ width: 200 }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          <LanguageRoundedIcon />
          <KeyboardArrowDownRoundedIcon />
          Choose Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          onChange={handleChange}
          label="Language"
          sx={{
            backgroundColor: "white",
            color: "black",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1E90FF",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4682B4",
            },
          }}
        >
          {countries.map(country => (
            <MenuItem
              key={country.value}
              value={country.value}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "black",
                },
              }}
            >
              <img
                src={country.pathImageFlag}
                alt={`${country.text} Flag`}
                style={{ width: "28px", marginRight: "8px" }}
              />
              {country.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
