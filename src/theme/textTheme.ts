import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  hero: {
    description: "the hero text - used in the hero",
    value: {
      fontFamily: "sans-serif",
      fontWeight: "800",
      fontSize: {
        base: "32px",
        sm: "48px",
        md: "64px",
        lg: "72px",
        xl: "86px",
      },
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
      fontSize: {
        base: "22px",
        sm: "24px",
      },
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
      fontSize: {
        base: "14px",
        sm: "16px",
      },
      lineHeight: "24px",
      letterSpacing: "0",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});
