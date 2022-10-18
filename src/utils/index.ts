import { CSSProperties } from "react";
import { CssValueQueries, MmascoUniversalInterface } from "src/interfaces";
import { css, FlattenSimpleInterpolation, Interpolation } from "styled-components";
import * as CSS from "csstype";

export const slugify = (word: string): string => {
  return word.trim().toLowerCase().replaceAll(" ", '-');
};

interface Props extends MmascoUniversalInterface<string> { } // extending the universal interface

export const MediaQuerys = (
  sx?: CSS.Properties<string | number | CssValueQueries> | Interpolation<CSSProperties>
) => {
  return Object.entries(sx ? sx : {}).reduce<any>(
    ({
      xs: XS, sm: SM, md: MD, lg: LG }: any,
      [property, value]
    ) => {
      if (typeof value === "object") {
        if (value?.xs) { XS[property] = value?.xs; }
        if (value?.sm) { SM[property] = value?.sm; }
        if (value?.md) { MD[property] = value?.md; }
        if (value?.lg) { LG[property] = value?.lg; }
      } else { XS[property] = value; }

      return { xs: XS, sm: SM, md: MD, lg: LG };

    }, { xs: {}, sm: {}, md: {}, lg: {} });
}

const InnerQuery = (
  px: number,
  len: string,
  sx?: CSS.Properties<string | number | CssValueQueries>
): FlattenSimpleInterpolation => {


  if (Object.keys(MediaQuerys(sx)[len]).length > 0) {
    return css`
      @media (min-width: ${px}px){
        ${MediaQuerys(sx)[len]}
      }
      `
  }
  return css``;
}

export const SxQueries = css<Props>`
  ${(props) => InnerQuery(0, "xs", props?.sx)}
  ${(props) => InnerQuery(600, "sm", props?.sx)}
  ${(props) => InnerQuery(900, "md", props?.sx)}
  ${(props) => InnerQuery(1200, "lg", props?.sx)}
`