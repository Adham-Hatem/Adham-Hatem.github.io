import { createCycleContext } from "../utils/createCycleContext";

const moonTypes = ["full", "crescent"];

export const { Context: MoonContext, Provider: MoonProvider } =
  createCycleContext(moonTypes, "data-moon-type", "moonTypeIndex");
