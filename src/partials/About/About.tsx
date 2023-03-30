import { motion } from 'framer-motion';

import { AppConfig, Services } from '@/utils/app-config';
import { textVariant } from '@/utils/motion';

import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative z-0 mx-auto max-w-7xl"
    >
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider sm:text-[18px]">Introduction</p>
        <h2 className="xs:text-[40px] text-[30px] font-black text-white sm:text-[50px] md:text-[60px]">Overview.</h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[30px]">{AppConfig.bio}</p>
      </motion.div>
      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        {Services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;
