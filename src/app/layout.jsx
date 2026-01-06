import { allan, badScript, beauRivage, sourceSans3, yellowtail } from "@/lib/fonts";
import "./globals.scss";


export const metadata = {
  title: "Site web de Sanji",
  description: "Un site web dédié à Sanji",
  icons: {
    icon:"https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/icones/icone-sanji.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${beauRivage.variable} ${badScript.variable} ${yellowtail.variable} ${sourceSans3.variable} ${allan.variable}`}>
        {children}
      </body>
    </html>
  );
}
