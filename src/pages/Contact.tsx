import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Instagram, Github, Mail, Linkedin, ExternalLink, Clock, MapPin } from "lucide-react";

const ContactCard = ({ icon: Icon, title, content, link }: any) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#2A2440] p-6 rounded-xl flex flex-col items-center gap-4 hover:bg-[#2A2440]/80 transition-colors"
  >
    <div className="p-3 bg-primary/20 rounded-full">
      <Icon className="text-primary w-6 h-6" />
    </div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-white/60 text-center">{content}</p>
  </motion.a>
);

const SocialLink = ({ icon: Icon, href, label }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="group relative"
  >
    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary/20 text-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
    <div className="p-3 bg-[#2A2440] rounded-xl hover:bg-primary/20 transition-colors group-hover:ring-2 ring-primary/30">
      <Icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
    </div>
  </motion.a>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Me",
      content: "adityaceo007@gmail.com",
      link: "mailto:adityaceo007@gmail.com"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Usually within 24 hours",
      link: "#"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Greater Noida, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adityathiside/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/abhi__kashyap007/",
      label: "Instagram"
    },
    {
      icon: Github,
      href: "https://github.com/Aditya-myst",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:adityaceo007@gmail.com",
      label: "Email"
    }
  ];

  return (
    <main className="min-h-screen bg-[#1E1B2E] pt-24 pb-16">
      <Navbar />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Connect & Create
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                I'm passionate about turning ideas into reality through code and design. 
                Currently seeking opportunities to join a dynamic team where I can contribute 
                to meaningful projects while continuing to grow and learn.
              </p>
            </motion.div>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#2A2440] p-8 rounded-xl mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What I'm Looking For
            </h2>
            <div className="space-y-4 text-white/60">
              <p>
                🚀 Opportunities to work on challenging projects that push boundaries
              </p>
              <p>
                🤝 Collaboration with cross-functional teams passionate about creating impact
              </p>
              <p>
                📚 Continuous learning and growth in full-stack development and UI/UX design
              </p>
              <p>
                💡 Chances to contribute to innovative solutions that improve user experiences
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Connect With Me
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;