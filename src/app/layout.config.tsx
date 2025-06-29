// see https://fumadocs.dev/docs/ui/navigation/links
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          width={30}
          height={20}
          src="/images/logos/m-mseller.png"
          alt="MSeller Logo"
        />
        ECF MSeller
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    { label: "Portal", href: "https://ecf.mseller.app" },
    { label: "Registro", href: "https://ecf.mseller.app/register" },
    { label: "Iniciar Sesión", href: "https://ecf.mseller.app/login" },
  ],
  // For SEO and OpenGraph
  github: "https://github.com/mseller",
  project: { name: "ECF MSeller" },
  footer: {
    text: `© ${new Date().getFullYear()} MSeller. Todos los derechos reservados.`,
  },
};
