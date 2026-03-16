import { motion } from 'framer-motion';

const SplashLoader = () => (
  <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }} className="absolute bottom-16 flex gap-1.5">
    {[0,1,2].map(i => (
      <motion.div key={i} animate={{ scale:[1,1.5,1], opacity:[0.4,1,0.4] }} transition={{ duration:1, repeat:Infinity, delay:i*0.2 }} className="w-2 h-2 bg-[#7f1d1d] rounded-full" />
    ))}
  </motion.div>
);
export default SplashLoader;
