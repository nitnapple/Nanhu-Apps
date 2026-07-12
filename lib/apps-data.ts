export interface AppAsset {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  hoursSaved: number;
  buildStatus: string;
  mrr: number;
  users: number;
  coverage: number;
  techStack: string[];
  features: string[];
  monthlyCost: number;
  uptime: number;
  acquisitionStatus: "Available" | "Under Contract" | "Acquired";
  verifiedRevenue: boolean;
  icon?: string;
  appStoreUrl?: string;
}

export const APPS_DATA: AppAsset[] = [
  {
    slug: "qr-maker",
    name: "QR Maker",
    tagline: "Dynamic QR Code iOS Utility & Widget.",
    description: "Premium native iOS application to design, customize, and generate dynamic QR vectors. Ready for immediate App Store launch.",
    longDescription: "QR Maker is a fully native iOS application crafted with SwiftUI and CoreImage. It allows users to generate and track dynamic QR codes directly from their iPhone, iPad, or home screen widgets. The application is integrated with StoreKit 2 for in-app subscriptions, uses SwiftData for local cache states, and integrates with a minimal telemetry API to report scan analytics without collecting personal data. The acquisition includes a fully built Swift codebase, pre-configured StoreKit paywalls, and complete asset packs.",
    price: 12900,
    hoursSaved: 140,
    buildStatus: "App Store Ready",
    mrr: 0,
    users: 0,
    coverage: 92,
    techStack: ["SwiftUI", "SwiftData", "CoreImage", "StoreKit 2", "WidgetKit"],
    features: [
      "Native iOS home screen widget shortcuts",
      "Offline-first vectorized QR layout rendering",
      "In-app purchase modules for premium unlocks",
      "Real-time dynamic destination URL updates",
      "App Store Connect transfer-ready configuration"
    ],
    monthlyCost: 0,
    uptime: 100,
    acquisitionStatus: "Available",
    verifiedRevenue: false,
    appStoreUrl: "https://apps.apple.com/app/qr-maker/id6775972421",
  },
  {
    slug: "fit60",
    name: "Fit60",
    tagline: "Structured 60-day workout companion & HealthKit tracker.",
    description: "Production-grade native iOS training tracker featuring progressive workouts, calorie charts, and Apple HealthKit integration. Pre-revenue.",
    longDescription: "Fit60 is a premium iOS fitness companion application designed to guide users through structured 60-day workout challenges. Engineered entirely in Swift and SwiftUI, the application integrates with Apple HealthKit to read active calories, heart rate, and workouts, syncing progress to local SwiftData records. It features interactive iOS charting components, custom local push notification schedules, and dynamic widget progress bars. Ready to be transfered and launched under your developer account.",
    price: 18500,
    hoursSaved: 220,
    buildStatus: "App Store Ready",
    mrr: 0,
    users: 0,
    coverage: 95,
    techStack: ["SwiftUI", "SwiftData", "HealthKit", "StoreKit 2", "CoreMotion"],
    features: [
      "Apple HealthKit bi-directional sync routines",
      "CoreMotion automatic step and activity classification",
      "TestFlight beta testing pool logs and active users",
      "StoreKit annual subscription billing routines",
      "Sleek native dark mode and widget integrations"
    ],
    monthlyCost: 0,
    uptime: 100,
    acquisitionStatus: "Available",
    verifiedRevenue: false,
    appStoreUrl: "https://apps.apple.com/app/fit60/id6786881668",
  },
  {
    slug: "nanhufx",
    name: "NanhuFX",
    tagline: "Premium voice-tracking video teleprompter iOS app.",
    description: "A native video teleprompter app featuring voice-synced autoscroll, 4K UHD recording, custom scripts, and performance pacing charts. Ready to launch.",
    longDescription: "NanhuFX is a premium iOS application designed to elevate talking-head video creation. Written in native Swift and SwiftUI, it features speech-recognition voice-synced autoscrolling that matches your speech rate in real time. Record video directly in native 4K UHD up to 60fps with zero watermark overlays. Manage unlimited scripts using SwiftData and iCloud, review reading speed (WPM) pacing insights, and utilize a dedicated Apple Music sync engine to control gym tracks while recording. Integrated with StoreKit 2 subscriptions.",
    price: 14500,
    hoursSaved: 190,
    buildStatus: "App Store Ready",
    mrr: 0,
    users: 0,
    coverage: 94,
    techStack: ["SwiftUI", "SwiftData", "Speech Recognition", "AVFoundation", "iCloud CloudKit", "StoreKit 2"],
    features: [
      "Voice-synced autoscroll using on-device speech-to-text",
      "High-resolution native 4K UHD video exports up to 60fps",
      "Clean video outputs with zero watermarks or overlay branding",
      "Pacing insights and speed charts tracking reading WPM",
      "iCloud database sync and SwiftData local persistence storage"
    ],
    monthlyCost: 0,
    uptime: 100,
    acquisitionStatus: "Available",
    verifiedRevenue: false,
    icon: "/apps/nanhufx/icon_v2.jpg",
  },
  {
    slug: "runlit",
    name: "Runlit",
    tagline: "Modern iOS & watchOS GPS Run Tracker.",
    description: "A high-fidelity native GPS run tracker and watchOS workout companion logging heart rate, tracking streaks, and rendering weekly PDF progression reports.",
    longDescription: "Runlit is a high-fidelity, native iOS and watchOS fitness application designed to help runners build consistency, monitor their running streaks, and track workouts. Built entirely with SwiftUI, SwiftData, and the latest Apple system frameworks, the app offers real-time GPS tracking, active workout sync with Apple Health, live tracking via Dynamic Island, and automated high-resolution PDF reporting.",
    price: 16000,
    hoursSaved: 250,
    buildStatus: "App Store Ready",
    mrr: 0,
    users: 0,
    coverage: 93,
    techStack: ["SwiftUI", "SwiftData", "watchOS", "HealthKit", "ActivityKit", "CoreLocation", "CoreMotion", "StoreKit 2"],
    features: [
      "Standalone watchOS target tracking real-time heart rate (BPM)",
      "Dynamic Island and Lock Screen Live Activities via ActivityKit",
      "iCloud SwiftData synchronization with local persistence fallbacks",
      "Core Graphics rendering weekly progress report cards in PDF",
      "CoreMotion stationary auto-pause & map snap social sharing"
    ],
    monthlyCost: 0,
    uptime: 100,
    acquisitionStatus: "Available",
    verifiedRevenue: false,
    icon: "/apps/runlit/icon_v3.jpg",
  }
];
