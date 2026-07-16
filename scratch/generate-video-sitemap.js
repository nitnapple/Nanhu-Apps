const fs = require('fs');
const path = require('path');

const baseUrl = "https://nanhuinteractive.dev";

// Base video definitions
const videos = {
  fit60: {
    thumbnail_loc: `${baseUrl}/apps/fit60/screenshots.png`,
    title: "Fit60 Workout Tracker iOS App Walkthrough",
    description: "Demo of Fit60 workout companion showcasing SwiftData caches, step counts, active calories, and HealthKit synchronization interfaces.",
    content_loc: `${baseUrl}/Fit60.mp4`,
    publication_date: "2026-07-12T00:00:00+00:00"
  },
  nanhufx: {
    thumbnail_loc: `${baseUrl}/apps/nanhufx/screen1.png`,
    title: "NanhuFX Speech-Recognition Video Teleprompter Demo",
    description: "Walkthrough of NanhuFX voice-synced video teleprompter featuring real-time speech recognition auto-scrolling speeds.",
    content_loc: `${baseUrl}/NanhuFX.mp4`,
    publication_date: "2026-07-12T00:00:00+00:00"
  },
  qrMaker: {
    thumbnail_loc: `${baseUrl}/apps/qr-maker/onboarding.png`,
    title: "QR Maker iOS App Customizer Walkthrough",
    description: "Interactive dashboard demonstration of QR Maker displaying dynamic custom vector color generations and home screen widgets.",
    content_loc: `${baseUrl}/QR-maker.mp4`,
    publication_date: "2026-07-12T00:00:00+00:00"
  },
  runlit: {
    thumbnail_loc: `${baseUrl}/apps/runlit/onboarding.png`,
    title: "Runlit GPS tracker iOS & watchOS App Demo",
    description: "Demonstration of Runlit running HUD featuring real-time GPS tracking and ActivityKit lock screen live updates.",
    content_loc: `${baseUrl}/RunLit.mp4`,
    publication_date: "2026-07-12T00:00:00+00:00"
  }
};

const videoSitemapData = [
  { loc: `${baseUrl}/apps/fit60`, video: videos.fit60 },
  { loc: `${baseUrl}/apps/nanhufx`, video: videos.nanhufx },
  { loc: `${baseUrl}/apps/qr-maker`, video: videos.qrMaker },
  { loc: `${baseUrl}/apps/runlit`, video: videos.runlit },
  { loc: `${baseUrl}/presentation`, video: videos.qrMaker },
  
  // SEO Landing Page Video Mappings
  { loc: `${baseUrl}/healthkit-apps`, video: videos.fit60 },
  { loc: `${baseUrl}/watchos-apps`, video: videos.runlit },
  { loc: `${baseUrl}/speech-recognition-apps`, video: videos.nanhufx },
  { loc: `${baseUrl}/avfoundation-apps`, video: videos.nanhufx },
  { loc: `${baseUrl}/qr-code-apps`, video: videos.qrMaker },
  { loc: `${baseUrl}/widgetkit-apps`, video: videos.qrMaker }
];

// Generate the XML output
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/video/1.1">`;

videoSitemapData.forEach(page => {
  xml += `
  <url>
    <loc>${page.loc}</loc>
    <video:video>
      <video:thumbnail_loc>${page.video.thumbnail_loc}</video:thumbnail_loc>
      <video:title>${page.video.title.replace(/&/g, '&amp;')}</video:title>
      <video:description>${page.video.description.replace(/&/g, '&amp;')}</video:description>
      <video:content_loc>${page.video.content_loc}</video:content_loc>
      <video:publication_date>${page.video.publication_date}</video:publication_date>
    </video:video>
  </url>`;
});

xml += `
</urlset>
`;

const outputPath = path.join(__dirname, '../public/video-sitemap.xml');
fs.writeFileSync(outputPath, xml);
console.log("Successfully generated public/video-sitemap.xml containing video indexing targets.");
