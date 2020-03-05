import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex } from '@oneloop/box'
import { motion, AnimatePresence } from 'framer-motion'

export const Drawer = ({ children, isOpen = false, side, ...props }) => {
  const portalNode = document.createElement('div')
  portalNode.setAttribute('id', 'drawerPortal')

  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      portalNode.parentNode.removeChild(portalNode)
    }
  }, [])

  const drawerContentInitial = {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    maxWidth: '100%',
    overflowY: 'auto',
    padding: '10px',
    x: -100,
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {side === 'left'
        ? ((drawerContentInitial[side] = 0), (drawerContentInitial.x = -100))
        : ((drawerContentInitial[side] = 0), (drawerContentInitial.x = 100))}
      {isOpen && (
        <motion.div
          key="drawerOverlay"
          initial={{
            backgroundColor: 'rgba(4, 4, 4, 0.79)',
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              opacity: 1,
            },
            hidden: {
              opacity: 0,
            },
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="drawerContent"
            initial={drawerContentInitial}
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                x: 0,
              },
              hidden: {
                x: -100,
              },
            }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalNode
  )
}

const DrawerHeader = props => (
  <Flex
    {...props}
    __css={{
      mb: '15px',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    }}
  />
)

const DrawerBody = props => <Box {...props} />

const DrawerFooter = props => (
  <Flex
    {...props}
    sx={{
      mt: '15px',
    }}
  />
)

Drawer.Header = DrawerHeader
Drawer.Body = DrawerBody
Drawer.Footer = DrawerFooter
