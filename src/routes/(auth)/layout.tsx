import { Slot, component$ } from "@builder.io/qwik";
import { Grid } from "~/styled-system/jsx";

export default component$(() => {
  return (
    <Grid
      justifyContent={"center"}
      alignContent={"center"}
      h={"dvh"}
      w={"screen"}
    >
      <Slot />
    </Grid>
  );
});
