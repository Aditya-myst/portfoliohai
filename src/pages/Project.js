import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const ProjectCard = ({ title, description, image, tags, link }) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileHover: { scale: 1.02 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "group bg-[#2A2440] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/50 hover:bg-[#2A2440]/90 transition-all relative", children: _jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: image, alt: title, className: "w-full h-48 object-cover transition-transform group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: _jsx(ArrowUpRight, { className: "text-white w-8 h-8" }) })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "text-white text-xl font-semibold", children: title }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-primary", children: _jsx(ArrowUpRight, { className: "w-5 h-5" }) })] }), _jsx("p", { className: "text-white/60 mb-4 line-clamp-2", children: description }), _jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => (_jsx("span", { className: "inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors", children: tag }, tag))) })] })] }) }));
const Projects = () => {
    const projectList = [
        {
            title: "Portfolio Website",
            description: "A modern portfolio website built with React and Framer Motion.",
            image: "/Screenshot 2024-12-26 123938.png",
            tags: ["React", "TypeScript", "Framer Motion"],
            link: "./Screenshot 2024-12-31 073037.png",
        },
        {
            title: "CareerDIVE",
            description: "a platform designed to bridge the gap between students and the professional world, offering a wealth of resources to help individuals navigate their career paths.",
            image: "./Screenshot 2024-12-31 100723.png",
            tags: ["React", "TypeScript", "Framer Motion"],
            link: "https://glowing-liger-24bb0a.netlify.app/",
        },
        {
            title: "Saveurr(In progress)",
            description: " A sleek and user-friendly landing page for a restaurant app, showcasing delicious cuisines, seamless online reservations, and exclusive deals.",
            image: "/Screenshot 2024-12-29 081537.png",
            tags: ["Node.js", "Express", "MongoDB"],
            link: "https://github.com/Aditya-myst/saveurr",
        },
        {
            title: "A gym Site(In progress)",
            description: "A modern landing page designed for a local gym, showcasing state-of-the-art facilities, personalized training programs, and a vibrant fitness community.",
            image: "/Screenshot 2024-12-29 081138.png",
            tags: ["React.js", "Tailwind CSS", "..."],
            link: "https://github.com/Aditya-myst/gymkhana",
        },
    ];
    return (_jsxs("main", { className: "min-h-screen bg-[#1E1B2E] pt-24", children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto px-4 pb-16", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-4xl font-bold text-white mb-12 text-center", children: "Featured Projects" }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { staggerChildren: 0.2 }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: projectList.map((project) => (_jsx(ProjectCard, { ...project }, project.title))) })] })] }));
};
export default Projects;
