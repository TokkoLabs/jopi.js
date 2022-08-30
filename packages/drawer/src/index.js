import React from 'react'
import { Box, Flex } from '@oneloop/box'
import { motion, AnimatePresence } from 'framer-motion'

export const Drawer = ({
  isOpen = true,
  isCollapse,
  children,
  screenSide,
  animationWidth,
  animationMinWidth,
  overlay,
  heightMin,
  heightMax,
  transparent,
  borderRadiusClosed,
  topClosed,
  animationDuration,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerMotion screenSide={screenSide} animationWidth={animationWidth} animationMinWidth={animationMinWidth}
          overlay={overlay} isCollapse={isCollapse} heightMin={heightMin} heightMax={heightMax} transparent={transparent}
          borderRadiusClosed={borderRadiusClosed} topClosed={topClosed} animationDuration={animationDuration} {...props}>
          {children}
        </DrawerMotion>
      )}
    </AnimatePresence>
  )
}

const DrawerMotion = ({
  isCollapse,
  children,
  screenSide,
  animationWidth = 1000,
  animationMinWidth = 82,
  overlay,
  heightMin,
  heightMax = '100%',
  transparent,
  borderRadiusClosed,
  topClosed,
  animationDuration = 0.5,
  ...props
}) => {
  const variantsOverlay = {
    open: { opacity: 1 },
    closed: { opacity: 0, transition: { delay: 0.3 } },
  }

  const variantsDrawer = {
    open: { x: 0 },
    closed: { x: 1000 },
  }

  const variantsDrawerMenu = {
    open: { width: animationWidth },
    closed: { width: animationMinWidth },
  }

  const variantsDrawerTransparent = {
    open: {
      width: animationWidth,
      backgroundColor: ['hsla(255, 255, 255, 1)', 'hsla(255, 255, 255, 0)'],
      height: heightMax,
      boxShadow: 'none',
    },
    closed: {
      width: animationMinWidth,
      backgroundColor: ['hsla(255, 255, 255, 0)', 'hsla(255, 255, 255, 1)'],
      height: heightMin,
      boxShadow: ' 0px 2px 2px rgba(0, 0, 0, 0.05)',
      borderRadius: borderRadiusClosed,
      top: topClosed,
    },
  }

  const drawerOverlayInitial = {
    backgroundColor: 'rgba(4, 4, 4, 0.79)',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 101,
  }

  const drawerContentInitial = {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    maxWidth: '100%',
    minWidth: '0px',
    width: animationWidth,
    boxShadow: 'none',
    overflowY: 'auto',
    padding: '10px',
  }

  const drawerMenuContentInitial = {
    backgroundColor: 'white',
    top: 0,
    height: '100%',
    maxWidth: '100%',
    width: animationWidth,
    overflowY: 'auto',
    padding: '10px',
    overflow: 'visible',
    zIndex: 100,
  }

  drawerContentInitial[screenSide] = 0

  if (screenSide === 'left') {
    drawerContentInitial.x = animationWidth * -1
    variantsDrawer.closed.x = animationWidth * -1
    drawerMenuContentInitial.left = 0
    drawerMenuContentInitial.position = 'relative'
    drawerMenuContentInitial.boxShadow = '5px 0 5px -5px rgba(0, 0, 0, 0.15)'
  } else {
    drawerContentInitial.x = animationWidth
    variantsDrawer.closed.x = animationWidth
    drawerMenuContentInitial.right = 0
    drawerMenuContentInitial.position = 'absolute'
    drawerMenuContentInitial.boxShadow = '0px 5px 5px rgba(0, 0, 0, 0.05)'
  }

  if (overlay) {
    return (
      <motion.div
        key="drawerOverlay"
        variants={variantsOverlay}
        initial={drawerOverlayInitial}
        animate="open"
        exit="closed"
      >
        <motion.div
          key="drawerContent"
          variants={variantsDrawer}
          initial={drawerContentInitial}
          exit="closed"
          transition={{ duration: animationDuration }}
        >
          {children}
        </motion.div>
      </motion.div>
    )
  } else {
    return (
      <motion.div
        key="drawerContent"
        variants={ transparent ? variantsDrawerTransparent : variantsDrawerMenu}
        initial={drawerMenuContentInitial}
        animate={ isCollapse ? 'open' : 'closed' }
        transition={{ duration: animationDuration }}
      >
        {children}
      </motion.div>
    )
  }
}

const DrawerHeader = (props) => (
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

const DrawerBody = (props) => <Box {...props} />

const DrawerFooter = (props) => (
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
