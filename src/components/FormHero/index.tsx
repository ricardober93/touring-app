import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import { Button } from "../Button";

export const FormHero = component$(() => {
  return (
    <Form
      class={css({
        w: "fit-content",
        display: "flex",
        flexFlow: "row wrap",
        gap: 4,
        bg: "white",
        px: 4,
        py: 6,
        rounded: "lg",
      })}
    >
      <input type="text" placeholder="Lugar" />

      <input type="text" placeholder="tipo" />
      <input type="text" placeholder="rango de precio" />
      <Button>Enviar</Button>
    </Form>
  );
});
