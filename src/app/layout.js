import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Itechnologie SA",
  description: "Entreprise informatique",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-gray-100">
        <Header />

        <main className="flex-1">
          <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] bg-white shadow-sm">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
