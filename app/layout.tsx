import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scholarsloft.com"), // Replace with your actual domain when live
  title: {
    default: "Scholars Loft | Premier Tuition & Enrichment in Singapore",
    template: "%s | Scholars Loft",
  },
  description: "Empowering future leaders with holistic STEM and Language mastery. Join Scholars Loft for top-tier tuition, expert mentorship, and a proven track record of academic excellence.",
  keywords: ["tuition singapore", "primary school tuition", "math tuition", "science tuition", "english tuition", "scholars loft", "PSLE preparation", "enrichment center"],
  authors: [{ name: "Scholars Loft" }],
  creator: "Scholars Loft",
  publisher: "Scholars Loft",
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.scholarsloft.com",
    title: "Scholars Loft - Excellence in Education",
    description: "Join Scholars Loft for top-tier tutoring and academic guidance. Expert tutors from Raffles Institution and top universities.",
    siteName: "Scholars Loft",
    images: [
      {
        url: "/images/logo/scholars-loft-logo.png",
        width: 800,
        height: 600,
        alt: "Scholars Loft Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholars Loft",
    description: "Empowering students to achieve their best with holistic STEM & Language mastery.",
    images: ["/images/logo/scholars-loft-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* JSON-LD for AI SEO (Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Scholars Loft",
              url: "https://www.scholarsloft.com",
              logo: "https://www.scholarsloft.com/images/logo/scholars-loft-logo.png",
              sameAs: [
                "https://www.facebook.com/scholarsloft", 
                "https://www.instagram.com/scholarsloft"
              ],
              description: "Scholars Loft provides premier tuition and enrichment programs in Singapore, focusing on STEM and Language mastery.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Singapore"
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "loftofscholars@gmail.com",
                contactType: "customer service"
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}