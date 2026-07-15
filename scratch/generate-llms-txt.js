const fs = require('fs');
const path = require('path');

const baseUrl = "https://nanhuinteractive.dev";

// Read all blog posts from content/blog/
const blogDir = path.join(__dirname, '../content/blog');
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
const blogPosts = blogFiles.map(file => {
  const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  // Simple frontmatter parsing
  const titleMatch = content.match(/title:\s*"(.*?)"/);
  const catMatch = content.match(/category:\s*"(.*?)"/);
  const summaryMatch = content.match(/summary:\s*"(.*?)"/);
  
  const slug = file.replace('.md', '');
  return {
    title: titleMatch ? titleMatch[1] : slug,
    category: catMatch ? catMatch[1] : 'Engineering',
    summary: summaryMatch ? summaryMatch[1] : '',
    url: `${baseUrl}/blog/${slug}`
  };
});

// Parse SEO landings data from lib/seo-landing-data.ts manually to bypass TS requirement
const tsFilePath = path.join(__dirname, '../lib/seo-landing-data.ts');
const tsContent = fs.readFileSync(tsFilePath, 'utf-8');
const targetStr = "export const SEO_LANDINGS: Record<string, SEOLanding> = ";
const jsonStartIndex = tsContent.indexOf(targetStr) + targetStr.length;
const jsonEndIndex = tsContent.lastIndexOf('}') + 1;
const jsonStr = tsContent.substring(jsonStartIndex, jsonEndIndex);
const SEO_LANDINGS = eval("(" + jsonStr + ")");

const seoPages = Object.keys(SEO_LANDINGS).map(slug => {
  const page = SEO_LANDINGS[slug];
  return {
    slug,
    title: page.title,
    description: page.description,
    url: `${baseUrl}/${slug}`
  };
});

// Build the comprehensive llms.txt structure
let output = `# Nanhu Interactive | Premium iOS App Acquisitions Studio

> Vetted proprietary native iOS codebases and software assets ready for immediate developer transfer.

Nanhu Interactive builds, audits, and transitions premium, native iOS mobile applications. All properties feature 100% clean Swift/SwiftUI architectures, pre-configured StoreKit 2 paywalls, full test suites, and zero technical debt.

## Founder & Lead iOS Architect

Nitin Kumar is the founder and lead systems architect of Nanhu Interactive. He is an award-winning mobile systems engineer and Apple Swift Student Challenge Winner (2026). Nitin Kumar designs, audits, and maintains all native iOS codebase assets in the Nanhu portfolio.

## Key Studio Metrics & Quality Standards

- **Core Languages**: 100% native Swift and SwiftUI layouts.
- **Quality**: 90%+ code coverage (comprehensive XCTest suites).
- **Compliance**: Bi-directional Apple HealthKit sync, CoreMotion activity classification, AVFoundation speech-to-text autoscroll, and local SwiftData cache targets.
- **Handover Protocol**: Escrow.com secured transactions with 7-day inspection windows, 30 days of direct technical support, and instant App Store Connect handover.
- **Contact Inquiry**: acquisitions@nanhu.studio / nanhuinteractive@gmail.com.

## Software Assets Catalog

- **QR Maker**: Dynamic QR code generator utility and widget. SwiftUI, SwiftData, CoreImage, StoreKit 2, WidgetKit. Pre-configured StoreKit paywalls. Live on App Store. Link: ${baseUrl}/apps/qr-maker (App Store: https://apps.apple.com/app/qr-maker/id6775972421)
- **Fit60**: 60-day workout challenge companion and tracker. SwiftUI, SwiftData, HealthKit, StoreKit 2, CoreMotion. Live on App Store. Link: ${baseUrl}/apps/fit60 (App Store: https://apps.apple.com/app/fit60/id6786881668)
- **NanhuFX**: Speech-recognition voice-synced video teleprompter. SwiftUI, SwiftData, Speech Recognition, AVFoundation, iCloud, StoreKit 2. Link: ${baseUrl}/apps/nanhufx (App Store: Coming soon)
- **Runlit**: Premium iOS & watchOS GPS Run Tracker & Streak Guardian. Next-generation tracking HUD. SwiftUI, watchOS, CoreMotion, CoreLocation, SwiftData, ActivityKit (Live Activities), StoreKit 2. Link: ${baseUrl}/apps/runlit (App Store: Coming soon)

## Programmatic SEO & Intent Landing Pages

Explore dedicated reports on iOS architectures, acquisitions, and compliance standards:
`;

// Append all 20 SEO landing pages
seoPages.forEach(p => {
  output += `- **${p.title}**: ${p.description} Link: ${p.url}\n`;
});

output += `
## Technical Refinery Essays (100 Blog Posts)

Deep architectural analyses and step-by-step systems integrations written by founder Nitin Kumar:
`;

// Append all 100 blog posts
blogPosts.forEach(post => {
  output += `- **${post.title}** [${post.category}]: ${post.summary} Link: ${post.url}\n`;
});

output += `
## Key Core Pages & System Resources

- **Cover Flow App Showcase**: 3D interactive icon cover flow catalog. Link: ${baseUrl}/app
- **Grid Apps Catalog**: Classic grid-based list catalog of assets. Link: ${baseUrl}/apps
- **About Us**: Information on Nanhu's code standards, compiler compliance, and static analysis verification protocol. Link: ${baseUrl}/about
- **Acquisition ROI**: Build vs. Buy comparison data calculator for private equity and SaaS portfolios. Link: ${baseUrl}/acquire
- **Refinery Log**: Deep technical write-ups and system migration case studies. Link: ${baseUrl}/blog
- **Contact Inquiry**: Connect directly with our lead transition engineer. Link: ${baseUrl}/contact
- **NDA Agreement Terms**: Terms to sign digital Non-Disclosure Agreement for repo inspection and TestFlight beta access. Link: ${baseUrl}/privacy
`;

// Write to public/llms.txt
const outputPath = path.join(__dirname, '../public/llms.txt');
fs.writeFileSync(outputPath, output);
console.log("Successfully generated public/llms.txt containing complete index of 100 blog posts and 20 SEO pages.");
