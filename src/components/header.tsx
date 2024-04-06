import { $, component$, useSignal } from "@builder.io/qwik";

import { Box, Flex } from "~/styled-system/jsx";
import { Link } from "@builder.io/qwik-city";
import { Button } from "./Button";

export default component$(() => {
  const show = useSignal(false);

  const toggleMenu = $(() => {
    show.value = !show.value;
  });

  return (
    <Flex
      w={"100%"}
      py={6}
      px={{
        base: 4,
        md: 8,
      }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Link href="/" title="Logo">
        Logo
      </Link>

      <Flex
        gap={4}
        display={{
          base: "none",
          md: "flex",
        }}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} prefetch={link.prefetch}>
            {link.title}
          </Link>
        ))}
      </Flex>
      <Flex
        gap={4}
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/sign-up">Sing up</Link>
        </Button>
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

      <Flex
        bg={"gray.100"}
        w={"100%"}
        h={"100vh"}
        position={"fixed"}
        top={0}
        left={show.value ? 0 : -1000}
        flexDirection={"column"}
        gap={4}
        display={{
          base: "flex",
          md: "none",
        }}
        transition={"left 0.5s ease-in-out"}
      >
        <Flex w={"100%"} justifyContent={"flex-end"} p={4}>
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

        <Flex flexFlow={"wrap column"} gap={8} py={4} px={8}>
          {links.map((link) => (
            <Link
              onClick$={toggleMenu}
              key={link.href}
              href={link.href}
              prefetch={link.prefetch}
            >
              {link.title}
            </Link>
          ))}
        </Flex>
        <Flex gap={4} px={8}>
          <Button>
            <Link href="/login" prefetch>
              Login
            </Link>
          </Button>
          <Button variant="secondary">
            <Link href="/sign-up" prefetch>
              Sing up
            </Link>
          </Button>
        </Flex>
        <Box flex={1}></Box>
      </Flex>
    </Flex>
  );
});

const links = [
  { href: "/", title: "Home", prefetch: true },
  { href: "/about", title: "About", prefetch: true },
  { href: "/discover", title: "Discover", prefetch: true },
  { href: "/contact", title: "Contact", prefetch: true },
];
