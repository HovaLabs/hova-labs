import { css } from 'styled-components';

// font-weight names taken from https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900
};

// Letter spacing is applied as the font-size divided by <some factor>
// const letterSpacingDenominator = {
//   s: 64,
//   m: 32,
//   l: 16,
//   xl: 8
// };

export const typography = {
  headingLarge: css`
    color: ${p => p.colors.primary};
    font-size: 70px;
    font-weight: ${fontWeight.bold};
    letter-spacing: 0;
    line-height: 92px;
  `,
  headingMedium: css`
    color: ${p => p.colors.primary};
    font-size: 50px;
    font-weight: ${fontWeight.normal};
    letter-spacing: 0;
    line-height: 65px;
  `,
  headingSmall: css`
    color: ${p => p.colors.primary};
    font-size: 30px;
    font-weight: ${fontWeight.normal};
    letter-spacing: 0;
    line-height: 39px;
  `,
  bodyText: css`
    color: ${p => p.colors.primary};
    font-size: 22px;
    font-weight: ${fontWeight.normal};
    letter-spacing: 0;
    line-height: 33px;
  `
};
