import { motion } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';

const SplashBlobs = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <motion.div animate={{ scale: [1,1.1,1], x:[0,30,0], opacity:[0.3,0.5,0.3] }} transition={{ duration:8, repeat:Infinity }} className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#7f1d1d]/20 to-[#f52d05]/10 rounded-full blur-3xl" />
      <motion.div animate={{ scale: [1,1.2,1], x:[0,-20,0], opacity:[0.2,0.4,0.2] }} transition={{ duration:10, repeat:Infinity }} className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-[#f52d05]/20 to-[#7f1d1d]/10 rounded-full blur-3xl" />
    </>
  );
};
export default SplashBlobs;
