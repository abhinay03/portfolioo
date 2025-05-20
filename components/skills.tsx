"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Cloud,
  Palette,
  BarChart,
  FileCode,
  Laptop,
  Server,
  BrainCircuit,
  LineChart,
} from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      name: "Data Science & Analysis",
      icon: BarChart,
      skills: [
        "Python",
        "SQL",
        "Data Visualization",
        "Statistical Analysis",
        "Machine Learning",
        "Predictive Modeling",
      ],
    },
    {
      name: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "Java", "C", "C++", "JavaScript"],
    },
    {
      name: "Cloud Technologies",
      icon: Cloud,
      skills: ["Data Factory", "EDA", "AWS", "Azure", "Cloud Architecture"],
    },
    {
      name: "Web Development",
      icon: FileCode,
      skills: ["React", "Vue", "Flask", "HTML/CSS", "Responsive Design"],
    },
    {
      name: "Office Tools",
      icon: Laptop,
      skills: ["Microsoft Word", "Excel", "PowerPoint", "Outlook", "Access"],
    },
    {
      name: "Graphic Design",
      icon: Palette,
      skills: ["Adobe Photoshop", "Figma", "Canva", "UI/UX Design"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Data Science & Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise in data analysis, visualization, and building predictive models
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Cloud Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Building scalable, secure cloud-based solutions and platforms
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">AI & Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Applying AI/ML techniques to solve complex business problems
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <LineChart className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Data Visualization</h4>
                  <p className="text-sm text-muted-foreground">Creating insightful dashboards and visual analytics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
