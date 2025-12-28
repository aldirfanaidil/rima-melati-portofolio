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
      location: "Makassar, Indonesia",
      icon: Building2,
      highlights: [
        "Achieved an 85% success rate in client acquisition strategies, converting nearly every prospect into a client.",
        "Directed a creative team to deliver high-quality projects, ensuring 100% client satisfaction.",
        "Managed business operations and marketing, resulting in consistent project growth year-over-year.",
      ],
    },
    {
      period: "2019 – 2021",
      title: "Brand Ambassador & Marketing Team",
      company: "President University",
      location: "Cikarang, Indonesia",
      icon: GraduationCap,
      highlights: [
        "Represented the university in nearly 50 events within a single year, significantly boosting brand visibility.",
        "Conducted public speaking and promotional activities that increased student recruitment interest.",
        "Managed student recruitment campaigns effectively, contributing to the university's intake targets.",
      ],
    },
    {
      period: "2018 – 2020",
      title: "Business Owner",
      company: "Gorengan Sedap (F&B Business)",
      location: "Makassar, Indonesia",
      icon: Store,
      highlights: [
        "Achieved a 45% daily purchase conversion rate on food delivery platforms (GrabFood).",
        "Generated consistent daily sales of 30-40 units (approx. IDR 1 million/day) solely through Instagram and online channels.",
        "Managed end-to-end production and quality control to maintain high customer ratings.",
      ],
    },
    {
      period: "2020 – 2021",
      title: "Social Media Manager",
      company: "CV. Sam Kreatif Indonesia",
      location: "Makassar, Indonesia",
      icon: Building2,
      highlights: [
        "Grew social media insights and followers by over 1000% (from hundreds to thousands) organically, prior to using influencer marketing.",
        "Developed content strategies that independently drove high engagement without paid endorsements.",
        "Later collaborated with influencers to further scale up the already established audience base.",
      ],
    },
    {
      period: "2020",
      title: "Manager of Marketing",
      company: "UD. Sam Kayu",
      location: "Gowa, Indonesia",
      icon: Building2,
      highlights: [
        "Optimized digital marketing strategies, contributing 75% to the overall sales growth.",
        "Accelerated online sales performance through effective 'word-of-mouth' and digital campaigns.",
        "Achieved 50% of key managerial targets within the marketing division in a short period.",
      ],
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
                    <p className="text-lg font-medium text-foreground mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.location}
                    </p>
                    <ul className={`text-muted-foreground text-sm space-y-2 ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-primary mt-1.5 flex-shrink-0 ${index % 2 === 0 ? "md:order-last" : ""}`}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
