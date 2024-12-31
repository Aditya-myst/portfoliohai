import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Instagram, Github, Mail, Linkedin, Clock, MapPin } from "lucide-react";
const ContactCard = ({ icon: Icon, title, content, link }) => (_jsxs(motion.a, { href: link, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "bg-[#2A2440] p-6 rounded-xl flex flex-col items-center gap-4 hover:bg-[#2A2440]/80 transition-colors", children: [_jsx("div", { className: "p-3 bg-primary/20 rounded-full", children: _jsx(Icon, { className: "text-primary w-6 h-6" }) }), _jsx("h3", { className: "text-white font-semibold", children: title }), _jsx("p", { className: "text-white/60 text-center", children: content })] }));
const SocialLink = ({ icon: Icon, href, label }) => (_jsxs(motion.a, { href: href, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.1, y: -2 }, whileTap: { scale: 0.95 }, className: "group relative", children: [_jsx("span", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary/20 text-primary px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity", children: label }), _jsx("div", { className: "p-3 bg-[#2A2440] rounded-xl hover:bg-primary/20 transition-colors group-hover:ring-2 ring-primary/30", children: _jsx(Icon, { className: "w-6 h-6 text-white/60 group-hover:text-primary transition-colors" }) })] }));
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
    return (_jsxs("main", { className: "min-h-screen bg-[#1E1B2E] pt-24 pb-16", children: [_jsx(Navbar, {}), _jsx("div", { className: "container mx-auto px-4", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "max-w-4xl mx-auto", children: [_jsx("div", { className: "text-center mb-16", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Let's Connect & Create" }), _jsx("p", { className: "text-white/60 text-lg max-w-2xl mx-auto leading-relaxed", children: "I'm passionate about turning ideas into reality through code and design. Currently seeking opportunities to join a dynamic team where I can contribute to meaningful projects while continuing to grow and learn." })] }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 }, className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16", children: contactInfo.map((info, index) => (_jsx(ContactCard, { ...info }, index))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6 }, className: "bg-[#2A2440] p-8 rounded-xl mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "What I'm Looking For" }), _jsxs("div", { className: "space-y-4 text-white/60", children: [_jsx("p", { children: "\uD83D\uDE80 Opportunities to work on challenging projects that push boundaries" }), _jsx("p", { children: "\uD83E\uDD1D Collaboration with cross-functional teams passionate about creating impact" }), _jsx("p", { children: "\uD83D\uDCDA Continuous learning and growth in full-stack development and UI/UX design" }), _jsx("p", { children: "\uD83D\uDCA1 Chances to contribute to innovative solutions that improve user experiences" })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.8 }, className: "text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Connect With Me" }), _jsx("div", { className: "flex justify-center gap-6", children: socialLinks.map((social, index) => (_jsx(SocialLink, { ...social }, index))) })] })] }) })] }));
};
export default Contact;
