import type { Metadata } from "next";
import { Bai_Jamjuree, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicLayoutWrapper from "@/components/PublicLayoutWrapper";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Poly's Auto Repair LLC",
    default: "Poly's Auto Repair LLC | Auto Repair, Car Care & Servicing in Phoenix, AZ",
  },
  description: "Poly's Auto Repair LLC in Phoenix, AZ offers expert auto repairs, diagnostics, car servicing, and maintenance. Visit us at 1636 N 43rd Ave #9, Phoenix, AZ 85009.",
  keywords: ["Car Repair Phoenix", "Auto Repair Phoenix AZ", "Poly's Auto Repair LLC", "Car Service Phoenix", "Auto Mechanic Phoenix", "Car Maintenance Phoenix AZ"],
  category: "Automotive",
  metadataBase: new URL("https://polysautorepair.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Poly's Auto Repair LLC | Auto Repair & Car Care Phoenix, AZ",
    description: "Expert auto repairs, car servicing, and vehicle maintenance in Phoenix, AZ. 1636 N 43rd Ave #9, Phoenix, AZ 85009.",
    url: "https://polysautorepair.com",
    siteName: "Poly's Auto Repair LLC",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/logo/carrepair-logo.png",
      width: 800,
      height: 600,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poly's Auto Repair LLC | Auto Repair Phoenix, AZ",
    description: "Expert auto repair, car servicing, and maintenance in Phoenix, AZ, United States.",
    images: ["/logo/carrepair-logo.png"],
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
  icons: {
    icon: "/logo/carrepair-logo.png",
    shortcut: "/logo/carrepair-logo.png",
    apple: "/logo/carrepair-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${montserrat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function(node) {
                    if (node && node.nodeType === 1) {
                      if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                      if (node.hasAttribute('bis_size')) node.removeAttribute('bis_size');
                      if (node.hasAttribute('bis_label')) node.removeAttribute('bis_label');
                      var els = node.querySelectorAll ? node.querySelectorAll('[bis_skin_checked],[bis_size],[bis_label]') : [];
                      for (var i = 0; i < els.length; i++) {
                        els[i].removeAttribute('bis_skin_checked');
                        els[i].removeAttribute('bis_size');
                        els[i].removeAttribute('bis_label');
                      }
                    }
                  };
                  if (typeof MutationObserver !== 'undefined') {
                    var observer = new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        var m = mutations[i];
                        if (m.type === 'attributes') {
                          if (m.target && m.target.removeAttribute) {
                            if (m.attributeName === 'bis_skin_checked' || m.attributeName === 'bis_size' || m.attributeName === 'bis_label') {
                              m.target.removeAttribute(m.attributeName);
                            }
                          }
                        } else if (m.type === 'childList') {
                          for (var j = 0; j < m.addedNodes.length; j++) {
                            clean(m.addedNodes[j]);
                          }
                        }
                      }
                    });
                    if (document.documentElement) {
                      observer.observe(document.documentElement, {
                        attributes: true,
                        attributeFilter: ['bis_skin_checked', 'bis_size', 'bis_label'],
                        childList: true,
                        subtree: true
                      });
                    }
                  }
                  if (typeof console !== 'undefined' && console.error) {
                    var origErr = console.error;
                    console.error = function() {
                      for (var i = 0; i < arguments.length; i++) {
                        var str = typeof arguments[i] === 'string' ? arguments[i] : '';
                        if (str.indexOf('bis_skin_checked') !== -1 || str.indexOf('bis_size') !== -1) {
                          return;
                        }
                      }
                      return origErr.apply(console, arguments);
                    };
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#110E10] text-[#DEDEDE]"
        suppressHydrationWarning
      >
        <PublicLayoutWrapper><Navbar /></PublicLayoutWrapper>
        {children}
        <PublicLayoutWrapper><Footer /></PublicLayoutWrapper>

        {/* Global Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Poly's Auto Repair LLC",
              "image": "https://polysautorepair.com/logo/carrepair-logo.png",
              "@id": "https://polysautorepair.com",
              "url": "https://polysautorepair.com",
              "telephone": "+1 (973) 868-4091",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1636 N 43rd Ave #9",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85009",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.4678,
                "longitude": -112.1522
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/careplusauto",
                "https://twitter.com/careplusauto",
                "https://www.instagram.com/careplusauto",
                "https://www.linkedin.com/company/careplusauto"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
