const fs = require('fs');
const path = require('path');

const baseUrl = "https://nanhuinteractive.dev";

// Base image data definitions
const appImages = {
  fit60: [
    { loc: `${baseUrl}/apps/fit60/icon.jpg`, title: "Fit60 App Icon", caption: "Squirclized App Store icon for the Fit60 fitness tracker codebase." },
    { loc: `${baseUrl}/apps/fit60/onboarding.png`, title: "Fit60 onboarding flows", caption: "Beautiful user onboarding screens for Fit60 workout app." },
    { loc: `${baseUrl}/apps/fit60/screenshots.png`, title: "Fit60 screenshots collage", caption: "Collage displaying workout analytics, challenges, and heart rate integration." },
    { loc: `${baseUrl}/apps/fit60/screen1.png`, title: "Fit60 Core Activity Dashboard", caption: "Main dashboard screen of Fit60 showing challenges progress." },
    { loc: `${baseUrl}/apps/fit60/screen2.png`, title: "Fit60 Workouts List", caption: "Available 60-day challenges and structured exercises." }
  ],
  nanhufx: [
    { loc: `${baseUrl}/apps/nanhufx/icon_v2.jpg`, title: "NanhuFX App Icon", caption: "Squirclized App Store icon for the NanhuFX voice teleprompter codebase." },
    { loc: `${baseUrl}/apps/nanhufx/screen1.png`, title: "NanhuFX Camera View", caption: "Live video capture UI with dynamic scrolling script overlay." },
    { loc: `${baseUrl}/apps/nanhufx/screen2.png`, title: "NanhuFX Voice Scroll settings", caption: "Configuring speech-recognition rate triggers for autoscroll speed." }
  ],
  qrMaker: [
    { loc: `${baseUrl}/apps/qr-maker/icon.jpg`, title: "QR Maker App Icon", caption: "Squirclized App Store icon for the QR Maker custom widget codebase." },
    { loc: `${baseUrl}/apps/qr-maker/onboarding.png`, title: "QR Maker Onboarding flow", caption: "User guide for creating dynamic custom color QR codes." },
    { loc: `${baseUrl}/apps/qr-maker/screen1.png`, title: "QR Maker Dashboard", caption: "Dynamic list of generated custom vector QR codes." }
  ],
  runlit: [
    { loc: `${baseUrl}/apps/runlit/icon_v3.jpg`, title: "Runlit App Icon", caption: "Squirclized App Store icon for the Runlit GPS tracker codebase." },
    { loc: `${baseUrl}/apps/runlit/onboarding.png`, title: "Runlit Onboarding Flow", caption: "Explaining streak guardianship and GPS tracking authorizations." },
    { loc: `${baseUrl}/apps/runlit/screen1_v2.png`, title: "Runlit Running HUD", caption: "Real-time running telemetry displaying pace, distance, and duration." }
  ]
};

// 20 SEO Landing page slugs
const seoSlugs = [
  "native-ios-apps", "swiftui-apps", "cloudkit-apps", "storekit-apps", "apple-wallet-apps",
  "ios-apps-for-sale", "buy-ios-app", "ios-source-code", "acquire-ios-app", "swift-development",
  "healthkit-apps", "widgetkit-apps", "watchos-apps", "speech-recognition-apps", "qr-code-apps",
  "ios-app-templates", "buy-production-ready-apps", "ios-developer-portfolio", "micro-saas-apps", "avfoundation-apps"
];

// Helper to map relevant images to each SEO landing page
const getImagesForSeoSlug = (slug) => {
  switch (slug) {
    case "healthkit-apps":
    case "watchos-apps":
      return [...appImages.fit60, ...appImages.runlit];
    case "speech-recognition-apps":
    case "avfoundation-apps":
      return [...appImages.nanhufx];
    case "qr-code-apps":
      return [...appImages.qrMaker];
    case "widgetkit-apps":
      return [...appImages.qrMaker, ...appImages.runlit];
    default:
      // Fallback: list of key screenshots from all premium codebases
      return [
        appImages.fit60[0],
        appImages.nanhufx[0],
        appImages.qrMaker[0],
        appImages.runlit[0]
      ];
  }
};

const imageSitemapData = [
  {
    loc: `${baseUrl}/`,
    images: [
      { loc: `${baseUrl}/logo.png`, title: "Nanhu Interactive Studio Logo", caption: "Official logo for Nanhu Interactive premium iOS app acquisitions studio." },
      { loc: `${baseUrl}/founder_v2.jpg`, title: "Nitin Kumar", caption: "Founder photo of Nitin Kumar, Lead iOS Developer and Swift Student Challenge Winner." },
      { loc: `${baseUrl}/founder.jpg`, title: "Nitin Kumar Profile", caption: "Profile photograph of the founding mobile systems engineer." }
    ]
  },
  {
    loc: `${baseUrl}/about`,
    images: [
      { loc: `${baseUrl}/founder_v2.jpg`, title: "Founder Nitin Kumar", caption: "Nitin Kumar, founder and lead architect behind Nanhu Interactive codebases." }
    ]
  },
  {
    loc: `${baseUrl}/apps/fit60`,
    images: appImages.fit60
  },
  {
    loc: `${baseUrl}/apps/nanhufx`,
    images: appImages.nanhufx
  },
  {
    loc: `${baseUrl}/apps/qr-maker`,
    images: appImages.qrMaker
  },
  {
    loc: `${baseUrl}/apps/runlit`,
    images: appImages.runlit
  }
];

// Inject the 20 SEO programmatic landing pages into the sitemap
seoSlugs.forEach(slug => {
  imageSitemapData.push({
    loc: `${baseUrl}/${slug}`,
    images: getImagesForSeoSlug(slug)
  });
});

// Generate the XML output
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

imageSitemapData.forEach(page => {
  xml += `
  <url>
    <loc>${page.loc}</loc>`;
  page.images.forEach(img => {
    xml += `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>${img.caption.replace(/&/g, '&amp;')}</image:caption>
    </image:image>`;
  });
  xml += `
  </url>`;
});

xml += `
</urlset>
`;

const outputPath = path.join(__dirname, '../public/sitemap-images.xml');
fs.writeFileSync(outputPath, xml);
console.log("Successfully generated public/sitemap-images.xml containing image indexing targets.");
