import React, { createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@oneloop/button'
import { useToggle } from '@oneloop/hooks'

const CollapsibleContext = createContext()

export const Collapsible = ({ children, isOpen, ...props }) => {
  const [open, setOpen] = useToggle(isOpen)

  const value = React.useMemo(() => ({ open, setOpen }), [open])

  return (
    <CollapsibleContext.Provider value={value}>
      {children}
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

const CollapsibleButton = props => {
  const { setOpen } = useCollapsibleContext()
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
        '+ .content': {
          overflow: 'hidden',
        },
        '&:after': {
          float: 'right',
          fontSize: '16px',
          margin: '-4px 0 0 5px',
        },
      }}
    />
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
