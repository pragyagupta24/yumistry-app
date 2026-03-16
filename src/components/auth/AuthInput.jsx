const AuthInput = ({ icon: Icon, error, className = '', ...props }) => (
  <div className="relative">
    {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7f1d1d]/40" size={20} />}
    <input
      {...props}
      className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3.5 rounded-xl bg-white border-2 outline-none transition-all placeholder:text-[#7f1d1d]/30 font-medium text-sm disabled:opacity-50 ${error ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#f52d05]'} ${className}`}
    />
  </div>
);
export default AuthInput;
