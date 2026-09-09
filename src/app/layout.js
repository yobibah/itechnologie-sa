import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../../components/nav";

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
      <body className="min-h-screen">


        <header className="fixed top-0 left-0 right-0 z-50 mb">
          <Header />
        </header>

   
        <main className="pt-20">
          <div className="max-w-9xl mx-auto w-full">
            {children}
          </div>
        </main>

      </body>
    </html>
  );
}