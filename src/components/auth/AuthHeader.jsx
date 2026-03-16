import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const AuthHeader = ({ subtitle }) => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-2 mb-2">
      <Leaf className="text-[#f52d05]" size={28} strokeWidth={2.5} fill="#7f1d1d" />
      <h1 className="text-3xl font-black tracking-tight text-[#7f1d1d]">Yumistry</h1>
    </div>
    <p className="text-sm text-[#7f1d1d]/60 font-medium">{subtitle}</p>
  </div>
);
export default AuthHeader;
