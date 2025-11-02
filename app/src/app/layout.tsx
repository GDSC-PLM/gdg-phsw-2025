import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "SaaSified and Amplified 2025 | GDGoC PLM",
  description: "Official event website for SaaSified and Amplified: Ascending Software to the Sky - A GDGoC PLM event in collaboration with Philippine Startup Week 2025",
  openGraph: {
    title: "SaaSified and Amplified 2025",
    description: "Scaling Filipino Innovation: Start Local, Go Global! Join us on November 13, 2025 at PLM.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
