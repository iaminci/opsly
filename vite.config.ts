import { defineConfig, loadEnv, mergeConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

function viteEnvDefine(mode: string) {
  const loaded = loadEnv(mode, process.cwd(), "VITE_");
  const define: Record<string, string> = {};
  for (const [key, value] of Object.entries(loaded)) {
    define[`import.meta.env.${key}`] = JSON.stringify(value);
  }
  return { define };
}

/** Same plugin order as Vercel’s official TanStack Start example. */
function vercelViteConfig(env: { mode: string }) {
  return mergeConfig(viteEnvDefine(env.mode), {
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: [
      viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
      tailwindcss(),
      tanstackStart(),
      nitro(),
      viteReact(),
    ],
  });
}

export default defineConfig((env) => vercelViteConfig(env));
