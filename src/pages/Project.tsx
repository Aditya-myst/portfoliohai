import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, tags, link }: Project) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileHover={{ scale: 1.02 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="group bg-[#2A2440] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/50 hover:bg-[#2A2440]/90 transition-all relative"
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <ArrowUpRight className="text-white w-8 h-8" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
        <p className="text-white/60 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  </motion.div>
);

const Projects = () => {
  const projectList: Project[] = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Framer Motion.",
      image: "/Screenshot 2024-12-26 123938.png",
      tags: ["React", "TypeScript", "Framer Motion"],
      link: "./Screenshot 2024-12-31 073037.png",
    },
    {
      title: "Saveurr(In Progress)",
      description: " A sleek and user-friendly landing page for a restaurant app, showcasing delicious cuisines, seamless online reservations, and exclusive deals.",
      image: "/Screenshot 2024-12-29 081537.png",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/Aditya-myst/saveurr",
    },
    {
      title: "A gym site(In progress)"
      description: "A modern landing page designed for a local gym, showcasing state-of-the-art facilities, personalized training programs, and a vibrant fitness community.",
      image: "/Screenshot 2024-12-29 081138.png",
      tags: ["React.js", "Tailwind CSS", "..."],
      link: "https://github.com/Aditya-myst/gymkhana",
    },
    {
      title: "CareerDIVE",
      description: "A platform designed to bridge the gap between students and the professional world, offering a wealth of resources to help individuals navigate their career paths.",
      image: "/Screenshot 2024-12-29 075822.png",
      tags: ["Typescript", "Tailwind CSS"],
      link: "https://stunning-scone-1c4128.netlify.app/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1E1B2E] pt-24">
      <Navbar />
      <div className="container mx-auto px-4 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projectList.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Projects;
