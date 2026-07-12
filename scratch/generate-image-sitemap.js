const fs = require('fs');
const path = require('path');

const baseUrl = "https://nanhuinteractive.dev";

// Comprehensive image map matching specific pages with their high-value graphic assets
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
    images: [
      { loc: `${baseUrl}/apps/fit60/icon.jpg`, title: "Fit60 App Icon", caption: "Squirclized App Store icon for the Fit60 fitness tracker codebase." },
      { loc: `${baseUrl}/apps/fit60/onboarding.png`, title: "Fit60 onboarding flows", caption: "Beautiful user onboarding screens for Fit60 workout app." },
      { loc: `${baseUrl}/apps/fit60/screenshots.png`, title: "Fit60 screenshots collage", caption: "Collage displaying workout analytics, challenges, and heart rate integration." },
      { loc: `${baseUrl}/apps/fit60/screen1.png`, title: "Fit60 Core Activity Dashboard", caption: "Main dashboard screen of Fit60 showing challenges progress." },
      { loc: `${baseUrl}/apps/fit60/screen2.png`, title: "Fit60 Workouts List", caption: "Available 60-day challenges and structured exercises." },
      { loc: `${baseUrl}/apps/fit60/screen3.png`, title: "Fit60 Calorie Counter", caption: "Active calories, step counts, and HealthKit telemetry visualizations." },
      { loc: `${baseUrl}/apps/fit60/screen4.png`, title: "Fit60 Streak Guardian", caption: "On-device local notification targets to protect active workout streaks." },
      { loc: `${baseUrl}/apps/fit60/screen5.png`, title: "Fit60 SwiftUI Charts", caption: "Highly modular interactive chart rendering for workout stats." },
      { loc: `${baseUrl}/apps/fit60/screen6.png`, title: "Fit60 Settings", caption: "Local iCloud configuration parameters and device syncing options." }
    ]
  },
  {
    loc: `${baseUrl}/apps/nanhufx`,
    images: [
      { loc: `${baseUrl}/apps/nanhufx/icon_v2.jpg`, title: "NanhuFX App Icon", caption: "Squirclized App Store icon for the NanhuFX voice teleprompter codebase." },
      { loc: `${baseUrl}/apps/nanhufx/icon.jpg`, title: "NanhuFX Icon Alternative", caption: "Alternative layout icon for speech-synced teleprompter." },
      { loc: `${baseUrl}/apps/nanhufx/screen1.png`, title: "NanhuFX Camera View", caption: "Live video capture UI with dynamic scrolling script overlay." },
      { loc: `${baseUrl}/apps/nanhufx/screen2.png`, title: "NanhuFX Voice Scroll settings", caption: "Configuring speech-recognition rate triggers for autoscroll speed." },
      { loc: `${baseUrl}/apps/nanhufx/screen3.png`, title: "NanhuFX Editor Interface", caption: "Clean rich text script editor for custom prompts." },
      { loc: `${baseUrl}/apps/nanhufx/screen4.png`, title: "NanhuFX Audio parameters", caption: "AVFoundation audio monitoring level and microphone configuration panels." },
      { loc: `${baseUrl}/apps/nanhufx/screen5.png`, title: "NanhuFX Video Exporter", caption: "Encoding and compression export configuration view." },
      { loc: `${baseUrl}/apps/nanhufx/screen6.png`, title: "NanhuFX Cloud Sync", caption: "iCloud Container database dashboard for scripting backups." }
    ]
  },
  {
    loc: `${baseUrl}/apps/qr-maker`,
    images: [
      { loc: `${baseUrl}/apps/qr-maker/icon.jpg`, title: "QR Maker App Icon", caption: "Squirclized App Store icon for the QR Maker custom widget codebase." },
      { loc: `${baseUrl}/apps/qr-maker/onboarding.png`, title: "QR Maker Onboarding flow", caption: "User guide for creating dynamic custom color QR codes." },
      { loc: `${baseUrl}/apps/qr-maker/screen1.png`, title: "QR Maker Dashboard", caption: "Dynamic list of generated custom vector QR codes." },
      { loc: `${baseUrl}/apps/qr-maker/screen2.png`, title: "QR Maker customizer", caption: "Setting custom gradients, overlays, and embedded logos in CoreImage." },
      { loc: `${baseUrl}/apps/qr-maker/screen3.png`, title: "QR Maker WidgetKit support", caption: "Displaying widgets on home screen with local SwiftData caches." },
      { loc: `${baseUrl}/apps/qr-maker/screen4.png`, title: "QR Maker History log", caption: "Locally archived scans with search indexes." },
      { loc: `${baseUrl}/apps/qr-maker/screen5.png`, title: "QR Maker Paywall", caption: "StoreKit 2 auto-renewable subscription paywall configuration." }
    ]
  },
  {
    loc: `${baseUrl}/apps/runlit`,
    images: [
      { loc: `${baseUrl}/apps/runlit/icon_v3.jpg`, title: "Runlit App Icon", caption: "Squirclized App Store icon for the Runlit GPS tracker codebase." },
      { loc: `${baseUrl}/apps/runlit/icon_v2.jpg`, title: "Runlit alternative icon", caption: "Secondary branding icon for watchOS and iOS tracker." },
      { loc: `${baseUrl}/apps/runlit/onboarding.png`, title: "Runlit Onboarding Flow", caption: "Explaining streak guardianship and GPS tracking authorizations." },
      { loc: `${baseUrl}/apps/runlit/screen1_v2.png`, title: "Runlit Running HUD", caption: "Real-time running telemetry displaying pace, distance, and duration." },
      { loc: `${baseUrl}/apps/runlit/screen2.png`, title: "Runlit Route maps", caption: "Visualizing GPS route logs overlaid on MapKit vector frames." },
      { loc: `${baseUrl}/apps/runlit/screen3.png`, title: "Runlit Achievements", caption: "Local badges earned for active streak retention." },
      { loc: `${baseUrl}/apps/runlit/screen4.png`, title: "Runlit Live Activities", caption: "Displaying workout state on the Lock Screen Dynamic Island widget." }
    ]
  }
];

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
