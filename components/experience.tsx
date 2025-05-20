"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Data Scientist & Cloud Solutions Developer Internship",
      company: "FLX Cloud Services",
      period: "Dec 2024 – March 2025",
      responsibilities: [
        "Developing a comprehensive Customer Data Platform (CDP) leveraging cloud infrastructure for scalable and efficient data processing.",
        "Implementing features such as exploratory data analysis (EDA) data ingestion pipelines using Data Factory and advanced visualization dashboards.",
        "Designing robust architectures for secure and scalable cloud-based solutions.",
        "Collaborating with cross-functional teams to integrate analytics, automation and reporting functionalities into the platform.",
        "Utilizing cloud technologies to optimize data storage, retrieval and processing workflows.",
      ],
    },
    {
      title: "Jr Web Developer Internship",
      company: "VersaPro Services",
      period: "Aug 2023 - Nov 2023",
      responsibilities: [
        "Built responsive websites using HTML, CSS and JavaScript, ensuring seamless cross-device compatibility.",
        "Designed user-friendly interfaces and optimized website performance.",
        "Enhanced brand identity through graphic and UI design using tools like Figma and Canva.",
      ],
    },
    {
      title: "Assistant Web Developer Internship",
      company: "DSPH Pvt. Ltd.",
      period: "Sep 2021 - Mar 2022",
      responsibilities: [
        "Developed responsive web designs and improved user experience using HTML, CSS and JavaScript.",
        "Created social media graphics using Canva and Figma, increasing online engagement and brand visibility.",
      ],
    },
    {
      title: "Graphic Designer Internship",
      company: "Asiana Times",
      period: "May 2022 - June 2022",
      responsibilities: [
        "Designed marketing materials and social media assets using Canva and Figma.",
        "Collaborated with teams to align visuals with organizational goals.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="overflow-hidden">
                <div className={`h-2 ${index === 0 ? "bg-primary" : "bg-primary/70"}`}></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
