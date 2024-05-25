import adapter from "@sveltejs/adapter-netlify";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        target: "#svelte",
        adapter: adapter(),
    },
};
export default config;

// import adapter from "@sveltejs/adapter-auto";
// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     kit: {
//         adapter: adapter(),
//     },
//     preprocess: vitePreprocess(),
// };
// export default config;
