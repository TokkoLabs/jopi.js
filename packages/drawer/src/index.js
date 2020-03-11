import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex } from '@oneloop/box'
import { motion, AnimatePresence } from 'framer-motion'

const DrawerPortal = ({ isOpen = false, children, screenSide, ...props }) => {
  const portalNode = document.createElement('div')
  portalNode.setAttribute('id', 'drawerPortal')

  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      portalNode.parentNode.removeChild(portalNode)
    }
  }, [isOpen])

  const drawerOverlayInitial = {
    backgroundColor: 'rgba(4, 4, 4, 0.79)',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  }

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
    <motion.div
      key="drawerOverlay"
      initial={drawerOverlayInitial}
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
      transition={{ duration: 0.3 }}
    >
      <motion.div
        {...(screenSide === 'left'
          ? ((drawerContentInitial[screenSide] = 0),
            (drawerContentInitial.x = -100))
          : ((drawerContentInitial[screenSide] = 0),
            (drawerContentInitial.x = 100)))}
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
    </motion.div>,
    portalNode
  )
}

export const Drawer = ({ isOpen = true, children, ...props }) => {
  return (
    <AnimatePresence>
      {isOpen && <DrawerPortal>{children}</DrawerPortal>}
    </AnimatePresence>
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
