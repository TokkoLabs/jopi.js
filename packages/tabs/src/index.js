import React, { useState, createContext, useContext } from 'react'
import { Box } from '@oneloop/box'
import { useToggle } from '@oneloop/hooks'
import theme from '@oneloop/theme'

const TabsContext = createContext()

export const Tabs = ({ children, ...props }) => {
  const [active, setActive] = useState()
  const value = React.useMemo(() => ({ active, setActive }), [active])
  const tabChildren = React.Children.toArray(children).filter(
    child => child.type.name === 'Tab'
  )
  const contentChildren = React.Children.toArray(children).filter(
    child => child.type.name === 'Content'
  )

  return (
    <TabsContext.Provider value={value}>
      <Box {...props} __css={{ display: 'inline-flex' }}>
        {tabChildren}
      </Box>
      {contentChildren.length > 0 && (
        <Box __css={{ padding: '10px' }}>{contentChildren}</Box>
      )}
    </TabsContext.Provider>
  )
}

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error(
      'Tabs compound components cannot be rendered outside the Tabs component'
    )
  }
  return context
}

const Tab = ({ id, children, variant = 'normal', variantBody = 'body600', variantFont = 'fontSize12', ...props }) => {
  const { active, setActive } = useTabsContext()
  const [hover, setHover] = useToggle(false)
  const fontText = Object.values(theme.text[variantBody][variantFont])
  let color
  let variantValues = Object.values(theme.tab)[Object.keys(theme.tab).indexOf(variant)]
  if (Array.isArray(variant)) {
    const indexes = variant.map(v => Object.keys(theme.tab).indexOf(v))
    indexes.map(index => {
      if (index !== -1 && Object.values(theme.tab)[index].color !== undefined) {
        variantValues = Object.values(theme.tab)[index]
      }
      return color
    })
  }
  color = variantValues.color
  if (active === id) {
    color = variantValues[':focus'].color
  } else if (hover) {
    color = variantValues[':hover'].color
  }

  return (
    <Box
      tx='tab'
      variant={variant}
      onClick={() => setActive(id)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...props}
      __css={{
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'heading',
        textTransform: 'uppercase',
        textAlign: 'center',
        '*': {
          textDecoration: 'none',
          color: color,
        },
        a: {
          display: 'block',
          width: '148px',
          height: '52px',
          lineHeight: '52px',
        },
        'a > *:first-child': {
          marginRight: '10px',
        },
        fontSize: fontText[0],
        fontWeight: fontText[1],
        lineHeight: fontText[2],
      }}
    >
      {children}
      {(active === id || (variant !== 'normal' && hover)) && (
        <Box
          as="span"
          __css={{
            borderRadius: variant === 'normal' ? '4px 4px 0 0' : '4px',
            height: variant === 'normal' ? '4px' : undefined,
            display: 'block',
            backgroundColor: color,
            border: variant === 'normal' ? undefined : '2px solid ' + color,
            position: 'absolute',
            right: variant === 'normal' ? '10px' : '8px',
            left: variant === 'normal' ? '10px' : '8px',
            bottom: 0,
          }}
        />
      )}
    </Box>
  )
}

const Content = ({ id, children, ...props }) => {
  const { active } = useTabsContext()
  return active === id && <Box {...props}>{children}</Box>
}

Tabs.Tab = Tab
Tabs.Content = Content
