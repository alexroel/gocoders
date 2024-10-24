import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { sidebar } from "./src/config/sidebar";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "GoCoders",
      title: {
        es: "GoCoders",
        en: "GoCoders",
      },
      defaultLocale: "root", // opcional
      locales: {
        root: {
          label: "Español",
          lang: "es", // lang es obligatorio para los locales raíz
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      logo: {
        src: "./src/assets/gocoders-logo.png",
        alt: "GoCoders Logo",
        // replacesTitle: true,
      },
      customCss: [
        // Ruta relativa a tu archivo CSS personalizado
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: sidebar,
    }),
  ],
});
