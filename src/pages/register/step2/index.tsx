import React, { useState } from "react";
import { useRouter } from "next/router";
import InputFieldWithIcon from "@/components/mui/InputFieldWithIcon";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
export default function Index() {
  const theme = useTheme();
  const router = useRouter();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;
  const [inputs, setInputs] = useState<string[]>(Array(6).fill(""));
  const handleInputChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", inputs);
    router.push("step3");
  };
  return (
    <>
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
              sx={{
                display: "flex",
                gap: "30px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/images/lock.png"
                alt="lock logo"
                width={"84px"}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 700, mb: "30px" }}
              >
                Verification
              </Typography>

              <Box sx={{ display: "flex", gap: "10px", position: "relative" }}>
                <Typography
                  sx={{
                    color: "#00000099",
                    position: "absolute",
                    top: "-35px",
                    fontSize: "20px",
                  }}
                >
                  Please enter the code
                </Typography>
                {inputs.map((value, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: {
                        xs: "50px",
                        sm: "76px",
                        md: "76px",
                      },
                      height: {
                        xs: "75px",
                        sm: "115px",
                        md: "115px",
                      },
                      background: "#D9D9D9",
                      borderRadius: "8px",
                    }}
                  >
                    <InputFieldWithIcon
                      value={value}
                      onChange={val => handleInputChange(index, val)}
                      type={"number"}
                    />
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
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
                  Send the code
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    position: "relative",
                    background: `white`,
                    color: "black",
                    padding: 2,
                    my: 3,
                    "&:hover": {
                      background: `${PDark}`,
                      color: "White",
                    },
                  }}
                  onClick={() => setInputs(Array(6).fill(""))} // Reset inputs here
                >
                  <Typography
                    sx={{
                      color: "#00000099",
                      position: "absolute",
                      top: "-20px",
                      left: "-20px",
                      width: "150%",
                      fontSize: "12px",
                    }}
                  >
                    Didn't you receive the code?
                  </Typography>
                  Resend the code
                </Button>
              </Box>
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
              md: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            px: "1rem",
          }}
        >
          <img
            src="/imagesSVG/signup-banner2.svg"
            alt="SVG "
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
