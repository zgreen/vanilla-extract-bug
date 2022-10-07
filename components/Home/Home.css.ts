import { globalStyle } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const styles = createSprinkles(
  defineProperties({ properties: { margin: ["0 auto"] } })
);

export const container = styles({ margin: "0 auto" });

globalStyle(`${container} > *`, {
  color: "red",
});
