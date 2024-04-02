import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import { Flex } from "~/styled-system/jsx";

export default component$(() => {
  return (
    <Flex w={"100%"} bg={"gray.200"} py={2} px={4}>
      <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
        <div>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="pandacss" target="_blank">
              Tures
            </a>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
});
