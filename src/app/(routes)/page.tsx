import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import MainContent from "@/components/organisms/main-content";

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
