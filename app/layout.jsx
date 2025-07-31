import {Work_Sans} from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://luwydev.com'),
  title: "Luwy Dyro",
  description: "Luwy Dyro - Developer web Front End, UX Developer, E-commerce, SEO",
  keywords: "Luwy, Dyro, Desarrollador web, frontend, Ux developer, diseñador web",
  authors: [{name:"Luwy Dyro"}],
  robots: {
    index: true,
    follow: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
  icon: "../public/images/logo/logo_LD.svg",
  },  
  openGraph: {
    title: 'Luwy Dyro | Web Developer',
    description: 'Luwy Dyro - Developer web Front End, UX Developer, E-commerce, SEO',
    url: 'https://luwydev.com',
    siteName: 'Luwy Dyro',
    images: [
      {
        url: '/images/logo/logo_luwydyro_contorno.svg',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
};
export const viewport = {
    themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#007aff' },
    { media: '(prefers-color-scheme: dark)', color: '#050f25' },
  ],
} 
const worksans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${worksans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
