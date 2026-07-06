import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignalsHQ — AI-Powered Tax Automation",
  description:
    "Research, intake, and prep in one platform. Save 4+ hours per week per preparer with cited, verified AI answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
