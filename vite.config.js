
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/sneaker-ecommerce/",
  plugins: [
    tailwindcss(),
  ],
});