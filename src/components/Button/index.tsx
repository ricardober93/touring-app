import { type QRL, Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

interface IButton {
  variant?: "outline" | "solid" | "secondary";
  onClick?: QRL<() => void>;
}

export const Button = component$<IButton>(({ variant, onClick }) => {
  if (variant === "outline") {
    return (
      <button
        class={css({
          borderRadius: 4,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "gray.800",
          borderStyle: "solid",
          color: "gray.800",
          py: 3,
          px: 4,
          cursor: "pointer",
        })}
        onClick$={onClick}
      >
        <Slot />
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        class={css({
          borderRadius: 4,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          bg: "gray.400",
          color: "white",
          py: 3,
          px: 4,
          cursor: "pointer",
        })}
        onClick$={onClick}
      >
        <Slot />
      </button>
    );
  }

  return (
    <button
      class={css({
        borderRadius: 4,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        bg: "gray.800",
        color: "white",
        py: 3,
        px: 4,
        cursor: "pointer",
      })}
      onClick$={onClick}
    >
      <Slot />
    </button>
  );
});
