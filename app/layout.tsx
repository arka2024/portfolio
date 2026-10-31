import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { MobileTabBar } from "@/components/MobileTabBar";

export const metadata: Metadata = {
  title: "Arkabrata Roy — Software Engineer | Backend Systems & Applied AI",
  description:
    "Portfolio of Arkabrata Roy, Software Engineer focused on Backend Systems, Microservices, Event-Driven Architectures (Kafka), and Applied AI / RAG Systems.",
  keywords: [
    "Arkabrata Roy",
    "Software Engineer",
    "Backend Systems",
    "Applied AI",
    "Kafka",
    "PostgreSQL",
    "LangChain",
    "Distributed Systems",
    "Next.js",
  ],
  authors: [{ name: "Arkabrata Roy", url: "https://github.com/arka2024" }],
  creator: "Arkabrata Roy",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arkabrata.dev",
  },
  openGraph: {
    title: "Arkabrata Roy — Software Engineer | Backend Systems & Applied AI",
    description:
      "Building backend services, scalable applications, and AI-powered systems.",
    url: "https://arkabrata.dev",
    siteName: "Arkabrata Roy Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkabrata Roy — Software Engineer",
    description:
      "Building backend services, scalable applications, and AI-powered systems.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC Theme Script: default to dark, respect localStorage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Typography: Google Fonts with real fallback stacks */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen bg-background text-foreground antialiased selection:bg-cyan-500/20 selection:text-cyan-200 pb-20 md:pb-0">
        {/* Signature Effect A: Scroll Progress Bar */}
        <ScrollProgress />

        {/* Dynamic Animated Cyber Background with Glowing Orbs & Starfield */}
        <BackgroundBlobs />

        {/* Main Content */}
        <div className="relative z-10">{children}</div>

        {/* Mobile Native App Floating Dock Navigation (App-like thumb experience) */}
        <MobileTabBar />
      </body>
    </html>
  );
}
