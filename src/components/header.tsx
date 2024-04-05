import { $, component$, useSignal } from "@builder.io/qwik";

import { Box, Flex } from "~/styled-system/jsx";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const show = useSignal(false);

  const toggleMenu = $(() => {
    show.value = !show.value;
  });

  return (
    <Flex
      w={"100%"}
      bg={"gray.200"}
      py={6}
      px={{
        base: 4,
        md: 8,
      }}
    >
      <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
        <div>
          <Link href="/" title="qwik">
            Tour
          </Link>
        </div>
        <Flex
          gap={4}
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Link href="#" target="_blank">
            ver Toures
          </Link>
        </Flex>

        <Box
          display={{
            base: "flex",
            md: "none",
          }}
          color="gray.800"
          onClick$={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </Box>
      </Flex>
      <Flex
        bg={"gray.100"}
        w={"100%"}
        h={"100vh"}
        position={"fixed"}
        top={0}
        left={show.value ? 0 : -1000}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
        display={{
          base: "flex",
          md: "none",
        }}
        transition={"left 0.5s ease-in-out"}
      >
        <Box
          display={{
            base: "flex",
            md: "none",
          }}
          color="gray.800"
          onClick$={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </Box>
      </Flex>
    </Flex>
  );
});
