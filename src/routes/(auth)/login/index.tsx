import { component$ } from "@builder.io/qwik";

import { css } from "~/styled-system/css";
import { Divider, Flex } from "~/styled-system/jsx";

import { Form as FormQuiwk } from "@builder.io/qwik-city";

import { Button } from "~/components/Button";
import { useAuthSignin } from "~/routes/plugin@auth";

export default component$(() => {
  const signIn = useAuthSignin();

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
          <p class={css({ textStyle: "body" })}>Inicia sesión</p>
        </Flex>
        <FormQuiwk
          action={signIn}

        >
          <input type="hidden" name="options.callbackUrl" value="/dashboard" />
          <Button>
            <span class={css({ p: 3, cursor: "pointer", })}>
              Usar credenciales
            </span>
          </Button>
        </FormQuiwk>
        <Divider divideY={"2"} position="relative" my={4}>
          <span
            class={css({
              bg: "white",
              position: "absolute",
              p: 2,
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
            })}
          >
            {" "}
            or
          </span>
        </Divider>
        <FormQuiwk action={signIn}>
          <input type="hidden" name="providerId" value="google" />
          <input type="hidden" name="options.callbackUrl" value="/" />
          <Button>
            {" "}
            <span
              class={css({
                p: 3,
                cursor: "pointer",
              })}
            >
              {" "}
              Iniciar sesión con Google{" "}
            </span>
          </Button>
        </FormQuiwk>
      </Flex>
    </Flex>
  );
});
