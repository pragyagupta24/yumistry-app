import { motion } from 'framer-motion';
import { Wallet, CreditCard } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const PaymentMethodSection = ({ paymentMethod, setPaymentMethod }) => {
  const { darkMode } = useDarkMode();
  const options = [
    { id: 'cod', label: 'Cash on Delivery', sub: 'Pay when you receive', Icon: Wallet },
    { id: 'online', label: 'Online Payment', sub: 'UPI, Cards, Wallets', Icon: CreditCard },
  ];
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }} className={`rounded-2xl p-4 shadow-sm border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#7f1d1d]/10'}`}>
      <div className="flex items-center gap-2 mb-3">
        <Wallet size={20} className="text-[#f52d05]" />
        <h3 className={`font-black ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Payment Method</h3>
      </div>
      <div className="space-y-2">
        {options.map(({ id, label, sub, Icon }) => (
          <button key={id} onClick={() => setPaymentMethod(id)}
            className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${paymentMethod === id ? 'border-[#f52d05] bg-[#f52d05]/5' : darkMode ? 'border-gray-600 bg-gray-700/50' : 'border-[#7f1d1d]/10 hover:border-[#f52d05]/30'}`}>
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === id ? 'border-[#f52d05]' : 'border-[#7f1d1d]/30'}`}>
                {paymentMethod === id && <div className="w-3 h-3 rounded-full bg-[#f52d05]" />}
              </div>
              <div className="text-left">
                <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>{label}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}`}>{sub}</p>
              </div>
            </div>
            <Icon size={20} className={darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/40'} />
          </button>
        ))}
      </div>
    </motion.div>
  );
};
export default PaymentMethodSection;
