import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "CodeOverflow",
  description:
    "A platform for asking and getting response to coding related problems",
  icons: "", // TODO( to be added later)
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className="h1-bold">This is beginning of the text</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
