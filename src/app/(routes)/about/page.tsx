import CoreValues from "@/components/molecules/core-values";
import CTASection from "@/components/molecules/cta-section";
import Purpose from "@/components/molecules/purpose";
import { getAbout } from "@/features/articles/services/aboutServices";
import { About } from "@/features/articles/types/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nama Website",
  description:
    "Pelajari lebih lanjut tentang perusahaan kami, visi, misi, dan tim yang membangun produk ini.",
  keywords: ["about", "tentang kami", "company profile"],
  openGraph: {
    title: "About Us | Nama Website",
    description: "Kenali lebih dekat perusahaan kami.",
    url: "https://yourdomain.com/about",
    siteName: "Nama Website",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
};
export const revalidate = false;
export default async function Page() {
  const res = await getAbout();
  const about = res.data;

  return (
    <main className="flex-1">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {about.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {about.description}
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              {about.description}
            </p>
          </div>
          <CoreValues blocks={about.blocks} />
        </div>
      </section>
      <Purpose />
      <CTASection />
    </main>
  );
}
