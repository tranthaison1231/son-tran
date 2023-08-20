import { useInView } from 'react-intersection-observer';

import { AppConfig, Services } from '@/utils/app-config';

import ServiceCard from './ServiceCard';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="relative z-0 mx-auto max-w-7xl">
      <div className={inView ? 'animate-fade-down' : ''}>
        <p className="text-[14px] uppercase tracking-wider sm:text-[18px]">Introduction</p>
        <h2 className="xs:text-[40px] text-[30px] font-black text-white sm:text-[50px] md:text-[60px]">Overview.</h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[30px]">{AppConfig.bio}</p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {Services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
