import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";

export const FormHero = component$(() => {
  return (
    <Form
      class={css({
        display: "flex",
        flexFlow: "row wrap",
        gap: 4,
      })}
    >
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellido" />
      <input type="text" placeholder="Correo" />
      <button>Enviar</button>
    </Form>
  );
});
