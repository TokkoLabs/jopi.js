import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '@oneloop/theme'

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

configure(require.context('../packages/', true, /\.stories\.js$/), module)
