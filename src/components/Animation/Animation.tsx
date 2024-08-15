import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedWrapperProps {
  children: React.ReactNode
  animationKey: string
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animationKey,
}) => {
  return (
    <motion.div
      key={animationKey}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
