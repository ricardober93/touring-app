import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import { css } from "~/styled-system/css";
import { Box, Divider, Flex } from "~/styled-system/jsx";

export const SideBar = component$(() => {
    const session = useAuthSession();
    return (
        <div
            class={css({
                bg: "gray.100",
                p: 4,
                h: "100vh",
            })}
        >
            <p class={css({
                textStyle: "body"
            })}>
                user:
            </p>
            <h4 class={css({
                textStyle: "lg"
            })}>{session?.value?.user?.email}</h4>

            <Divider divideY={"2"} position="relative" my={4} />

            <Flex direction={"column"} gap={4} >

                <Link href="/dashboard">
                    <Box p={2} borderRadius={4} _hover={{ bg: "gray.300" }}>Dashboard</Box>
                </Link>



                <Link href="/dashboard/tours">
                    <Box p={2} borderRadius={4} _hover={{ bg: "gray.300" }}>Tours</Box>
                </Link>




            </Flex>

        </div>
    );
});
