import type { Metadata } from "next";
import { righteous } from "@/components/Fonts";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Background from "@/components/Background";
import LoadingScreen from "@/components/LoadingScreen";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NextUIProvider } from "@nextui-org/react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Zkuads",
  description: "Where Gaming Meets P2P Betting",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

interface rootLayoutProps {
  children: React.ReactNode;
  modals: React.ReactNode;
  zkuad: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  modals,
  params: { locale },
}: rootLayoutProps) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${righteous.className} text-white overflow-x-hidden overflow-y-hidden`}>
        <LoadingScreen />
        <Providers>
          <NextUIProvider>
            <NextIntlClientProvider messages={messages}>
              <Background />
              <Navbar />
              <div className="lg:text-left lg:px-[7.5%] lg:pt-24">
                {modals}
                {children}
              </div>
            </NextIntlClientProvider>
          </NextUIProvider>
        </Providers>
      </body>
    </html>
  );
}
