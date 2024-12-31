import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
const WorkCard = ({ icon, title, description, }) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileHover: { scale: 1.05 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "bg-[#2A2440] rounded-xl p-6 flex items-start gap-4 hover:bg-[#2A2440]/80 transition-colors shadow-lg hover:shadow-primary/50", children: [_jsx("img", { src: icon, alt: title, className: "w-12 h-12 object-contain" }), _jsxs("div", { children: [_jsx("h3", { className: "text-white text-xl font-semibold mb-2", children: title }), _jsx("p", { className: "text-white/60 mb-4", children: description }), _jsx("button", { className: "mt-4 text-primary hover:text-primary/80 transition-colors", children: "Learn more" })] })] }));
const Work = () => {
    const workExperience = [
        {
            icon: "/Screenshot 2024-12-26 123535.png",
            title: "Backend Developer",
            description: "Led development of cross-platform mobile applications using React Native and TypeScript.",
        },
        {
            icon: "/Screenshot 2024-12-26 123749.png",
            title: "UI/UX Designer",
            description: "Designed and implemented user interfaces for web and mobile applications.",
        },
        {
            icon: "/Screenshot 2024-12-26 123311.png",
            title: "Frontend Developer",
            description: "Built responsive web applications using React and modern web technologies.",
        },
        {
            icon: "/Screenshot 2024-12-26 123127.png",
            title: "Software Developer",
            description: "Developed and maintained full-stack applications using Node.js and React.",
        },
    ];
    return (_jsxs("main", { className: "min-h-screen bg-[#1E1B2E] pt-24", children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto px-4", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-4xl font-bold text-white mb-12 text-center", children: "Work Experience" }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { staggerChildren: 0.2 }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: workExperience.map((experience) => (_jsx(WorkCard, { icon: experience.icon, title: experience.title, description: experience.description }, experience.title))) })] })] }));
};
export default Work;
