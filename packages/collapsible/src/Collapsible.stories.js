import React from 'react'

import { Collapsible } from '.'
import { Button } from '@oneloop/button'

export default {
  component: Collapsible,
  title: 'Collapsible',
}

export const normal = () =>
  React.createElement(() => {
    const [open, setOpen] = React.useState(false)
    return (
      <Collapsible width={1 / 3} isOpen={open}>
        <Collapsible.Button
          onClick={() => setOpen(!open)}
          variant="default"
          borderBottom="1px solid #e7e7e6"
        >
          Estado
        </Collapsible.Button>
        <Collapsible.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Collapsible.Body>
      </Collapsible>
    )
  })

export const menu = () =>
  React.createElement(() => {
    const [open0, setOpen0] = React.useState(false)
    const [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)

    const [active0, setActive0] = React.useState(false)
    const [active1, setActive1] = React.useState(false)
    const [active2, setActive2] = React.useState(false)

    const closeAllExcep = (excep) => {
      setOpen0(excep === 0 ? !open0 : false)
      setOpen1(excep === 1 ? !open1 : false)
      setOpen2(excep === 2 ? !open2 : false)
      setActive0(excep === 0)
      setActive1(excep === 1)
      setActive2(excep === 2)
    }

    return (
      <>
        <Collapsible width={1 / 3} isOpen={open0}>
          <Collapsible.Button
            isMainButton
            onClick={() => closeAllExcep(0)}
            variant="mainButtonCollapsible"
            icon="icon-emprendimientos"
            text={'Emprendimientos'}
            isExpanded={open0}
            isActive={active0}
          >
          </Collapsible.Button>
          <Collapsible.Body>
            <Button variant="subtleText">{'User management'}</Button>
            <Button variant="subtleText">{'Configuration'}</Button>
          </Collapsible.Body>
        </Collapsible>

        <Collapsible width={1 / 3} isOpen={open1}>
          <Collapsible.Button
            isMainButton
            onClick={() => closeAllExcep(1)}
            variant="mainButtonCollapsible"
            icon="icon-emprendimientos"
            text={'Emprendimientos'}
            isExpanded={open1}
            isActive={active1}
          >
          </Collapsible.Button>
          <Collapsible.Body>
            <Button variant="subtleText" style={{ padding: '8px 0 8px 40px', height: '32px', fontSize: '11px', lineHeight: '13px' }}>{'User management'}</Button>
            <Button variant="subtleText" style={{ padding: '8px 0 8px 40px', height: '32px', fontSize: '11px', lineHeight: '13px' }}>{'Configuration'}</Button>
          </Collapsible.Body>
        </Collapsible>

        <Collapsible width={1 / 3} isOpen={open2}>
          <Collapsible.Button
            isMainButton
            onClick={() => closeAllExcep(2)}
            variant="mainButtonCollapsible"
            icon="icon-emprendimientos"
            text={'Emprendimientos'}
            isExpanded={open2}
            isActive={active2}
            badgeValue={2}
          >
          </Collapsible.Button>
        </Collapsible>
      </>
    )
  })

export const menuCollapsed = () =>
  React.createElement(() => {
    const [open0, setOpen0] = React.useState(false)
    const [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)

    const [active0, setActive0] = React.useState(false)
    const [active1, setActive1] = React.useState(false)
    const [active2, setActive2] = React.useState(false)

    const closeAllExcep = (excep) => {
      setOpen0(excep === 0 ? !open0 : false)
      setOpen1(excep === 1 ? !open1 : false)
      setOpen2(excep === 2 ? !open2 : false)
      setActive0(excep === 0)
      setActive1(excep === 1)
      setActive2(excep === 2)
    }

    return (
      <>
        <Collapsible width={1 / 3} isOpen={open0}>
          <Collapsible.Button
            isSmallButtonIcon
            onClick={() => closeAllExcep(0)}
            variant="mainButtonCollapsible"
            icon="icon-emprendimientos"
            isExpanded={open0}
            isActive={active0}
          >
          </Collapsible.Button>
          <Collapsible.Body>
            <Button variant="subtleText">{'User management'}</Button>
            <Button variant="subtleText">{'Configuration'}</Button>
          </Collapsible.Body>
        </Collapsible>

        <Collapsible width={1 / 3} isOpen={open1}>
          <Collapsible.Button
            isSmallButtonIcon
            onClick={() => closeAllExcep(1)}
            variant="mainButtonCollapsible"
            icon="icon-emprendimientos"
            isExpanded={open1}
            isActive={active1}
          >
          </Collapsible.Button>
          <Collapsible.Body>
            <Button variant="subtleText" style={{ padding: '8px 0 8px 40px', height: '32px', fontSize: '11px', lineHeight: '13px' }}>{'User management'}</Button>
            <Button variant="subtleText" style={{ padding: '8px 0 8px 40px', height: '32px', fontSize: '11px', lineHeight: '13px' }}>{'Configuration'}</Button>
          </Collapsible.Body>
        </Collapsible>

        <Collapsible width={1 / 3} isOpen={open2}>
          <Collapsible.Button
            isSmallButtonIcon
            onClick={() => closeAllExcep(2)}
            variant="mainButtonCollapsible"
            icon="icon-emprendimientos"
            isExpanded={open2}
            isActive={active2}
            badgeValue={200}
          >
          </Collapsible.Button>
        </Collapsible>
      </>
    )
  })
