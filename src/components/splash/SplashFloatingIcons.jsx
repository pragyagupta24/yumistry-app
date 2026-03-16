import { motion } from 'framer-motion';
import { Apple, Carrot, Leaf, Sparkles } from 'lucide-react';

const SplashFloatingIcons = () => (
  <>
    <motion.div animate={{ y:[0,-25,0], rotate:[0,10,0], opacity:[0.4,0.6,0.4] }} transition={{ duration:6, repeat:Infinity }} className="absolute top-24 left-12">
      <Apple size={50} className="text-[#ef4444]/40" fill="#ef4444" />
    </motion.div>
    <motion.div animate={{ y:[0,20,0], rotate:[0,-12,0], opacity:[0.3,0.5,0.3] }} transition={{ duration:7, repeat:Infinity, delay:1 }} className="absolute top-36 right-16">
      <Carrot size={45} className="text-[#f97316]/40" />
    </motion.div>
    <motion.div animate={{ y:[0,-15,0], rotate:[0,15,0], opacity:[0.3,0.5,0.3] }} transition={{ duration:5, repeat:Infinity, delay:0.5 }} className="absolute bottom-36 left-16">
      <Leaf size={40} className="text-[#7f1d1d]/40" fill="#7f1d1d" />
    </motion.div>
    <motion.div animate={{ scale:[1,1.3,1], opacity:[0.4,0.7,0.4] }} transition={{ duration:4, repeat:Infinity, delay:1.5 }} className="absolute bottom-28 right-20">
      <Sparkles size={35} className="text-[#fbbf24]/50" />
    </motion.div>
  </>
);
export default SplashFloatingIcons;
