import { Footer } from "@/components/organisms/footer";
import { Navbar } from "@/components/organisms/navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
