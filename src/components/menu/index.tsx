import { $, Slot, component$, useSignal } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export const Menu = component$(() => {
  const show = useSignal(false);

  const toggleMenu = $(() => {
    show.value = !show.value;
  });
  return (
    <div
      class={css({
        position: "relative",
      })}
    >
      <button
        onClick$={toggleMenu}
        class={css({
          position: "relative",
          rounded: "lg",
          bg: "gray-900",
          py: 3,
          px: 6,
          textAlign: "center",
          font: "sans",
          fontSize: "xs",
          fontWeight: "bold",
          textTransform: "uppercase",
          shadow: "md",
          transition: "all",
          _hover: {
            shadow: "lg",
            shadowColor: "gray-900/20",
          },
          _focus: {
            opacity: "[0.85]",
            shadow: "none",
          },
          _active: {
            opacity: "[0.85]",
            shadow: "none",
          },
          _disabled: {
            pointerEvents: "none",
            opacity: 50,
            shadow: "none",
          },
        })}
      >
        <Slot name="button" />
      </button>
      <ul
        role="menu"
        style={{ display: show.value ? "block" : "none" }}
        class={css({
          transition: "all 0.5s ease-in-out",
          position: "absolute",
          zIndex: 10,
          right: 0,
          minW: "180px",
          overflow: "auto",
          rounded: "md",
          border: "border",
          borderColor: "blue.50",
          bg: "white",
          p: 3,
          mt: 2,
          font: "sans",
          fontSize: "sm",
          fontWeight: "normal",
          shadow: "lg",
          shadowColor: "blue.500/10",
          "&:focus": {
            outline: "none",
          },
        })}
      >
        <Slot />
      </ul>
    </div>
  );
});
