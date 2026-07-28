import { sharedColors } from './shared'
import { tokkobroker } from './tokkobroker'

export const TOKKOBROKER = 'tokkobroker'

/**
 * Resolve the color palette and font family for a brand.
 *
 * Tokko Broker is the only brand shipped with the library. Hosts that render
 * another brand pass its tokens in, so the palette lives with whoever owns it
 * instead of being baked into a published package.
 *
 * A brand only lists what differs from Tokko Broker; every key left out falls
 * back, so partial overrides are valid.
 *
 * @param {Object} [brand] Brand tokens: `{ name, colors, fontFamily }`.
 * @returns {Object} Resolved `{ name, colors, fontFamily }`.
 */
export const getBrandTokens = (brand) => {
  const overrides = brand || {}

  return {
    name: overrides.name || TOKKOBROKER,
    colors: { ...sharedColors, ...tokkobroker.colors, ...overrides.colors },
    fontFamily: overrides.fontFamily || tokkobroker.fontFamily,
  }
}
