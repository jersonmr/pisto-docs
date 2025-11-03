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
                    label: "03. Ubicación y GPS",
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
                    label: "07. Carga de Contactos",
                    slug: "carga-de-contactos",
                },
                {
                    label: "08. Validación de Email",
                    slug: "verificacion-de-email",
                },
                {
                    label: "09. Datos del Cliente",
                    slug: "carga-de-informacion-del-cliente",
                },
                {
                    label: "10. Cierre de Sesión",
                    slug: "cerrar-sesion",
                },
                {
                    label: "11. Notificaciones del Cliente",
                    slug: "notificaciones-del-cliente",
                },
                {
                    label: "12. Actualizar Notificaciones del Cliente",
                    slug: "actualizar-notificaciones",
                },
                {
                    label: "13. Validación de Código Promocional",
                    slug: "validacion-de-codigo-promocional",
                },
                {
                    label: "15. Validación de Número Telefónico",
                    slug: "validacion-de-numero-telefonico",
                },
                {
                    label: "16. Carga de Imágenes",
                    slug: "carga-de-imagenes",
                },
                {
                    label: "17. Solicitud de Primer Préstamo",
                    slug: "solicitud-de-primer-prestamo",
                },
                {
                    label: "18. Solicitud de Préstamo Posterior",
                    slug: "solicitud-de-prestamo-posterior",
                },
                {
                    label: "19. Rechazo de Préstamo",
                    slug: "rechazo-de-prestamo",
                },
                {
                    label: "20. Aceptación de Préstamo",
                    slug: "aceptacion-de-prestamo",
                },
                {
                    label: "21. Recarga de Fotos No Adecuadas",
                    slug: "recarga-de-fotos-no-adecuadas",
                },
                {
                    label: "22. Pago de prestamo",
                    slug: "pago-de-prestamo",
                },
                {
                    label: "23. Historial de préstamos",
                    slug: "historial-de-prestamos",
                },
                {
                    label: "24. Descarga de documentos legales",
                    slug: "descarga-de-documentos-legales",
                },
                {
                    label: "25. Códigos promocionales",
                    slug: "codigos-promocionales",
                },
                {
                    label: "26. Perfil de usuario",
                    slug: "perfil-de-usuario",
                },
                {
                    label: "27. Preguntas frecuentes",
                    slug: "preguntas-frecuentes",
                },
                {
                    label: "28. Contacto",
                    slug: "contacto",
                },
            ],
        }),
    ],
});
