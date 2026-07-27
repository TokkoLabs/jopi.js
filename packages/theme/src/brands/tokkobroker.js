/**
 * Tokko Broker brand tokens.
 *
 * Values are preserved exactly as they were before the theme became a factory,
 * so createTheme() is byte-identical to the previous static theme.
 *
 * Pending design decisions (do not change without confirming):
 * - `primary`: the design system specifies #DF1517; we keep the legacy #DF1E02
 *   until the change is coordinated with the Django and React repos.
 * - `primaryHover` / `primaryPressed`: legacy values with no 1:1 design system
 *   equivalent.
 */
export const tokkobroker = {
  colors: {
    primary: '#DF1E02',
    primaryHover: '#FD2B0C',
    primaryPressed: '#FD4E34',
    primaryAccent: '#F6D4CF',
    secondary: '#1A4958',
    secondaryHover: '#2D7D97',
    secondaryPressed: '#236377',
    petrokoPressed: '#3188A4',
    petrokoHeader: '#25697E',
  },
  fontFamily: '"Nunito Sans", sans-serif',
}
