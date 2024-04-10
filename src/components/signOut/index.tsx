import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";

export const SignOut = component$(() => {
  const signOut = useAuthSignout();

  return (
    <Form action={signOut}>
      <input type="hidden" name="callbackUrl" value="/" />
      <button>Sign Out</button>
    </Form>
  );
});
