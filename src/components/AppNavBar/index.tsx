import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import { Header } from "../Header";

export const AppNavbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: { xs: "auto" },
        boxShadow: 0,
        bgcolor: "background.paper",
        backgroundImage: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        top: "var(--template-frame-height, 0px)",
      }}
    >
      <Toolbar variant="regular">
        <Header />
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexGrow: 1,
            width: "100%",
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", mr: "auto" }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ color: "text.primary" }}
            >
              Dashboard
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ gap: 1 }}>
          change color mode
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
