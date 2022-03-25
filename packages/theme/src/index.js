const colors = {
  primary: '#DF1E02',
  primaryHover: '#FD2B0C',
  primaryPressed: '#FD4E34',
  primaryAccent: '#F6D4CF',
  secondary: '#1A4958',
  success: '#068B5B',
  error: '#B21702',
  info: '#386DF4',
  lightBlue: '#6A88F2',
  inputErrors: '#FFF2F0',
  inputBackground: '#F7F8FA',
  inputPlaceholderColor: '#A6B2BA',
  darkGray: '#6D777D',
  neutral: [
    '#FFF',
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
    color: colors.neutral[4],
    fontSize: fontSize[1],
    fontWeight: 'bold',
  },
}

const borders = {
  light: '1px solid rgba(255, 255, 255, 0.5)',
  dark: '1px solid rgba(0, 0, 0, 0.24)',
  primaryBorder: '1px solid ' + colors.primary,
  secondaryBorder: '1px solid ' + colors.neutral[4],
}

const switches = {
  primary: {
    border: `1px solid ${colors.neutral[3]}`,
    '&::before': {
      background: colors.neutral[4],
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
    background: colors.neutral[4],
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
      color: colors.neutral[4],
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
    primaryDisabled: {
      color: colors.neutral[4],
      backgroundColor: colors.neutral[7],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    secondary: {
      color: colors.primary,
      backgroundColor: colors.neutral[0],
      border: borders.primaryBorder,
      ':hover': {
        backgroundColor: colors.primary,
        color: colors.neutral[0],
      },
      ':focus': {
        backgroundColor: colors.primaryPressed,
        color: colors.neutral[0],
      },
    },
    secondaryDisabled: {
      color: colors.neutral[4],
      backgroundColor: colors.neutral[0],
      border: borders.secondaryBorder,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    text: {
      color: colors.primary,
      backgroundColor: colors.neutral[0],
      ':hover': {
        color: colors.neutral[8],
        backgroundColor: colors.neutral[0],
      },
      ':focus': {
        color: colors.primaryPressed,
        backgroundColor: colors.neutral[7],
      },
    },
    textDisabled: {
      color: colors.neutral[4],
      backgroundColor: colors.neutral[0],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    icon: {
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
    iconDisabled: {
      color: colors.neutral[4],
      backgroundColor: colors.neutral[7],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    link: {
      fontSize: fontSize[3],
      color: colors.info,
      backgroundColor: colors.neutral[0],
      ':hover': {
        color: colors.lightBlue,
        backgroundColor: colors.neutral[0],
      },
      ':focus': {
        color: colors.neutral[8],
        backgroundColor: colors.neutral[0],
      },
    },
    linkDisabled: {
      fontSize: fontSize[3],
      color: colors.neutral[7],
      backgroundColor: colors.neutral[0],
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    dropdown: {
      backgroundColor: colors.inputBackground,
      color: colors.inputPlaceholderColor,
      borderRadius: radius.input,
      fontSize: fontSize[3],
      fontWeight: 400,
      fontFamily: 'primary',
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
    