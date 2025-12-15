import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Music, Plane, UtensilsCrossed } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const quickFacts = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Communication Student at President University",
    },
    {
      icon: Music,
      label: "Passion",
      value: "Music Composition, Travelling & Culinary Arts",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              The Person Behind the Work
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a creative individual passionate about exploring new things and generating unique ideas.
              With a strong background in Communication, I combine my interests in content creation, music,
              and events into professional execution. I thrive in dynamic environments—whether managing a
              business, organizing large-scale events, or executing digital campaigns.
            </p>

            {/* Quick Facts */}
            <div className="space-y-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card-hover p-4 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {fact.label}
                    </span>
                    <p className="text-foreground font-medium">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Abstract decorative elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/20" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden border border-border/50 shadow-2xl group">
                <img
                  src="/images/about/profile.png"
                  alt="Rima Melati"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-card shadow-lg border border-border/50 flex items-center justify-center"
              >
                <Plane className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-card shadow-lg border border-border/50 flex items-center justify-center"
              >
                <UtensilsCrossed className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
