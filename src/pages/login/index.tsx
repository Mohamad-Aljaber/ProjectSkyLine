import { useTheme } from "@emotion/react";
import Typography from "@mui/material/Typography";

export default function Index() {
  const theme = useTheme(); // استخدام الثيم

  return (
    <div>
      login in
      <h1>ffdssssssssss</h1>
      <Typography variant="body1" style={{ color: theme.palette.primary.main }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
        placeat. Excepturi minima modi corrupti suscipit amet quis ea nisi
        facilis sint? Eligendi unde porro consequuntur beatae inventore dolorum
        fugit ipsa!
      </Typography>
      <Typography variant="body1" style={{ color: theme.palette.primary.dark }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
        placeat. Excepturi minima modi corrupti suscipit amet quis ea nisi
        facilis sint? Eligendi unde porro consequuntur beatae inventore dolorum
        fugit ipsa!
      </Typography>
      <Typography variant="body1" style={{ color: theme.palette.primary.light }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
        placeat. Excepturi minima modi corrupti suscipit amet quis ea nisi
        facilis sint? Eligendi unde porro consequuntur beatae inventore dolorum
        fugit ipsa!
      </Typography>
    </div>
  );
}
