import React, { useState, createContext, useContext } from 'react'
import { Box } from '@oneloop/box'
import { useToggle } from '@oneloop/hooks'
import theme from '@oneloop/theme'

const TabsContext = createContext()

export const Tabs = ({ children, firstTabSelected = true, ...props }) => {
  const tabChildren = React.Children.toArray(children).filter(
    child => child.type.name === 'Tab'
  )
  const [active, setActive] = useState(firstTabSelected && tabChildren[0] !== undefined && tabChildren[0].props.id)
  const value = React.useMemo(() => ({ active, setActive }), [active])
  const contentChildren = React.Children.toArray(children).filter(
    child => child.type.name === 'Content'
  )

  return (
    <TabsContext.Provider value={value}>
      <Box
        {...props}
        __css={{
          alignItems: 'center',
          alignContent: 'stretch',
          justifyContent: 'center',
          display: 'grid',
          gridGap: 'var(--grid-gap, 0)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
        }}>
        {tabChildren}
      </Box>
      {contentChildren.length > 0 && (
        <Box __css={{ paddingTop: '10px' }}>{contentChildren}</Box>
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
  const variantValues = Object.values(theme.tab)[Object.keys(theme.tab).indexOf(variant)]
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
        fontFamily: 'Nunito Sans',
        textTransform: 'uppercase',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
            border: variant === 'normal' ? undefined : '1px solid ' + color,
            position: 'absolute',
            right: variant === 'normal' ? '10px' : 'calc(25%)',
            left: variant === 'normal' ? '10px' : 'calc(25%)',
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
