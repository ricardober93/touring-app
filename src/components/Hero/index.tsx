import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Flex, Grid } from "~/styled-system/jsx";
import { FormHero } from "../FormHero";

export const Hero = component$(() => {
  return (
    <Flex
      bgImage="url(https://res.cloudinary.com/dgiznxps9/image/upload/v1712778118/tourismo/keb1neo4uox8jry37hkf.webp)"
      bgSize={"cover"}
      bgPosition={"center"}
      h={"100dvh"}
      w={"100vw"}
      justifyContent={"start"}
      alignItems={"center"}
      p={{
        base: 4,
        md: 8,
      }}
      bg={"gray.900"}
    >
      <Grid
        class={css({
          w: {
            base: "100%",
            md: "50%",
          },
          gap: 16,
        })}
      >
        <h1
          class={css({
            textStyle: "hero",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            boxOrient: "vertical",
            lineClamp: 2,
          })}
        >
          Encuentra tu próximo destino - La Guajira
        </h1>

        <FormHero />

        <Flex
          gap={8}
          flexFlow={{
            base: "column",
            md: "row wrap",
          }}
        >
          <Grid gap={2} justifyItems={"center"} alignItems={"center"}>
            <p
              class={css({
                fontSize: "6xl",
                fontWeight: "bold",
              })}
            >
              400
              <span
                class={css({
                  color: "blue.800",
                })}
              >
                +
              </span>
            </p>
            <p
              class={css({
                textStyle: "title",
              })}
            >
              clientes felices
            </p>
          </Grid>

          <Grid gap={2} justifyItems={"center"} alignItems={"center"}>
            <p
              class={css({
                fontSize: "6xl",
                fontWeight: "bold",
              })}
            >
              2k
              <span
                class={css({
                  color: "blue.800",
                })}
              >
                +
              </span>
            </p>
            <p
              class={css({
                textStyle: "title",
              })}
            >
              planes turisticos
            </p>
          </Grid>

          <Grid gap={2} justifyItems={"center"} alignItems={"center"}>
            <p
              class={css({
                fontSize: "6xl",
                fontWeight: "bold",
              })}
            >
              6
              <span
                class={css({
                  color: "blue.800",
                })}
              >
                +
              </span>
            </p>
            <p
              class={css({
                textStyle: "title",
              })}
            >
              años de experiencia
            </p>
          </Grid>
        </Flex>
      </Grid>
    </Flex>
  );
});
