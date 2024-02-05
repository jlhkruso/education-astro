import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        mono: [`"MDIO"`, "md-io-fallback", "monospace"],
        obviously: ["Obviously", "obviously-regular-fallback", "sans-serif"],
        "obviously-wide": [
          `"Obviously Wide", "obviously-wide-fallback", "sans-serif"`,
        ],
      },
      height: {
        header: "5rem",
      },
    },
  },
  plugins: [
    plugin(function astroComponentsPlugin({ addComponents, theme }) {
      addComponents({
        "b, strong": {
          fontWeight: "700",
        },

        ".container": {
          "@apply w-full mx-auto max-w-screen-2xl px-4 md:px-8": {},
        },

        ".heading-1": {
          "@apply font-obviously text-6xl leading-tight": {},
        },

        ".heading-2": {
          "@apply font-obviously text-5xl leading-tight": {},
        },

        ".heading-3": {
          "@apply font-obviously text-3xl leading-tight": {},
          fontSize: "32px",
        },
        ".body": {
          "@apply font-sans text-base font-light": {},
        },
        ".body-large": {
          "@apply font-sans text-2xl font-extralight leading-normal": {},
        },

        ".link": {
          "@apply transition-colors text-astro-gray-100 hover:text-astro-gray-300":
            {},
        },

        ".input": {
          "@apply rounded-lg border border-astro-gray-500 bg-astro-gray-600 p-3 leading-none shadow-inner":
            {},
        },
        ".input-textarea": {
          "@apply py-2 leading-normal": {},
        },

        ".landing-section": {
          "@apply flex flex-col items-center justify-center overflow-visible text-center":
            {},
        },

        ".bg-grid": {
          backgroundSize: "100px 100px",
          zIndex: theme("zIndex.grid"),
          backgroundImage: `url("/assets/bg-grid.png")`,
          backgroundPositionY: "-9px",

          maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
        },

        ".panel": {
          "@apply border border-astro-gray-500 bg-astro-gray-600 shadow-xl": {},
        },
      });
    }),
  ],
};
