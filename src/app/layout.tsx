import "./globals.scss";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Leonardo Pires",
  description: "leonardo pires is a desenvolvedor Front-end...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
