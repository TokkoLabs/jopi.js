import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Flex } from '@oneloop/box'
import { motion, AnimatePresence } from 'framer-motion'

export const Drawer = ({ children, isOpen = false, ...props }) => {
  const portalNode = document.createElement('div')
  portalNode.setAttribute('id', 'drawerPortal')

  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      portalNode.parentNode.removeChild(portalNode)
    }
  }, [])

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: isOpen ? 'easeIn' : 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    portalNode
  )
}
