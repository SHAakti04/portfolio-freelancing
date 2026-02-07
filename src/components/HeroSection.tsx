// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import profileImg from "@/assets/profile-img.png";
// // import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

// // // Custom LeetCode Icon to match Feather style
// // const LeetCodeIcon = () => (
// //   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// //     <path d="M13.48 2.82a1.13 1.13 0 010 1.6l-6.6 6.6a1.13 1.13 0 000 1.6l6.6 6.6a1.13 1.13 0 11-1.6 1.6l-6.6-6.6a3.39 3.39 0 010-4.8l6.6-6.6a1.13 1.13 0 011.6 0z" />
// //   </svg>
// // );

// // const HeroSection = () => {
// //   const socialLinks = [
// //     { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/shaktikumar-prajapati-223585286/", label: "LinkedIn" },
// //     { icon: <FiGithub />, url: "https://github.com/SHAakti04", label: "GitHub" },
// //     { icon: <LeetCodeIcon />, url: "https://leetcode.com/u/Shakti04/", label: "LeetCode" },
// //   ];

// //   return (
// //     <section
// //       id="home"
// //       className="relative h-auto lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 lg:pt-0 lg:pb-0"
// //     >
// //       {/* Background Elements */}
// //       <div className="blob-gradient absolute inset-0 opacity-60" />
// //       <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 blur-[120px] rounded-full" />

// //       <div className="container relative z-10 px-4 sm:px-6">
// //         {/* Gap reduced from 12 to 6 for mobile stack */}
// //         <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

// //           {/* 1. IMAGE - Controlled margin-bottom for mobile */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1, ease: "circOut" }}
// //             className="flex-1 flex justify-center order-1 lg:order-2 mb-2 lg:mb-0"
// //           >
// //             <div className="relative group">
// //               <div className="absolute inset-0 bg-primary/30 blur-[60px] lg:blur-[80px] rounded-full animate-pulse" />

// //               <div className="relative overflow-hidden rounded-b-full border-b-4 border-primary/30 shadow-2xl mx-auto">
// //                 <img
// //                   src={profileImg}
// //                   alt="Shaktikumar Prajapati"
// //                   className="w-48 sm:w-64 lg:w-[320px] xl:w-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
// //                   style={{
// //                     maskImage: "linear-gradient(to bottom, black 90%, transparent)",
// //                     WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent)",
// //                   }}
// //                 />
// //               </div>

// //               <motion.div
// //                 animate={{ rotate: 360 }}
// //                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
// //                 className="absolute -bottom-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 border-2 border-dashed border-primary/50 rounded-full"
// //               />
// //             </div>
// //           </motion.div>

// //           {/* 2. NAME/TITLE CONTENT - Reduced margin-bottom */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             className="flex-1 text-center lg:text-left order-2 lg:order-1"
// //           >
// //             <span className="text-primary text-sm sm:text-base font-medium tracking-wider mb-1 lg:mb-2 block">Hello, I'm</span>
// //             <h1 className="font-display text-3xl sm:text-5xl xl:text-7xl font-bold leading-tight mb-2 lg:mb-4">
// //               Shakti <br className="hidden sm:block" />
// //               <span className="text-white/90">Prajapati</span>
// //             </h1>
// //             <p className="text-muted-foreground text-xs sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-4 lg:mb-8">
// //               Full Stack Developer | Java & MERN Stack Specialist crafting seamless digital experiences.
// //             </p>

// //             <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
// //               {socialLinks.map((social, i) => (
// //                 <motion.a
// //                   key={social.label}
// //                   href={social.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   whileHover={{ scale: 1.1, translateY: -5 }}
// //                   whileTap={{ scale: 0.9 }}
// //                   initial={{ opacity: 0, y: 15 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.2 + i * 0.1 }}
// //                   className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-muted-foreground hover:text-primary hover:border-primary transition-colors shadow-lg backdrop-blur-sm"
// //                 >
// //                   {social.icon}
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* 3. SUB-TITLE & RESUME - Reduced gap */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
// //             className="flex-1 text-center lg:text-right order-3 mt-2 lg:mt-0"
// //           >
// //             <span className="text-primary text-sm lg:text-lg font-medium tracking-wider mb-1 lg:mb-2 block italic">
// //               Logical Developer
// //             </span>

// //             <h2 className="font-display text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 lg:mb-8">
// //               <span className="bg-gradient-to-l from-primary via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
// //                 Developer
// //               </span>
// //               <br className="hidden sm:block" />
// //               <span className="text-white/80">& Engineer</span>
// //             </h2>

// //             <div className="flex justify-center lg:justify-end">
// //               <motion.a
// //                 href="/Shaktikumar_A_Prajapati_Resume.pdf"
// //                 download
// //                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 py-3 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-xl overflow-hidden"
// //               >
// //                 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
// //                 <FiDownload className="text-base lg:text-xl group-hover:bounce" />
// //                 <span className="relative text-xs lg:text-base">Download Resume</span>
// //               </motion.a>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import profileImg from "@/assets/profile-img.png";
// import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

// /* ---------- Custom LeetCode Icon ---------- */
// const LeetCodeIcon = () => (
//   <svg
//     className="w-5 h-5"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M13.48 2.82a1.13 1.13 0 010 1.6l-6.6 6.6a1.13 1.13 0 000 1.6l6.6 6.6a1.13 1.13 0 11-1.6 1.6l-6.6-6.6a3.39 3.39 0 010-4.8l6.6-6.6a1.13 1.13 0 011.6 0z" />
//   </svg>
// );

// const roles = [
//   "Full Stack Developer",
//   "Java & MERN Engineer",
//   "Backend Architect",
//   "Problem Solver",
// ];

// const HeroSection = () => {
//   const [roleIndex, setRoleIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(
//       () => setRoleIndex((i) => (i + 1) % roles.length),
//       2200,
//     );
//     return () => clearInterval(id);
//   }, []);

//   const socialLinks = [
//     {
//       icon: <FiLinkedin />,
//       url: "https://www.linkedin.com/in/shaktikumar-prajapati-223585286/",
//       label: "LinkedIn",
//     },
//     {
//       icon: <FiGithub />,
//       url: "https://github.com/SHAakti04",
//       label: "GitHub",
//     },
//     {
//       icon: <LeetCodeIcon />,
//       url: "https://leetcode.com/u/Shakti04/",
//       label: "LeetCode",
//     },
//   ];

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* ---------- Background ---------- */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4f46e520,transparent_60%)]" />
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-400/20 blur-[140px] rounded-full" />

//       <div className="container relative z-10 px-4">
//         <div className="grid lg:grid-cols-3 gap-8 items-center">
//           {/* ---------- LEFT: INTRO ---------- */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <span className="text-primary text-sm tracking-widest uppercase">
//               Hello, I’m
//             </span>

//             <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold leading-tight mt-2 mb-4">
//               Shakti
//               <br />
//               <span className="bg-gradient-to-r from-indigo-400 via-primary to-cyan-400 bg-clip-text text-transparent animate-gradient">
//                 Prajapati
//               </span>
//             </h1>

//             <motion.p
//               key={roleIndex}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0"
//             >
//               {roles[roleIndex]}
//             </motion.p>

//             {/* Socials */}
//             <div className="flex justify-center lg:justify-start gap-4 mt-6">
//               {socialLinks.map((s, i) => (
//                 <motion.a
//                   key={s.label}
//                   href={s.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ y: -6, scale: 1.12 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + i * 0.1 }}
//                   className="w-11 h-11 flex items-center justify-center rounded-full
//                              border border-primary/20 bg-white/5 backdrop-blur-md
//                              text-muted-foreground hover:text-primary hover:border-primary
//                              shadow-lg"
//                 >
//                   {s.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* ---------- CENTER: IMAGE ---------- */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, ease: "circOut" }}
//             className="flex justify-center lg:ml-16 xl:ml-24"
//           >
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-cyan-400/40 blur-[90px] rounded-full" />

//               <div className="relative overflow-hidden rounded-full border border-primary/30 shadow-2xl">
//                 <img
//                   src={profileImg}
//                   alt="Shaktikumar Prajapati"
//                   className="w-52 sm:w-64 lg:w-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
//                   style={{
//                     maskImage:
//                       "linear-gradient(to bottom, black 88%, transparent)",
//                     WebkitMaskImage:
//                       "linear-gradient(to bottom, black 88%, transparent)",
//                   }}
//                 />
//               </div>

//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 14,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute -bottom-4 -right-4 w-10 h-10 border-2 border-dashed border-primary/50 rounded-full"
//               />
//             </div>
//           </motion.div>

//           {/* ---------- RIGHT: CTA ---------- */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
//             className="text-center lg:text-right"
//           >
//             <span className="text-primary italic tracking-wide">
//               Logical • Scalable • Clean
//             </span>

//             <h2 className="font-display text-2xl sm:text-4xl xl:text-5xl font-bold mt-3 mb-6">
//               <span className="bg-gradient-to-l from-primary via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//                 Developer
//               </span>
//               <br />
//               <span className="text-white/80">& Engineer</span>
//             </h2>

//             <motion.a
//               href="/Shaktikumar_A_Prajapati_Resume.pdf"
//               download
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 30px rgba(99,102,241,0.45)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl
//                          bg-gradient-to-r from-indigo-600 to-cyan-500
//                          text-white font-bold shadow-xl overflow-hidden"
//             >
//               <FiDownload className="text-lg" />
//               Download Resume
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>

//       {/* ---------- Subtle Scroll Hint ---------- */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest"
//       >
//         SCROLL
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
// // 
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile-img.png";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

/* ---------- Custom LeetCode Icon ---------- */
const LeetCodeIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13.48 2.82a1.13 1.13 0 010 1.6l-6.6 6.6a1.13 1.13 0 000 1.6l6.6 6.6a1.13 1.13 0 11-1.6 1.6l-6.6-6.6a3.39 3.39 0 010-4.8l6.6-6.6a1.13 1.13 0 011.6 0z" />
  </svg>
);

const roles = [
  "Full Stack Developer",
  "Java & MERN Engineer",
  "Backend Architect",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  // const socialLinks = [
  //   {
  //     icon: <FiLinkedin />,
  //     url: "https://www.linkedin.com/in/shaktikumar-prajapati-223585286/",
  //     label: "LinkedIn",
  //   },
  //   {
  //     icon: <FiGithub />,
  //     url: "https://github.com/SHAakti04",
  //     label: "GitHub",
  //   },
  //   {
  //     icon: <LeetCodeIcon />,
  //     url: "https://leetcode.com/u/Shakti04/",
  //     label: "LeetCode",
  //   },
  // ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center justify-center
        overflow-hidden

        /* 🔑 FIX: HEADER OFFSET */
        pt-16            /* mobile = header height */
        sm:pt-20
        lg:pt-24
      "
    >
      {/* ---------- Background ---------- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4f46e520,transparent_60%)]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-400/20 blur-[140px] rounded-full" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* ---------- LEFT ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="text-primary text-sm tracking-widest uppercase">
              Hello, I’m
            </span>

            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold leading-tight mt-2 mb-4">
              Shakti
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-primary to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Prajapati
              </span>
            </h1>

            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0"
            >
              {roles[roleIndex]}
            </motion.p>

            {/* Socials */}
            {/* <div className="flex justify-center lg:justify-start gap-4 mt-6">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full
                    border border-primary/20 bg-white/5 backdrop-blur-md
                    text-muted-foreground hover:text-primary hover:border-primary
                    shadow-lg"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* ---------- CENTER IMAGE ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex justify-center lg:ml-16 xl:ml-24"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-cyan-400/40 blur-[90px] rounded-full" />

              <div className="relative overflow-hidden rounded-full border border-primary/30 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Shaktikumar Prajapati"
                  className="w-52 sm:w-64 lg:w-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 88%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 88%, transparent)",
                  }}
                />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -right-4 w-10 h-10 border-2 border-dashed border-primary/50 rounded-full"
              />
            </div>
          </motion.div>

          {/* ---------- RIGHT CTA ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <span className="text-primary italic tracking-wide">
              Logical • Scalable • Clean
            </span>

            <h2 className="font-display text-2xl sm:text-4xl xl:text-5xl font-bold mt-3 mb-6">
              <span className="bg-gradient-to-l from-primary via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
              <br />
              <span className="text-white/80">& Engineer</span>
            </h2>

            <motion.a
              href="/Shaktikumar_A_Prajapati_Resume.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(99,102,241,0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl
                bg-gradient-to-r from-indigo-600 to-cyan-500
                text-white font-bold shadow-xl overflow-hidden"
            >
              <FiDownload className="text-lg" />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ---------- Scroll Hint ---------- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest"
      >
        SCROLL
      </motion.div>
    </section>
  );
};

export default HeroSection;
