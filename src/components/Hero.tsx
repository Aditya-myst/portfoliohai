import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse movement and cursor trail
  useEffect(() => {
    let timeoutId;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: clientX, y: clientY, timestamp: Date.now() }];
        return newTrail.slice(-15); // Keep last 15 positions for trail effect
      });

      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set new timeout to clear trail after 100ms of no movement
      timeoutId = setTimeout(() => {
        setCursorTrail([]);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Dynamic floating elements based on screen size
  const floatingElements = Array.from({ length: isMobile ? 6 : 10 }).map((_, i) => ({
    size: isMobile ? Math.random() * 15 + 10 : Math.random() * 20 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-tl from-[#1E1B2E] via-[#272341] to-[#1E1B2E]">
      {/* Cursor Trail Effect */}
      {cursorTrail.map((position, index) => (
        <motion.div
          key={`trail-${index}`}
          className="fixed w-4 h-4 rounded-full pointer-events-none mix-blend-screen"
          style={{
            left: position.x - 8,
            top: position.y - 8,
            background: `radial-gradient(circle, rgba(var(--primary-rgb), 0.3) 0%, rgba(var(--primary-rgb), 0) 70%)`,
            opacity: (index + 1) / cursorTrail.length,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Interactive Light Orb following cursor */}
      <motion.div
        className="fixed w-64 h-64 pointer-events-none mix-blend-screen"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{
          background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--primary-rgb), 0) 70%)',
          zIndex: 20,
        }}
      />

      {/* Background Elements that react to cursor */}
      <div className="absolute inset-0 flex items-center justify-center">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 backdrop-blur-sm"
            style={{ 
              width: el.size, 
              height: el.size, 
              left: `${el.x}%`, 
              top: `${el.y}%`,
              filter: 'blur(1px)'
            }}
            animate={{ 
              y: [0, -30, 0], 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
              x: mousePosition.x ? (el.x - (mousePosition.x / window.innerWidth) * 10) : el.x,
            }}
            transition={{ 
              duration: el.duration, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        ref={containerRef}
        style={{ y }}
        className="container mx-auto px-4 py-8 md:py-16 relative z-10"
      >
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <img
                src="/Screenshot 2024-05-01 194256.png"
                alt="Profile of Aditya Kumar Jha"
                className="rounded-full w-full h-full object-cover border-4 border-primary/50 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 backdrop-blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
            <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl scale-110 animate-pulse" />
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
            YES I'm an Engineer!
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Currently, B.Tech student at{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-primary font-semibold inline-block transition-transform cursor-pointer"
            >
              Bennett University
            </motion.span>
          </p>
        </motion.div>
      </motion.div>

      <div className="h-[2vh] md:h-[5vh]"></div>
    </div>
  );
};

export default Hero;