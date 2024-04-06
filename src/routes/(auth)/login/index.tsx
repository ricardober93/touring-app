import { $, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  type SubmitHandler,
  formAction$,
  useForm,
  valiForm$,
  type InitialValues,
} from "@modular-forms/qwik";
import { Button } from "~/components/Button";
import { css } from "~/styled-system/css";
import { Flex, Grid } from "~/styled-system/jsx";

import { email, type Input, minLength, object, string } from "valibot";

const LoginSchema = object({
  email: string([
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  password: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
  ]),
});

type LoginForm = Input<typeof LoginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
}));

export const useFormAction = formAction$<LoginForm>((values) => {
  console.log(values);
}, valiForm$(LoginSchema));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(LoginSchema),
  });

  const handleSubmit = $<SubmitHandler<LoginForm>>((values) => {
    loginForm.dirty;
    console.log(values);
  });

  return (
    <Flex
      w={"container"}
      h={"container"}
      bg={"gray.100"}
      p={8}
      borderRadius={4}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex flexDirection={"column"} alignItems={"center"} gap={4}>
        <Flex flexDirection={"column"} gap={4} alignItems={"center"}>
          <h1 class={css({ textStyle: "title" })}>Login</h1>
          <p class={css({ textStyle: "body" })}>
            This is a paragraph from Panda with the body text style.
          </p>
        </Flex>

        <Form
          onSubmit$={handleSubmit}
          class={css({
            display: "flex",
            flexFlow: "column",
            gap: 4,
          })}
        >
          <Field name="email">
            {(field, props) => (
              <Grid>
                <input
                  class={css({
                    borderRadius: 4,
                    p: 2,
                    bg: "white",
                  })}
                  {...props}
                  type="email"
                  name="email"
                  value={field.value}
                />
                {field.error && (
                  <span
                    class={css({
                      color: "red",
                    })}
                  >
                    {field.error}
                  </span>
                )}
              </Grid>
            )}
          </Field>
          <Field name="password">
            {(field, props) => (
              <Grid>
                <input
                  class={css({
                    borderRadius: 4,
                    p: 2,
                    bg: "white",
                  })}
                  {...props}
                  type="password"
                  name="password"
                  value={field.value}
                />
                {field.error && (
                  <span
                    class={css({
                      color: "red",
                    })}
                  >
                    {field.error}
                  </span>
                )}
              </Grid>
            )}
          </Field>
          <Button>Login</Button>
        </Form>
      </Flex>
    </Flex>
  );
});
