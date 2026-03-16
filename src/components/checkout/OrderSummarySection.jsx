import { motion } from 'framer-motion';
import { useDarkMode } from '../../context/DarkModeContext';

const OrderSummarySection = ({ getTotalItems, getSubtotal, getDeliveryFee, getTotalSavings, getTotal }) => {
  const { darkMode } = useDarkMode();
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }} className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#7f1d1d]/10'}`}>
      <h3 className={`font-black mb-3 ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className={darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}>Items ({getTotalItems()})</span>
          <span className={`font-bold ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>₹{getSubtotal()}</span>
        </div>
        <div className="flex justify-between">
          <span className={darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}>Delivery fee</span>
          <span className={`font-bold ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>
            {getDeliveryFee() === 0 ? <span className="text-[#f52d05]">FREE</span> : `₹${getDeliveryFee()}`}
          </span>
        </div>
        {getTotalSavings() > 0 && (
          <div className="flex justify-between text-[#f52d05]">
            <span>Your savings</span>
            <span className="font-bold">-₹{getTotalSavings()}</span>
          </div>
        )}
        <div className={`border-t pt-2 mt-2 ${darkMode ? 'border-gray-600' : 'border-[#7f1d1d]/10'}`}>
          <div className="flex justify-between">
            <span className={`font-black ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Total Amount</span>
            <span className={`font-black text-lg ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>₹{getTotal()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default OrderSummarySection;
