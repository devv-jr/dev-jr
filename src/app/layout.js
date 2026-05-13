import { Unbounded, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";

const displayFont = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bruce Dev — Full-stack Developer · México",
  description:
    "Desarrollador Full-stack desde México. Web, móvil y sistemas con identidad propia. React Native, Next.js, Python, Linux.",
  keywords: [
    "fullstack developer",
    "desarrollador mexico",
    "react native",
    "next.js",
    "python",
    "linux",
    "Bruce Dev",
  ],
  authors: [{ name: "Bruce Dev" }],
  openGraph: {
    title: "Bruce Dev — Full-stack Developer",
    description:
      "Web, móvil y sistemas construidos con identidad. Desde apps gamificadas hasta distros Linux personalizadas.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased dark`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
