import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({
    x: -100,
    y: -100,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        h-screen
        overflow-hidden
        bg-black
        text-[#E8DFD8]
        font-sans
        selection:bg-[#cbb59d]
        selection:text-black
        cursor-none
      "
    >

      {/* =====================================================
          CUSTOM CURSOR
      ===================================================== */}

      {cursorPos.x >= 0 && (
        <motion.div
          className="
            fixed
            top-0
            left-0
            pointer-events-none
            z-50
            rounded-full
            border
            border-[#D4AF37]/40
            flex
            items-center
            justify-center
          "
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(212, 175, 55, 0.1)'
              : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 350,
            mass: 0.5,
          }}
        />
      )}

      {/* =====================================================
          CINEMATIC VIDEO BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          overflow-hidden
          pointer-events-none
          bg-black
          flex
          items-center
          justify-end
        "
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="
            absolute
            right-0
            top-0
            h-full
            w-auto
            max-w-none
            object-contain
            transform-gpu
            will-change-transform
          "
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* =================================================
            DARK LEFT GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[65%]
            bg-gradient-to-r
            from-black
            via-black/90
            to-transparent
          "
        />

        {/* =================================================
            TOP DARK GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-black/60
            to-transparent
          "
        />

        {/* =================================================
            BOTTOM GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />

        {/* =================================================
            RIGHT SIDE DARK GRADIENT
        ================================================= */}

        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[20%]
            bg-gradient-to-l
            from-black/20
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-between
          h-full
          w-full
          px-6
          sm:px-12
          lg:px-16
          pt-6
          pb-8
          pointer-events-none
        "
      >

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <header
          className="
            relative
            flex
            items-center
            justify-between
            w-full
            pointer-events-auto
          "
        >

          {/* LOGO */}

          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[#EAD8C7]
              hover:opacity-75
              transition-opacity
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            SUPRIYA.
          </a>

          {/* NAVIGATION */}

          <nav
            className="
              hidden
              md:flex
              items-center
              space-x-8
              lg:space-x-10
              text-[11px]
              tracking-[0.28em]
              font-light
              uppercase
              text-[#C4B5A5]
              absolute
              left-1/2
              -translate-x-1/2
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
                  relative
                  group
                  py-1
                  transition-colors
                  duration-300
                  hover:text-[#FFF5EB]
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[1px]
                    bg-[#D4AF37]/50
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* LET'S TALK */}

          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              group
              flex
              items-center
              space-x-2
              text-[11px]
              tracking-[0.24em]
              font-light
              uppercase
              py-2
              px-4
              border
              border-[#8C6D4F]/50
              hover:border-[#D4AF37]
              text-[#EAD8C7]
              transition-all
              duration-300
              backdrop-blur-sm
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>LET'S TALK</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              ↗
            </span>
          </a>

        </header>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            w-full
            pt-4
            pb-2
            my-auto
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              lg:max-w-[37rem]
              xl:max-w-[40rem]
              pointer-events-auto
              z-20
            "
          >

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                relative
                mb-4
                select-none
              "
            >
              <h1
                className="
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[7.2rem]
                  xl:text-[7.8rem]
                  tracking-tight
                  uppercase
                  leading-[0.83]
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#FFFFFF]
                    via-[#D5CBC0]
                    to-[#605448]
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  "
                >
                  I BUILD
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#F7E7C4]
                    via-[#C99E5D]
                    to-[#543B1A]
                    drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]
                  "
                >
                  INTELLIGENT
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#DFBE8A]
                    via-[#9B7640]
                    to-[#342410]
                    drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]
                  "
                >
                  EXPERIENCES
                </span>

              </h1>
            </motion.div>

            {/* =================================================
                TECHNOLOGIES
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-4"
            >
              <p
                className="
                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  font-normal
                  tracking-[0.28em]
                  uppercase
                  text-[#C4B29E]
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                AI / ML

                <span className="text-[#8C6D4F] mx-2">
                  •
                </span>

                PYTHON

                <span className="text-[#8C6D4F] mx-2">
                  •
                </span>

                COMPUTER VISION

                <span className="text-[#8C6D4F] mx-2">
                  •
                </span>

                DATA SCIENCE
              </p>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                text-xs
                sm:text-sm
                md:text-[13.5px]
                font-light
                text-[#A8988B]
                leading-[1.8]
                tracking-wide
                max-w-lg
                mb-6
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                I build intelligent software that turns ideas into
                meaningful digital experiences.
                <br />
                From artificial intelligence and computer vision to
                full-stack applications, I turn code into impact.
              </p>
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-row
                items-center
                gap-4
                sm:gap-6
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >

              {/* EXPLORE MY WORK */}

              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  relative
                  inline-flex
                  items-center
                  space-x-3
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]
                  bg-[#120F0C]/80
                  hover:border-[#D4AF37]
                  text-[#EAD8C7]
                  hover:text-[#FFF5EB]
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(212,175,55,0.18)]
                "
              >
                <span>
                  EXPLORE MY WORK
                </span>

                <span>
                  ↗
                </span>

              </motion.a>

              {/* DOWNLOAD RESUME */}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  relative
                  inline-flex
                  items-center
                  space-x-2
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#8C6D4F]/40
                  hover:border-[#8C6D4F]
                  text-[#BFA895]
                  hover:text-[#EAD8C7]
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                "
              >
                <span>
                  DOWNLOAD RESUME
                </span>

                <span>
                  ↓
                </span>

              </motion.a>

            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT QUOTE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              hidden
              lg:flex
              flex-col
              items-start
              pointer-events-auto
              pr-24
              xl:pr-36
              mr-4
              z-20
              select-none
            "
          >

            <span
              className="
                text-xl
                text-[#C99E5D]
                leading-none
                font-serif
                mb-2
              "
            >
              “
            </span>

            <div
              className="
                text-[9.5px]
                font-medium
                tracking-[0.24em]
                uppercase
                text-[#E0D3C5]
                space-y-1
                mb-3
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                CODE WITH PURPOSE.
              </p>

              <p>
                BUILD WITH INTELLIGENCE.
              </p>
            </div>

            <div
              className="
                w-28
                h-[1px]
                bg-gradient-to-r
                from-[#D4AF37]
                via-[#E8D7C5]/70
                to-transparent
                shadow-[0_0_8px_rgba(212,175,55,0.4)]
                mb-2
              "
            />

            <div
              className="
                text-[2.2rem]
                text-[#D8AB64]
                font-normal
                leading-none
              "
              style={{
                fontFamily:
                  "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Supriya
            </div>

          </motion.div>

        </div>

        <div className="h-2" />

      </div>

    </section>
  );
};

export default HeroSection;