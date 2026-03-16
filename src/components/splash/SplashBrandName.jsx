import { motion } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';

const SplashBrandName = () => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5, duration:0.8 }} className="text-center">
      <div className="flex items-center justify-center">
        {['Y','u','m','i','s','t','r','y'].map((letter, i) => (
          <motion.span key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7 + i*0.08 }}
            className={`text-6xl font-black tracking-tight ${i < 4 ? 'text-[#7f1d1d]' : 'text-[#f52d05]'}`}>
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }} className="mt-4 flex flex-col items-center gap-2">
        <p className="text-sm font-bold tracking-wide text-[#7f1d1d]/80">Real Freshness</p>
        <motion.div initial={{ width:0 }} animate={{ width:'80px' }} transition={{ delay:1.8, duration:0.6 }} className="h-0.5 bg-[#f52d05] rounded-full" />
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mt-1 text-[#7f1d1d]/60">Chemistry of Freshness</p>
      </motion.div>
    </motion.div>
  );
};
export default SplashBrandName;
