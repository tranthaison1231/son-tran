import { motion } from 'framer-motion';

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: {
            x: -100,
            opacity: 0,
          },
          show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              delay: index * 0.5,
              duration: 0.75,
            },
          },
        }}
        className="w-full rounded-[20px] p-[1px] shadow-sm"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img src={icon} alt="web-development" className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
