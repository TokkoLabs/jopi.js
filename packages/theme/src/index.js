const colors = {
  alert: '#F4CD00',
  alertSubtle: '#FFF4BD',
  black: '#2F373D',
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
  success: '#068B5B',
  successDark: '#00B775',
  successDarker: '#00734A',
  error: '#B21702',
  backgroundError: '#FFF8F6',
  backgroundError2: '#FDDDD8',
  backgroundErrorRowTable: '#FFEDE8',
  borderRowTable: '#FFE0DC',
  backgroundAlert1: '#EEF4FE',
  backgroundAlert2: '#CEE0FC',
  backgroundCyan2: '#ECF0FD',
  backgroundSuccess: '#D9FFF1',
  darkRedTokko: '#A71601',
  disabled: '#C1CCD0',
  lightBlue: '#6A88F2',
  info: '#386DF4',
  infoAlert: '#4268EF',
  suportText: '#1A48EB',
  inputErrors: '#FFF2F0',
  inputBackground: '#F7F8FA',
  inputPlaceholderColor: '#A6B2BA',
  darkGray: '#6D777D',
  feedback: '#048465',
  tips: '#FFD02A',
  badgeBackgroundSuccess: '#9EE4CB',
  badgeSuccess: '#048465',
  mainButtonText: '#49565D',
  transparent: '#00000000',
  neutralGray1: '#344149',
  neutralGray2: '#485C66',
  neutralGray3: '#6B7C85',
  neutralGray4: '#94A2AB',
  neutralGray5: '#C7D1D7',
  neutralGray6: '#DDE5E9',
  neutralGray7: '#EFF3F5',
  neutralGray8: '#F3F6F8',
  neutralGray9: '#F3F6F8',
  white: '#FFFFFF',
  yellow: '#FFF502',
  petrokoPressed: '#3188A4',
  petrokoHeader: '#25697E',
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

const borders = {
  light: '1px solid rgba(255, 255, 255, 0.5)',
  dark: '1px solid rgba(0, 0, 0, 0.24)',
  primaryBorder: '1px solid ' + colors.primary,
  secondaryBorder: '1px solid ' + colors.secondary,
  feedbackBorder: '1px solid ' + colors.feedback,
  disabledBorder: '1px solid ' + colors.disabled,
  error: '1px solid ' + colors.error,
  backgroundError2: '1px solid ' + colors.backgroundError2,
  borderRowTable: '1px solid ' + colors.borderRowTable,
  backgroundAlert2: '1px solid ' + colors.backgroundAlert2,
  transparent: '1px solid ' + colors.transparent,
  neutralGray1: '1px solid ' + colors.neutralGray1,
  neutralGray2: '1px solid ' + colors.neutralGray2,
  neutralGray3: '1px solid ' + colors.neutralGray3,
  neutralGray4: '1px solid ' + colors.neutralGray4,
  neutralGray5: '1px solid ' + colors.neutralGray5,
  neutralGray6: '1px solid ' + colors.neutralGray6,
  neutralGray7: '1px solid ' + colors.neutralGray7,
  neutralGray8: '1px solid ' + colors.neutralGray8,
  neutralGray9: '1px solid ' + colors.neutralGray9,
}

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
    normal: {
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray9,
      '::placeholder': {
        color: colors.neutralGray2,
      },
    },
    hover: {
      backgroundColor: colors.neutralGray8,
      '::placeholder': {
        color: colors.black,
      },
    },
    active: {
      border: `1px solid ${colors.neutralGray3}`,
      backgroundColor: colors.neutralGray8,
    },
    filled: {
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray8,
    },
  },
  inputFocus: {
    border: '1px solid #386DF4',
    boxShadow: '2px 2px 6px rgba(56, 109, 244, 0.2)',
    backgroundColor: colors.neutralGray9,
  },
  inputError: {
    color: colors.error,
    border: borders.error,
    backgroundColor: colors.backgroundError,
    '::placeholder': {
      color: '#B21702',
    },
  },
  inputDisabled: {
    color: colors.neutralGray6,
    cursor: 'not-allowed',
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: colors.neutralGray9,
    '::placeholder': {
      color: colors.neutralGray6,
    },
  },
  inputReadonly: {
    border: 'none',
    backgroundColor: 'none',
    cursor: 'not-allowed',
    pointerEvents: 'none',
    userSelect: 'none',
    color: colors.neutralGray1,
    '::placeholder': {
      color: colors.neutralGray1,
    },
  },
  inputTransparent: {
    normal: {
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
    },
    hover: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
    },
    active: {
      border: '1px solid #AEBAC0',
      backgroundColor: colors.neutralGray9,
    },
    filled: {
      color: colors.neutralGray1,
      border: 'none',
      backgroundColor: colors.transparent,
    },
  },
  inputSearch: {
    normal: {
      color: colors.neutralGray3,
      backgroundColor: colors.neutralGray9,
      '::placeholder': {
        color: colors.neutralGray3,
      },
    },
    hover: {
      color: colors.neutralGray4,
      backgroundColor: colors.neutralGray9,
      '::placeholder': {
        color: colors.neutralGray4,
      },
    },
    active: {
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray9,
      '::placeholder': {
        color: colors.neutralGray5,
      },
    },
    loading: {
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray9,
    },
    filled: {
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray9,
    },
  },
  inputSearchTransparent: {
    normal: {
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
      '::placeholder': {
        color: colors.neutralGray3,
      },
    },
    hover: {
      color: colors.neutralGray4,
      backgroundColor: colors.transparent,
      '::placeholder': {
        color: colors.neutralGray4,
      },
    },
    active: {
      border: '1px solid #AEBAC0',
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray9,
      '::placeholder': {
        color: colors.neutralGray5,
      },
    },
    loading: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
    },
    filled: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
    },
  },
  inputSearchOutlined: {
    normal: {
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
      border: '1px solid #94A2AB',
      '::placeholder': {
        color: colors.neutralGray3,
      },
    },
    hover: {
      color: colors.neutralGray4,
      backgroundColor: colors.transparent,
      border: '1px solid #94A2AB',
      '::placeholder': {
        color: colors.neutralGray4,
      },
    },
    active: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
      border: '1px solid #94A2AB',
      '::placeholder': {
        color: colors.neutralGray5,
      },
    },
    loading: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
      border: '1px solid #94A2AB',
    },
    filled: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
      border: '1px solid #94A2AB',
    },
  },
  InputBorderBottom: {
    normal: {
      color: colors.neutralGray2,
      backgroundColor: colors.transparent,
      borderBottom: '1px solid #C7D1D7',
      '::placeholder': {
        color: colors.neutralGray2,
      },
    },
    hover: {
      color: colors.neutralGray4,
      backgroundColor: colors.transparent,
      borderBottom: '1px solid #C7D1D7',
      '::placeholder': {
        color: colors.neutralGray4,
      },
    },
    active: {
      color: colors.neutralGray2,
      backgroundColor: colors.transparent,
      borderBottom: '1px solid #C7D1D7',
      '::placeholder': {
        color: colors.neutralGray2,
      },
    },
    loading: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
      borderBottom: '1px solid #C7D1D7',
    },
    filled: {
      color: colors.neutralGray1,
      backgroundColor: colors.transparent,
      borderBottom: '1px solid #C7D1D7',
    },
  },
  inputLarge: {
    gap: '6px',
    paddingLeftPrefix: '30px',
    paddingRightSuffix: '32px',
    paddingLeftNoPrefix: '12px',
    paddingRightNoSuffix: '12px',
    paddingIcons: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    height: '32px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '18px',
  },
  inputMedium: {
    gap: '6px',
    paddingLeftPrefix: '26px',
    paddingRightSuffix: '28px',
    paddingLeftNoPrefix: '10px',
    paddingRightNoSuffix: '10px',
    paddingIcons: '10px',
    paddingTop: '8px',
    paddingBottom: '8px',
    height: '28px',
    borderRadius: '7px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  inputSmall: {
    gap: '4px',
    paddingLeftPrefix: '20px',
    paddingRightSuffix: '22px',
    paddingLeftNoPrefix: '6px',
    paddingRightNoSuffix: '6px',
    paddingIcons: '6px',
    paddingTop: '6px',
    paddingBottom: '6px',
    height: '22px',
    borderRadius: '5px',
    fontSize: '11px',
    lineHeight: '13px',
  },
  inputNoBorderRadius: {
    gap: '6px',
    paddingLeftPrefix: '30px',
    paddingRightSuffix: '32px',
    paddingLeftNoPrefix: '12px',
    paddingRightNoSuffix: '12px',
    paddingIcons: '12px',
    paddingTop: '10px',
    paddingBottom: '10px',
    height: '32px',
    borderRadius: '0px',
    fontSize: '14px',
    lineHeight: '18px',
  },
  label: {
    color: colors.disabled,
    fontSize: fontSize[1],
    fontWeight: 'bold',
  },
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
  liInputHours: {
    selected: {
      backgroundColor: colors.neutralGray8,
      color: colors.neutralGray1,
    },
  },
  alert: {
    info: {
      backgroundColor: colors.backgroundCyan2,
      color: colors.infoAlert,
    },
  },
  inputNumber: {
    default: {
      background: colors.neutralGray8,
      color: colors.neutralGray1,
      ':hover': {
        color: colors.black,
        input: {
          color: colors.neutralGray1,
        },
      },
    },
    active: {
      borderColor: colors.neutralGray3,
      p: {
        boxShadow: 'none !important',
      },
      div: {
        boxShadow: 'none !important',
      },
    },
    focus: {
      borderColor: colors.infoAlert,
    },
    filled: {
      color: colors.neutralGray1,
      input: {
        color: colors.neutralGray1,
      },
    },
  },
  inputHours: {
    default: {
      background: colors.neutralGray8,
      border: 'solid 1px transparent',
      color: colors.neutralGray1,
      ':hover': {
        color: colors.black,
        div: {
          i: {
            color: colors.black,
          },
        },
      },
    },
    active: {
      borderColor: colors.neutralGray3,
      color: colors.neutralGray1,
    },
    focus: {
      borderColor: colors.infoAlert,
    },
  },
  tags: {
    color: colors.neutralGray1,
    secondary: {
      background: '#B3DBE8',
      ':hover': {
        color: '#25697E',
        border: '1px solid' + colors.secondary,
      },
      ':active': {
        color: '#25697E',
        border: '1px solid transparent',
      },
    },
    warning: {
      background: '#FFF7CE',
    },
    success: {
      background: '#D0FCEC',
    },
    dark: {
      background: '#DDE5E9',
    },
    default: {
      background: '#FFFFFF',
      border: '1px solid' + colors.neutralGray5,
      borderRadius: '6px',
    },
  },
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
    body: {
      fontSize09: {
        fontWeight: 400,
        fontSize: '9px',
        lineHeight: '11px',
      },
      fontSize10: {
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '11px',
      },
      fontSize11: {
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '13px',
      },
      fontSize12: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
      },
      fontSize13: {
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '18px',
      },
      fontSize14: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '18px',
      },
      fontSize15: {
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '18px',
      },
      fontSize16: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
    body600: {
      fontSize09: {
        fontSize: '9px',
        fontWeight: 600,
        lineHeight: '11px',
      },
      fontSize10: {
        fontSize: '10px',
        fontWeight: 600,
        lineHeight: '11px',
      },
      fontSize11: {
        fontSize: '11px',
        fontWeight: 600,
        lineHeight: '13px',
      },
      fontSize12: {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
      },
      fontSize13: {
        fontSize: '13px',
        fontWeight: 600,
        lineHeight: '18px',
      },
      fontSize14: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '18px',
      },
      fontSize15: {
        fontSize: '15px',
        fontWeight: 600,
        lineHeight: '18px',
      },
      fontSize16: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '24px',
      },
    },
    bodyBold: {
      fontSize09: {
        fontWeight: 700,
        fontSize: '9px',
        lineHeight: '11px',
      },
      fontSize10: {
        fontWeight: 700,
        fontSize: '10px',
        lineHeight: '11px',
      },
      fontSize11: {
        fontWeight: 700,
        fontSize: '11px',
        lineHeight: '13px',
      },
      fontSize12: {
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '16px',
      },
      fontSize13: {
        fontWeight: 700,
        fontSize: '13px',
        lineHeight: '18px',
      },
      fontSize14: {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '18px',
      },
      fontSize15: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '18px',
      },
      fontSize16: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
    ellipsis: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    ellipsisOneLine: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
    wordBreak: {
      'overflow-wrap': 'break-word',
      'word-wrap': 'break-word',
      'word-break': 'break-word',
    },
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
    inputMessageErrors: {
      fontSize: '11px',
      lineHeight: '13px',
      fontWeight: 400,
      color: colors.error,
    },
    inputMessageInfoAlert: {
      fontSize: '11px',
      lineHeight: '13px',
      fontWeight: 400,
      color: colors.info,
    },
    white: [
      {
        color: colors.neutral[0],
        fontWeight: 700,
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '16px',
      },
      {
        color: colors.neutral[0],
        fontWeight: 700,
        fontSize: '10px',
        fontStyle: 'normal',
        lineHeight: '11px',
      },
    ],
    submenuTitle: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '18px',
      color: colors.neutralGray2,
      display: 'flex',
      alignItems: 'center',
      padding: '9px 10px',
      gap: '6px',
      borderBottom: borders.neutralGray9,
      width: '100%',
    },
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
      height: '48px',
      borderRadius: '12px',
      padding: '13px 26px 13px 26px',
      gap: '6px',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
    },
    medium: {
      height: '38px',
      borderRadius: '10px',
      padding: '10px 24px 10px 24px',
      gap: '4px',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '18px',
    },
    mediumIcon16: {
      height: '38px',
      borderRadius: '10px',
      padding: '10px 24px 10px 24px',
      gap: '4px',
      fontWeight: 700,
      fontSize: '14px',
      fontSizeIcon: '16px',
      lineHeight: '18px',
    },
    small: {
      height: '32px',
      borderRadius: '8px',
      padding: '8px 14px 8px 14px',
      gap: '4px',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
    },
    extraSmall: {
      height: '26px',
      borderRadius: '6px',
      padding: '5px 12px 5px 12px',
      gap: '4px',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px',
    },
    primaryDisabled: {
      color: colors.disabled,
      backgroundColor: colors.neutralGray8,
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
      backgroundColor: colors.neutralGray8,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    primaryText: {
      color: colors.primary,
      backgroundColor: 'transparent',
      ':hover': {
        color: colors.primaryHover,
      },
      ':focus': {
        color: colors.primaryPressed,
      },
    },
    secondaryText: {
      color: colors.secondary,
      backgroundColor: 'transparent',
      ':hover': {
        color: colors.secondaryHover,
      },
      ':focus': {
        color: colors.secondaryPressed,
      },
    },
    subtleText: {
      padding: '10px 24px 10px 24px',
      fontSize: '14px',
      color: colors.subtle,
      backgroundColor: 'transparent',
      ':hover': {
        color: colors.subtleHover,
        backgroundColor: colors.neutralGray7,
      },
      ':focus': {
        color: colors.neutralGray1,
      },
    },
    textDisabled: {
      padding: '10px 24px 10px 24px',
      fontSize: '14px',
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
      borderRadius: '12px',
      fontSize: '16px',
    },
    iconMedium: {
      height: '38px',
      width: '38px',
      borderRadius: '10px',
      fontSize: '14px',
    },
    iconSmall: {
      height: '32px',
      width: '32px',
      borderRadius: '9px',
      fontSize: '12px',
    },
    iconSmallSize18px: {
      height: '32px',
      width: '32px',
      borderRadius: '9px',
      fontSize: '18px',
      fontSizeIcon: '18px',
    },
    iconExtraSmall: {
      height: '26px',
      width: '26px',
      borderRadius: '6px',
      fontSize: '12px',
      py: '5px',
      px: '13px',
    },
    iconExtraSmall22px: {
      height: '22px',
      width: '22px',
      borderRadius: '6px',
      fontSize: '10px',
      py: '5px',
      px: '11px',
    },
    iconExtraSmall24pxWithIcon14px: {
      height: '24px',
      width: '24px',
      borderRadius: '6px',
      fontSize: '14px',
      fontSizeIcon: '14px',
      py: '5px',
      px: '11px',
    },
    iconExtraSmall18px: {
      height: '18px',
      width: '18px',
      borderRadius: '5px',
      fontSize: '8px',
      py: '5px',
      px: '9px',
    },
    iconDropdownNormal: {
      padding: '7.74px 7.95px 7.74px 7.95px',
      height: '32px',
      width: '32px',
      borderRadius: '9px',
      fontSize: '18px',
    },
    iconDropdownSmall: {
      padding: '8.6px',
      height: '28px',
      width: '28px',
      borderRadius: '9px',
      fontSize: '12px',
    },
    iconDropdownExtraSmall: {
      padding: '7px 6px',
      height: '22px',
      width: '22px',
      borderRadius: '6px',
      fontSize: '11px',
    },
    roundIconLarge: {
      borderRadius: 99999,
      height: '48px',
      width: '48px',
      fontSize: '16px',
      fontSizeIcon: '26px',
    },
    roundIconMedium: {
      borderRadius: 99999,
      height: '38px',
      width: '38px',
      fontSize: '14px',
      fontSizeIcon: '24px',
    },
    roundIconSmall: {
      borderRadius: 99999,
      height: '32px',
      width: '32px',
      fontSize: '12px',
      fontSizeIcon: '20px',
    },
    roundIconSmallIcon14px: {
      borderRadius: 99999,
      height: '32px',
      width: '32px',
      fontSize: '14px',
      fontSizeIcon: '14px',
    },
    roundIconExtraSmall: {
      borderRadius: 99999,
      height: '26px',
      width: '26px',
      fontSize: '12px',
      py: '5px',
      px: '12px',
      fontSizeIcon: '15px',
    },
    roundIconExtraSmall22px: {
      borderRadius: 99999,
      height: '22px',
      width: '22px',
      fontSize: '10px',
      fontSizeIcon: '12px',
      py: '4px',
      px: '10px',
    },
    roundIconExtraSmall18px: {
      borderRadius: 99999,
      height: '18px',
      width: '18px',
      fontSize: '8px',
      py: '4px',
      px: '8px',
    },
    roundLarge: {
      height: '48px',
      borderRadius: '24px',
      fontSize: '16px',
      padding: '13px 26px 13px 26px',
      gap: '6px',
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
    primaryOutlined: {
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
    secondaryOutlined: {
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
    outlinedDisabled: {
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
      justifyContent: 'center',
      borderRadius: '12px',
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
    subtlePetrokoIcon: {
      backgroundColor: colors.neutralGray9,
      color: colors.neutralGray4,
    },
    subtlePetrokoIconPressed: {
      backgroundColor: colors.petrokoPressed,
      color: colors.white,
    },
    transparentIcon: {
      backgroundColor: colors.transparent,
      color: colors.subtle,
      colorActive: colors.subtlePressed,
      justifyContent: 'center',
      borderRadius: '12px',
      ':hover': {
        backgroundColor: colors.neutral[7],
        color: colors.subtleHover,
      },
      ':focus': {
        backgroundColor: colors.transparent,
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
    roundIconArrowRed: {
      backgroundColor: colors.neutralGray9,
      color: colors.neutralGray3,
      ':hover': {
        backgroundColor: colors.neutralGray9,
        color: colors.neutralGray3,
      },
      ':focus': {
        backgroundColor: colors.neutralGray9,
        color: colors.primary,
      },
    },
    colourFeedback: {
      backgroundColor: colors.feedback,
      border: borders.feedbackBorder,
      color: colors.neutral[0],
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
    linkTwoLines: {
      fontSize: fontSize[3],
      color: colors.info,
      backgroundColor: colors.transparent,
      display: 'flex',
      webkitBoxOrient: 'vertical',
      webkitLineClamp: 2,
      overflow: 'hidden',
      whiteSpace: 'normal',
      textOverflow: 'ellipsis',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
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
    subtleTrasnparentPretroko: {
      color: colors.neutralGray4,
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.neutralGray4,
        backgroundColor: colors.neutralGray8,
      },
    },
    subtleTrasnparentPretrokoPressed: {
      color: colors.neutralGray8,
      backgroundColor: colors.petrokoHeader,
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
    submenu: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      color: colors.neutralGray2,
      justifyContent: 'flex-start',
      padding: '9px 12px',
      gap: '8px',
      backgroundColor: colors.transparent,
      borderRadius: '0px',
      width: '100%',
      ':hover': {
        backgroundColor: colors.neutralGray9,
        color: colors.neutralGray1,
      },
      ':focus': {
        backgroundColor: colors.transparent,
        color: colors.neutralGray1,
      },
    },
    mainButton: {
      height: '38px',
      fontSize: '14px',
      fontSizeIcon: '16px',
      lineHeight: '18px',
      borderRadius: '8px',
      fontWeight: 'normal',
      backgroundColor: colors.transparent,
      color: colors.neutralGray2,
      padding: '9px 10px 9px 10px',
      gap: '6px',
      colorIcon: colors.neutralGray2,
      ':hover': {
        color: colors.neutralGray1,
        backgroundColor: colors.neutralGray8,
      },
      ':focus': {
        fontWeight: 'bold',
        color: colors.neutralGray1,
        colorIcon: colors.primary,
      },
    },
    mainButtonIcon: {
      justifyContent: 'center',
      height: '32px',
      width: '32px',
      fontSize: '14px',
      fontSizeIcon: '18px',
      lineHeight: '18px',
      fontWeight: 'normal',
      backgroundColor: colors.transparent,
      color: colors.neutralGray2,
      padding: '5px',
      gap: '10px',
      colorIcon: colors.neutralGray2,
      borderRadius: '9px',
      ':hover': {
        color: colors.neutralGray1,
        backgroundColor: colors.neutralGray8,
      },
      ':focus': {
        fontWeight: 'bold',
        color: colors.neutralGray1,
        colorIcon: colors.primary,
      },
    },
    mainItemSmall: {
      justifyContent: 'flex-start',
      fontWeight: 'normal',
      backgroundColor: colors.transparent,
      color: colors.neutralGray3,
      height: '28px',
      fontSize: '12px',
      lineHeight: '16px',
      padding: '9px 12px 9px 12px',
      width: '100%',
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
      color: colors.darkGray,
      width: '32px',
      height: '32px',
      borderRadius: '9px',
      fontSize: '18px',
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
      gap: '10px',
      backgroundColor: colors.secondary,
      color: colors.neutral[0],
      ':hover': {
        backgroundColor: colors.secondaryHover,
      },
      ':focus': {
        backgroundColor: colors.secondaryPressed,
      },
    },
    whiteSmallIcon: {
      height: '32px',
      width: '32px',
      color: colors.neutral[0],
      backgroundColor: colors.transparent,
      fontSize: '16px',
      padding: '5px',
      gap: '10px',
      borderRadius: '9px',
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
      color: colors.white,
      flexGrow: 0,
      padding: '0px',
      gap: '8px',
      borderRadius: '12px',
      fontWeight: 'bold',
      fontSize: '14px',
      height: '48px',
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
    dropdownDefault: {
      color: colors.neutralGray1,
      backgroundColor: colors.neutralGray9,
      colorFilled: colors.neutralGray1,
      border: 'solid 1px transparent',
      backgroundColorFilled: colors.neutralGray9,
      colorArrowFilled: colors.neutralGray4,
      width: '100%',
      fontWeight: 400,
      ':hover': {
        color: colors.black,
        backgroundColor: colors.neutralGray9,
      },
      ':focus': {
        color: colors.neutralGray4,
        backgroundColor: colors.neutralGray9,
        border: borders.neutralGray3,
      },
    },
    dropdownDisabled: {
      color: colors.neutralGray6,
      backgroundColor: colors.neutralGray9,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      borderRadius: '8px',
      lineHeight: '18px',
      width: '100%',
      fontWeight: 400,
    },
    dropdownOutlined: {
      padding: '6px 10px 6px 10px',
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
      border: borders.neutralGray7,
      borderRadius: '8px',
      colorFilled: colors.neutralGray1,
      backgroundColorFilled: colors.transparent,
      colorArrowFilled: colors.neutralGray4,
      gap: '4px',
      lineHeight: '18px',
      width: '100%',
      fontWeight: 400,
      // colorArrow: colors.neutralGray5,
      ':hover': {
        color: colors.neutralGray1,
        backgroundColor: colors.neutralGray9,
        border: 'none',
      },
      ':focus': {
        color: colors.neutralGray4,
        backgroundColor: colors.neutralGray9,
      },
    },
    dropdownOutlinedDisabled: {
      padding: '6px 10px 6px 10px',
      color: colors.neutralGray6,
      border: borders.neutralGray7,
      backgroundColor: colors.transparent,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      borderRadius: '8px',
      lineHeight: '18px',
      width: '100%',
      fontWeight: 400,
    },
    dropdownTransparent: {
      padding: '6px 10px 6px 10px',
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
      colorFilled: colors.neutralGray1,
      colorArrowFilled: colors.neutralGray4,
      lineHeight: '18px',
      width: '100%',
      fontWeight: 400,
      // colorArrow: colors.neutralGray5,
      ':hover': {
        color: colors.neutralGray1,
      },
      ':focus': {
        color: colors.neutralGray4,
      },
    },
    dropdownTransparentDisabled: {
      padding: '6px 10px 6px 10px',
      color: colors.neutralGray6,
      backgroundColor: colors.transparent,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      lineHeight: '18px',
      width: '100%',
      fontWeight: 400,
    },
    dropdownTransparentSelection: {
      fontWeight: 400,
      padding: '6px 8px 6px 8px',
      backgroundColor: colors.transparent,
      color: colors.neutralGray3,
      colorFilled: colors.neutralGray3,
      colorArrowFilled: colors.neutralGray4,
      lineHeight: '18px',
      width: '100%',
      ':hover': {
        color: colors.neutralGray2,
        // colorArrow: colors.neutralGray1,
      },
      ':focus': {
        color: colors.neutralGray3,
        // colorArrow: colors.neutralGray1,
      },
    },
    dropdownTransparentSelectionDisabled: {
      fontWeight: 400,
      padding: '6px 8px 6px 8px',
      gap: '6px',
      color: colors.neutralGray5,
      backgroundColor: colors.transparent,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      lineHeight: '18px',
      width: '100%',
    },
    dropdownIcon: {
      gap: '10px',
      color: colors.neutralGray4,
      backgroundColor: colors.transparent,
      colorFilled: colors.neutralGray1,
      backgroundColorFilled: colors.transparent,
      fontWeight: 400,
      ':hover': {
        color: colors.neutralGray2,
        backgroundColor: colors.neutralGray9,
      },
      ':focus': {
        color: colors.neutralGray2,
        backgroundColor: colors.neutralGray9,
      },
    },
    dropdownIconDisabled: {
      gap: '10px',
      color: colors.neutralGray6,
      backgroundColor: colors.transparent,
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      fontWeight: 400,
    },
    dropdownButtonPrimary: {
      padding: '10px 16px 10px 18px',
      color: colors.neutral[0],
      backgroundColor: colors.primary,
      colorFilled: colors.neutral[0],
      backgroundColorFilled: colors.primary,
      sizeArrow: '16px',
      gap: '12px',
      borderRadius: '10px',
      height: '38px',
      lineHeight: '17px',
      fontWeight: 700,
      ':hover': {
        backgroundColor: colors.primaryHover,
        color: colors.neutral[0],
      },
      ':focus': {
        backgroundColor: colors.primaryPressed,
        color: colors.neutral[0],
      },
    },
    dropdownButtonPrimaryDisabled: {
      padding: '10px 16px 10px 18px',
      color: colors.disabled,
      backgroundColor: colors.neutral[7],
      sizeArrow: '16px',
      gap: '12px',
      borderRadius: '10px',
      height: '38px',
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      lineHeight: '17px',
      fontWeight: 700,
    },
    dropdownColored: {
      color: colors.neutral[0],
      backgroundColor: colors.secondary,
      colorFilled: colors.neutral[0],
      colorArrowFilled: colors.neutral[0],
      backgroundColorFilled: colors.lightBlue,
      width: '100%',
      fontWeight: 400,
      ':hover': {
        color: colors.neutralGray7,
        backgroundColor: colors.secondary,
      },
      ':focus': {
        color: colors.neutralGray3,
        backgroundColor: colors.transparent,
        border: borders.neutralGray7,
      },
    },
    dropdownColoredTransparent: {
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
      border: borders.neutralGray7,
      colorFilled: colors.neutral[0],
      colorArrowFilled: colors.neutral[0],
      backgroundColorFilled: colors.lightBlue,
      borderFilled: borders.transparent,
      width: '100%',
      fontWeight: 400,
      ':hover': {
        color: colors.neutralGray7,
        backgroundColor: colors.transparent,
        border: borders.neutralGray7,
      },
      ':focus': {
        color: colors.neutral[0],
        backgroundColor: colors.lightBlue,
      },
    },
    mainItemSmallList: {
      backgroundColor: colors.transparent,
      color: colors.neutralGray2,
      fontWeight: 'normal',
      height: '28px',
      width: '100%',
      justifyContent: 'start',
      padding: '9px 12px 9px 12px',
      borderRadius: '0px',
      gap: '8px',
      ':hover': {
        backgroundColor: colors.neutralGray8,
        color: colors.neutralGray1,
      },
      ':focus': {
        backgroundColor: colors.transparent,
        color: colors.neutralGray1,
        fontWeight: 'bold',
      },
    },
    mainItemSmallListDisabled: {
      backgroundColor: colors.transparent,
      color: colors.neutralGray5,
      fontWeight: 'normal',
      fontSize: '12px',
      height: '28px',
      lineHeight: '16px',
      width: '100%',
      justifyContent: 'start',
      padding: '9px 12px 9px 12px',
      cursor: 'default',
      pointerEvents: 'none',
      userSelect: 'none',
      borderRadius: '0px',
      gap: '8px',
    },
    mainButtonList: {
      backgroundColor: colors.transparent,
      color: colors.neutralGray2,
      height: '28px',
      width: '100%',
      justifyContent: 'start',
      padding: '9px 12px 9px 12px',
      borderRadius: '8px',
      gap: '8px',
      fontWeight: 'normal',
      fontSize: '13px',
      ':hover': {
        backgroundColor: colors.neutralGray8,
        color: colors.neutralGray1,
      },
      ':focus': {
        backgroundColor: colors.transparent,
        color: colors.neutralGray1,
        fontWeight: 'bold',
      },
    },
    dropdownSizeButton: {
      padding: '10px 16px 10px 18px',
      height: '38px',
      fontSize: '14px',
      lineHeight: '17px',
    },
    dropdownSizeLargeColored: {
      height: '32px',
      padding: '6px 16px 6px 16px',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      borderRadius: '16px',
      gap: '12px',
    },
    dropdownSizeNormal: {
      padding: '6px 12px 6px 12px',
      height: '32px',
      fontSize: '14px',
      lineHeight: '18px',
      borderRadius: '8px',
      gap: '6px',
    },
    dropdownSizeSmall: {
      padding: '3px 10px 3px 10px',
      height: '28px',
      fontSize: '12px',
      lineHeight: '16px',
      borderRadius: '7px',
      gap: '6px',
    },
    dropdownSizeExtraSmall: {
      padding: '3px 6px 3px 6px',
      height: '22px',
      fontSize: '11px',
      lineHeight: '13px',
      borderRadius: '5px',
      gap: '4px',
    },
    badgeNormal: {
      textTransform: 'uppercase',
      height: '16px',
      borderRadius: '8px',
      padding: '1px 5px',
    },
    badgeMedium: {
      textTransform: 'uppercase',
      height: '22px',
      borderRadius: '14px',
      padding: '1px 5px',
    },
    badgeBig: {
      textTransform: 'uppercase',
      height: '30px',
      width: '30px',
      padding: '1px 5px',
    },
    badgeCircle: {
      borderRadius: 99999,
      padding: '1px 5px',
    },
    badgeIcon: {
      padding: '4px 8px',
    },
    badgeInfo: {
      backgroundColor: colors.info,
      color: colors.white,
      letterSpacing: '0.05em',
    },
    badgeInfoRow: {
      color: colors.white,
      backgroundColor: colors.lightBlue,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '13px',
    },
    badgeReportRow: {
      color: colors.error,
      backgroundColor: colors.backgroundError2,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '13px',
    },
    badgeSendRow: {
      color: '#287A46',
      backgroundColor: '#B4EBC8',
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '13px',
    },
    badgeErrorRow: {
      color: colors.white,
      backgroundColor: colors.error,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '13px',
    },
    badgeSupportRow: {
      color: '#7F4D80',
      backgroundColor: '#F4E2F5',
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '13px',
    },
    badgeTips: {
      backgroundColor: colors.tips,
      color: colors.subtlePressed,
      letterSpacing: '0.05em',
    },
    badgeYellow: {
      backgroundColor: colors.yellow,
      color: colors.neutralGray1,
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '13px',
      letterSpacing: '0.05em',
    },
    badgeAdded: {
      backgroundColor: colors.badgeBackgroundSuccess,
      color: colors.badgeSuccess,
      letterSpacing: '0.05em',
    },
    badgeRemoved: {
      backgroundColor: colors.backgroundError,
      color: colors.error,
      letterSpacing: '0.05em',
    },
    badgeInlineLarge: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '5px 10px',
      gap: '8px',
    },
    badgeInlineMedium: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '3px 7px',
      gap: '8px',
    },
    badgeInlineSmall: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '2px 4px',
      gap: '8px',
    },
    badgeRounded: {
      borderRadius: '12px',
    },
    badgeSquare: {
      borderRadius: '4px',
    },
    badgeUppercase: {
      textTransform: 'uppercase',
    },
    inlineError: {
      backgroundColor: colors.darkRedTokko,
      color: 'white',
    },
    inlineErrorSubtle: {
      backgroundColor: colors.backgroundErrorRowTable,
      color: colors.darkRedTokko,
    },
    inlineAlert: {
      backgroundColor: colors.alert,
      color: colors.black,
    },
    inlineAlertSubtle: {
      backgroundColor: colors.alertSubtle,
      color: colors.black,
    },
    inlineInfo: {
      backgroundColor: colors.infoAlert,
      color: colors.white,
    },
    inlineInfoSubtle: {
      backgroundColor: colors.backgroundCyan2,
      color: colors.suportText,
    },
    inlineSuccessDark: {
      backgroundColor: colors.successDark,
      color: colors.white,
    },
    inlineSuccessDarkSubtle: {
      backgroundColor: colors.backgroundSuccess,
      color: colors.successDarker,
    },
    inlineDark: {
      backgroundColor: colors.black,
      color: colors.white,
    },
    inlineDarkSubtle: {
      backgroundColor: colors.neutralGray8,
      color: colors.neutralGray1,
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
    bounce: {
      display: 'inline-flex',
      alignItems: 'baseline',
    },
  },
  switches: switches,
  variants: {
    avatar: {
      width: '30px',
      height: '30px',
      borderRadius: radius.circle,
    },
    quickdisplay: {
      borderRadius: '16px',
      width: '420px',
      height: '280px',
    },
    rows: {
      borderRadius: '8px',
      width: '72px',
      height: '48px',
    },
    rowsCard: {
      borderRadius: '6px',
      width: '60px',
      height: '40px',
    },
    largeCard: {
      borderRadius: '12px',
      width: '291px',
      height: '194px',
    },
    regularCard: {
      borderRadius: '12px',
      width: '270px',
      height: '180px',
    },
    smallCard: {
      borderRadius: '10px',
      width: '150px',
      height: '100px',
    },
    extraSmallCard: {
      borderRadius: '6px',
      width: '60px',
      height: '40px',
    },
    circleSmall: {
      width: '24px',
      height: '24px',
      borderRadius: radius.circle,
    },
    circleBig: {
      width: '82px',
      height: '82px',
      borderRadius: radius.circle,
    },
  },
  rows: {
    primary: {
      backgroundColor: colors.neutralGray9,
      borderHover: borders.neutralGray8,
      ':hover': {
        backgroundColor: colors.white,
      },
    },
    primarySelected: {
      backgroundColor: colors.neutralGray9,
    },
    errorPrimary: {
      backgroundColor: colors.backgroundErrorRowTable,
      border: borders.borderRowTable,
      borderHover: borders.borderRowTable,
      ':hover': {
        backgroundColor: colors.white,
      },
    },
    errorPrimarySelected: {
      backgroundColor: colors.backgroundErrorRowTable,
    },
    infoAlertPrimary: {
      backgroundColor: colors.backgroundAlert1,
      border: borders.backgroundAlert2,
      borderHover: borders.backgroundAlert2,
      ':hover': {
        backgroundColor: colors.white,
      },
    },
    infoAlertPrimarySelected: {
      backgroundColor: colors.backgroundAlert1,
    },
    primaryDisabled: {
      backgroundColor: colors.neutralGray9,
    },
    secondary: {
      backgroundColor: colors.white,
      ':hover': {
        backgroundColor: colors.neutralGray8,
      },
    },
    secondarySelected: {
      backgroundColor: colors.neutralGray8,
    },
    errorSecondary: {
      backgroundColor: colors.backgroundError,
      border: borders.borderRowTable,
      borderHover: borders.borderRowTable,
      ':hover': {
        backgroundColor: colors.neutralGray8,
      },
    },
    errorSecondarySelected: {
      backgroundColor: colors.backgroundError,
    },
    infoAlertSecondary: {
      backgroundColor: colors.backgroundAlert1,
      border: borders.backgroundAlert2,
      borderHover: borders.backgroundAlert2,
      ':hover': {
        backgroundColor: colors.neutralGray8,
      },
    },
    infoAlertSecondarySelected: {
      backgroundColor: colors.backgroundAlert1,
    },
    secondaryDisabled: {
      backgroundColor: colors.white,
    },
  },
  panelSubmenu: {
    submenu: {
      padding: '0px 0px 8px',
      gap: '6px',
      boxShadow: '4px 4px 12px rgba(87, 95, 99, 0.1)',
      borderRadius: '10px',
      flexDirection: 'column',
    },
    submenuNotification: {
      boxShadow: '8px 8px 16px rgba(77, 91, 100, 0.15)',
      borderRadius: '12px',
      flexDirection: 'column',
    },
  },
  panelTooltip: {
    tooltip: {
      padding: '4px 10px 4px 10px',
      gap: '14px',
      boxShadow: '4px 4px 4px rgba(112, 126, 134, 0.15)',
      borderRadius: '6px',
      flexDirection: 'row',
      height: '26px',
      background: colors.white,
    },
    tooltipBlack: {
      padding: '8px 12px 8px 12px',
      gap: '14px',
      boxShadow: '4px 4px 4px rgba(112, 126, 134, 0.15)',
      borderRadius: '6px',
      flexDirection: 'row',
      background: colors.black,
      color: colors.white,
    },
  },
  arrowTooltip: {
    'right-start': {
      left: '-8px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderRight: '10px solid white',
    },
    right: {
      left: '-8px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderRight: '10px solid white',
    },
    'right-end': {
      left: '-8px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderRight: '10px solid white',
    },
    'left-start': {
      right: '-8px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: '10px solid white',
    },
    left: {
      right: '-8px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: '10px solid white',
    },
    'left-end': {
      right: '-8px',
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderLeft: '10px solid white',
    },
    'bottom-start': {
      top: '-8px',
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
      borderBottom: '10px solid white',
    },
    bottom: {
      top: '-8px',
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
      borderBottom: '10px solid white',
    },
    'bottom-end': {
      top: '-8px',
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
      borderBottom: '10px solid white',
    },
    'top-start': {
      bottom: '-8px',
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
      borderTop: '10px solid white',
    },
    top: {
      bottom: '-8px',
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
      borderTop: '10px solid white',
    },
    'top-end': {
      bottom: '-8px',
      borderRight: '5px solid transparent',
      borderLeft: '5px solid transparent',
      borderTop: '10px solid white',
    },
  },
  arrowTooltipBlack: {
    'right-start': {
      left: '-8px',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderRight: '10px solid ' + colors.black,
    },
    right: {
      left: '-8px',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderRight: '10px solid ' + colors.black,
    },
    'right-end': {
      left: '-8px',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderRight: '10px solid ' + colors.black,
    },
    'left-start': {
      right: '-8px',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderLeft: '10px solid ' + colors.black,
    },
    left: {
      right: '-8px',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderLeft: '10px solid ' + colors.black,
    },
    'left-end': {
      right: '-8px',
      borderTop: '7px solid transparent',
      borderBottom: '7px solid transparent',
      borderLeft: '10px solid ' + colors.black,
    },
    'bottom-start': {
      top: '-8px',
      borderRight: '7px solid transparent',
      borderLeft: '7px solid transparent',
      borderBottom: '10px solid ' + colors.black,
    },
    bottom: {
      top: '-8px',
      borderRight: '7px solid transparent',
      borderLeft: '7px solid transparent',
      borderBottom: '10px solid ' + colors.black,
    },
    'bottom-end': {
      top: '-8px',
      borderRight: '7px solid transparent',
      borderLeft: '7px solid transparent',
      borderBottom: '10px solid ' + colors.black,
    },
    'top-start': {
      bottom: '-8px',
      borderRight: '7px solid transparent',
      borderLeft: '7px solid transparent',
      borderTop: '10px solid ' + colors.black,
    },
    top: {
      bottom: '-8px',
      borderRight: '7px solid transparent',
      borderLeft: '7px solid transparent',
      borderTop: '10px solid ' + colors.black,
    },
    'top-end': {
      bottom: '-8px',
      borderRight: '7px solid transparent',
      borderLeft: '7px solid transparent',
      borderTop: '10px solid ' + colors.black,
    },
  },
  card: {
    normal: {
      padding: '8px 10px 8px 10px',
      gap: '8px',
      backgroundColorValue: colors.neutralGray9,
      borderRadius: '10px',
      ':hover': {
        backgroundColor: colors.neutralGray7,
      },
      ':focus': {
        backgroundColor: colors.neutralGray7,
      },
    },
    contacts: {
      padding: '6px 10px 6px 10px',
      gap: '8px',
      backgroundColorValue: colors.neutralGray9,
      borderRadius: '10px',
      ':hover': {
        backgroundColor: colors.neutralGray7,
      },
      ':focus': {
        backgroundColor: colors.neutralGray7,
      },
    },
    search: {
      padding: '8px 12px 8px 12px',
      gap: '8px',
      backgroundColorValue: colors.neutralGray9,
      borderRadius: '10px',
      ':hover': {
        backgroundColor: colors.neutralGray7,
      },
      ':focus': {
        backgroundColor: colors.neutralGray7,
      },
    },
  },
  tabs: {
    normal: {
      alignItems: 'center',
      alignContent: 'stretch',
      justifyContent: 'center',
      display: 'grid',
      gridGap: 'var(--grid-gap, 0)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
    },
    minimal: {
      boxSizing: 'border-box',
      margin: '0',
      minWidth: '0',
      display: 'flex',
      gap: '24px',
    },
  },
  tab: {
    normal: {
      padding: 'auto 38px',
      color: '#EBA49A',
      fontSize: '10px',
      fontWeight: '600',
      ':hover': {
        color: '#EBA49A',
      },
      ':focus': {
        color: colors.white,
      },
    },
    default: {
      padding: '5px 8px 5px 8px',
      gap: '6px',
      color: colors.neutralGray3,
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.neutralGray2,
      },
      ':focus': {
        color: colors.primary,
      },
    },
    minimal: {
      padding: '8px 10px',
      gap: '6px',
      color: colors.neutralGray2,
      backgroundColor: colors.transparent,
      ':hover': {
        color: colors.neutralGray2,
        span: {
          borderColor: colors.neutralGray2,
        },
      },
      ':focus': {
        color: colors.primary,
      },
      span: {
        width: '100%',
        left: '0',
        right: '0',
        borderColor: colors.neutralGray6,
      },
    },
  },
  containerMenu: {
    normal: {
      backgroundColor: colors.white,
      borderRadius: '12px',
    },
  },

  modals: {
    top: {
      position: 'absolute',
      top: '50px',
    },
    bottom: {
      position: 'absolute',
      bottom: '50px',
    },
    l: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    sm: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  toast: {
    base: {
      textIndent: '16px',
      width: '351px',
      height: '53px',
    },
    normal: {
      borderLeft: '#C9D1D5 solid 8px',
    },
    alert: {
      borderLeft: '#A2B5F7 solid 8px',
      color: '#A2B5F7',
    },
    check: {
      borderLeft: '#00D186 solid 8px',
      color: '#00D186',
    },
    error: {
      borderLeft: '#FE8472 solid 8px',
      color: '#FE8472',
    },
    loading: {
      borderLeft: '#C9D1D5 solid 8px',
    },
    success: {
      borderLeft: '#00D186 solid 8px',
      width: '436px',
      color: '#00D186',
    },
  },
}

export default theme
