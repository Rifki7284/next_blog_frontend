import CoreValues from "@/components/molecules/core-values";
import CTASection from "@/components/molecules/cta-section";
import Purpose from "@/components/molecules/purpose";
import { getAbout } from "@/features/articles/services/aboutServices";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constant/app";
export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.name}`,
  description: SITE_CONFIG.description,
  keywords: ["about", "tentang kami", SITE_CONFIG.name],
  openGraph: {
    title: `About | ${SITE_CONFIG.name}`,
    description: SITE_CONFIG.description,
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
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
