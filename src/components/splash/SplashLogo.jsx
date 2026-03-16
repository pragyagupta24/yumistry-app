import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const SplashLogo = () => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div initial={{ opacity:0, scale:0.5, rotate:-90 }} animate={{ opacity:1, scale:1, rotate:0 }} transition={{ duration:1, type:'spring' }} className="relative mb-8">
      <motion.div animate={{ scale:[1,1.2,1], opacity:[0.4,0.6,0.4] }} transition={{ duration:2, repeat:Infinity }} className="absolute inset-0 bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] blur-2xl rounded-full" />
      <div className={`relative p-8 rounded-full shadow-xl border-4 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' : 'bg-gradient-to-br from-white to-[#fff5f7] border-white'}`}>
        <motion.div animate={{ rotate:[0,360] }} transition={{ duration:20, repeat:Infinity, ease:'linear' }}>
          <Leaf size={70} strokeWidth={2} className="text-[#7f1d1d]" fill="#f52d05" />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default SplashLogo;
