import { motion } from 'framer-motion';

const AuthBlobs = () => (
  <>
    <motion.div animate={{ scale:[1,1.1,1], opacity:[0.2,0.3,0.2] }} transition={{ duration:8, repeat:Infinity }} className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#7f1d1d]/20 to-[#f52d05]/10 rounded-full blur-3xl" />
    <motion.div animate={{ scale:[1,1.2,1], opacity:[0.15,0.25,0.15] }} transition={{ duration:10, repeat:Infinity }} className="absolute bottom-10 left-10 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-tl from-[#f52d05]/20 to-[#7f1d1d]/10 rounded-full blur-3xl" />
  </>
);
export default AuthBlobs;
