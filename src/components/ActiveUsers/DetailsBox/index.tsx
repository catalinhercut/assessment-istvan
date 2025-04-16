import { Box, LinearProgress, Typography } from "@mui/material";
import { FC } from "react";

type BoxProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  progress: number;
};

export const DetailsBox: FC<BoxProps> = ({
  icon: Icon,
  title,
  value,
  progress,
}) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" alignItems="center" gap={2}>
        <Icon />
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography variant="h6">{value}</Typography>
      </Box>
      <Box>
        <LinearProgress value={progress} variant="determinate" />
      </Box>
    </Box>
  );
};
