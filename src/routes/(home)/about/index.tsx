import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Box } from "~/styled-system/jsx";

export interface IndexProps {}

export default component$<IndexProps>(() => {
  return <Box alignContent={"center"}> about</Box>;
});

export const head: DocumentHead = {
  title: "quienes somos - La Guajira",
  meta: [
    {
      name: "description",
      content: "Somos una empresa dedicada a los turistas de la Guajira",
    },
  ],
};
