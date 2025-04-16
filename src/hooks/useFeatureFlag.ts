import { useContext } from "react";
import { FeatureFlagContext } from "../contexts/FeatureFlagContext";

export const useFeatureFlag = (flag: string, fallback = false): boolean => {
  const flags = useContext(FeatureFlagContext);
  return flags?.[flag] ?? fallback;
};
