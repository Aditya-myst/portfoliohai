import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const WorkCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileHover={{ scale: 1.05 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-[#2A2440] rounded-xl p-6 flex items-start gap-4 hover:bg-[#2A2440]/80 transition-colors shadow-lg hover:shadow-primary/50"
  >
    <img src={icon} alt={title} className="w-12 h-12 object-contain" />
    <div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 mb-4">{description}</p>
      <button className="mt-4 text-primary hover:text-primary/80 transition-colors">
        Learn more
      </button>
    </div>
  </motion.div>
);

const Work = () => {
  const workExperience = [
    {
      icon: "/Screenshot 2024-12-26 123535.png",
      title: "Backend Developer",
      description:
        "Led development of cross-platform mobile applications using React Native and TypeScript.",
    },
    {
      icon: "/Screenshot 2024-12-26 123749.png",
      title: "UI/UX Designer",
      description:
        "Designed and implemented user interfaces for web and mobile applications.",
    },
    {
      icon: "/Screenshot 2024-12-26 123311.png",
      title: "Frontend Developer",
      description:
        "Built responsive web applications using React and modern web technologies.",
    },
    {
      icon: "/Screenshot 2024-12-26 123127.png",
      title: "Software Developer",
      description:
        "Developed and maintained full-stack applications using Node.js and React.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1E1B2E] pt-24">
      <Navbar />
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Work Experience
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {workExperience.map((experience) => (
            <WorkCard
              key={experience.title}
              icon={experience.icon}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Work;
