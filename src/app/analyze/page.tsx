"use client";

import { useRouter } from "next/navigation";
import UploadForm from "@/components/analyze/UploadForm";
import Navbar2 from "@/components/layout/Navbar2";
import Footer2 from "@/components/layout/Footer2";

export default function AnalyzePage() {
  const router = useRouter();

  const handleAnalysis = (data: any) => {
    sessionStorage.setItem("analysis", JSON.stringify(data));

    router.push("/dashboard");
  };

  return (
    <>
    <Navbar2/>
    <UploadForm onAnalyze={handleAnalysis} />;
    <Footer2/>
    </>
  );
}
