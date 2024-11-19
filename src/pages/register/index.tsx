import InputFieldWithIcon from "@/components/mui/InputFieldWithIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import {
  Container,
  Box,
  Typography,
  Theme,
  useTheme,
  Grid,
  Button,
} from "@mui/material";
export default function Index() {
  const theme = useTheme();
  const PMain = theme.palette.primary.main;
  const PLight = theme.palette.primary.light;
  const PDark = theme.palette.primary.dark;

  return (
    <>
      <Grid
        container
        // spacing={4}
      >
        <Grid
          item
          md={7}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <Box
              component="form"
              sx={{ display: "flex", gap: "30px", flexDirection: "column" }}
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
              <InputFieldWithIcon label="Company number">
                <VisibilityIcon />
              </InputFieldWithIcon>
              <InputFieldWithIcon
                type="email"
                label="Company email"
                placeholder="ourfamily@gmail.com"
              >
                <EmailIcon />
              </InputFieldWithIcon>
              <Button
                variant="contained"
                sx={{ background: `${PDark}`, padding: 2, my: 3 }}
              >
                Contained
              </Button>
            </Box>
          </Container>
        </Grid>
        <Grid
          item
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
              height: "30%",
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
