import { createCycleContext } from "../utils/createCycleContext";

const accents = ["blue", "purple", "emerald", "orange"];

export const { Context: AccentContext, Provider: AccentProvider } =
  createCycleContext(accents, "data-accent", "accentIndex");
