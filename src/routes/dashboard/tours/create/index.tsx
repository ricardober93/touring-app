import { $, component$ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import Back from '~/media/back.svg?jsx';
import {
    type SubmitHandler,
    formAction$,
    useForm,
    valiForm$,
    type InitialValues,
} from "@modular-forms/qwik";

import { type Input, minLength, object, string } from "valibot";
import { Button } from "~/components/Button";
import { css } from "~/styled-system/css";
import { Box, Flex, Grid } from "~/styled-system/jsx";

const LoginSchema = object({
    title: string([
        minLength(1, "Please el titulo del tour."),
    ]),
    password: string([
        minLength(1, "Please enter your password."),
        minLength(8, "Your password must have 8 characters or more."),
    ]),
});

type LoginForm = Input<typeof LoginSchema>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
    title: "",
    password: "",
}));

export const useFormAction = formAction$<LoginForm>((values) => {
    console.log(values);
}, valiForm$(LoginSchema));

export default component$(() => {
    const nav = useNavigate();

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
        <Flex direction={"column"} gap={4} p={4} >
            <Flex gap={4} alignItems={"center"}>
                <Box onClick$={async () => await nav("/dashboard/tours")} class={css({ p: 2, cursor: "pointer", _hover: { bg: "gray.100", borderRadius: 4 } })} > <Back style={{ width: 24, height: 24 }} />  </Box>
                <h1 class={css({ textStyle: "title" })}>Create Tour</h1>
            </Flex>

            <Form
                onSubmit$={handleSubmit}
                class={css({
                    display: "flex",
                    flexFlow: "column",
                    gap: 4,
                })}
            >
                <Field name="title">
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
                                placeholder="title"
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
                                placeholder="summary"
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
                <Button>
                    <span class={css({ p: 3, cursor: "pointer", })}>
                        Create
                    </span>
                </Button>
            </Form>
        </Flex>
    );
});
