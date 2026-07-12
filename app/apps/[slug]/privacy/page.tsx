import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText, Lock } from "lucide-react";
import { APPS_DATA } from "@/lib/apps-data";
import { Metadata } from "next";

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
  if (!app) return { title: "Privacy Policy Not Found" };

  return {
    title: `${app.name} Privacy Policy`,
    description: `Official App Store Privacy Policy for the ${app.name} native iOS application. Vetted serverless design and compliance terms.`,
  };
}

export default async function AppPrivacyPage({ params }: Props) {
  const { slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-background pb-20">
      <style dangerouslySetInnerHTML={{ __html: `
        nav, #global-footer, #global-nav-spacer { display: none !important; }
        body { padding-top: 0 !important; }
      `}} />
      {/* Sticky Secondary Sub-Navbar */}
      <div className="sticky top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-border h-12">
        <div className="max-w-4xl mx-auto px-6 h-full flex items-center justify-between">
          <span className="font-semibold text-xs text-[#1d1d1f]">{app.name} Privacy</span>
          <div className="flex items-center gap-6">
            <Link
              href={`/apps/${app.slug}`}
              className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors font-medium"
            >
              Overview
            </Link>
            <Link
              href={`/apps/${app.slug}/support`}
              className="text-[11px] text-[#86868b] hover:text-[#1d1d1f] transition-colors font-medium"
            >
              Support
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-10 mt-8 text-left">
        {/* Back Link */}
        <Link
          href={`/apps/${app.slug}`}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          Back to Overview
        </Link>

        {/* Heading */}
        <div className="flex gap-4 items-center border-b border-border pb-8">
          <img
            src={app.icon || `/apps/${app.slug}/icon.jpg`}
            alt={`${app.name} Icon`}
            className="w-16 h-16 rounded-2xl object-cover border border-border shadow-md"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">
              {app.name} Privacy Policy
            </h1>
            <p className="text-[#86868b] text-sm leading-relaxed mt-1">
              Effective Date: July 3, 2026. Official privacy compliance log.
            </p>
          </div>
        </div>

        {/* Dynamic Privacy Content */}
        {/* Dynamic Privacy Content */}
        {app.slug === "fit60" && (
          <article className="prose max-w-none text-xs md:text-sm text-[#86868b] space-y-6 leading-relaxed">
            <p>
              At FIT60, we are committed to protecting your privacy. This Privacy Policy explains how your data is handled when you use the FIT60 iOS application.
            </p>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                1. NO ACCOUNT REGISTRATION & SERVERLESS DESIGN
              </h3>
              <p className="text-xs">
                FIT60 is designed with a serverless architecture. We do not require you to register an account, log in, or provide any personal identification details (such as your name, email, or phone number) to our servers. We do not host or operate any external database servers.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                2. DATA STORAGE & ICLOUD SYNC
              </h3>
              <p className="text-xs leading-relaxed">
                All your workout records, challenge progress, habit metrics, and photos are stored locally on your device.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong>iCloud Backup:</strong> If you enable iCloud sync, your data is securely backed up and synchronized across your own Apple devices using Apple’s standard iCloud Key-Value Store and iCloud Drive (ubiquitous containers).</li>
                <li><strong>No Third-Party Access:</strong> We have no access to your iCloud account, and your data is never sent to us or any third party.</li>
              </ul>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                3. APPLE HEALTH (HEALTHKIT) INTEGRATION
              </h3>
              <p className="text-xs leading-relaxed">
                FIT60 integrates with Apple Health (HealthKit) to sync active energy burned, heart rate, workouts, steps, and water intake.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong>Usage:</strong> HealthKit data is accessed solely to calculate your daily challenge progress, display analytics, and record completed workouts.</li>
                <li><strong>Privacy Compliance:</strong> In strict accordance with Apple Developer Guidelines, your HealthKit data is never shared with third parties, advertisers, or marketing agencies, and is never used for advertising purposes.</li>
              </ul>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                4. APPLE MUSIC INTEGRATION
              </h3>
              <p className="text-xs">
                FIT60 allows you to sync and control your Apple Music workouts tracks. This integration only controls local playback of your playlists. We do not collect, store, or share your music listening history, preferences, or account details.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                5. CAMERA & PHOTO LIBRARY ACCESS
              </h3>
              <p className="text-xs">
                FIT60 requests access to your device's Camera and Photo Library. This access is used exclusively to let you capture progress photos for the Transformation Gallery, set your local profile picture, and create Motivation Cards. All images are processed and stored locally on your device or in your private iCloud Drive folder.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                6. NO THIRD-PARTY ANALYTICS & ADVERTISING
              </h3>
              <p className="text-xs">
                FIT60 does not contain any third-party analytics trackers, advertising SDKs, or user-tracking cookies. Your usage habits remain entirely private to you.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                7. YOUR DATA RIGHTS & DELETION
              </h3>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong>Deletion:</strong> You can delete all your records, progress, and photos at any time by tapping the "Reset Challenge" option in the Profile settings, or by simply uninstalling the application from your iOS device.</li>
                <li><strong>iCloud Deletion:</strong> You can remove synced backups by going to iOS Settings -&gt; [Your Name] -&gt; iCloud -&gt; Manage Storage -&gt; FIT60.</li>
              </ul>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                8. CONTACT INFORMATION
              </h3>
              <p className="text-xs">
                If you have any questions about this Privacy Policy or how your data is handled, you can reach out to us at:
                <br />
                <span className="text-primary hover:underline">https://nanhuinteractive.dev/apps/fit60/support</span>
              </p>
            </div>
          </article>
        )}

        {app.slug === "qr-maker" && (
          <article className="prose max-w-none text-xs md:text-sm text-[#86868b] space-y-6 leading-relaxed">
            <p>
              At QR Maker, we are committed to protecting your privacy. This Privacy Policy explains how your data is handled when you use the QR Maker iOS application.
            </p>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                1. NO ACCOUNT REGISTRATION & SERVERLESS DESIGN
              </h3>
              <p className="text-xs">
                QR Maker operates on a local-first model. We do not require you to register an account, log in, or provide any personal identification details to use the application. Your designs, patterns, and dynamic codes are hosted securely locally.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                2. LOCAL PROCESSING & CAMERA ACCESS
              </h3>
              <p className="text-xs leading-relaxed">
                To capture and scan QR codes, QR Maker requests access to your device's Camera.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong>Local Query Scanning:</strong> All scanning actions are processed immediately on-device via CoreImage APIs. No frames, pictures, or decoded payloads are sent to remote databases.</li>
                <li><strong>Zero Telemetry:</strong> We do not log what websites or data payloads you scan.</li>
              </ul>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                3. PHOTO LIBRARY & ASSET SAVING
              </h3>
              <p className="text-xs">
                QR Maker requests access to save generated vector PDFs and PNG images directly to your Photos app. This operation runs strictly under Apple Sandbox rules, ensuring we have no recursive access to other photos in your library.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                4. LOCAL DATA OWNERSHIP
              </h3>
              <p className="text-xs">
                You retain full ownership of all custom templates and scan histories. You can wipe all app data simply by uninstalling the application from your iOS device or clearing the cache inside Apple's Storage Settings.
              </p>
            </div>
          </article>
        )}

        {app.slug === "nanhufx" && (
          <article className="prose max-w-none text-xs md:text-sm text-[#86868b] space-y-6 leading-relaxed">
            <p>
              At NanhuFX, we are committed to protecting your privacy. This Privacy Policy explains how your data is handled when you use the NanhuFX iOS application.
            </p>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                1. NO ACCOUNT REGISTRATION & SERVERLESS DESIGN
              </h3>
              <p className="text-xs">
                NanhuFX is designed with a serverless architecture. We do not host or operate external database servers, and we never require you to register an account, log in, or provide personal details to use the application.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                2. LOCAL PROCESSING, CAMERA & MICROPHONE ACCESS
              </h3>
              <p className="text-xs leading-relaxed">
                NanhuFX requests access to your device's Camera and Microphone to capture audio and video script recording sessions.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong>Local AVFoundation Processing:</strong> Audio and video recording buffers are processed locally. No video stream files, voice recordings, or transcripts are transmitted off-device.</li>
                <li><strong>Photo Library Integration:</strong> Recordings are saved directly into your device's native Photo Library under strict iOS sandboxing protocols.</li>
              </ul>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                3. ON-DEVICE SPEECH RECOGNITION (VOICE-AUTOSCROLL)
              </h3>
              <p className="text-xs">
                The voice-synced autoscroll teleprompter engine utilizes on-device speech recognition. Audio feeds are processed locally on-device. Speech transcripts are never uploaded to remote servers or shared with advertising agencies.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-[#f5f5f7] rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                4. DATA STORAGE & CLOUDKIT SYNC
              </h3>
              <p className="text-xs leading-relaxed">
                All scripts, recording speed pacing indexes, and database logs are stored locally using Apple SwiftData.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
                <li><strong>iCloud Sync:</strong> Synced backups are transferred securely via Apple's standard iCloud Drive and CloudKit private containers. We have no access to your iCloud containers.</li>
              </ul>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                5. YOUR DATA RIGHTS
              </h3>
              <p className="text-xs">
                You retain full ownership of all custom scripts. You can wipe all app data at any time by uninstalling the application from your iOS device or clearing the cache inside Apple's Storage Settings.
              </p>
            </div>
          </article>
        )}

        {app.slug === "runlit" && (
          <article className="prose max-w-none text-xs md:text-sm text-[#86868b] space-y-6 leading-relaxed">
            <p>
              At Runlit, we are committed to protecting your privacy. This Privacy Policy explains how your data is handled when you use the Runlit iOS and watchOS application.
            </p>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                1. NO ACCOUNT REGISTRATION & LOCAL-FIRST DESIGN
              </h3>
              <p className="text-xs">
                Runlit is designed with a serverless architecture. We do not require account registration or logins. Your runs, streaks, and splits are processed and stored locally on your device or synced directly via your private iCloud containers.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                2. HEALTHKIT & APPLE HEALTH SYNC
              </h3>
              <p className="text-xs">
                Runlit integrates with HealthKit to track heart rates, active energy burned, and synchronization of runs to Apple Health rings. This data is processed on-device and is never shared with third parties or external advertisers.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                3. CORELOCATION GPS LOCATION MAPPING
              </h3>
              <p className="text-xs">
                Runlit requests background location permissions to log routes and split statistics. All location coordinates are calculated on-device. No telemetry or GPS history leaves your device.
              </p>
            </div>

            <div className="bg-[#f5f5f7] border border-border rounded-[20px] p-6 space-y-3">
              <h3 className="font-bold text-[#1d1d1f] text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                4. LOCAL DATA RESILIENCE & WIPE
              </h3>
              <p className="text-xs">
                You own 100% of your run database. Wiping all records can be performed at any time by uninstalling the application from your iPhone or watchOS companion device.
              </p>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
