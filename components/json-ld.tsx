import React from "react";

interface OrganizationJsonLdProps {
  name: string;
  url: string;
  logo: string;
}

export function OrganizationJsonLd({ name, url, logo }: OrganizationJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "sameAs": [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
}

export function ProductJsonLd({ name, description, image, price, currency }: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "image": image,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price.toString(),
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  mainEntity: FAQItem[];
}

export function FAQJsonLd({ mainEntity }: FAQJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface SoftwareApplicationJsonLdProps {
  name: string;
  description: string;
  image: string;
  operatingSystem: string;
  applicationCategory: string;
  price?: string;
  priceCurrency?: string;
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  image,
  operatingSystem,
  applicationCategory,
  price = "0",
  priceCurrency = "USD"
}: SoftwareApplicationJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "image": image,
    "description": description,
    "operatingSystem": operatingSystem,
    "applicationCategory": applicationCategory,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonJsonLdProps {
  name: string;
  url: string;
  image: string;
  jobTitle: string;
  sameAs: string[];
  organizationName: string;
  organizationUrl: string;
}

export function PersonJsonLd({
  name,
  url,
  image,
  jobTitle,
  sameAs,
  organizationName,
  organizationUrl
}: PersonJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "url": url,
    "image": image,
    "jobTitle": jobTitle,
    "worksFor": {
      "@type": "Organization",
      "name": organizationName,
      "url": organizationUrl
    },
    "sameAs": sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
