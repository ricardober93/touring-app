import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/header";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
