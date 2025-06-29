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
    { text: "Portal MSeller", url: "https://ecf.mseller.app" },
    { text: "Registro", url: "https://ecf.mseller.app/register" },
    { text: "Iniciar Sesión", url: "https://ecf.mseller.app/login" },
  ],
  // For SEO and OpenGraph
  githubUrl: "https://github.com/victors1681/dgii-ecf",
  i18n: false,
  themeSwitch: {
    enabled: true,
    mode: "light-dark-system",
  },
  searchToggle: {
    enabled: true,
    components: {
      sm: "🔍",
    },
  },
};
