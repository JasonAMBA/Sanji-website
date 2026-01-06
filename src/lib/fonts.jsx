import { Allan, Bad_Script, Beau_Rivage, Source_Sans_3, Yellowtail } from "next/font/google";

export const beauRivage = Beau_Rivage({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-beau-rivage',
  display: 'swap'
});

export const badScript = Bad_Script({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-bad-script',
  display: 'swap'
});

export const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-yellowtail',
  display: 'swap'
});

export const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  style: 'italic',
  variable: '--font-source-sans-3',
  display: 'swap'
});

export const allan = Allan({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-allan',
  display: 'swap'
})