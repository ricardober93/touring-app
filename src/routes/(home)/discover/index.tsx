import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Box } from "~/styled-system/jsx";

export interface IndexProps {}

export default component$<IndexProps>(() => {
  return <Box alignContent={"center"}> Dicover</Box>;
});

export const head: DocumentHead = {
  title: "Descubre nuestros mejores planes - La Guajira",
  meta: [
    {
      name: "description",
      content: "Los mejores planes paraa los turistas de la Guajira",
    },
  ],
};
