import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rimamelatiapr@gmail.com",
      href: "mailto:rimamelatiapr@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0811-4630-877",
      href: "tel:08114630877",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "0852-4140-5118",
      href: "https://wa.me/6285241405118",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Makassar, Indonesia",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Let's Collaborate!
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Open for opportunities in Marketing, Event Management, and Creative Projects.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card-hover p-6 text-center block h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground block mb-1">
                    {info.label}
                  </span>
                  <span className="text-foreground font-medium">{info.value}</span>
                </a>
              ) : (
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground block mb-1">
                    {info.label}
                  </span>
                  <span className="text-foreground font-medium">{info.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:rimamelatiapr@gmail.com">
              <Send className="w-5 h-5 mr-2" />
              Send Me a Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
