import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { profile, siteMetadata } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${profile.name}`,
  },
  description: siteMetadata.description,
  keywords: [
    "产品结构工程师",
    "结构设计作品集",
    "消费电子结构设计",
    "DFMEA",
    "DFM",
    "DFA",
    "量产导入",
    "个人官网",
  ],
  applicationName: siteMetadata.title,
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
