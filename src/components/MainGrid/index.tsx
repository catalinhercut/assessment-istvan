import { Box, Typography, Grid } from "@mui/material";
import { ActiveUsers } from "../ActiveUsers";
import { TotalRevenueCard } from "../TotalRevenueCard";

export const MainGrid = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid>
          <ActiveUsers />
        </Grid>

        <Grid>
          <TotalRevenueCard />
        </Grid>
      </Grid>
    </Box>
  );
};
