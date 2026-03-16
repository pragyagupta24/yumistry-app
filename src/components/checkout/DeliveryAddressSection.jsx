import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const DeliveryAddressSection = ({ deliveryAddress, setDeliveryAddress }) => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#7f1d1d]/10'}`}>
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={20} className="text-[#f52d05]" />
        <h3 className={`font-black ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Delivery Address</h3>
      </div>
      <textarea value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} placeholder="Enter complete delivery address" rows="3"
        className={`w-full p-3 rounded-xl border-2 outline-none focus:border-[#f52d05] transition-all font-medium text-sm resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400' : 'bg-gray-50 border-[#7f1d1d]/10 placeholder:text-[#7f1d1d]/30'}`} />
    </motion.div>
  );
};
export default DeliveryAddressSection;
