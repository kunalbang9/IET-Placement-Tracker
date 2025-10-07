/* eslint-disable react/prop-types */
'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { formatNumber } from '../utils/formatNumber'

const ModalOverlay = motion.div
const ModalContent = motion.div

export const Modal = ({ isOpen, onClose, companyDetails }) => {
  if (!isOpen) return null

  return (
    <ModalOverlay
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center mx-4 md:mx-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        className="w-full max-w-lg max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <div className="relative p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{companyDetails.Company}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
       <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {companyDetails.Date && <DetailItem label="Date" value={companyDetails.Date} />}
            {companyDetails['Job Role'] && <DetailItem label="Job Role" value={companyDetails['Job Role']} />}
            {companyDetails.CGPA && <DetailItem label="CGPA Criteria" value={companyDetails.CGPA} />}
            {companyDetails['CTC (in LPA)'] && <DetailItem label="CTC (in LPA)" value={formatNumber(companyDetails['CTC (in LPA)'])} highlight />}
            {companyDetails['Duration of Internship'] && <DetailItem label="Duration of Internship" value={companyDetails['Duration of Internship']} />}
            {companyDetails['Compensation in Internship'] && <DetailItem label="Compensation in Internship" value={formatNumber(companyDetails['Compensation in Internship'])} highlight />}
            {companyDetails['Total Offers'] && <DetailItem label="Total Offers" value={companyDetails['Total Offers']} highlight />}
          </div>
        </div>
      </ModalContent>
    </ModalOverlay>
  )
}

const DetailItem = ({ label, value, highlight }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</span>
    {highlight ? (
      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full">
        {value}
      </span>
    ) : (
      <span className="text-sm text-gray-900 dark:text-white">{value}</span>
    )}
  </div>
)

export default Modal

