import defaultTheme, { createTheme, TOKKOBROKER } from '../src'
import { sharedColors } from '../src/brands/shared'

const demoBrand = {
  name: 'demo',
  colors: {
    primary: '#118C4F',
    primaryHover: '#0E7342',
  },
  fontFamily: '"Demo Sans", sans-serif',
}

describe('createTheme', () => {
  it('defaults to the Tokko Broker brand', () => {
    expect(defaultTheme.brand).toBe(TOKKOBROKER)
    expect(createTheme().brand).toBe(TOKKOBROKER)
  })

  it('keeps the Tokko Broker brand colors', () => {
    const { colors } = createTheme()
    expect(colors.primary).toBe('#DF1E02')
    expect(colors.secondary).toBe('#1A4958')
  })

  it('applies the colors a host brand provides', () => {
    const { colors, brand } = createTheme(demoBrand)

    expect(brand).toBe('demo')
    expect(colors.primary).toBe('#118C4F')
    expect(colors.primaryHover).toBe('#0E7342')
  })

  it('switches the font family per brand', () => {
    expect(createTheme().fonts.primary).toBe('"Nunito Sans", sans-serif')
    expect(createTheme(demoBrand).fonts.primary).toBe('"Demo Sans", sans-serif')
  })

  it('falls back to Tokko Broker for anything the brand leaves out', () => {
    const tokko = createTheme().colors
    const demo = createTheme(demoBrand).colors

    expect(demo.secondary).toBe(tokko.secondary)
    expect(demo.primaryAccent).toBe(tokko.primaryAccent)
  })

  it('never overrides the shared colors', () => {
    const tokko = createTheme().colors
    const demo = createTheme(demoBrand).colors

    Object.keys(sharedColors).forEach((key) => {
      expect(demo[key]).toEqual(tokko[key])
    })
  })

  it('propagates the brand to the variants that consume the palette', () => {
    const { buttons } = createTheme(demoBrand)

    expect(buttons.primary.backgroundColor).toBe('#118C4F')
    expect(buttons.primary[':hover'].backgroundColor).toBe('#0E7342')
  })

  it('applies the brand font and multi-font-safe metrics on tags', () => {
    const tokko = createTheme()
    expect(tokko.tags.secondary.fontFamily).toBe('"Nunito Sans", sans-serif')
    expect(tokko.tags.secondary.lineHeight).toBe('16px')
    expect(tokko.tags.secondary.minHeight).toBe('20px')
    expect(tokko.tags.secondary.height).toBeUndefined()

    const demo = createTheme(demoBrand)
    expect(demo.tags.warning.fontFamily).toBe('"Demo Sans", sans-serif')
    expect(demo.tags.default.lineHeight).toBe('16px')
  })

  it('resolves onBrand from optional badge tokens, defaulting to primary-500', () => {
    expect(createTheme().buttons.onBrand.backgroundColor).toBe('#DF1517')
    expect(createTheme(demoBrand).buttons.onBrand.backgroundColor).toBe(
      '#DF1517'
    )
    expect(createTheme().buttons.onBrand.color).toBe('#FFFFFF')

    const withOnBrand = createTheme({
      ...demoBrand,
      colors: {
        ...demoBrand.colors,
        badgeOnBrand: '#062756',
        badgeOnBrandText: '#CCDAF6',
      },
    })

    expect(withOnBrand.buttons.onBrand.backgroundColor).toBe('#062756')
    expect(withOnBrand.buttons.onBrand.color).toBe('#CCDAF6')
  })

  it('keeps the same theme shape across brands', () => {
    expect(Object.keys(createTheme(demoBrand)).sort()).toEqual(
      Object.keys(createTheme()).sort()
    )
  })
})
