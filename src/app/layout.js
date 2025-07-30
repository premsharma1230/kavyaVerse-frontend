import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./components/Providers"; // ✅ Use wrapper component


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KavyaVerse",
  description: "Poetry, expression, and more...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* <QueryClientProviders client={queryClient}> */}
          {children}
          {/* </QueryClientProviders> */}
        </Providers>
      </body>
    </html>
  );
}
