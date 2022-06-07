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
  transparent: '#00000000',
  neutral3: '#6F838D',
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
    '#D4DBDE',
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
    large: {
      borderRadius: '12px',
      padding: '13px 26px 13px 26px',
      gap: '6px',
    },
    medium: {
      height: '38px',
      borderRadius: '10px',
      fontSize: '14px',
      padding: '10px 24px 10px 24px',
      gap: '4px',
    },
    small: {
      height: '32px',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '8px 14px 8px 14px',
      gap: '4px',
    },
    extraSmall: {
      height: '26px',
      borderRadius: '6px',
      fontSize: '12px',
      padding: '5px 12px 5px 12px',
      gap: '4px',
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
    iconLarge: {
      width: '48px',
      height: '48px',
      heightIcon: '24px',
    },
    iconMedium: {
      height: '38px',
      width: '38px',
      borderRadius: '10px',
      heightIcon: '24px',
    },
    iconSmall: {
      height: '32px',
      width: '32px',
      borderRadius: '9px',
      fontSize: '22px',
      heightIcon: '22px',
    },
    iconExtraSmall: {
      height: '26px',
      width: '26px',
      borderRadius: '6px',
      fontSize: '16px',
      heightIcon: '16px',
      py: '5px',
      px: '13px',
    },
    iconExtraSmall22px: {
      height: '22px',
      width: '22px',
      borderRadius: '6px',
      fontSize: '16px',
      heightIcon: '16px',
      py: '5px',
      px: '11px',
    },
    iconExtraSmall18px: {
      height: '18px',
      width: '18px',
      borderRadius: '5px',
      fontSize: '12px',
      heightIcon: '12px',
      py: '5px',
      px: '9px',
    },
    roundIconLarge: {
      borderRadius: 99999,
    },
    roundIconMedium: {
      borderRadius: 99999,
      height: '38px',
      width: '38px',
    },
    roundIconSmall: {
      borderRadius: 99999,
      height: '32px',
      width: '32px',
      fontSize: '22px',
    },
    roundIconExtraSmall: {
      borderRadius: 99999,
      height: '26px',
      width: '26px',
      fontSize: '16px',
      py: '5px',
      px: '12px',
    },
    roundIconExtraSmall22px: {
      borderRadius: 99999,
      height: '22px',
      width: '22px',
      fontSize: '16px',
      py: '4px',
      px: '10px',
    },
    roundIconExtraSmall18px: {
      borderRadius: 99999,
      height: '18px',
      width: '18px',
      fontSize: '12px',
      py: '4px',
      px: '8px',
    },
    roundLarge: {
      py: '13px',
      px: '26px',
    },
    roundMedium: {
      height: '38px',
      borderRadius: '20px',
      fontSize: '14px',
      padding: '10px 24px 10px 24px',
      gap: '4px',
    },
    roundSmall: {
      height: '32px',
      borderRadius: '16px',
      fontSize: '12px',
      padding: '8px 14px 8px 14px',
      gap: '4px',
    },
    roundExtraSmall: {
      height: '26px',
      borderRadius: '12px',
      fontSize: '12px',
      padding: '5px 12px 5px 12px',
      gap: '4px',
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
      colorActive: colors.subtlePressed,
      ':hover': {
        backgroundColor: colors.neutral[7],
        color: colors.subtleHover,
      },
      ':focus': {
        backgroundColor: colors.neutral[0],
        color: colors.subtlePressed,
        colorActive: colors.subtlePressed,
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
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.lightBlue,
        textDecoration: 'underline',
      },
      ':focus': {
        color: colors.neutral[8],
      },
    },
    linkSubtle: {
      fontSize: fontSize[3],
      color: colors.subtle,
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.subtleHover,
        textDecoration: 'underline',
      },
      ':focus': {
        color: colors.subtlePressed,
      },
    },
    linkDisabled: {
      fontSize: fontSize[3],
      color: colors.disabled,
      backgroundColor: colors.transparent,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
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
    subtleIconButton: {
      color: colors.neutral[10],
      backgroundColor: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.neutral[7],
        color: colors.subtleHover,
      },
      ':focus': {
        backgroundColor: colors.neutral[0],
        color: colors.subtlePressed,
      },
    },
    subtleTrasnparentIconClearButton: {
      color: colors.subtle,
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.subtleHover,
      },
      ':focus': {
        color: colors.subtlePressed,
      },
    },
    subtleTrasnparentIconObscureButton: {
      color: colors.neutral[7],
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.neutral[12],
      },
      ':focus': {
        color: colors.neutral[7],
      },
    },
    mainButton: {
      color: colors.subtle,
      backgroundColor: colors.transparent,
      ':hover': {
        backgroundColor: colors.neutral[7],
        fontWeight: 'normal',
        color: colors.subtlePressed,
      },
      ':focus': {
        backgroundColor: colors.transparent,
        fontWeight: 'bold',
        color: colors.subtlePressed,
      },
    },
    mainButtonCollapsible: {
      backgroundColor: colors.transparent,
      ':hover': {
        backgroundColor: colors.neutral[7],
      },
      ':focus': {
        backgroundColor: colors.transparent,
      },
    },
    mainItemSmall:{
      backgroundColor: colors.transparent,
      color: colors.neutral3,
      height: '28px',
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '16px',
      padding: '9px 12px 9px 12px',
      ':hover': {
        fontWeight: '600px',
        color: colors.subtlePressed,
      },
      ':focus': {
        color: colors.subtlePressed,
        fontWeight: 'bold',
      },
    },
    smallIconMainButton: {
      width: '32px',
      height: '32px',
      borderRadius: '9px',
      fontSize: '22px',
      heightIcon: '22px',
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.primary,
        backgroundColor: colors.neutral[7],
      },
      ':focus': {
        color: colors.primary,
        backgroundColor: colors.transparent,
      },
    },
    smallIconButtonTransparent: {
      width: '32px',
      height: '32px',
      borderRadius: '9px',
      gap: '10px',
      backgroundColor: colors.transparent,
      color: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.secondaryHover,
      },
      ':focus': {
        backgroundColor: colors.secondaryPressed
      },
    },
    whiteExtraSmall24px: {
      height: '24px',
      width: '24px',
      color: colors.neutral[0],
      backgroundColor: colors.transparent,
    },
    collapseButtonOpen: {
      color: colors.primary,
      backgroundColor: colors.neutral[0],
      border: colors.neutral[0],
      boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.15)',
      borderRadius: 99999,
      height: '24px',
      width: '24px',
      fontSize: '10px',
      heightIcon: '10px',
    },
    collapseButtonClosed: {
      color: colors.primary,
      backgroundColor: colors.neutral[0],
      border: colors.neutral[0],
      borderRadius: 99999,
      height: '24px',
      width: '24px',
      fontSize: '10px',
      transform: 'rotate(-180deg)',
      boxShadow: '-2px -1px 4px rgba(0, 0, 0, 0.15)',
    },
    userButton: {
      background: colors.transparent,
      padding: '0px',
      fontSize: '12px',
      flexGrow: 0,
      gap: '8px',
      ':hover': {
        color: colors.secondaryHover,
      },
      ':focus': {
        color: colors.secondaryPressed,
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
