import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // Increase the floating element size
  const floatingElements = Array.from({ length: 10 }).map((_, i) => ({
    size: Math.random() * 20 + 20, // Increase the size range (e.g., 20 to 40)
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
    q: Math.random() * 100,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-tl from-[#1E1B2E] via-[#272341] to-[#1E1B2E]">
      {/* Animated Background Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10"
          style={{ width: el.size, height: el.size, left: `${el.x}%`, top: `${el.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.8] }}
          transition={{ duration: el.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main Content Container */}
      <motion.div
        ref={containerRef}
        style={{ y }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Profile Section */}
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >

          <div className="relative w-36 h-36 mx-auto mb-6 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <img
                src="/Screenshot 2024-05-01 194256.png"
                alt="Profile of Aditya Kumar Jha"
                className="rounded-full w-50 h-full object-cover border-4 border-primary/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 backdrop-blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
            <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl scale-110 animate-pulse" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg tracking-wide leading-relaxed"
          >
            Hello! I am{" "}
            <span className="font-bold text-primary relative inline-block">
              Aditya Kumar Jha
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.p>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white inline-block"
            >
              Judges a book
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-white inline-block"
            >
              by its
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text inline-block"
            >
              Cover
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/80 text-base md:text-lg mt-4"
          >
            Because if the cover looks bad, humans are shell-shocked — you shall also run!
          </motion.p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            YES I'm an Engineer!
          </h2>
          <div ><br /></div>
          <p className="text-white/80 text-lg">
  Currently, B.Tech student at{" "}
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="text-primary font-semibold inline-block  transition-transform"
  >
    Bennett University
  </motion.span>
</p>

        </motion.div>
      </motion.div>

      {/* Spacer Section for Smooth Scrolling */}
      <div className="h-[1vh]"></div>
    </div>
  );
};

export default Hero;
