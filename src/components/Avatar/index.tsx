import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";
import { Circle } from "~/styled-system/jsx";

export interface IndexProps {
  image: string;
}

export const Avatar = component$<IndexProps>(({ image }) => {
  return (
    <Circle size="12">
      <img
        class={css({
          borderRadius: "full",
        })}
        src={image}
        width={64}
        height={64}
        alt="avatar"
      />
    </Circle>
  );
});
