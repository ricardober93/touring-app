import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Flex, Grid } from "~/styled-system/jsx";
import { FormHero } from "../FormHero";

export const Hero = component$(() => {
  return (
    <Flex
      bgImage={
        "url(https://res.cloudinary.com/dgiznxps9/image/upload/v1712778118/tourismo/keb1neo4uox8jry37hkf.webp)"
      }
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
      bg={"gray.100"}
    >
      <Grid
        class={css({
          w: {
            base: "100%",
            md: "50%",
          },
          gap: 4,
        })}
      >
        <h1
          class={css({
            fontSize: {
              base: "4xl",
              md: "6xl",
            },
            fontWeight: "bold",
            color: "gray.950",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            boxOrient: "vertical",
            lineClamp: 2,
          })}
        >
          Encuentra tu próximo destino - La Guajira
        </h1>

        <FormHero />
      </Grid>
    </Flex>
  );
});
