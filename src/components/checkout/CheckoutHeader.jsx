import { MapPin, User, Phone } from 'lucide-react';
import { useDarkMode } from '../../context/DarkModeContext';

const CheckoutHeader = ({ navigate, getTotalItems }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`backdrop-blur-xl border-b sticky top-0 z-10 ${darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-[#7f1d1d]/10'}`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/cart')} className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#7f1d1d]/10'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7f1d1d]"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </button>
          <div>
            <h1 className={`text-xl font-black ${darkMode ? 'text-white' : 'text-[#7f1d1d]'}`}>Checkout</h1>
            <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-[#7f1d1d]/60'}`}>{getTotalItems()} items</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutHeader;
