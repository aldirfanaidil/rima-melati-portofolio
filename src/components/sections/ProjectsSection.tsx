import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Business Development",
      subtitle: "Gorengan Sedap",
      description: "Founded and managed a successful food business, handling operations, sales, and festival vendor participation.",
      tags: ["Entrepreneurship", "Management"],
      image: "/images/projects/project1.png",
    },
    {
      title: "Seascape 2024",
      subtitle: "Event Organizing",
      description: "Organized and managed large-scale events, coordinating teams, vendors, and logistics for successful execution.",
      tags: ["Event Organizer", "Leadership"],
      image: "/images/projects/project2.png",
    },
    {
      title: "Sam Kreatif Agency",
      subtitle: "CEO & Founder",
      description: "Led creative campaigns and managed influencer partnerships to drive brand awareness and engagement.",
      tags: ["Marketing", "CEO"],
      image: "/images/projects/project3.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Global Background: Mesh Gradient (Teal/Blue aligned) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f766e] to-[#ccfbf1] opacity-20 -z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, #022c22 0%, #0f172a 40%, #0f766e 70%, #ccfbf1 100%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Featured Works
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="group relative h-[400px] w-full rounded-[24px] overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="absolute inset-0 w-full h-full">
                {/* Fallback color if image fails or while loading */}
                <div className="w-full h-full bg-slate-200 animate-pulse absolute inset-0 -z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#cbd5e1'; // Fallback bg
                  }}
                />
              </div>

              {/* Glass Card Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 m-4 rounded-[20px] translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
                }}
              >
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      style={{}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          More project visuals and case studies coming soon.
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
