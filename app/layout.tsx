import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const myfont = Press_Start_2P(
  {
    variable: '--font-main',
    weight: ['400']
  }
);


export const metadata: Metadata = {
  title: "Sip & Focus",
  description: "just a basic timer app with promodoro timer and classical music ;)",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png"></link>
      </head>
      <body className={`${myfont.variable} `}>
        {children}
      </body>
    </html>
  );
}
