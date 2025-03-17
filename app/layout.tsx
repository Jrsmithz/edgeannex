import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Edge Annex — AI Consulting & Digital Transformation",
  description: "Transform your business with cutting-edge AI solutions. Expert consulting for artificial intelligence integration and digital transformation.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32"
      }
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} bg-background text-foreground selection:bg-zinc-900/10`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
