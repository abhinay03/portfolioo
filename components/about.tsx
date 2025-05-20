"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Career Objective</h3>
                <p className="text-muted-foreground mb-6">
                  Aspiring Data Scientist and Data Analyst with a strong foundation in computer science and hands-on
                  experience in web development, graphic design and cloud-based solutions. Proficient in Python, SQL,
                  Tableau and cloud technologies. Bachelor's degree in Computer Science with experience in building
                  Customer Data Platforms (CDP) and a keen interest in Big Data and Artificial Intelligence. Aiming to
                  further my expertise by pursuing an MSc in Computer Science with a focus on Big Data and Artificial
                  Intelligence.
                </p>

                <h3 className="text-xl font-semibold mb-4">Summary of Qualifications</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Experienced in developing data-driven solutions, including cloud-native Customer Data Platforms
                    integrating features like Cloud EDA, Data Factories and advanced analytics.
                  </li>
                  <li>Proficient in Python, SQL, Tableau and cloud platforms.</li>
                  <li>
                    Strong foundation in web development and UI/UX design enhancing application performance and user
                    engagement.
                  </li>
                  <li>
                    Excellent problem-solving skills with a passion for leveraging data insights for impactful
                    decision-making.
                  </li>
                  <li>
                    Effective communicator and collaborator, with an eagerness to learn and adapt to emerging
                    technologies.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Language Skills</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Marathi</span>
                      <span>Native</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Hindi</span>
                      <span>Native</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>C1-C2</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>German</span>
                      <span>A1-A2</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[30%]"></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Science</Badge>
                  <Badge variant="secondary">Cloud Engineering</Badge>
                  <Badge variant="secondary">Full-Stack Development</Badge>
                  <Badge variant="secondary">Big Data</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
