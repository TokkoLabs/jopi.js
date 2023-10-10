import React from 'react'

import { Badge } from '.'
import { Text } from '@oneloop/text'

export default {
  component: Badge,
  title: 'Badge',
  argTypes: {
    variant: {
      name: 'variant',
      description: '\n* **Variantes de badge disponibles:** [ \'badgeNormal\', \'badgeMedium\', \'badgeBig\', ' +
        '\'badgeCircle\', \'badgeIcon\', \'badgeInfo\', \'badgeInfoRow\', \'badgeReportRow\', ' +
        '\'badgeSendRow\', \'badgeErrorRow\', \'badgeSupportRow\', \'badgeTips\', ' +
        '\'badgeYellow\', \'badgeAdded\', \'badgeRemoved\', ' +
        '\n* **Variantes de inline badge disponibles:** [ \'badgeInlineLarge\', \'badgeInlineMedium\', \'badgeInlineSmall\', ' +
        '\'badgeRounded\', \'badgeSquare\', \'inlineError\', \'inlineErrorSubtle\', \'inlineAlertSubtle\' ]' +
        '\'inlineInfo\', \'inlineInfoSubtle\', \'inlineSuccessDark\', \'inlineSuccessDarkSubtle\', \'inlineDark\' ]' +
        '\'inlineDarkSubtle\', \'badgeUppercase\' ]',
      type: 'text',
      control: { type: 'none' },
    },
    isNotButton: {
      name: 'isNotButton',
      description: 'Booleano que indica si funciona como button o no.',
      type: 'bool',
      control: { type: 'none' },
    },
  },
}

export const primary = () => <Badge>{'20'}</Badge>

export const secondary = () => <Badge variant={['badgeNormal', 'secondary']}>{'2'}</Badge>

export const icon = () => (
  <Badge variant={['badgeMedium', 'badgeIcon', 'badgeInfo']}>
    <span className='icon-ver' style={{ position: 'absolute', fontSize: '12px', paddingTop: '0.5px' }}/>
    <span style={{ paddingLeft: '16px' }}>{'55'}</span>
  </Badge>
)

export const redTokko = () => <Badge variant={['badgeNormal', 'badgeTips']}>{'50%'}</Badge>

export const added = () => <Badge variant={['badgeNormal', 'badgeAdded']}>{'+100'}</Badge>

export const addedMaxValue = () => <Badge variant={['badgeNormal', 'badgeAdded']}>{'100+'}</Badge>

export const removed = () => <Badge variant={['badgeNormal', 'badgeRemoved']}>{'-100'}</Badge>

export const iconRounded = () => (
  <Badge variant={['badgeBig', 'badgeCircle', 'badgeInfo']}>
    <Text variatn="bodyBold.fontSize12">SE</Text>
  </Badge>
)

export const inlineError = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineError']}>{'New results'}</Badge>

export const inlineErrorSubtle = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineErrorSubtle']}>{'New results'}</Badge>

export const inlineAlert = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineAlert']}>{'New results'}</Badge>

export const inlineAlertSubtle = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineAlertSubtle']}>{'New results'}</Badge>

export const inlineInfo = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineInfo']}>{'New results'}</Badge>

export const inlineInfoSubtle = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineInfoSubtle']}>{'New results'}</Badge>

export const inlineSuccessDark = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineSuccessDark']}>{'New results'}</Badge>

export const inlineSuccessDarkSubtle = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineSuccessDarkSubtle']}>{'New results'}</Badge>

export const inlineDark = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineDark']}>{'New results'}</Badge>

export const inlineDarkSubtle = () => <Badge variant={['badgeInlineLarge', 'badgeSquare', 'inlineDarkSubtle']}>{'New results'}</Badge>

export const inlineErrorLargeRounded = () => <Badge variant={['badgeInlineLarge', 'badgeRounded', 'inlineError']}>{'New results'}</Badge>

export const inlineErrorMediumRounded = () => <Badge variant={['badgeInlineMedium', 'badgeRounded', 'inlineError']}>{'New results'}</Badge>

export const inlineErrorSmallRounded = () => <Badge variant={['badgeInlineSmall', 'badgeRounded', 'inlineError']}>{'New results'}</Badge>

export const inlineErrorLargeRoundedUppercase = () => <Badge variant={['badgeInlineLarge', 'badgeRounded', 'inlineError', 'badgeUppercase']}>{'New results'}</Badge>
