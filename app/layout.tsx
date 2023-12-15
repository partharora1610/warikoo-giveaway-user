import React from "react";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

// providers
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// styles

// fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

// metadata
export const metadata: Metadata = {
  title: "Warikoo gifts",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
