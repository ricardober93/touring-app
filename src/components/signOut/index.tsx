import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";
import { css } from "~/styled-system/css";

export const SignOut = component$(() => {
  const signOut = useAuthSignout();

  return (
    <Form
      class={css({
        w: "full",
        cursor: "pointer",
        h: "full",
      })}
      action={signOut}
    >
      <input type="hidden" name="callbackUrl" value="/" />
      <button>Sign Out</button>
    </Form>
  );
});
