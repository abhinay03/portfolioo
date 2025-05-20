"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Master in Microsoft Power BI Desktop and Service",
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e6a0514c-35ff-4fb5-a5bd-89e11391b354.pdf",
    },
    {
      title: "IBM Data Fundamentals",
      url: "https://www.credly.com/badges/6469e222-344e-44c9-a00d-54624cde8fe2/linked_in_profile",
    },
    {
      title: "Cisco Data Analytics Essentials",
      url: "https://www.credly.com/badges/bd8dfbba-574e-49d7-a363-87f6c2eedb7d/linked_in_profile",
    },
    {
      title: "Priceless Learning Programs from upGrad",
      url: "https://www.credential.net/5970af55-1922-452e-87fd-322c7d85bf84",
    },
    {
      title: "Google Digital Marketing Certification",
      url: "https://learndigital.withgoogle.com/link/1qsdpcedm9s",
    },
    {
      title:
        "Midjourney Mastery: Unlock Your Creative Potential with AI (Udemy)",
      url: "https://ude.my/UC-f508fd19-d365-4277-9e93-45810dff8f3b",
    },
    {
      title: "Complete Software Engineering Course with Python (Udemy)",
      url: "https://ude.my/UC-0a76b616-6956-421b-8e84-21b683ce9b63",
    },
    {
      title: "The Python Programming A-Z Definitive Diploma (Udemy Alumni)",
      url: "https://www.udemy.com/certificate/UC-4403a34a-9d13-4ebe-86a4-181f41b1a72a/",
    },
    {
      title: "MATLAB Onramp (MathWorks)",
      url: "https://matlabacademy.mathworks.com/progress/share/report.html?id=7caddc0c-0706-485d-90ec-b02c9861aff4&",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 h-auto text-muted-foreground hover:text-primary"
                        asChild
                      >
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="text-xs">View Certificate</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
