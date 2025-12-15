import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap, Store, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "2019 – 2021",
      title: "Chief Executive Officer (CEO)",
      company: "Sam Production Indonesia",
      icon: Building2,
      description:
        "Led a creative agency team, managed marketing strategies, handled client communications, and resolved operational issues.",
    },
    {
      period: "2019 – 2021",
      title: "Brand Ambassador & Marketing Team",
      company: "President University",
      icon: GraduationCap,
      description:
        "Represented the university in promotional events, conducted public speaking, and managed student recruitment campaigns.",
    },
    {
      period: "2018 – 2020",
      title: "Business Owner",
      company: "Gorengan Sedap (F&B Business)",
      icon: Store,
      description:
        "Founded and managed a home-based F&B business. Oversaw production, sales, and managed tenants at various festival events.",
    },
    {
      period: "2020 – 2021",
      title: "Social Media Manager",
      company: "CV. Sam Kreatif Indonesia",
      icon: Building2,
      description:
        "Created digital content, managed social media accounts, executed digital marketing campaigns, and handled copywriting.",
    },
    {
      period: "2020",
      title: "Manager of Marketing",
      company: "UD. Sam Kayu",
      icon: Building2,
      description:
        "Managed marketing communications, social media strategies, and led the marketing team to increase brand awareness.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className={`glass-card-hover p-6 md:p-8 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-lg`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <span className="text-sm font-medium text-primary">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Download Full Resume (PDF)
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
