import { motion } from 'framer-motion';

const ScrollDown = () => {
  return (
    <a href="#about">
      <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-[#aaa6c3] p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="mb-1 h-3 w-3 rounded-full bg-[#aaa6c3]"
        />
      </div>
    </a>
  );
};

export default ScrollDown;
