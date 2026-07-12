import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, HelpCircle, Mail, ShieldAlert, CheckCircle2 } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";
import { Metadata } from "next";
import SupportForm from "./support-form";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return APPS_DATA.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);
  if (!app) return { title: "Support Not Found" };

  return {
    title: `${app.name} Support | Help Center`,
    description: `Get official support, troubleshooting assistance, and FAQs for the ${app.name} native iOS application.`,
  };
}

export default async function AppSupportPage({ params }: Props) {
  const { slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  // App-specific FAQs
  const faqData: Record<string, { q: string; a: string }[]> = {
    "fit60": [
      {
        q: "How do I sync Fit60 with Apple HealthKit?",
        a: "To sync your data, open the Apple Health app on your iPhone, go to Sharing > Apps > Fit60, and ensure all categories (Active Energy, Workouts, Steps) are toggled ON."
      },
      {
        q: "Does Fit60 work offline?",
        a: "Yes. Fit60 is built with local SwiftData schemas and offline caching. Workouts are recorded on-device and automatically synced with HealthKit once an internet connection is established."
      },
      {
        q: "How do I restore my StoreKit premium subscription?",
        a: "If you reinstall the app or change devices, navigate to the paywall subscription screen inside the app, scroll to the bottom, and tap the 'Restore Purchases' option."
      },
      {
        q: "Is my HealthKit data kept private?",
        a: "Absolutely. Fit60 runs HealthKit queries locally on your device. We do not store, upload, or sell your health metrics to any remote server or third-party analytic trackers."
      }
    ],
    "qr-maker": [
      {
        q: "How do I generate dynamic QR codes?",
        a: "When creating a new QR code in the app, select the 'Dynamic' option. You will be able to update the destination URL from your Dashboard without modifying the printed QR vector pattern."
      },
      {
        q: "How do I add the QR Maker widget to my Home Screen?",
        a: "Long-press an empty area on your home screen until the apps jiggle, tap the '+' button in the top left, search for 'QR Maker', select your preferred widget size, and tap 'Add Widget'."
      },
      {
        q: "In what formats can I export my QR vectors?",
        a: "QR Maker supports high-fidelity rendering. You can export your customized codes directly as vector PDFs (ideal for print layouts), transparent PNGs, or standard JPEGs."
      },
      {
        q: "How can I restore my premium template unlocks?",
        a: "Tap the Settings icon in the app, select 'Restore Purchases', and authenticate with your Apple ID. All previous App Store templates will unlock instantly."
      }
    ],
    "nanhufx": [
      {
        q: "How does the voice-synced autoscroll teleprompter work?",
        a: "NanhuFX utilizes on-device speech recognition to translate your audio in real time. It automatically scrolls script lines to sit directly inline with your current spoken word, adjusting scroll speed to match your natural cadence."
      },
      {
        q: "How can I record script reads in native 4K resolution?",
        a: "Open the script you want to read, tap the Camera icon to launch the record studio panel. By default, recording utilizes 1080p, but if you upgrade to NanhuFX Pro, you can switch camera defaults to native 4K resolution exports up to 60fps."
      },
      {
        q: "Are my audio clips and script drafts private?",
        a: "Absolutely. All script databases are stored offline using Apple SwiftData and backed up securely to your private iCloud container. Speech recognition is processed locally on-device. We have no access to your script logs or video records."
      },
      {
        q: "How do I restore my previous premium pro purchase?",
        a: "Navigate to the Settings tab (profile avatar icon) on the navigation tab bar, scroll down to the NanhuFX Pro upgrade section, and tap the 'Restore Purchases' option to re-verify your app billing with iTunes."
      }
    ],
    "runlit": [
      {
        q: "How does the Apple Watch tracking session sync workouts?",
        a: "Runlit uses HealthKit's HKLiveWorkoutBuilder to stream real-time workout telemetry directly from Apple Watch sensors to your iPhone. Once you save the run on your wrist, it automatically updates your streaks and logs the workout into Apple Health rings."
      },
      {
        q: "What is the Streak Shield and how does it protect my streaker index?",
        a: "We understand that rest days are essential. The Streak Shield is a built-in safety net that prevents your running streak count from resetting if you miss a scheduled workout day. Premium subscribers get one automatic Streak Shield rescue per month."
      },
      {
        q: "How do I export my weekly progress PDF report cards?",
        a: "Navigate to the Progress tab in the app, select the weekly block you wish to export, and tap the share icon. Our Core Graphics PDF engine compiles a clean vector progress sheet complete with run tables and split details."
      },
      {
        q: "Does location tracking work completely offline?",
        a: "Yes. CoreLocation GPS logging runs fully on-device without needing active cellular coverage. MapKit route snaps and path indicators will render once your device reconnects to a network or load from cache offline."
      }
    ]
  };

  const faqs = faqData[app.slug] || [
    {
      q: "How do I get help with this application?",
      a: "Please fill out the contact support form on this page with details of your question or issue, and our team will get back to you within 24 hours."
    },
    {
      q: "How do I restore my previous in-app purchases?",
      a: "Go to the premium upgrade panel inside the application and tap 'Restore Purchases' to re-verify your receipt directly with Apple."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background pb-20">
      <style dangerouslySetInnerHTML={{ __html: `
        nav, #global-footer, #global-nav-spacer { display: none !important; }
        body { padding-top: 0 !important; }
      `}} />
      {/* Sticky Secondary Sub-Navbar */}
      <div className="sticky top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-border h-12">
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-semibold text-xs text-[#1d1d1f]">{app.name} Support</span>
          <div className="flex items-center gap-6">
            <Link
              href={`/apps/${app.slug}`}
              className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors font-medium"
            >
              Overview
            </Link>
            <Link
              href={`/acquire?app=${app.slug}`}
              className="rounded-full bg-[#0066cc] hover:bg-[#0077ed] text-white px-3 py-1 text-[10px] font-semibold transition-colors"
            >
              Interested
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-10 mt-8">
        {/* Back Link */}
        <Link
          href={`/apps/${app.slug}`}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          Back to Overview
        </Link>

        {/* Heading */}
        <div className="flex gap-4 items-center border-b border-border pb-8 text-left">
          <img
            src={app.icon || `/apps/${app.slug}/icon.jpg`}
            alt={`${app.name} Icon`}
            className="w-16 h-16 rounded-2xl object-cover border border-border shadow-md"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
              {app.name} Help Center
            </h1>
            <p className="text-[#86868b] text-sm leading-relaxed mt-1">
              Official application support and troubleshooting resource for App Store users.
            </p>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* FAQs column */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2 border-b border-border pb-3">
              <HelpCircle className="w-5 h-5 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-[#1d1d1f] text-sm">{faq.q}</h3>
                  <p className="text-xs text-[#86868b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3 mt-8">
              <h4 className="text-[10px] font-bold text-[#1d1d1f] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-primary" />
                Data Privacy & Compliance
              </h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                None of our utility or health tracker codebases transmit personal tracking telemetry. StoreKit logs are securely managed on-device via native iOS endpoints.
              </p>
            </div>
          </div>

          {/* Contact Support Ticket Form column */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-lg font-bold text-[#1d1d1f] flex items-center gap-2 border-b border-border pb-3">
              <Mail className="w-5 h-5 text-primary" />
              Contact Support
            </h2>
            <div className="bg-[#f5f5f7] border border-border rounded-[24px] p-6">
              <SupportForm appName={app.name} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
