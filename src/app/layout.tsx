// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './styles/app.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADACODE",
  description: "Discover innovation with Adacode Solutions, your trusted partner in software excellence. As a leading app/website development company, we specialize in crafting cutting-edge solutions tailored to elevate your digital presence. From user-friendly interfaces to seamless experiences, our skilled team of developers is dedicated to delivering robust React applications that redefine industry standards. Explore the power of Adacode Solutions – where creativity meets functionality for unparalleled software solutions. Elevate your brand, captivate your audience, and embark on a digital journey of success with our expertise in React app development. Transform ideas into reality; choose Adacode Solutions for visionary software solutions that make an impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
