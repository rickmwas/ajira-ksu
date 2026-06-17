import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { RegisterModal } from "@/components/site/RegisterModal";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-[60px]">{children}</main>
      <Footer />
      <RegisterModal />
    </div>
  );
}
