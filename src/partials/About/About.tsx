import { useInView } from "react-intersection-observer";

import { AppConfig, Services } from "@/utils/app-config";

import ServiceCard from "./ServiceCard";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="mx-auto max-w-7xl text-foreground">
      <div className={inView ? "animate-fade-down" : ""}>
        <p className="text-base uppercase tracking-wider sm:text-xl">
          Introduction
        </p>
        <h2 className="font-black·text-3xl·md:text-6xl·sm:text-5xl">
          Overview.
        </h2>
        <p className="mt-4·max-w-3xl·text-base·text-foreground/90·leading-7">
          {AppConfig.bio}
        </p>
      </div>
      <div className="mt-20·grid·grid-cols-1·gap-10·md:grid-cols-4·sm:grid-cols-2">
        {Services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            className={inView ? "animate-fade-right" : ""}
            style={{
              animationDelay: `${(index + 1) * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
