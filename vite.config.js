// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        concepts_of_OOP: resolve(
          __dirname,
          "src/lesson_html/concepts_of_OOP.html"
        ),
        arrays: resolve(__dirname, "src/lesson_html/arrays.html"),
        countsort: resolve(__dirname, "src/lesson_html/countsort.html"),
        linked_list: resolve(__dirname, "src/lesson_html/linked_list.html"),
        mergesort: resolve(__dirname, "src/lesson_html/mergesort.html"),
        selsort: resolve(__dirname, "src/lesson_html/selsort.html"),
        about_us: resolve(__dirname, "src/lesson_html/about_us.html"),
      },
    },
  },
});
