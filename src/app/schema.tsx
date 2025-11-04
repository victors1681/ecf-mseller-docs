export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MSeller eCF",
    url: "https://ecf.mseller.app",
    logo: "https://ecf.mseller.app/images/logos/m-mseller.png",
    description:
      "Plataforma de integración para Facturación Electrónica (eCF) en República Dominicana certificada por DGII",
    address: {
      "@type": "PostalAddress",
      addressCountry: "DO",
      addressLocality: "República Dominicana",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Technical Support",
      url: "https://discord.gg/ATcEDuWf",
    },
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MSeller eCF",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "DOP",
    },
    description:
      "Plataforma API para integración de Facturación Electrónica (e-CF) con DGII en República Dominicana. Simplifica la implementación de Comprobantes Fiscales Electrónicos en tu sistema.",
    featureList: [
      "Integración con DGII",
      "Firma electrónica automática",
      "Gestión de certificados digitales",
      "Almacenamiento en la nube",
      "Plan de contingencia",
      "API RESTful",
      "Múltiples entornos (Test, Certificación, Producción)",
    ],
    keywords:
      "facturación electrónica, e-CF, DGII, República Dominicana, comprobantes fiscales electrónicos, API facturación",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
