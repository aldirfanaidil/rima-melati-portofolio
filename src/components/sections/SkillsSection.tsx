import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Megaphone, 
  Users, 
  PenTool, 
  Target, 
  HeadphonesIcon,
  Calendar,
  Mic,
  Video,
  Camera,
  Music,
  Globe,
  FileText,
  BarChart3,
  FileSpreadsheet,
  Languages
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Digital Marketing & Management",
      icon: Target,
      skills: [
        { name: "Social Media Marketing (FB & IG Ads)", icon: Megaphone },
        { name: "KOL Partnership & Influencer Marketing", icon: Users },
        { name: "Copywriting & Content Management", icon: PenTool },
        { name: "Digital Marketing Strategy", icon: Target },
        { name: "Customer Service & Client Support", icon: HeadphonesIcon },
      ],
    },
    {
      title: "Creative, Media & Event",
      icon: Calendar,
      skills: [
        { name: "Event Planning & Organizer (EO)", icon: Calendar },
        { name: "Master of Ceremonies (MC)", icon: Mic },
        { name: "Video Editing & Visual Content", icon: Video },
        { name: "Photo & Video Shooting", icon: Camera },
        { name: "Music Composition & Songwriting", icon: Music },
      ],
    },
    {
      title: "Technical & Tools",
      icon: FileSpreadsheet,
      skills: [
        { name: "CMS (Content Management System)", icon: Globe },
        { name: "Website Content Updating", icon: FileText },
        { name: "Data Analysis & Basic Reporting", icon: BarChart3 },
        { name: "Microsoft Office (Excel, Word, PPT)", icon: FileSpreadsheet },
      ],
    },
    {
      title: "Languages",
      icon: Languages,
      skills: [
        { name: "Indonesian: Native", icon: Languages },
        { name: "English: Fluent", icon: Languages },
        { name: "German: Basic (A1)", icon: Languages },
        { name: "Spanish: Basic (A1)", icon: Languages },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Professional Skill Set
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 md:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground group"
                  >
                    <skill.icon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                    <span className="group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
