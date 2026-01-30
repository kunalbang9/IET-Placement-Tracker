import { useState } from 'react'
import { motion } from 'framer-motion'
import BatchData from './components/BatchData'
import Header from './components/Header'
import Footer from './components/Footer'
import { ArrowUpRight } from 'lucide-react'

export default function App() {
  const [selectedBatch, setSelectedBatch] = useState(null)

  return (
    <>
<div className="relative font-['Poppins'] bg-grid-black/[0.2] z-10 min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-indigo-900 text-white flex flex-col
">
        
        <section className='z-30 bg-cover min-h-screen' style={{
          /*backgroundImage: "url('/gridNew.png')",*/
        }}>

          {/* Header */}
          <div className='px-4 py-6 md:py-10 '>
            <Header showToolTip={true}/>
          </div>

          <main className="my-6 md:my-12 mt-6 flex-grow flex flex-col items-center justify-center text-center px-4">
            {/* Heading */}
           <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-3xl md:text-6xl font-bold mb-3 text-white"
>
  IET DAVV Placements
</motion.h1>

            {/* Sub-Heading */}
            <motion.p
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="text-lg md:text-lg mb-2 text-blue-100 leading-tight"
>
  Company-wise IET DAVV Indore Placement Data — 2026 Batch Onwards
</motion.p>
                    
            {/* Improved Batch Links */}
            <div className="mt-8 md:mt-12 w-full flex flex-col sm:flex-row items-center gap-5 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(59, 130, 246, 0.1)" 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedBatch('2026')}
                className={`relative cursor-pointer px-8 py-3 rounded-xl flex items-center gap-3 
                  backdrop-blur-sm transition-colors duration-300
                  ${selectedBatch === '2026' 
                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-200' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'} 
                  border-2 shadow-lg shadow-black/10`}
              >
                <span className="text-base font-medium">2026 Batch</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRight className={`w-5 h-5 ${selectedBatch === '2026' ? 'text-blue-200' : 'text-gray-400'}`}/>
                </motion.div>
              </motion.button>

            </div>
            
            {selectedBatch && <BatchData batch={selectedBatch} />}
          
            {/* <img src='heroSection.png' className='w-full sm:w-[80%] mt-20 rounded-sm sm:rounded-lg shadow-[0_0px_20px_#FFFFFF4D]'/> */}
           
          </main>

          {/* Footer */}
          <Footer />
        </section>

      </div>
    </>
    
  )
}

