import "styled-components";
import MyTheme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof MyTheme

  export interface DefaultTheme extends ThemeType {}
}