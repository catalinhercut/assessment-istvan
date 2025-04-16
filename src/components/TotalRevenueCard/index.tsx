import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { FEATUREFLAGS } from "../../featureFlags";
import { useFeatureFlag } from "../../hooks/useFeatureFlag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const TotalRevenueCard = () => {
  const isTotalRevenueCardEnabled = useFeatureFlag(
    FEATUREFLAGS.TOTALREVENUECARD
  );

  console.log(isTotalRevenueCardEnabled);

  if (!isTotalRevenueCardEnabled) {
    return;
  }

  return (
    <section>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid size={10} container>
              <Grid size={12}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h1"
                  sx={{ textAlign: "left" }}
                >
                  <strong>Total Sales</strong>
                </Typography>
              </Grid>
              <Grid size={12}>
                <Box textAlign="left">
                  <Typography variant="h6" component="span">
                    $173,000
                  </Typography>{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ color: "#48BB78" }}
                  >
                    +8%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid size={2}>
              <ShoppingCartIcon />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
};
