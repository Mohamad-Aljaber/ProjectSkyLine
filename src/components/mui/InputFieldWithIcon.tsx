import React, { ReactNode } from "react";
import {
  Box,
  FormHelperText,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
interface InputFieldWithIconProps {
  label: string;
  type?: string;
  placeholder?: string;
  children?: ReactNode;
  iconPosition?: "start" | "end";
  value: string; 
  onChange: (value: string) => void; // دالة لتحديث القيمة
}

const InputFieldWithIcon: React.FC<InputFieldWithIconProps> = ({
  value,
  onChange,
  label,
  type = "text",
  placeholder = "",
  children,
  iconPosition = "end",
}) => {
  return (
    <Box>
      <FormHelperText sx={{ color: "black", fontSize: "1rem" }}>
        {label}
      </FormHelperText>
      <FormControl
        sx={{
          border: "1px solid #BABABA",
          width: "100%",
          borderRadius: "8px",
        }}
        variant="outlined"
      >
        <OutlinedInput
          id={`outlined-adornment-${label}`}
          type={type}
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          required
          placeholder={placeholder}
          startAdornment={
            iconPosition === "start" ? (
              <InputAdornment position="start" sx={{ color: "#BABABA" }}>
                {children}
              </InputAdornment>
            ) : null
          }
          endAdornment={
            iconPosition === "end" ? (
              <InputAdornment position="end" sx={{ color: "#BABABA" }}>
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
