import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Page from "./Pages/grid";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 text-white p-4">My Header</header>
          <main className="flex-grow container mx-auto p-4">
            <Page></Page>
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
