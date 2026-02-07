// // import { useEffect, useRef, useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // import project1 from "@/assets/project-1.jpg";
// // import project2 from "@/assets/project-2.jpg";
// // import project3 from "@/assets/project-3.jpg";
// // import project4 from "@/assets/project-4.jpg";
// // import project5 from "@/assets/project-5.jpg";

// // const projects = [
// //   {
// //     id: 1,
// //     number: "01",
// //     category: "Web",
// //     title: "Barbershop\nwebsite",
// //     subtitle: "Technologies used",
// //     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
// //     image: project1,
// //   },
// //   {
// //     id: 2,
// //     number: "02",
// //     category: "Design",
// //     title: "Interface Design\nFor Ice Cream Shop",
// //     subtitle: "Technologies used",
// //     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
// //     image: project2,
// //   },
// //   {
// //     id: 3,
// //     number: "03",
// //     category: "Web",
// //     title: "SEO For Coffee\nWebsites",
// //     subtitle: "Technologies used",
// //     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
// //     image: project3,
// //   },
// //   {
// //     id: 4,
// //     number: "04",
// //     category: "Design",
// //     title: "Web Design\nFor Restaurant",
// //     subtitle: "Technologies used",
// //     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
// //     image: project4,
// //   },
// //   {
// //     id: 5,
// //     number: "05",
// //     category: "Web",
// //     title: "Fast Food\nWebsite",
// //     subtitle: "Technologies used",
// //     description: "HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.",
// //     image: project5,
// //   },
// // ];

// // const ProjectsSection = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef<HTMLElement>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section ref={sectionRef} className="section" id="projects">
// //       <div className="container">
// //         {/* Section title */}
// //         <h2
// //           className={`section__title font-display transition-all duration-700 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //           }`}
// //         >
// //           I Make Incredible <br />
// //           <span>Projects</span>
// //         </h2>

// //         {/* Projects Swiper */}
// //         <div
// //           className={`transition-all duration-700 delay-200 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //           }`}
// //         >
// //           <Swiper
// //             modules={[Navigation, Pagination, Autoplay]}
// //             spaceBetween={30}
// //             slidesPerView={1}
// //             navigation
// //             pagination={{ clickable: true }}
// //             autoplay={{ delay: 5000, disableOnInteraction: false }}
// //             breakpoints={{
// //               640: { slidesPerView: 1 },
// //               768: { slidesPerView: 2 },
// //               1024: { slidesPerView: 3 },
// //             }}
// //             className="projects-swiper pb-12"
// //           >
// //             {projects.map((project) => (
// //               <SwiperSlide key={project.id}>
// //                 <ProjectCard project={project} />
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // interface ProjectCardProps {
// //   project: (typeof projects)[0];
// // }

// // const ProjectCard = ({ project }: ProjectCardProps) => {
// //   return (
// //     <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-hover">
// //       {/* Image */}
// //       <div className="relative overflow-hidden aspect-video">
// //         <img
// //           src={project.image}
// //           alt={project.title}
// //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
// //         {/* Number overlay */}
// //         <span className="absolute top-4 left-4 font-display text-4xl font-bold text-primary/30">
// //           {project.number}
// //         </span>
// //       </div>

// //       {/* Content */}
// //       <div className="p-6">
// //         <span className="text-primary text-sm font-medium uppercase tracking-wider">
// //           {project.category}
// //         </span>
// //         <h3 className="font-display text-xl font-semibold mt-2 mb-3 whitespace-pre-line leading-tight">
// //           {project.title}
// //         </h3>
// //         <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
// //           {project.subtitle}
// //         </p>
// //         <p className="text-sm text-muted-foreground">{project.description}</p>
// //       </div>
// //     </article>
// //   );
// // };

// // export default ProjectsSection;
// import { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// /* ===== IMAGE IMPORTS ===== */
// import project1 from "@/assets/project-1.jpg";
// import project2 from "@/assets/project-2.jpg";
// import project3 from "@/assets/project-3.jpg";
// import project4 from "@/assets/project-4.jpg";
// import project5 from "@/assets/project-5.jpg";

// import voiceForVoiceless from "@/assets/Voice-For-Voiceless.png";
// import wanderlust from "@/assets/wonderlust.png";
// import aiChat from "@/assets/ai.png";
// import socialApp from "@/assets/social.jpeg";
// import sabkaVideo from "@/assets/image.png";
// import ticketSystem from "@/assets/ticket.jpeg";
// import keyValue from "@/assets/keyvalue.png";

// /* ================= PROJECT DATA ================= */
// const projects = [
//   {
//     id: 1,
//     number: "01",
//     category: "MERN",
//     title: "Voice For Voiceless",
//     subtitle: "Real-time Animal Rescue Platform",
//     description:
//       "Government-collaborated MERN platform with rescue alerts, secure roles, maps integration and automation.",
//     tech: "React, Node.js, Express, MongoDB, Maps, AI",
//     image: voiceForVoiceless,
//   },
//   {
//     id: 2,
//     number: "02",
//     category: "MERN",
//     title: "Social Media App",
//     subtitle: "Full Stack MERN Application",
//     description:
//       "Social media platform with authentication, posts, likes, comments, follow system and real-time updates.",
//     tech: "React, Node.js, Express, MongoDB, JWT",
//     image: socialApp,
//   },
//   {
//     id: 3,
//     number: "03",
//     category: "MERN",
//     title: "AI Chat App",
//     subtitle: "Real-time AI Conversations",
//     description:
//       "Real-time AI chat system using Groq models for intelligent question-answering.",
//     tech: "MERN, Groq API, LLMs",
//     image: aiChat,
//   },
//   {
//     id: 4,
//     number: "04",
//     category: "MERN",
//     title: "Sabka Video Call",
//     subtitle: "Real-time Video Conferencing",
//     description:
//       "Multi-user video calling platform with rooms, chat and screen sharing.",
//     tech: "MERN, WebRTC, Socket.IO",
//     image: sabkaVideo,
//   },
//   {
//     id: 5,
//     number: "05",
//     category: "Java",
//     title: "Ticketing System",
//     subtitle: "Java Full Stack Application",
//     description:
//       "Enterprise-grade ticket management system with dashboards and role-based access.",
//     tech: "Java, Spring Boot, PostgreSQL",
//     image: ticketSystem,
//   },
//   {
//     id: 6,
//     number: "06",
//     category: "Python",
//     title: "Key-Value Backend",
//     subtitle: "High Performance Backend",
//     description:
//       "Optimized backend with caching and ORM for ultra-fast data access.",
//     tech: "Python, Django ORM, PostgreSQL, Redis",
//     image: keyValue,
//   },
//   {
//     id: 7,
//     number: "07",
//     category: "Backend",
//     title: "RoamPulse",
//     subtitle: "Travel Listing Platform",
//     description:
//       "Dynamic travel listing system with authentication, Cloudinary uploads and filters.",
//     tech: "Node.js, Express, MongoDB, Cloudinary",
//     image: wanderlust,
//   },

//   /* ===== UI / DESIGN PROJECTS ===== */
//   {
//     id: 8,
//     number: "08",
//     category: "Web",
//     title: "Barbershop Website",
//     subtitle: "Responsive Website",
//     description:
//       "Modern barbershop website with smooth animations and Swiper integration.",
//     tech: "HTML, CSS, JavaScript, GSAP, Swiper",
//     image: project1,
//   },
//   {
//     id: 9,
//     number: "09",
//     category: "Design",
//     title: "Ice Cream Shop UI",
//     subtitle: "UI / UX Design",
//     description:
//       "Creative UI/UX design for an ice cream shop with elegant transitions.",
//     tech: "HTML, CSS, JavaScript, Figma",
//     image: project2,
//   },
//   {
//     id: 10,
//     number: "10",
//     category: "Web",
//     title: "SEO Coffee Website",
//     subtitle: "SEO Optimized",
//     description:
//       "SEO-friendly coffee website with performance optimizations.",
//     tech: "HTML, CSS, JavaScript",
//     image: project3,
//   },
//   {
//     id: 11,
//     number: "11",
//     category: "Design",
//     title: "Restaurant Website Design",
//     subtitle: "Web Design",
//     description:
//       "Premium restaurant web design focused on branding and UX.",
//     tech: "HTML, CSS, JavaScript, Figma",
//     image: project4,
//   },
//   {
//     id: 12,
//     number: "12",
//     category: "Web",
//     title: "Fast Food Website",
//     subtitle: "Responsive Website",
//     description:
//       "Fast food website with engaging animations and responsive layout.",
//     tech: "HTML, CSS, JavaScript, GSAP",
//     image: project5,
//   },
// ];

// /* ================= COMPONENT ================= */
// const ProjectsSection = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const sectionRef = useRef<HTMLElement>(null);

//   const filters = ["All", "MERN", "Java", "Python", "Backend", "Web", "Design"];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <section ref={sectionRef} className="section" id="projects">
//       <div className="container">
//         <h2 className="section__title font-display">
//           My <span>Projects</span>
//         </h2>

//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition ${
//                 activeFilter === filter
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-card border border-border text-muted-foreground hover:border-primary/50"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Swiper */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4500 }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {filteredProjects.map((project) => (
//             <SwiperSlide key={project.id}>
//               <ProjectCard project={project} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// /* ================= CARD ================= */
// const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
//   <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition">
//     <div className="relative aspect-video overflow-hidden">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       <span className="absolute top-4 left-4 text-4xl font-bold text-primary/30">
//         {project.number}
//       </span>
//     </div>

//     <div className="p-6">
//       <span className="text-primary text-xs uppercase font-medium">
//         {project.category}
//       </span>
//       <h3 className="font-display text-xl font-semibold mt-2">
//         {project.title}
//       </h3>
//       <p className="text-sm text-muted-foreground mt-2">
//         {project.description}
//       </p>
//       <p className="text-xs text-muted-foreground mt-3">
//         <strong>Tech:</strong> {project.tech}
//       </p>
//     </div>
//   </article>
// );

// export default ProjectsSection;
/* ===================== ProjectsSection.tsx ===================== */
/* DROP-IN REPLACEMENT – MATCHES VIDEO @ 47:48 STYLING & MOTION */

/* ===================== ProjectsSection.tsx ===================== */
/* CARD STRUCTURE MATCHES REFERENCE IMAGE – SAME ANIMATIONS */

/* ===================== ProjectsSection.tsx ===================== */
/* FILTER ENABLED + CARD STRUCTURE MATCHES REFERENCE IMAGE */

/* ===================== ProjectsSection.tsx ===================== */
/* IMAGE-1 MATCHED CARD DESIGN + FILTERS + GSAP (NO ANIMATION REMOVED) */

/* ===================== ProjectsSection.tsx ===================== */
/* IMAGE-1 MATCHED CARD DESIGN + FILTERS + GSAP (NO ANIMATION REMOVED) */

/* ===================== ProjectsSection.tsx ===================== */
/* CARD WIDTH FIXED – MATCHES PREVIOUS CARD SIZE (NO LOGIC REMOVED) */

// import { useLayoutEffect, useMemo, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// /* ===== IMAGE IMPORTS ===== */
// import project1 from "@/assets/project-1.jpg";
// import project2 from "@/assets/project-2.jpg";
// import project3 from "@/assets/project-3.jpg";
// import project4 from "@/assets/project-4.jpg";
// import project5 from "@/assets/project-5.jpg";
// import voiceForVoiceless from "@/assets/Voice-For-Voiceless.png";
// import ticketSystem from "@/assets/ticket.jpeg";
// import keyValue from "@/assets/keyvalue.png";

// gsap.registerPlugin(ScrollTrigger);

// /* ================= PROJECT DATA (UNCHANGED) ================= */
// const projects = [
//   { id: 1, number: "01", category: "MERN", title: "Voice For Voiceless", subtitle: "Technologies used", description: "React, Node.js, Express, MongoDB, Maps, AI", image: voiceForVoiceless },
//   { id: 2, number: "02", category: "Design", title: "Interface Design For Ice Cream Shop", subtitle: "Technologies used", description: "HTML, CSS, JavaScript, GSAP, Swiper, Figma", image: project2 },
//   { id: 3, number: "03", category: "Web", title: "SEO For Coffee Websites", subtitle: "Technologies used", description: "HTML, CSS, JavaScript, GSAP, Swiper", image: project3 },
//   { id: 4, number: "04", category: "Design", title: "Web Design For Restaurant", subtitle: "Technologies used", description: "HTML, CSS, JavaScript, GSAP, Figma", image: project4 },
//   { id: 5, number: "05", category: "Web", title: "Fast Food Website", subtitle: "Technologies used", description: "HTML, CSS, JavaScript, GSAP", image: project5 },
//   { id: 6, number: "06", category: "Java", title: "Ticketing System", subtitle: "Technologies used", description: "Java, Spring Boot, PostgreSQL", image: ticketSystem },
//   { id: 7, number: "07", category: "Python", title: "Key-Value Backend", subtitle: "Technologies used", description: "Python, Django ORM, PostgreSQL, Redis", image: keyValue },
// ];

// /* ================= COMPONENT ================= */
// const ProjectsSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const cardsWrapRef = useRef<HTMLDivElement>(null);

//   const filters = ["All", "MERN", "Web", "Design", "Java", "Python"];
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filteredProjects = useMemo(() => {
//     if (activeFilter === "All") return projects;
//     return projects.filter(p => p.category === activeFilter);
//   }, [activeFilter]);

//   /* ===== GSAP SCROLL (UNCHANGED) ===== */
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".project-card", {
//         y: 50,
//         opacity: 0,
//         scale: 0.95,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardsWrapRef.current,
//           start: "top 85%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [activeFilter]);

//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="section relative bg-gradient-to-b from-black via-violet-900/10 to-black"
//     >
//       <div className="container">

//         {/* TITLE */}
//         <h2 className="font-display text-center text-4xl mb-10">
//           I Make Incredible <br />
//           <span className="text-violet-400">Projects</span>
//         </h2>

//         {/* FILTERS */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all
//                 ${
//                   activeFilter === filter
//                     ? "bg-violet-600 text-white shadow-[0_10px_30px_rgba(139,92,246,0.6)] scale-105"
//                     : "bg-white/5 text-white/60 hover:bg-white/10"
//                 }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* SWIPER */}
//         <div ref={cardsWrapRef}>
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4500 }}
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1280: { slidesPerView: 3 },
//               1536: { slidesPerView: 4 },
//             }}
//           >
//             {filteredProjects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <ProjectCard project={project} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>
//     </section>
//   );
// };

// /* ================= CARD – WIDTH FIXED ================= */
// const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
//   return (
//     <motion.article
//       whileHover={{
//         y: -10,
//         boxShadow: "0 30px 70px rgba(88,28,135,0.55)",
//       }}
//       transition={{ type: "spring", stiffness: 220, damping: 18 }}
//       className="
//         project-card
//         relative
//         max-w-[360px] w-full mx-auto
//         rounded-[28px]
//         p-8
//         flex flex-col
//         bg-gradient-to-br from-slate-900/60 to-violet-900/60
//         backdrop-blur-md
//         border border-white/10
//         shadow-[0_25px_50px_rgba(0,0,0,0.8)]
//       "
//     >
//       {/* TOP */}
//       <div className="flex justify-between items-start mb-6">
//         <span className="text-[34px] font-extrabold text-white/90 leading-none">
//           {project.number}
//         </span>
//         <span className="text-sm text-white/50 mt-1">
//           {project.category}
//         </span>
//       </div>

//       {/* TEXT */}
//       <h3 className="text-[17px] font-semibold text-white leading-snug mb-3">
//         {project.title}
//       </h3>

//       <p className="text-xs uppercase text-white/40 tracking-wide mb-1">
//         {project.subtitle}
//       </p>

//       <p className="text-sm text-white/55 leading-relaxed mb-8">
//         {project.description}
//       </p>

//       {/* IMAGE */}
//       <div className="relative mt-auto">
//         <div className="
//           absolute inset-x-0 -bottom-4 h-32
//           bg-gradient-to-t from-violet-600/50 to-transparent
//           blur-2xl
//           rounded-[24px]
//         " />

//         <div className="relative overflow-hidden rounded-[22px]">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-48 object-cover"
//           />
//         </div>
//       </div>
//     </motion.article>
//   );
// };

// export default ProjectsSection;
/* ===================== ProjectsSection.tsx ===================== */
/* CARD SIZE MATCHED TO FIRST CODE – NO LOGIC / ANIMATION CHANGED */

/* ===================== ProjectsSection.tsx ===================== */
/* CARD SIZE UPDATED – MATCHES SIMPLE CARD (HEIGHT & WIDTH ONLY) */

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

import voiceForVoiceless from "@/assets/Voice-For-Voiceless.png";
import wanderlust from "@/assets/wonderlust.png";
import aiChat from "@/assets/ai.png";
import socialApp from "@/assets/social.jpeg";
import sabkaVideo from "@/assets/image.png";
import ticketSystem from "@/assets/ticket.jpeg";
import keyValue from "@/assets/keyvalue.png";
import fagWebsite from "@/assets/fag.png";
import dmnyWebsite from "@/assets/dmny.png";


gsap.registerPlugin(ScrollTrigger);

/* ================= PROJECT DATA (UNCHANGED) ================= */
const projects = [
  /* ===== BUSINESS / FINTECH PROJECTS (PRIORITY) ===== */
  {
    id: 13,
    number: "01",
    category: "Web",
    title: "FAG – Financial Advisory Group",
    subtitle: "Corporate FinTech Website",
    description:
      "Professional financial services website showcasing equity investments, PMS, SIPs, and client-focused advisory solutions.",
    tech: "React, TypeScript, Tailwind CSS, GSAP",
    image: fagWebsite,
  },
  {
    id: 14,
    number: "02",
    category: "Web",
    title: "DMNY Cayman Ltd",
    subtitle: "Jewellery E-Commerce Website",
    description:
      "Luxury jewellery e-commerce platform with product listings, category navigation, wishlist, cart UI, and responsive design.",
    tech: "HTML, CSS, JavaScript, E-commerce UI",
    image: dmnyWebsite,
  },

  /* ===== CORE FULL-STACK PROJECTS ===== */
  {
    id: 1,
    number: "03",
    category: "MERN",
    title: "Voice For Voiceless",
    subtitle: "Real-time Animal Rescue Platform",
    description:
      "Government-collaborated MERN platform with rescue alerts, secure roles, maps integration and automation.",
    tech: "React, Node.js, Express, MongoDB, Maps, AI",
    image: voiceForVoiceless,
  },
  {
    id: 2,
    number: "04",
    category: "MERN",
    title: "Social Media App",
    subtitle: "Full Stack MERN Application",
    description:
      "Social media platform with authentication, posts, likes, comments, follow system and real-time updates.",
    tech: "React, Node.js, Express, MongoDB, JWT",
    image: socialApp,
  },
  {
    id: 3,
    number: "05",
    category: "MERN",
    title: "AI Chat App",
    subtitle: "Real-time AI Conversations",
    description:
      "Real-time AI chat system using Groq models for intelligent question-answering.",
    tech: "MERN, Groq API, LLMs",
    image: aiChat,
  },
  {
    id: 4,
    number: "06",
    category: "MERN",
    title: "Sabka Video Call",
    subtitle: "Real-time Video Conferencing",
    description:
      "Multi-user video calling platform with rooms, chat and screen sharing.",
    tech: "MERN, WebRTC, Socket.IO",
    image: sabkaVideo,
  },

  /* ===== BACKEND / SYSTEMS ===== */
  {
    id: 5,
    number: "07",
    category: "Java",
    title: "Ticketing System",
    subtitle: "Java Full Stack Application",
    description:
      "Enterprise-grade ticket management system with dashboards and role-based access.",
    tech: "Java, Spring Boot, PostgreSQL",
    image: ticketSystem,
  },
  {
    id: 6,
    number: "08",
    category: "Python",
    title: "Key-Value Backend",
    subtitle: "High Performance Backend",
    description:
      "Optimized backend with caching and ORM for ultra-fast data access.",
    tech: "Python, Django ORM, PostgreSQL, Redis",
    image: keyValue,
  },
  {
    id: 7,
    number: "09",
    category: "Backend",
    title: "RoamPulse",
    subtitle: "Travel Listing Platform",
    description:
      "Dynamic travel listing system with authentication, Cloudinary uploads and filters.",
    tech: "Node.js, Express, MongoDB, Cloudinary",
    image: wanderlust,
  },

  /* ===== UI / DESIGN PROJECTS ===== */
  {
    id: 8,
    number: "10",
    category: "Web",
    title: "Barbershop Website",
    subtitle: "Responsive Website",
    description:
      "Modern barbershop website with smooth animations and Swiper integration.",
    tech: "HTML, CSS, JavaScript, GSAP, Swiper",
    image: project1,
  },
  {
    id: 9,
    number: "11",
    category: "Design",
    title: "Ice Cream Shop UI",
    subtitle: "UI / UX Design",
    description:
      "Creative UI/UX design for an ice cream shop with elegant transitions.",
    tech: "HTML, CSS, JavaScript, Figma",
    image: project2,
  },
  {
    id: 10,
    number: "12",
    category: "Web",
    title: "SEO Coffee Website",
    subtitle: "SEO Optimized",
    description:
      "SEO-friendly coffee website with performance optimizations.",
    tech: "HTML, CSS, JavaScript",
    image: project3,
  },
  {
    id: 11,
    number: "13",
    category: "Design",
    title: "Restaurant Website Design",
    subtitle: "Web Design",
    description:
      "Premium restaurant web design focused on branding and UX.",
    tech: "HTML, CSS, JavaScript, Figma",
    image: project4,
  },
  {
    id: 12,
    number: "14",
    category: "Web",
    title: "Fast Food Website",
    subtitle: "Responsive Website",
    description:
      "Fast food website with engaging animations and responsive layout.",
    tech: "HTML, CSS, JavaScript, GSAP",
    image: project5,
  },
];



/* ================= COMPONENT ================= */
const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);

  const filters = ["All", "MERN", "Web", "Design", "Java", "Python"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsWrapRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section relative bg-gradient-to-b from-black via-violet-900/10 to-black"
    >
      <div className="container">

        <h2 className="font-display text-center text-4xl mb-10">
          I Make Incredible <br />
          <span className="text-violet-400">Projects</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeFilter === filter
                    ? "bg-violet-600 text-white shadow-[0_10px_30px_rgba(139,92,246,0.6)] scale-105"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div ref={cardsWrapRef}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

/* ================= CARD – SIZE MATCHED ================= */
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        project-card
        w-full
        rounded-2xl
        p-6
        flex flex-col
        bg-gradient-to-br from-slate-900/60 to-violet-900/60
        backdrop-blur-md
        border border-white/10
        shadow-[0_20px_40px_rgba(0,0,0,0.7)]
      "
    >
      {/* TOP */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-3xl font-bold text-white/80">
          {project.number}
        </span>
        <span className="text-xs text-white/50">
          {project.category}
        </span>
      </div>

      {/* TEXT */}
      <h3 className="text-lg font-semibold text-white leading-snug mb-2">
        {project.title}
      </h3>

      <p className="text-xs uppercase text-white/40 mb-1">
        {project.subtitle}
      </p>

      <p className="text-sm text-white/55 mb-4">
        {project.description}
      </p>

      {/* IMAGE – SAME HEIGHT & WIDTH AS SIMPLE CARD */}
      <div className="relative mt-auto aspect-video overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.article>
  );
};

export default ProjectsSection;
