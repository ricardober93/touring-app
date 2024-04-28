import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Button } from "~/components/Button";
import { getTours } from "~/models/tours.model";
import { css } from "~/styled-system/css";
import { Divider, Flex, Grid } from "~/styled-system/jsx";

export const useLoader = routeLoader$(async ({ request }) => {
    const url = new URL(request.url);
    const skip = Number(url.searchParams.get("skip")) || 0;
    const take = Number(url.searchParams.get("take")) || 10;

    const data = await getTours({ skip, take });

    return data;
});

export default component$(() => {

    const data = useLoader();

    return (
        <Flex p={4} h={"100%"} direction={"column"}>
            <Flex w={"100%"} justifyContent={"space-between"}>
                <h1 class={css({ textStyle: "title", mb: "6" })}>Toures</h1>
                <Button>
                    <Link href="/dashboard/tours/create/">
                        <span class={css({ px: "3", py: 1 })}> Crear Tour </span>{" "}
                    </Link>
                </Button>
            </Flex>
            <Divider divideY={"2"} position="relative" my={4} />
            <Flex p={6} gap={4} alignItems="center" justifyContent={"center"} flex={1}>

                {
                    data.value.tours.length > 0 ? data.value.tours.map((item, index) => {
                        return (
                            <div key={index}>
                                {
                                    item.title
                                }
                            </div>
                        );
                    }
                    ) : <p>No hay tours</p>
                }

            </Flex>
        </Flex>
    );
});
