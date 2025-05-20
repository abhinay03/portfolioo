"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Microscope,
  Database,
  Server,
  ExternalLink,
  Github,
} from "lucide-react";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "MannMitra",
      description:
        "A comprehensive mental health assessment website designed to provide accessible mental health resources and self-assessment tools.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Brain,
      tags: ["React", "Node.js", "MongoDB", "Express", "Mental Health"],
      demoLink: "https://mannmitra.live",
      githubLink: "https://github.com/abhinaysambherao/mannmitra",
      featured: true,
    },
    {
      title: "Pneumonia Prediction",
      description:
        "Machine learning model that predicts pneumonia from chest X-ray images with high accuracy, helping in early diagnosis and treatment.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Microscope,
      tags: [
        "Python",
        "TensorFlow",
        "Machine Learning",
        "Healthcare",
        "Image Classification",
      ],
      demoLink: "#",
      githubLink: "https://github.com/abhinaysambherao/pneumonia-prediction",
      featured: true,
    },
    {
      title: "Customer Data Platform",
      description:
        "Cloud-native CDP leveraging advanced data processing capabilities for scalable and efficient customer data management.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Database,
      tags: ["Cloud", "Data Factory", "Python", "SQL", "Analytics"],
      demoLink: "https://cdp.example.com",
      githubLink: "https://github.com/abhinaysambherao/customer-data-platform",
      featured: false,
    },
    {
      title: "Cloud Architecture Solutions",
      description:
        "Designed and implemented robust cloud architectures for secure and scalable business applications.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Server,
      tags: ["AWS", "Azure", "Cloud Architecture", "Security", "Scalability"],
      demoLink: "https://cloud-solutions.example.com",
      githubLink: "https://github.com/abhinaysambherao/cloud-solutions",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in web development, data science, and cloud engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="h-full overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    {/* <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
                    <Button size="sm" asChild>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  {/* <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter> */}
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
