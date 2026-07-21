import Navbar2 from "@/components/layout/Navbar2";
import Footer2 from "@/components/layout/Footer2";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar2 />

      <main className="min-h-screen bg-[#09090B] pt-24">{children}</main>

      <Footer2 />
    </>
  );
}
