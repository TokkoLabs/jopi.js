import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex } from '@oneloop/box'
import { motion, AnimatePresence } from 'framer-motion'

export const Drawer = ({ isOpen = false, children, screenSide, ...props }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerPortal screenSide={screenSide}>{children}</DrawerPortal>
      )}
    </AnimatePresence>
  )
}

const variantsOverlay = {
  open: { opacity: 1 },
  closed: { opacity: 0, transition: { delay: 0.3 } },
}

const variantsDrawer = {
  open: { x: 0 },
  closed: { x: 1000 },
}

const DrawerPortal = ({ isOpen, children, screenSide, ...props }) => {
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
  }

  return ReactDOM.createPortal(
    <motion.div
      key="drawerOverlay"
      variants={variantsOverlay}
      initial={drawerOverlayInitial}
      animate="open"
      exit="closed"
    >
      <motion.div
        {...(screenSide === 'left'
          ? ((drawerContentInitial[screenSide] = 0),
            (drawerContentInitial.x = -100))
          : ((drawerContentInitial[screenSide] = 0),
            (drawerContentInitial.x = 1000)))}
        key="drawerContent"
        variants={variantsDrawer}
        initial={drawerContentInitial}
        exit="closed"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>,
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
