import { CSSProperties } from "react";
import { css, Interpolation } from "styled-components";
import * as CSS from "csstype";
import { CssValueQueries, MmascoUniversalInterface } from "src/interfaces";

const styleValue = (value: string | number | undefined): string | undefined => {
    if (value !== undefined) {
        if (typeof value === "number" && value > 5) return `${value}px`;
        else return typeof value === "number" ? `${value * 8}px` : value;
    }

    return;
}

// the following objects will contain the css for the different breakpoints, xs:extra small, sm: small devices and md: for medium devices, 
interface Props extends MmascoUniversalInterface<string> { } // extending the universal interface
interface Obj {
    [key: string]: string | number | CssValueQueries | CSSRule | Interpolation<CSSProperties>
}


export const SxValues = (styles: CSS.Properties<string | number | CssValueQueries> | Obj | undefined) => {
    const xs: Interpolation<CSSProperties> = {};
    const sm: Interpolation<CSSProperties> = {};
    const md: Interpolation<CSSProperties> = {};

    const createStylesObject = ({ property, value }: { property: string, value: CssValueQueries | string | number }) => {
        if (typeof value === "object") {
            if ("xs" in value) xs[property] = styleValue(value.xs);
            if ("sm" in value) sm[property] = styleValue(value.sm);
            if ("md" in value) md[property] = styleValue(value.md);
        } else { xs[property] = styleValue(value); }
    }

    if (styles !== undefined) {
        const style = Object.entries(styles).map(([property, value], indx) => {
            if (value && property) {
                if (typeof value === "object") {
                    if ('xs' in value || 'md' in value || 'sm' in value) {
                        switch (property) {
                            case 'p': createStylesObject({ property: "padding", value }); break;
                            case 'pt': createStylesObject({ property: "paddingTop", value }); break;
                            case 'pb': createStylesObject({ property: "paddingBottom", value }); break;
                            case 'pe': createStylesObject({ property: "paddingRight", value }); break;
                            case 'ps': createStylesObject({ property: "paddingLeft", value }); break;

                            case 'm': createStylesObject({ property: "margin", value }); break;
                            case 'mt': createStylesObject({ property: "marginTop", value }); break;
                            case 'mb': createStylesObject({ property: "marginBottom", value }); break;
                            case 'me': createStylesObject({ property: "marginRight", value }); break;
                            case 'ms': createStylesObject({ property: "marginLeft", value }); break;

                            default:
                                if ("xs" in value) xs[property] = styleValue(value.xs);
                                if ("sm" in value) sm[property] = styleValue(value.sm);
                                if ("md" in value) md[property] = styleValue(value.md);
                                break;
                        }
                    } else { xs[property] = SxValues(value).xs; }
                }
                else {
                    switch (property) {
                        case 'p': xs["padding"] = styleValue(value); break;
                        case 'pt': xs["paddingTop"] = styleValue(value); break;
                        case 'pb': xs["paddingBottom"] = styleValue(value); break;
                        case 'pe': xs["paddingRight"] = styleValue(value); break;
                        case 'ps': xs["paddingLeft"] = styleValue(value); break;

                        case 'm': xs["margin"] = styleValue(value); break;
                        case 'mt': xs["marginTop"] = styleValue(value); break;
                        case 'mb': xs["marginBottom"] = styleValue(value); break;
                        case 'me': xs["marginRight"] = styleValue(value); break;
                        case 'ms': xs["marginLeft"] = styleValue(value); break;

                        case 'c':
                            xs["display"] = styleValue(value === 1 ? "flex" : "block");
                            xs["justifyContent"] = styleValue(value === 1 ? "center" : "initial");
                            xs["alignItems"] = styleValue(value === 1 ? "center" : 'initial');
                            break;

                        default: xs[property] = styleValue(value); break;
                    }
                }
            }
        });
    }
    return { xs, sm, md };
}


export const SxVals = (sx: CSS.Properties<string | number | CssValueQueries> | Obj | undefined) => css`
    ${Object.keys(SxValues(sx).xs).length > 0 && css`
        ${SxValues(sx).xs};
    `
    };
    ${Object.keys(SxValues(sx).sm).length > 0 && css`
        @media (min-width: 600px) {
            ${SxValues(sx).sm};
        }
    `
    };
    ${Object.keys(SxValues(sx).md).length > 0 && css`
        @media (min-width: 900px) {
            ${SxValues(sx).md};
        }
    `
    };
`

    // const InnerQuery = (
    //     px: number,
    //     len: "xs" | "sm" | "md",
    //     sx?: CSS.Properties<string | number | CssValueQueries>
    // ): FlattenSimpleInterpolation => {


    //     if (Object.keys(SxValues(sx)[len]).length > 0) {
    //         return css`
    //       @media (min-width: ${px}px){
    //         ${SxValues(sx)[len]}
    //       }
    //       `
    //     }
    //     return css``;
    // }

    // export const SxVals = css<Props>`
    //   ${(props) => InnerQuery(0, "xs", props?.sx)}
    //   ${(props) => InnerQuery(600, "sm", props?.sx)}
    //   ${(props) => InnerQuery(900, "md", props?.sx)}
    // `