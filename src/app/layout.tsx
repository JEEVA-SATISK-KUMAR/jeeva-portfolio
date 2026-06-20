import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeeva OS | Analytics Command Center",
  description: "Jeeva Satish Kumar — Data Analyst | Business Analytics MSBA | SQL, Python, Power BI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
