import type { Metadata } from "next";
// import { Geist, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import GloabalLayout from "@/layouts/GloabalLayout";
import { Geist,Schibsted_Grotesk,Libre_Baskerville,Exo_2 } from "next/font/google";



export const metadata: Metadata = {
  title: "ShopCart",
  description: "Generated by create next app",
};


 const Geistfont :any=Geist({
   subsets:["latin"],
   variable:"--font-geist",
   weight:"600",
   });
  const Schibsted :any=Schibsted_Grotesk({
    subsets:["latin"],
    variable:"--font-Schibsted_Grostek",
    weight:"400",
    });

    const Libre :any=Libre_Baskerville({
      subsets:["latin"],
      variable:"--font-Libre_Baskerville",
      weight:"400",
      });

      const Exo :any=Exo_2({
        subsets:["latin"],
        variable:"--font-Exo_2",
        weight:"400",
        });


  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      
   
      <body
        className={` antialiased ${Geistfont.variable} ${Schibsted.variable} ${Libre.variable} ${Exo.variable}`}
      >
        <GloabalLayout>
        {children}
        </GloabalLayout>
      
      </body>
      
    </html>
  );
}
