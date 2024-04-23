import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { FormDiscovery } from "~/components/FormDiscovery";
import { css } from "~/styled-system/css";

import { Box, Grid } from "~/styled-system/jsx";

export interface IndexProps {}

export const useTours = routeLoader$(async ({ url }) => {
  const api = url.origin + "/api/tours";

  try {
    const res = await fetch(api, {});
    const tours = await res.json();

    return tours as any[];
  } catch (error) {
    console.error(error);
    return [];
  }
});

export default component$<IndexProps>(() => {
  const tours = useTours();

  return (
    <Box h={"100dvh"} textAlign={"center"}>

      <FormDiscovery />

      <Box>
        <h1 class={css({
          textStyle: "title",

        })}>Discover our best tours</h1>
        <p class={css({
          textStyle: "body",

        })}>Here are our most popular tours</p>
      </Box>

      <Grid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        justifyItems={"center"}
        gap={2}
        p={4}
      >
        {tours.value.map((tour: any) => (
          <Link key={tour.id} href={`/tours/${tour.id}`}>
          <Box display={"grid"} gap={3} key={tour.id} maxW={"280px"}>
              <img
                class={css({
                  borderRadius: 4,
                  display: "block",
                  margin: "0 auto",
                  bgClip: "padding-box",
                  bgSize: "cover",
                  objectFit: "cover",
                  width: "280px",
                })}
                src={tour.imageCover}
                alt={tour.name}
                width={100}
                height={100}
              />
              <h2
                class={css({
                  textStyle: "title",
                })}
              >
                {tour.name}
              </h2>
              <p
                class={css({
                  textStyle: "body",
                })}
              >
                {tour.summary}
              </p>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
});

export const head: DocumentHead = {
  title: "Descubre nuestros mejores planes - La Guajira",
  meta: [
    {
      name: "description",
      content: "Los mejores planes paraa los turistas de la Guajira",
    },
  ],
};
