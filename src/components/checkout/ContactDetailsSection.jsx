import { motion } from 'framer-motion';
import { User, Phone } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const ContactDetailsSection = ({ userData }) => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }} className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#7f1d1d]/10'}`}>
      <div className="flex items-center gap-2 mb-3">
        <User size={20} className="text-[#f52d05]" />
        <h3 className={`font-black ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Contact Details</h3>
      </div>
      <div className="space-y-2 text-sm">
        <div className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <User size={16} className={darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'} />
          <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>{userData.name || 'Guest User'}</span>
        </div>
        <div className={`flex items-center gap-3 p-3 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <Phone size={16} className={darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'} />
          <span className={`font-medium ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>{userData.phone || 'Not provided'}</span>
        </div>
      </div>
    </motion.div>
  );
};
export default ContactDetailsSection;
