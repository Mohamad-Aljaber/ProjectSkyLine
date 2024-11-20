import React, { useState } from "react";
import { useRouter } from "next/router";
import InputFieldWithIcon from "@/components/mui/InputFieldWithIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import LanguageSelect from "@/components/mui/LanguageSelect";
export default function Index() {
  const theme = useTheme();
  const router = useRouter();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;
  const [companyNumber, setCompanyNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", { companyNumber, email });
    router.push("register/step2");
  };
  const inputs = [
    {
      label: "Company number",
      value: companyNumber,
      onChange: (value: string) => setCompanyNumber(value),
      placeholder: "",
      icon: <VisibilityIcon />,
    },
    {
      label: "Company email",
      value: email,
      onChange: (value: string) => setEmail(value),
      placeholder: "ourfamily@gmail.com",
      type: "email",
      icon: <EmailIcon />,
    },
  ];

  return (
    <>
      <LanguageSelect />
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Container>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", gap: "20px", flexDirection: "column" }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 700 }}
              >
                Welcome to our family!
                <Typography sx={{ color: "#A7A6B8" }}>
                  Register your account
                </Typography>
              </Typography>

              {/* توليد الحقول باستخدام map */}
              {inputs.map((input, index) => (
                <InputFieldWithIcon
                  key={index}
                  label={input.label}
                  value={input.value}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                  type={input.type || "text"}
                >
                  {input.icon}
                </InputFieldWithIcon>
              ))}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: `${PDark}`,
                  padding: 2,
                  my: 3,
                  "&:hover": {
                    background: `${PMain}`,
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </Container>
        </Grid>

        <Grid
          item
          xs={0}
          md={5}
          sx={{
            background: `${PMain}D6`,
            overflow: "hidden",
            textAlign: "center",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "Langar",
              background: "linear-gradient(270deg, #FFFFFF 0%, #1CFDFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
              height: "20%",
            }}
          >
            SkyLine
          </Typography>
          <img
            src="/imagesSVG/signup-banner1.svg"
            alt="SVG Example"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
