import React, { useState, createContext, useContext } from 'react'
import { Box } from '@oneloop/box'
import { useToggle } from '@oneloop/hooks'
import theme from '@oneloop/theme'

const TabsContext = createContext()

export const Tabs = ({
  children,
  variant = 'normal',
  itemTabSelected = 1,
  ...props
}) => {
  const tabChildren = React.Children.toArray(children).filter(
    (child) => child.type.name === 'Tab' || child.key.toString().match('Tab')
  )
  const [active, setActive] = useState(
    itemTabSelected &&
      tabChildren[itemTabSelected] !== undefined &&
      tabChildren[itemTabSelected].props.id
  )
  const value = React.useMemo(() => ({ active, setActive }), [active])
  const contentChildren = React.Children.toArray(children).filter(
    (child) =>
      child.type.name === 'Content' || child.key.toString().match('Content')
  )

  return (
    <TabsContext.Provider value={value}>
      <Box {...props} tx="tabs" variant={variant}>
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

const Tab = ({
  id,
  children,
  variant = 'normal',
  variantBody = 'body600',
  variantFont = 'fontSize12',
  onClick,
  refTab,
  ...props
}) => {
  const { active, setActive } = useTabsContext()
  const [hover, setHover] = useToggle(false)
  const fontText = Object.values(theme.text[variantBody][variantFont])
  let color
  const variantValues = Object.values(theme.tab)[
    Object.keys(theme.tab).indexOf(variant)
  ]
  color = variantValues.color
  if (active === id) {
    color = variantValues[':focus'].color
  } else if (hover) {
    color = variantValues[':hover'].color
  }
  const onClickTab = () => {
    setActive(id)
    if (onClick) {
      onClick()
    }
  }
  return (
    <Box
      ref={refTab}
      tx="tab"
      variant={variant}
      onClick={() => onClickTab()}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...props}
      __css={{
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'Nunito Sans',
        textTransform: variant === 'minimal' ? 'none' : 'uppercase',
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
      {(active === id ||
        (variant !== 'normal' && hover) ||
        variant === 'minimal') && (
        <Box
          as="span"
          __css={{
            borderRadius: variant === 'normal' ? '4px 4px 0 0' : '4px',
            height: variant === 'normal' ? '4px' : undefined,
            display: 'block',
            backgroundColor: color,
            border:
              variant === 'normal'
                ? undefined
                : '1px solid ' + (active === id ? '#df1e02 !important' : color),
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
