import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
