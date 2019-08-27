const colors = {
  primary: '#D64A36',
  primaryAccent: '#EBA399',
  secondary: '#848484',
  success: '#6fb824',
  successAccent: '#F1F8E9',
  warning: '#f49c1a',
  warningAccent: '#FDF0DD',
  danger: '#ee3322',
  dangerAccent: '#FEEBE9',
  neutral: [
    '#FFF',
    '#F5F5F5',
    '#E7E7E6',
    '#C2C0C0',
    '#848484',
    '#50504B',
    '#14140A',
  ],
}

export default {
  fontSizes: [10, 12, 14, 16, 18, 21, 34],
  colors: colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  buttons: {
    primary: {
      color: colors.neutral[0],
      backgroundColor: colors.primary,
    },
    secondary: {
      color: colors.neutral[0],
      backgroundColor: colors.secondary,
    },
    success: {
      color: colors.neutral[0],
      backgroundColor: colors.success,
    },
    warning: {
      color: colors.neutral[0],
      backgroundColor: colors.warning,
    },
    danger: {
      color: colors.neutral[0],
      backgroundColor: colors.danger,
    },
    default: {
      color: colors.neutral[5],
      backgroundColor: colors.neutral[0],
    },
  },
  borders: {
    light: { border: '1px solid rgba(255, 255, 255, 0.5)' },
    dark: { border: '1px solid rgba(0, 0, 0, 0.24)' },
    none: { border: '1px solid transparent' },
  },
}

export const spacing = {
  extraLarge: '32px',
  large: '24px',
  medium: '16px',
  small: '8px',
  extraSmall: '4px',
}
