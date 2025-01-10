import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Ziul Pizza - A melhor pizzaria",
  description: "A melhoria pizzaria da zona sul de São Paulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
