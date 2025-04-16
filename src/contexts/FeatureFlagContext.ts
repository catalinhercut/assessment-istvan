import { createContext } from "react";

type FeatureFlags = Record<string, boolean>;

export const FeatureFlagContext = createContext<FeatureFlags>({});
