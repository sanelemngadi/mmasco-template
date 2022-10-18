import { HTMLAttributes, ReactNode, ComponentType } from 'react';
import * as CSS from "csstype"

////////////////////////////////////////////////////Universal Interface//////////////////////////////////////
export interface CssValueQueries {
    xs?: string | number,
    sm?: string | number,
    md?: string | number,
    lg?: string | number,
}

interface NormObj {
    [key: string]: string | number | CssValueQueries
}
interface Obj {
    [key: string]: string | number | CssValueQueries |
    CSS.Properties<string | number | CssValueQueries> | NormObj
}
export interface MmascoUniversalInterface<T> extends HTMLAttributes<HTMLOrSVGElement> {
    children?: ReactNode,
    component?: ComponentType<string>,
    variant?: T,
    color?: "primary" | "secondary" | "tertiary",
    sx?: Obj;
}

///this is the interfacen that all the atoms inherit for functionalities like sx={{}} varient={} etc
////////////////////////////////////////////////////End Universal Interface//////////////////////////////////////

