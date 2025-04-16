import { Stack } from "@mui/material";

export const Header = () => (
  <Stack
    direction="row"
    sx={{
      display: { md: "flex" },
      width: "100%",
      alignItems: { xs: "flex-start", md: "center" },
      justifyContent: "space-between",
      maxWidth: { sm: "100%", md: "1700px" },
      pt: 1.5,
    }}
    spacing={2}
  >
    <Stack direction="row" sx={{ gap: 1 }}>
      change color mode
    </Stack>
  </Stack>
);
