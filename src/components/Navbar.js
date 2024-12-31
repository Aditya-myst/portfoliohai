import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        { path: "/work", label: "Work" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];
    const NavLink = ({ path, label }) => {
        const isActive = location.pathname === path;
        return (_jsxs(Link, { to: path, className: "relative group", children: [_jsx("span", { className: `text-lg font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-white group-hover:text-primary"}`, children: label }), isActive && (_jsx(motion.div, { layoutId: "underline", className: "absolute left-0 right-0 h-0.5 bg-primary bottom-0", initial: false })), _jsx("div", { className: "absolute left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bottom-0" })] }));
    };
    return (_jsx(motion.nav, { initial: { y: -100 }, animate: { y: 0 }, className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "py-4 bg-[#1E1B2E]/95 backdrop-blur-lg shadow-lg"
            : "py-6 bg-[#1E1B2E]/80 backdrop-blur-sm"}`, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Link, { to: "/", children: _jsxs(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "relative", children: [_jsx("span", { className: "text-3xl font-bold text-white", children: "AJ" }), _jsx(motion.div, { className: "absolute -inset-1 bg-primary/20 rounded-lg -z-10", initial: { opacity: 0 }, whileHover: { opacity: 1 } })] }) }), _jsx("div", { className: "hidden md:flex gap-12", children: navLinks.map((link) => (_jsx(NavLink, { ...link }, link.path))) }), _jsx(motion.button, { whileTap: { scale: 0.9 }, className: "md:hidden text-white p-2", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), _jsx(motion.div, { initial: false, animate: {
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0,
                    }, className: "md:hidden overflow-hidden", children: _jsx("div", { className: "flex flex-col gap-4 py-4", children: navLinks.map((link) => (_jsx(Link, { to: link.path, onClick: () => setIsMenuOpen(false), className: `text-lg ${location.pathname === link.path
                                ? "text-primary"
                                : "text-white"} transition-colors`, children: link.label }, link.path))) }) })] }) }));
};
export default Navbar;
