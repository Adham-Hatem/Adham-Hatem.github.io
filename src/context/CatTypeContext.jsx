import { createCycleContext } from "../utils/createCycleContext";

const catTypes = ["ginger", "chinchilla", "britishShorthair", "calico"];

export const { Context: CatTypeContext, Provider: CatTypeProvider } =
  createCycleContext(catTypes, "data-cat-type", "catTypeIndex");
