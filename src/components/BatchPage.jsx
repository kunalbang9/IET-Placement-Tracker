import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, clearFilters, setSort } from '../redux/filterSlice'
import { ChevronUp, ChevronDown, Sparkles, ArrowLeft, ArrowRight, ChevronsLeftRightEllipsis } from 'lucide-react'
import data2026 from '../data/2026.json'
import Header from './Header'
import Modal from './Modal'
import { useState } from 'react'
import Footer from './Footer'
import { formatNumber } from '../utils/formatNumber'; // Import the utility function

export default function BatchPage() {
  const { batch } = useParams()
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter.filters)
  const sort = useSelector((state) => state.filter.sort)
 const data = data2026


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState(null)

  const navigate = useNavigate()

  const handleFilterChange = (field, value) => {
    dispatch(setFilter({ field, value }))
  }

  const handleSort = (field) => {
    dispatch(setSort({ field }))
  }

  const handleCompanyClick = (companyDetails) => {
    setSelectedCompany(companyDetails)
    setIsModalOpen(true)
  }

  // Helper function to compare values for sorting
  const compareValues = (a, b, field) => {
    let valueA = a[field]
    let valueB = b[field]

    // Convert to numbers if possible
    if (!isNaN(valueA) && !isNaN(valueB)) {
      valueA = Number(valueA)
      valueB = Number(valueB)
    } else {
      // Handle date strings
      if (field === 'Date') {
        valueA = new Date(valueA)
        valueB = new Date(valueB)
      } else {
        // Convert to lowercase strings for string comparison
        valueA = String(valueA || '').toLowerCase()
        valueB = String(valueB || '').toLowerCase()
      }
    }

    if (valueA < valueB) return -1
    if (valueA > valueB) return 1
    return 0
  }

  // Filter and sort data
  const processedData = [...data]
     .filter(row => {
      return Object.entries(filters).every(([field, value]) => {
        if (!value) return true
        const rowValue = String(row[field] || '').toLowerCase()
        return rowValue.includes(value.toLowerCase())
      })
    })



    .sort((a, b) => {
      if (!sort.field) return 0
      const comparison = compareValues(a, b, sort.field)
      return sort.direction === 'asc' ? comparison : -comparison
    })

  // Sortable columns configuration
 const sortableColumns = [
    'S.No.', 'Date', 'Company', 'CGPA'
  ]

  return (
    <div className="font-['Poppins'] min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white flex flex-col relative">
      <div className='flex flex-row justify-start gap-5 md:gap-0 md:justify-between items-center p-4 md:p-8'>

        <ArrowLeft className='hover:cursor-pointer' onClick={() => {
          console.log('Back button clicked');
          navigate(-1);
        }} />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:ml-20 text-lg md:text-4xl font-bold text-center text-white flex flex-row items-center gap-4"
        >
          <Sparkles size={34} className='text-blue-100 hidden md:block' /> Placement Data - {batch} Batch
        </motion.h1>
        <div className='hidden md:block'>
          <Header showToolTip={false} />
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 scroll-arrow absolute top-[50%]  bg-black/30 right-[60px] border-2 border-white/30 rounded-full p-3 px-5">
        <ChevronsLeftRightEllipsis />
        <span className='hidden md:block text-sm'>scroll</span>
      </div>

      <main className="flex-grow p-4 md:p-8">

        <div className="mb-6 flex justify-between items-center">
          <h1 className='text-[10px] w-1/2 md:w-full md:text-lg font-poppins tracking-wide text-gray-100 '>
            Disclaimer: IET DAVV Placement Tracker v1.0 displays placement data for the 2026 batch, updated till October 2025. Future versions will include newer data and additional features.
          </h1>
          <button
            onClick={() => dispatch(clearFilters())}
            className="bg-red-500 px-4 py-2 w-auto text-nowrap rounded-md hover:bg-red-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>

        <div className="overflow-x-auto relative">
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto"> 
            <table className="min-w-full bg-white bg-opacity-10 rounded-lg">
              <thead className="bg-blue-900 sticky top-0 z-10">
                <tr>
                  {Object.keys(data[0]).map((header) => (
                    <th
                      key={header}
                      className={`px-6 py-3 text-left text-xs font-medium text-blue-100 uppercase tracking-wider ${header === 'S.No.' ? 'w-8' : ''}`}
                    >
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <span>{header}</span>
                          {sortableColumns.includes(header) && (
                            <button
                              onClick={() => handleSort(header)}
                              className="hover:text-blue-300"
                            >
                              {sort.field === header ? (
                                sort.direction === 'asc' ? (
                                  <ChevronUp size={16} />
                                ) : (
                                  <ChevronDown size={16} />
                                )
                              ) : (
                                <div className="flex flex-col">
                                  <ChevronUp size={12} />
                                  <ChevronDown size={12} />
                                </div>
                              )}
                            </button>
                          )}
                        </div>
                        {header !== 'S.No.' && (
                          <input
                            type="text"
                            placeholder={`Filter ${header}`}
                            value={filters[header] || ''}
                            onChange={(e) => handleFilterChange(header, e.target.value)}
                            className="bg-blue-800 bg-opacity-50 text-white px-2 py-1 w-auto rounded text-xs placeholder-blue-300"
                          />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-900 divide-opacity-25">
                {processedData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-900 hover:bg-opacity-20 transition-colors cursor-pointer"
                    onClick={() => handleCompanyClick(row)}
                  >
                    {Object.values(row).map((value, cellIdx) => (
                      <td key={cellIdx} className="text-wrap w-8 px-6 py-2 md:py-3 whitespace-nowrap text-sm text-white">
                       {!isNaN(Number(value))
  ? formatNumber(Number(value))
  : value?.toString() || '-'}


                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} companyDetails={selectedCompany || {}} />

      <Footer />
    </div>
  )
} 