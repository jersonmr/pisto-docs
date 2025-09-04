// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
    markdown: {
        syntaxHighlight: {
            type: "shiki",
            excludeLangs: ["mermaid", "math"],
        },
        rehypePlugins: [rehypeMermaid],
    },
    integrations: [
        starlight({
            title: "Pisto Docs",
            // social: [
            //     {
            //         icon: "github",
            //         label: "GitHub",
            //         href: "https://github.com/withastro/starlight",
            //     },
            // ],
            sidebar: [
                // {
                //     label: "Guides",
                //     items: [
                //         // Each item here is one entry in the navigation menu.
                //         { label: "Example Guide", slug: "guides/example" },
                //     ],
                // },
                // {
                //     label: "Reference",
                //     autogenerate: { directory: "reference" },
                // },
                {
                    label: "01. Verificación de versión",
                    slug: "verificacion-de-version",
                },
                {
                    label: "02. Onboarding",
                    slug: "onboarding",
                },
                {
                    label: "03. Activación y Verificación de GPS",
                    slug: "activacion-verificacion-de-gps",
                },
                {
                    label: "04. Registro de Usuario",
                    slug: "registro-de-usuario",
                },
                {
                    label: "05. Recuperación de Contraseña",
                    slug: "recuperacion-de-contrasena",
                },
                {
                    label: "06. Autenticación de Usuario",
                    slug: "autenticacion-de-usuario",
                },
                {
                    label: "07. Validación de Email",
                    slug: "verificacion-de-email",
                },
            ],
        }),
    ],
});
