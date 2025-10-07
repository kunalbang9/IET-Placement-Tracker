import { Github, Globe, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const SocialLinks = () => {
  return (
    <>
          <motion.a
            href="https://www.linkedin.com/in/kunalbang09/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-blue-100"
          >
            <Linkedin size={24} />
          </motion.a>
    </>
  )
}

export default SocialLinks