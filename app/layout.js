import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "InterviewMate",
  description: "Your AI Mockup Interview",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
