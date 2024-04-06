import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Box } from "~/styled-system/jsx";

export interface IndexProps {}

export default component$<IndexProps>(() => {
  return <Box alignContent={"center"}> Contactanos </Box>;
});

export const head: DocumentHead = {
  title: "contactanos - La Guajira",
  meta: [
    {
      name: "description",
      content: "Contactanos para mas informacion",
    },
  ],
};
