import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  hero: {
    description: "the hero text - used in the hero",
    value: {
      fontFamily: "sans-serif",
      fontWeight: "800",
      fontSize: "64px",
      lineHeight: "72px",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  title: {
    description: "The title text style - used in headings",
    value: {
      fontFamily: "sans-serif",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  body: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "sans-serif",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});
