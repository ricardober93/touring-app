import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/Hero";

export default component$(() => {
  return (
    <>
      <Hero></Hero>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tour - La Guajira",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
