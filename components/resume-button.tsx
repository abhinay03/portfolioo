"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Check } from "lucide-react";

export default function ResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      // Reset the downloaded state after 3 seconds
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);

      // Create a link element and trigger download
      const link = document.createElement("a");
      link.href = "/Abhinay-Sambherao-Resume.pdf"; // This would be your actual resume PDF path
      link.download = "Abhinay-Sambherao-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading || isDownloaded}
      variant={isDownloaded ? "outline" : "default"}
      className="transition-all duration-300"
    >
      {isDownloading ? (
        <>
          <span className="animate-pulse">Downloading...</span>
        </>
      ) : isDownloaded ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Downloaded
        </>
      ) : (
        <>
          <Download className="h-4 w-4 mr-2" />
          Download Resume
        </>
      )}
    </Button>
  );
}
