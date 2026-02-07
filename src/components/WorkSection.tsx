// // import { useEffect, useRef, useState } from "react";

// // const experienceData = [
// //   {
// //     title: "MERN Stack Intern",
// //     company: "Emertxe Information Technologies",
// //     year: "Sept 2025 – Nov 2025",
// //     description: "Worked on full-stack MERN projects, REST APIs, authentication, deployment."
// //   },
// // ];
// // const educationData = [
// //   {
// //     title: "B.Tech Computer Science",
// //     company: "RTM Nagpur University",
// //     year: "2022 – 2026",
// //     description: "CGPA: 9.0 (till 7th semester)"
// //   },
// // ];

// // const WorkSection = () => {
// //   const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
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

// //   const currentData = activeTab === "experience" ? experienceData : educationData;

// //   return (
// //     <section ref={sectionRef} className="section" id="work">
// //       <div className="container">
// //         {/* Section title */}
// //         <h2
// //           className={`section__title font-display transition-all duration-700 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //           }`}
// //         >
// //           <span>My Work</span>
// //           <br />
// //           Experience
// //         </h2>

// //         {/* Tabs */}
// //         <div
// //           className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //           }`}
// //         >
// //           <button
// //             onClick={() => setActiveTab("experience")}
// //             className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
// //               activeTab === "experience"
// //                 ? "bg-primary text-primary-foreground"
// //                 : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
// //             }`}
// //           >
// //             Experience
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("education")}
// //             className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
// //               activeTab === "education"
// //                 ? "bg-primary text-primary-foreground"
// //                 : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
// //             }`}
// //           >
// //             Education
// //           </button>
// //         </div>

// //         {/* Work cards */}
// //         <div
// //           className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
// //             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //           }`}
// //         >
// //           {currentData.map((item, index) => (
// //             <article
// //               key={`${activeTab}-${index}`}
// //               className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 card-hover animate-fade-in"
// //               style={{ animationDelay: `${index * 100}ms` }}
// //             >
// //               <span className="text-primary text-sm font-medium">{item.year}</span>
// //               <h3 className="font-display text-xl font-semibold mt-2 mb-1 whitespace-pre-line leading-tight">
// //                 {item.title}
// //               </h3>
// //               <p className="text-muted-foreground text-sm mb-4">{item.company}</p>
// //               <p className="text-muted-foreground text-sm leading-relaxed">
// //                 {item.description}
// //               </p>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WorkSection;
// import { useEffect, useRef, useState } from "react";

// const experienceData = [
//   {
//     title: "MERN Stack Intern",
//     company: "Emertxe Information Technologies",
//     year: "Sept 2025 – Nov 2025",
//     description: "Worked on full-stack MERN projects, REST APIs, authentication, deployment."
//   },
// ];
// const educationData = [
//   {
//     title: "B.Tech Computer Science",
//     company: "RTM Nagpur University",
//     year: "2014 – 2018",
//     description: "CGPA: 9.0"
//   },
// ];

// const WorkSection = () => {
//   const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const currentData = activeTab === "experience" ? experienceData : educationData;

//   return (
//     <section ref={sectionRef} className="section" id="work">
//       <div className="container">
//         {/* Section title */}
//         <h2
//           className={`section__title font-display transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <span>My Work</span>
//           <br />
//           Experience
//         </h2>

//         {/* Tabs */}
//         <div
//           className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <button
//             onClick={() => setActiveTab("experience")}
//             className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//               activeTab === "experience"
//                 ? "bg-primary text-primary-foreground"
//                 : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
//             }`}
//           >
//             Experience
//           </button>
//           <button
//             onClick={() => setActiveTab("education")}
//             className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//               activeTab === "education"
//                 ? "bg-primary text-primary-foreground"
//                 : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
//             }`}
//           >
//             Education
//           </button>
//         </div>

//         {/* Work cards */}
//         <div
//           className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           {currentData.map((item, index) => (
//             <article
//               key={`${activeTab}-${index}`}
//               className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 card-hover animate-fade-in"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <span className="text-primary text-sm font-medium">{item.year}</span>
//               <h3 className="font-display text-xl font-semibold mt-2 mb-1 whitespace-pre-line leading-tight">
//                 {item.title}
//               </h3>
//               <p className="text-muted-foreground text-sm mb-4">{item.company}</p>
//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 {item.description}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkSection;
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "TechNova Solutions Pvt. Ltd",
    year: "Jan 2022 – Jul 2025",
    description:
      "Led full-stack development using MERN, Java, and microservices. Designed scalable APIs, optimized databases, handled authentication, deployments, and mentored junior developers."
  },
  {
    title: "Software Engineer",
    company: "BluePeak Digital Systems",
    year: "Jul 2020 – Dec 2021",
    description:
      "Built backend and full-stack systems using Node.js, Java, Spring Boot, and SQL/NoSQL databases. Integrated third-party APIs and delivered production-ready solutions."
  },
  {
    title: "Junior Software Developer",
    company: "InnoWave Technologies",
    year: "Jun 2018 – Jun 2020",
    description:
      "Worked on frontend and backend development, bug fixing, performance improvements, and gained hands-on experience across the full SDLC."
  }
];

const educationData = [
  {
    title: "B.Tech Computer Science",
    company: "RTM Nagpur University",
    year: "2014 – 2018",
    description: "CGPA: 9.0"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const currentData = activeTab === "experience" ? experienceData : educationData;

  /* ---------------- MAGNETIC HOVER ---------------- */
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const strength = 20;

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          x: x / strength,
          y: y / strength,
          duration: 0.3,
          ease: "power3.out"
        });
      };

      const onLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    });
  }, [activeTab]);

  /* ---------------- SCROLL PROGRESS LINE ---------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      gsap.to(lineRef.current, {
        scaleY: progress,
        transformOrigin: "top",
        ease: "none",
        duration: 0.1
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section py-20 relative" id="work">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold mb-12"
        >
          My Work <br /> Experience
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14">
          {["experience", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "border border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {tab === "experience" ? "Experience" : "Education"}
            </button>
          ))}
        </div>

        {/* Timeline Wrapper */}
        <div className="relative pl-8 md:pl-12">

          {/* Static Line */}
          <div className="absolute left-3 md:left-5 top-0 h-full w-[2px] bg-border" />

          {/* Animated Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-3 md:left-5 top-0 h-full w-[2px] bg-primary scale-y-0"
          />

          <div className="space-y-10">
            {currentData.map((item, index) => (
              <motion.article
                key={`${activeTab}-${index}`}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                ref={(el) => (cardsRef.current[index] = el!)}
                className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all"
              >
                {/* Dot */}
                <span className="absolute -left-[22px] top-6 h-4 w-4 rounded-full bg-primary" />

                <span className="text-primary text-sm font-medium">{item.year}</span>

                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground mb-3">{item.company}</p>

                <p className="hidden md:block text-sm text-muted-foreground">
                  {item.description}
                </p>

                <p className="md:hidden text-sm text-muted-foreground">
                  {item.description.split(".")[0]}.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
