import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { FEATUREFLAGS, featureFlags } from "../../featureFlags";
import { useFeatureFlag } from "../../hooks/useFeatureFlag";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { DetailsBox } from "./DetailsBox";
import RocketIcon from "@mui/icons-material/Rocket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuildIcon from "@mui/icons-material/Build";

export const ActiveUsers = () => {
  const isActiveUsersWidgetEnabled = useFeatureFlag(
    FEATUREFLAGS.ACTIVEUSERWIDGET
  );

  console.log(isActiveUsersWidgetEnabled);

  if (!isActiveUsersWidgetEnabled) {
    return;
  }

  return (
    <section>
      <Card>
        <CardContent>
          <Grid container spacing={4}>
            <Grid size={12}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="h1"
                sx={{ textAlign: "left" }}
              >
                <strong>Active Users</strong>
              </Typography>
              <Box textAlign="left">
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "#48BB78" }}
                >
                  (+23)
                </Typography>{" "}
                <Typography variant="subtitle1" component="span">
                  than last week
                </Typography>
              </Box>
            </Grid>
            <Grid size={12} container>
              <Grid size={3}>
                <DetailsBox
                  title="Users"
                  value="32,984"
                  icon={AdsClickIcon}
                  progress={30}
                />
              </Grid>
              <Grid size={3}>
                <DetailsBox
                  title="Clicks"
                  value="2,42m"
                  icon={RocketIcon}
                  progress={40}
                />
              </Grid>
              <Grid size={3}>
                <DetailsBox
                  title="Sales"
                  value="2,400$"
                  icon={ShoppingCartIcon}
                  progress={20}
                />
              </Grid>
              <Grid size={3}>
                <DetailsBox
                  title="Items"
                  value="320"
                  icon={BuildIcon}
                  progress={50}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
};
