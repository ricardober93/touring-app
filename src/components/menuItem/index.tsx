import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const MenuItem = component$(() => {
  return (
    <li
      class={css({
        display: "block",
        w: "full",
        cursor: "pointer",
        rounded: "md",
        p: 3,
        textAlign: "start",
        transition: "all",
        _hover: {
          bg: "blue.50",
          opacity: 80,
          color: "blue.900",
        },
        _focus: {
          bg: "blue.50",
          opacity: 80,
          color: "blue.900",
        },
        _active: {
          bg: "blue.50",
          opacity: 80,
          color: "blue.900",
        },
      })}
    >
      <Slot />
    </li>
  );
});
