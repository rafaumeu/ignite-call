import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
import { lineHeights } from '../../../tokens/src/line-heights'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space'
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
