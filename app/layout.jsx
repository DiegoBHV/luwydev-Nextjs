import {Work_Sans} from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://luwydev.com'),
  title: "Luwy Dyro",
  description: "Soy desarrollador web, tengo conocimientos gráficos UX/UI, FrontEnd Dev, Web Design, E-commerce",
  keywords: "creative agency, personal, corporate, freelance, software",
  authors: [{name:"LuwyDyro"}],
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
    title: 'Luwy Dyro',
    description: 'Soy desarrollador web, tengo conocimientos gráficos UX/UI, FrontEnd Dev, Web Design, E-commerce',
    url: 'https://luwydev.com',
    siteName: 'Luwy Dyro',
    images: [
      {
        url: 'public/images/logo/logo_luwydyro_contorno.svg',
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
