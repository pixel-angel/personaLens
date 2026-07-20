"use client";

import { useRouter } from "next/navigation";
import UploadForm from "@/components/analyze/UploadForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AnalyzePage() {
  const router = useRouter();

  const handleAnalysis = (data: any) => {
    sessionStorage.setItem("analysis", JSON.stringify(data));

    router.push("/dashboard");
  };

  return (
    <>
    <Navbar/>
    <UploadForm onAnalyze={handleAnalysis} />;
    <Footer/>
    </>
  );
}
