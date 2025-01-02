import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-tl from-[#1E1B2E] via-[#272341] to-[#1E1B2E]">
      {/* Main Content */}
      <div className="container mx-auto  relative px-40 py-80 z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Profile Section */}
          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mb-8 md:mb-12"
>
  <div className="flex justify-center mb-6"> {/* Center the container */}
    <div className="relative" style={{ width: '120px', height: '120px' }}> {/* Directly setting size */}
      <img
        src="/Screenshot 2024-05-01 194256.png"
        alt="Profile of Aditya Kumar Jha"
        className="rounded-full w-full h-full object-cover border-4 border-primary/50 shadow-lg"
      />
      <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl" />
    </div>
  </div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-white/80 text-base md:text-lg lg:text-xl tracking-wide leading-relaxed"
  >
    Hello! I am{" "}
    <span className="font-bold text-primary relative inline-block">
      Aditya Kumar Jha
      <motion.span
        className="absolute bottom-40 left-40 w-full h-0.5 bg-primary"
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
            className="mb-8 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
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
              {" "}
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
              className="text-white/80 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto"
            >
              Because if the cover looks bad, humans are shell-shocked — you shall also run!
            </motion.p>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              YES, I'm an Engineer!
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Currently, a B.Tech student at{" "}
              <motion.span
                className="text-primary font-semibold inline-block transition-transform cursor-pointer"
              >
                Bennett University
              </motion.span>
            </p>
          </motion.div>

          {/* Additional Spacing */}
          <div className="h-[2vh] md:h-[5vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
