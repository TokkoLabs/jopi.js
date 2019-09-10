import React, { createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'
import { Add, Substract } from '@oneloop/icons'
import { Box } from '@oneloop/box'

const CollapsibleContext = createContext()

export const Collapsible = ({ children, isOpen, ...props }) => {
  const [open, setOpen] = useToggle(isOpen)

  const value = React.useMemo(() => ({ open, setOpen }), [open])

  return (
    <CollapsibleContext.Provider value={value}>
      <Box {...props}>{children}</Box>
    </CollapsibleContext.Provider>
  )
}

const useCollapsibleContext = () => {
  const context = useContext(CollapsibleContext)
  if (!context) {
    throw new Error(
      `Collapsible compound components cannot be rendered outside the Collapsible component`
    )
  }
  return context
}

const CollapsibleButton = ({ children, ...props }) => {
  const { open, setOpen } = useCollapsibleContext()
  return (
    <Button
      {...props}
      onClick={setOpen}
      sx={{
        width: '100%',
        border: 'none',
        borderRadius: '0',
        padding: '10px 0',
        textAlign: 'left',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        '+ .content': {
          overflow: 'hidden',
        },
      }}
    >
      {children}
      {open ? <Substract color="#717171" /> : <Add color="#717171" />}
    </Button>
  )
}

const CollapsibleBody = ({ children }) => {
  const { open } = useCollapsibleContext()

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          className="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: 'auto' },
            collapsed: { height: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Collapsible.Button = CollapsibleButton
Collapsible.Body = CollapsibleBody
