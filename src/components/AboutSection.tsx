// import { useEffect, useRef, useState } from "react";

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="section" id="about">
//       <div className="container">
//         {/* Section title */}
//         <h2
//           className={`section__title font-display transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <span>Development</span>
//           <br />
//           Is My Passion
//         </h2>

//         {/* About content */}
//         <div className="max-w-3xl mx-auto text-center">
//           <p
//             className={`text-muted-foreground text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             I’m{" "}
//             <strong className="text-foreground">
//               Shaktikumar A. Prajapati
//             </strong>
//             , a results-driven Computer Science student (B.Tech, CGPA 9.0) and
//             Full Stack Developer with strong expertise in{" "}
//             <strong className="text-foreground">
//               Java, MERN Stack, MySQL, and MongoDB
//             </strong>
//             . I enjoy building scalable, real-world applications that combine
//             clean backend architecture with intuitive user interfaces. My work
//             focuses on writing efficient, maintainable code and solving complex
//             problems using strong fundamentals in
//             <strong className="text-foreground">
//               DSA, OOPS, DBMS, OS, and Computer Networks
//             </strong>
//             . Through internships and projects like Voice For Voiceless, Chat
//             AI, and RoamPulse, I’ve gained hands-on experience in REST APIs,
//             authentication, real-time systems, and cloud-based deployments. I’m
//             driven by continuous learning and excited to contribute to
//             impactful, production-grade software.
//           </p>

//           {/* Resume button */}
//           <div
//             className={`transition-all duration-700 delay-400 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             <a
//               href="/Shaktikumar_A_Prajapati_Resume.pdf"
//               className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300 group"
//             >
//               <span>Resume</span>
//               <svg
//                 className="w-5 h-5 transition-transform group-hover:translate-x-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Stats */}
//         <div
//           className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 delay-600 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           {[
//             { number: "1+", label: "Years Experience" },
//             { number: "7+", label: "Projects Completed" },

//             { number: "5+", label: "Awards Won" },
//           ].map((stat, index) => (
//             <div key={index} className="text-center">
//               <h3 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
//                 {stat.number}
//               </h3>
//               <p className="text-sm text-muted-foreground">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
import { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTypewriter } from "react-simple-typewriter";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


const techIcons = [
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiMysql, label: "MySQL" },
  { icon: FaJava, label: "Java" },
  { icon: SiPython, label: "Python" },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [text] = useTypewriter({
    words: ["Development Is My Passion"],
    loop: 1,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section pt-0 pb-20 -mt-20"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center">

        {/* Heading with typing */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold mb-10"
        >
          <span className="text-primary">{text}</span>
        </motion.h2>

        {/* About Te,xt (staggered) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-muted-foreground text-lg leading-relaxed mb-8"
        >
          I’m <strong className="text-foreground">Shaktikumar A. Prajapati</strong>, a{" "}
          <strong className="text-foreground">Full-stack Software Engineer</strong>{" "}
          with <strong>7+ years of experience</strong> building scalable,
          secure, and high-performance applications.
          <br /><br />
          I specialize in <strong>Java, Node.js, MERN Stack</strong>, with strong
          backend experience in <strong>Python, Spring Boot, FastAPI</strong>.
          Backed by deep fundamentals in <strong>OOPS, DBMS, CN, and OS</strong>,
          I build systems that scale and last.
        </motion.p>

        {/* Resume */}
        <a
          href="/Shaktikumar_A_Prajapati_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-indigo-500 to-cyan-400
                     text-black font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          <FiDownload />
          Download Resume
        </a>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-14">
          {techIcons.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Icon className="text-3xl text-primary" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { end: 7, label: "Years Experience" },
            { end: 15, label: "Projects Completed" },
            { end: 10, label: "Technologies" },
            { end: 100, label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-bold text-primary">
                <CountUp end={stat.end} duration={2} />+
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
