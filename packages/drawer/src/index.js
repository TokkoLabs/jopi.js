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
            (drawerContentInitial.x = 1000)))}
        key="drawerContent"
        initial={drawerContentInitial}
        animate="moveIn"
        exit="moveOut"
        variants={{
          moveIn: {
            x: 0,
          },
          moveOut: {
            x: 1000,
          },
        }}
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
