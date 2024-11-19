import React, { ReactNode } from "react";
import {
  Box,
  FormHelperText,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography,
} from "@mui/material";

interface InputFieldWithIconProps {
  label: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  iconPosition?: "start" | "end";
}

const InputFieldWithIcon: React.FC<InputFieldWithIconProps> = ({
  label,
  type = "text",
  placeholder = "",
  children,
  iconPosition = "end",
}) => {
  return (
    <Box >
      <FormHelperText sx={{ color: "black", fontSize: "1rem" }}>
        {label}
      </FormHelperText>
      {/* <Typography sx={{ color: "#000000"  }}>{laber}</Typography> */}
      <FormControl
        sx={{ border: "1px solid #BABABA", width: "100%", borderRadius: "8px" }}
        variant="outlined"
      >
        <OutlinedInput
          id={`outlined-adornment-${label}`}
          type={type}
          placeholder={placeholder}
          startAdornment={
            iconPosition === "start" ? (
              <InputAdornment
                position="start"
                sx={{ color: "#BABABA" }}
              >
                {children}
              </InputAdornment>
            ) : null
          }
          endAdornment={
            iconPosition === "end" ? (
              <InputAdornment
                position="end"
                sx={{ color: "#BABABA" }}
              >
                {children}
              </InputAdornment>
            ) : null
          }
          aria-describedby={`outlined-${label}-helper-text`}
          inputProps={{
            "aria-label": label,
          }}
          sx={{
            "& .MuiInputBase-input::placeholder": {
              color: "gray",
            },
            "& .MuiInputBase-input": {
              color: "black",
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default InputFieldWithIcon;
