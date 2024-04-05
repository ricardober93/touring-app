import { component$ } from "@builder.io/qwik";
import { Flex } from "~/styled-system/jsx";

export const Hero = component$(() => {
  return <Flex h={"100dvh"} bg={"gray.300"}></Flex>;
});
