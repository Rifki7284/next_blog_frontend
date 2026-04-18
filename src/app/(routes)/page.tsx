import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import MainContent from "@/components/organisms/main-content";
import { Metadata } from "next";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;
export async function generateMetadata(): Promise<Metadata> {
  const url = `${APP_URL}`;

  const title = "My Blog – Insight Teknologi & Web Development";
  const description =
    "Temukan insight terbaru seputar web development, programming, dan teknologi modern. Belajar Next.js, Laravel, dan tips developer secara praktis.";

  const keywords = [
    "blog teknologi",
    "web development",
    "programming",
    "next js",
    "laravel",
    "javascript",
    "tutorial coding",
    "developer indonesia",
  ];

  const image = `${APP_URL}/images/og-home.jpg`; // beda dari article biar unik

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(APP_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "My Blog",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "My Blog - Insight Teknologi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};
export default Page;
