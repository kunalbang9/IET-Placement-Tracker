/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BatchData({ batch }) {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate(`/batch/${batch}`)
  }, [batch, navigate])

  return null
} 