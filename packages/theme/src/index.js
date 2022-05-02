const colors = {
  primary: '#DF1E02',
  primaryHover: '#FD2B0C',
  primaryPressed: '#FD4E34',
  primaryAccent: '#F6D4CF',
  secondary: '#1A4958',
  secondaryHover: '#2D7D97',
  secondaryPressed: '#236377',
  subtle: '#707E86',
  subtleHover: '#4D5B64',
  subtlePressed: '#384248',
  disabled: '#C1CCD0',
  success: '#068B5B',
  error: '#B21702',
  backgroundError: '#FDDDD8',
  info: '#386DF4',
  lightBlue: '#6A88F2',
  inputErrors: '#FFF2F0',
  inputBackground: '#F7F8FA',
  inputPlaceholderColor: '#A6B2BA',
  darkGray: '#6D777D',
  feedback: '#048465',
  tips: '#FFD02A',
  badgeBackgroundSuccess: '#9EE4CB',
  badgeSuccess: '#048465',
  neutral: [
    '#FFFFFF',
    '#F5F5F5',
    '#E7E7E6',
    '#C2C0C0',
    '#C1CCD0',
    '#50504B',
    '#384248',
    '#EFF2F3',
    '#6D777D',
    '#F7F8FA',
    '#A6B2BA',
    '#E0E5E8',
  ],
}
const space = [0, 4, 6, 8, 12, 16, 24, 32, 64, 128, 256]
space.small = space[2]
space.medium = space[6]
space.large = space[8]

const fontSize = [9, 10, 12, 14, 16, 20, 24, 28]

const radius = {
  default: 4,
  button: 12,
  circle: 99999,
  input: 10,
}

const shadows = {
  active: '0px 0px 4px rgba(0, 0, 0, 0.12)',
}

const forms = {
  input: {
    borderRadius: radius.input,
    fontSize: fontSize[3],
    fontWeight: 400,
    '&:focus': {
      border: '1px solid #386DF4',
    },
    '&:disabled': {
      color: '#999999',
      backgroundColor: '#EBEBEB',
      cursor: 'not-allowed',
    },
  },
  label: {
    color: colors.disabled,
    fontSize: fontSize[1],
    fontWeight: 'bold',
  },
}

const borders = {
  light: '1px solid rgba(255, 255, 255, 0.5)',
  dark: '1px solid rgba(0, 0, 0, 0.24)',
  primaryBorder: '1px solid ' + colors.primary,
  secondaryBorder: '1px solid ' + colors.secondary,
  feedbackBorder: '1px solid ' + colors.feedback,
  disabledBorder: '1px solid ' + colors.disabled,
}

const switches = {
  primary: {
    border: `1px solid ${colors.neutral[3]}`,
    '&::before': {
      background: colors.disabled,
    },
    '&[aria-checked="true"]': {
      backgroundColor: 'neutral.0',
      '&::before': {
        bg: colors.primary,
      },
    },
  },
  alt: {
    border: borders.dark,
    background: colors.disabled,
    '&::before': {
      background: colors.neutral[0],
    },
    '&[aria-checked="true"]': {
      backgroundColor: colors.primary,
      '&::before': {
        background: colors.neutral[0],
      },
    },
  },
}

const theme = {
  fontSizes: fontSize,
  fonts: {
    primary: '"Nunito Sans", sans-serif',
    body: 'Superjopi, sans-serif',
    heading: 'Superjopi, sans-serif',
  },
  letterSpacings: {
    // heading: -0.9,
  },
  text: {
    heading: [
      {
        fontSize: fontSize[7],
      },
      {
        fontSize: fontSize[6],
      },
      {
        fontSize: fontSize[5],
      },
      {
        fontSize: fontSize[4],
      },
      {
        fontSize: fontSize[3],
      },
      {
        fontSize: fontSize[2],
      },
    ],
    subtitle: [
      {
        fontSize: fontSize[4],
        fontWeight: 400,
      },
      {
        fontSize: fontSize[3],
        fontWeight: 400,
      },
    ],
    label: {
      color: colors.disabled,
      fontSize: fontSize[1],
      fontWeight: 'bold',
    },
    button: [
      {
        fontSize: fontSize[3],
      },
      {
        fontSize: fontSize[2],
      },
    ],
    caption: [
      {
        textTransform: 'uppercase',
        fontSize: fontSize[1],
        fontWeight: 700,
      },
      {
        textTransform: 'uppercase',
        fontSize: fontSize[0],
        fontWeight: 700,
      },
      {
        fontSize: fontSize[0],
        fontWeight: 700,
      },
    ],
    body: [
      {
        fontSize: fontSize[2],
        fontWeight: 400,
      },
      {
        fontSize: fontSize[1],
        fontWeight: 400,
      },
    ],
    success: [
      {
        fontSize: fontSize[5],
        color: colors.success,
      },
    ],
    error: [
      {
        fontSize: fontSize[5],
        color: colors.error,
      },
    ],
    alert: [
      {
        fontSize: fontSize[5],
        color: colors.info,
      },
    ],
    inputMessageErrors: [
      {
        fontSize: fontSize[1],
        fontWeight: 400,
        color: colors.error,
      },
    ],
    // small: { fontSize: fontSize[0] },
  },
  colors: colors,
  space: space,
  buttons: {
    primary: {
      color: colors.neutral[0],
      backgroundColor: colors.primary,
      ':hover': {
        backgroundColor: colors.primaryHover,
        color: colors.neutral[0],
      },
      ':focus': {
        backgroundColor: colors.primaryPressed,
        color: colors.neutral[0],
      },
    },
    primaryDisabled: {
      color: colors.disabled,
      backgroundColor: colors.neutral[7],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    secondary: {
      color: colors.neutral[0],
      backgroundColor: colors.secondary,
      ':hover': {
        backgroundColor: colors.secondaryHover,
        color: colors.neutral[0],
      },
      ':focus': {
        backgroundColor: colors.secondaryPressed,
        color: colors.neutral[0],
      },
    },
    secondaryDisabled: {
      color: colors.disabled,
      backgroundColor: colors.neutral[0],
      border: borders.secondaryBorder,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    primaryText: {
      color: colors.primary,
      backgroundColor: colors.neutral[0],
      ':hover': {
        color: colors.primaryHover,
        backgroundColor: colors.neutral[0],
      },
      ':focus': {
        color: colors.primaryPressed,
        backgroundColor: colors.neutral[0],
      },
    },
    secondaryText: {
      color: colors.secondary,
      backgroundColor: colors.neutral[0],
      ':hover': {
        color: colors.secondaryHover,
        backgroundColor: colors.neutral[0],
      },
      ':focus': {
        color: colors.secondaryPressed,
        backgroundColor: colors.neutral[0],
      },
    },
    subtleText: {
      color: colors.subtle,
      backgroundColor: colors.neutral[0],
      ':hover': {
        color: colors.subtleHover,
        backgroundColor: colors.neutral[0],
      },
      ':focus': {
        color: colors.subtlePressed,
        backgroundColor: colors.neutral[0],
      },
    },
    textDisabled: {
      color: colors.disabled,
      backgroundColor: colors.neutral[0],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    iconPrimary: {
      backgroundColor: colors.primary,
      color: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.primaryHover,
        color: colors.neutral[0],
      },
      ':focus': {
        backgroundColor: colors.primaryPressed,
        color: colors.neutral[0],
      },
    },
    iconSecondary: {
      backgroundColor: colors.secondary,
      color: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.secondaryHover,
        color: colors.neutral[0],
      },
      ':focus': {
        backgroundColor: colors.secondaryPressed,
        color: colors.neutral[0],
      },
    },
    iconDisabled: {
      color: colors.disabled,
      backgroundColor: colors.neutral[7],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    primaryOutline: {
      backgroundColor: colors.neutral[0],
      color: colors.primary,
      border: borders.primaryBorder,
      ':hover': {
        backgroundColor: colors.primaryHover,
        color: colors.neutral[0],
        border: 'none',
      },
      ':focus': {
        backgroundColor: colors.primaryPressed,
        color: colors.neutral[0],
        border: 'none',
      },
    },
    secondaryOutlineIcon: {
      backgroundColor: colors.neutral[0],
      color: colors.secondary,
      border: borders.secondaryBorder,
      ':hover': {
        backgroundColor: colors.secondaryHover,
        color: colors.neutral[0],
        border: 'none',
      },
      ':focus': {
        backgroundColor: colors.secondaryPressed,
        color: colors.neutral[0],
        border: 'none',
      },
    },
    outlineDisabled: {
      color: colors.disabled,
      backgroundColor: colors.neutral[0],
      border: borders.disabledBorder,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    subtleIcon: {
      backgroundColor: colors.neutral[0],
      border: colors.neutral[0],
      color: colors.subtle,
      ':hover': {
        backgroundColor: colors.neutral[7],
        color: colors.subtleHover,
      },
      ':focus': {
        backgroundColor: colors.neutral[0],
        color: colors.subtlePressed,
      },
    },
    roundIconArrow: {
      backgroundColor: colors.neutral[7],
      border: colors.neutral[7],
      color: colors.subtle,
      ':hover': {
        backgroundColor: colors.neutral[11],
        color: colors.subtleHover,
      },
      ':focus': {
        backgroundColor: colors.neutral[0],
        color: colors.subtlePressed,
      },
    },
    colourFeedback: {
      backgroundColor: colors.feedback,
      border: borders.feedbackBorder,
      color: colors.neutral[0],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    link: {
      fontSize: fontSize[3],
      color: colors.info,
      backgroundColor: colors.neutral[0],
      whiteSpace: 'nowrap',
      ':hover': {
        color: colors.lightBlue,
        backgroundColor: colors.neutral[0],
        textDecoration: 'underline',
      },
      ':focus': {
        color: colors.neutral[8],
        backgroundColor: colors.neutral[0],
      },
    },
    linkSubtle: {
      fontSize: fontSize[3],
      color: colors.subtle,
      backgroundColor: colors.neutral[0],
      whiteSpace: 'nowrap',
      ':hover': {
        color: colors.subtleHover,
        backgroundColor: colors.neutral[0],
        textDecoration: 'underline',
      },
      ':focus': {
        color: colors.subtlePressed,
        backgroundColor: colors.neutral[0],
      },
    },
    linkDisabled: {
      fontSize: fontSize[3],
      color: colors.disabled,
      backgroundColor: colors.neutral[0],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    subtleButton: {
      color: colors.subtle,
      backgroundColor: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.neutral[0],
        color: colors.subtleHover,
      },
      ':focus': {
        backgroundColor: colors.neutral[7],
        color: colors.subtlePressed,
      },
    },
    mainButton: {
      color: colors.subtle,
      backgroundColor: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.neutral[7],
        fontWeight: 'normal',
        color: colors.subtlePressed,
      },
      ':focus': {
        backgroundColor: colors.neutral[0],
        fontWeight: 'bold',
        color: colors.subtlePressed,
      },
    },
    dropdown: {
      backgroundColor: colors.inputBackground,
      color: colors.inputPlaceholderColor,
      borderRadius: radius.input,
      fontSize: fontSize[3],
      fontWeight: 400,
      fontFamily: 'primary',
    },
    badgeInfo: {
      backgroundColor: colors.info,
    },
    badgeTips: {
      backgroundColor: colors.tips,
      color: colors.subtlePressed,
    },
    badgeAdded: {
      backgroundColor: colors.badgeBackgroundSuccess,
      color: colors.badgeSuccess,
    },
    badgeRemoved: {
      backgroundColor: colors.backgroundError,
      color: colors.error,
    },
  },
  borders: borders,
  forms: forms,
  radii: radius,
  shadows: shadows,
  loader: {
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
    },
  },
  switches: switches,
  variants: {
    avatar: {
      width: '30px',
      height: '30px',
      borderRadius: radius.circle,
    },
  },
}

export default theme
