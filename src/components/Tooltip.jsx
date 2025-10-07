import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks';

const Tooltip = () => {
  return (
    <motion.div
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-10 opacity-0 group-hover:opacity-0 md:group-hover:opacity-100 flex flex-col items-center"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
    >
        {/* Triangle Arrow */}
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black "></div>
        
        {/* Curved Rectangle */}
        <div className="bg-black rounded-xl p-3 shadow-lg">
            <div className="flex space-x-4">
                <SocialLinks />
            </div>
        </div>
    </motion.div>
  );
};

export default Tooltip; 