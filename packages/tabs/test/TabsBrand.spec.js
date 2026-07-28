import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@quintoandar-tokko/theme'
import 'jest-styled-components'

import { Tabs } from '../src'

const demoBrand = {
  name: 'demo',
  colors: {
    primary: '#118C4F',
  },
  fontFamily: '"Demo Sans", sans-serif',
}

const renderTabs = (brand) =>
  renderer
    .create(
      <ThemeProvider theme={createTheme(brand)}>
        <Tabs>
          <Tabs.Tab variant="minimal" id="one">
            One
          </Tabs.Tab>
          <Tabs.Tab variant="minimal" id="two">
            Two
          </Tabs.Tab>
        </Tabs>
      </ThemeProvider>
    )
    .toJSON()

// itemTabSelected defaults to 1, so the second tab is the active one.
const activeTab = (tree) => tree.children[1]
const activeUnderline = (tree) => activeTab(tree).children[1]

describe('Tabs brand switching', () => {
  it('uses the Tokko Broker font and primary color', () => {
    const tree = renderTabs()

    expect(activeTab(tree)).toHaveStyleRule('font-family', /"Nunito Sans"/)
    expect(activeUnderline(tree)).toHaveStyleRule('border', /#DF1E02/)
  })

  it('uses the font and primary color of the host brand', () => {
    const tree = renderTabs(demoBrand)

    expect(activeTab(tree)).toHaveStyleRule('font-family', /"Demo Sans"/)
    expect(activeUnderline(tree)).toHaveStyleRule('border', /#118C4F/)
  })

  it('renders no brand color from the other brand', () => {
    const demo = JSON.stringify(renderTabs(demoBrand))

    expect(demo).not.toContain('#DF1E02')
  })
})
