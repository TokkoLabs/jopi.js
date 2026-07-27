import React, { useEffect, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@quintoandar-tokko/theme'

/**
 * Brand entry point for every jopi component.
 *
 * Renders Tokko Broker by default. A host that ships another brand owns its
 * palette and passes it in as `brand={{ name, colors, fontFamily }}`, listing
 * only what differs.
 *
 * It also mirrors `theme.brand` onto `<html data-theme>`, which is what CSS
 * custom properties key off. Hosts that manage that attribute themselves can
 * opt out with `syncDocumentTheme={false}`.
 *
 * `brand` must be a stable reference (a module-level constant, not an inline
 * object literal), otherwise every render rebuilds the theme and restyles the
 * whole tree.
 */
export const JopiThemeProvider = ({
  brand,
  syncDocumentTheme = true,
  children,
}) => {
  const theme = useMemo(() => createTheme(brand), [brand])

  useEffect(() => {
    if (!syncDocumentTheme || typeof document === 'undefined') return

    document.documentElement.setAttribute('data-theme', theme.brand)
  }, [theme.brand, syncDocumentTheme])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
