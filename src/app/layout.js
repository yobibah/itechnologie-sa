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

      <body className="min-h-screen flex flex-col">
        <Header />


        <main className="flex">

          <div className="max-w-9xl mx-auto w-full h-full ">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
