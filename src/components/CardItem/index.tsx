import { Slot, component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Box } from "~/styled-system/jsx";

export const CardItem = component$(() => {
    return (
        <Box
            bg={"white"}
            borderRadius={4}
            boxShadow={"lg"}
            p={4}
            display={"grid"}
            gap={2}
            justifyContent={"center"}
            justifyItems={"center"}
        >

            <Slot />
            <Slot name="title" />
        </Box>
    );
});
