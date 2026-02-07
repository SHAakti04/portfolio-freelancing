import { useEffect, useRef, useState } from "react";

const servicesData = [
  {
    title: "Software Engineering",
    description:
      "Designing and building scalable, maintainable, and production-ready software solutions with strong engineering principles.",
    points: [
      "Clean & scalable architecture",
      "Problem-solving focused development",
      "Performance & security aware coding",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Robust backend systems with secure APIs, databases, and real-time capabilities.",
    points: [
      "Node.js, Express, Java, Python",
      "REST APIs & GraphQL",
      "Authentication & Authorization (JWT, OAuth)",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Modern, responsive, and user-centric interfaces with clean UI and smooth UX.",
    points: [
      "React, Next.js, Tailwind CSS",
      "Responsive & accessible UI",
      "Performance optimized frontend",
    ],
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing secure authentication flows and role-based access systems.",
    points: [
      "JWT & OAuth",
      "Role-based access control",
      "Secure API integrations",
    ],
  },
  {
    title: "Deployment & DevOps",
    description:
      "Deploying applications with reliability, scalability, and CI/CD pipelines.",
    points: [
      "Docker & GitHub Actions",
      "Vercel, Render, Cloud deployments",
      "Production-ready setups",
    ],
  },
  {
    title: "Flexible Tech Stack",
    description:
      "Comfortable switching backend languages and tools based on project needs.",
    points: [
      "Java, JavaScript, Python",
      "SQL & NoSQL databases",
      "Choosing the right tool for the job",
    ],
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="services">
      <div className="container">
        <h2
          className={`section__title font-display transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What I <span>Offer</span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <span
                  className={`text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`mt-4 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;