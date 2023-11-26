export interface ITypographyBase {
  fontFamily: string;
  fontSize?: string;
  fontWeight: string;
}

export interface ITypography {
  [key: string]:
    | ITypographyBase
    | {
        [key: string]: ITypographyBase;
      };
}
