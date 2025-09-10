// const CloseIcon = () => (
//     <svg
//       width='20'
//       height='20'
//       viewBox='0 0 24 24'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//     >
//       <path
//         d='M18 6L6 18M6 6L18 18'
//         stroke='currentColor'
//         strokeWidth='2'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//       />
//     </svg>
//   );

import { motion } from 'framer-motion';

const CloseIcon = ({ isUnsupported }) => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
        scale: 0.8,
        x: -4,
        filter: isUnsupported ? 'none' : 'blur(5px)',
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        filter: 'blur(0px)',
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        x: -4,
        filter: isUnsupported ? 'none' : 'blur(5px)',
      }}
      transition={{
        delay: 0.1,
        duration: 1,
        type: 'spring',
        bounce: 0.15,
      }}
      width='15'
      height='15'
      viewBox='0 0 23 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 6L6 18M6 6L18 18'
        fillRule='evenodd'
        clipRule='evenodd'
        stroke='#43e6e3'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </motion.svg>
  );
};

export default CloseIcon;
