import type { Metadata } from "next";
import { Inter, Josefin_Sans, Kanit, Marhey } from "next/font/google";
import "./globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Providers } from "./components/Providers";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const josefin = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const marhey = Marhey({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyHub",
  description: "Web for sharing and collaborating",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={josefin.className}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
