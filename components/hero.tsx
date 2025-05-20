"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import ResumeButton from "@/components/resume-button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    if (window.scrollY < 100) {
      setActiveSection("home");
    }
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative pt-20 md:pt-0 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <motion.span
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Abhinay Sambherao
              </motion.span>
              <motion.div className="h-12 md:h-16 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -120, -240, -360, 0] }}
                  transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                >
                  <motion.span className="block text-primary">
                    Software Developer Engineer
                  </motion.span>
                  <motion.span className="block text-primary">
                    Cloud Engineer
                  </motion.span>
                  <motion.span className="block text-primary">
                    Data Science Associate
                  </motion.span>
                  <motion.span className="block text-primary">
                    Data Analyst
                  </motion.span>
                </motion.div>
              </motion.div>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Specializing in data science, cloud technologies, machine
              learning, and building scalable web applications with a focus on
              data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="https://wa.me/+917020498303">Get in Touch</a>
              </Button>
              <ResumeButton />
            </div>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/abhinay-sambherao"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/abhinay-sambherao"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://x.com/abhiiinayy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:abhinay.sambherao@outlook.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-30"></div>
              <div className="relative bg-card rounded-lg shadow-xl overflow-hidden aspect-square">
                <img
                  src="/abhinay.jpg?height=800&width=800"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="#about" aria-label="Scroll down">
                <ArrowDown className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
