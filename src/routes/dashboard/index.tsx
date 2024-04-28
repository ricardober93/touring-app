import { Slot, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { CardItem } from "~/components/CardItem";
import { getDataDashboard } from "~/models/dashboard.models";
import { css } from "~/styled-system/css";
import { Flex, Grid } from "~/styled-system/jsx";

export const useLoader = routeLoader$(async ({ }) => {
    const data = await getDataDashboard();

    return [data];
});

export default component$(() => {
    const data = useLoader();
    return (
        <Grid p={4}>
            <h1 class={css({ textStyle: "title", mb: "6" })}>Dashboard</h1>

            <Flex p={6} gap={4} justifyItems="center">
                {data.value.map((item, index) => {
                    return (
                        <CardItem key={index}>
                            <h3
                                class={css({ fontSize: "md", fontWeight: "medium" })}
                                q:slot="title"
                            >
                                {" "}
                                Cantidad de Toures{" "}
                            </h3>
                            <p class={css({ fontSize: "md", fontWeight: "regular" })}>
                                {item.indexTours}
                            </p>
                        </CardItem>
                    );
                })}
            </Flex>
        </Grid>
    );
});
