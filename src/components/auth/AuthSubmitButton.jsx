import { motion } from 'framer-motion';

const AuthSubmitButton = ({ isLoading, loadingText, text }) => (
  <motion.button type="submit" disabled={isLoading} whileTap={{ scale: isLoading ? 1 : 0.97 }}
    className="w-full bg-gradient-to-r from-[#7f1d1d] to-[#f52d05] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
    {isLoading ? (
      <>
        <motion.div animate={{ rotate:360 }} transition={{ duration:1, repeat:Infinity, ease:'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
        {loadingText}
      </>
    ) : text}
  </motion.button>
);
export default AuthSubmitButton;
