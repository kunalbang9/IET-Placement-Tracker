/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import Tooltip from './Tooltip'

const Header = ({ showToolTip }) => {
  return (
    <header className="flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative cursor-pointer bg-black bg-opacity-20 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-sm shadow-white border-2 border-white border-opacity-20 group"
      >
        <span className="text-sm font-['Poppins']"><span className='font-medium'>Made by:</span> Kunal Bang</span>
        
        {/* Tooltip */}
        { showToolTip && <Tooltip /> }
      </motion.div>
    </header>
  )
}

export default Header