import { createCycleContext } from "../utils/createCycleContext";

const cloudTypes = ["visible", "hidden"];

export const { Context: CloudContext, Provider: CloudProvider } =
  createCycleContext(cloudTypes, "data-cloud-type", "cloudTypeIndex");
