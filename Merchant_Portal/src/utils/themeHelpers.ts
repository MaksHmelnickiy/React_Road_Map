import { IGradientColor } from 'utils/types';

export interface IHsl {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export const normalizeHsl = ({ h = 0, s = 0, l = 0 }: IHsl) => {
  const realLightness = l <= 1 ? l * 100 : l;
  const realSaturation = s <= 1 ? s * 100 : s;

  return { h, s: realSaturation, l: realLightness };
};

export const hslToHex = ({ h: hue = 0, s: saturation = 0, l: lightness = 0 }: IHsl) => {
  const l = lightness <= 1 ? lightness : lightness / 100;
  const realSaturation = saturation <= 1 ? saturation * 100 : saturation;
  const a = (realSaturation * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + hue / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const getHslParams = (color: string): IHsl => {
  const hslaOptions = color.replace(/(hsla?\()(.+)(\))/, '$2');
  const clearOptions = hslaOptions.replace(/(%|,)/g, '');

  const [h, s, l, a] = clearOptions.split(' ');

  return {
    h: Number(h),
    s: Number(s),
    l: Number(l),
    a: Number(a),
  };
};

interface IHslColor {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export const getHslColor = ({ h, s, l, a = 1 }: IHslColor) =>
  `hsla(${h}, ${s}%, ${l}%, ${a})`;

export const hexToHsl = (hex: string): IHslColor => {
  let newHex = hex.replace(/#/g, '');
  if (newHex.length === 3) {
    newHex = newHex
      .split('')
      .map((hex) => hex + hex)
      .join('');
  }
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0}$/i.exec(newHex);
  if (!result) {
    return {
      h: 0,
      s: 0,
      l: 0,
      a: 0,
    };
  }
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  s *= 100;
  s = Math.round(s);
  l *= 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return {
    h,
    s,
    l,
    a: 1,
  };
};

export const isValidHex = (color: string) =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);

export const parseGradient = (gradient: string): IGradientColor => {
  const gradientOptions = gradient.replace(/(linear-gradient\()(.+)(\))/, '$2');
  const clearOptions = gradientOptions.replace(/(deg|%|,)/g, '');

  const [degree, startColor, startColorPercent, endColor, endColorPercent] =
    clearOptions.split(' ');

  return {
    degree: Number(degree),
    startColor,
    startColorHsl: hexToHsl(startColor),
    startColorPercent: Number(startColorPercent),
    endColor,
    endColorPercent: Number(endColorPercent),
    endColorHsl: hexToHsl(endColor),
  };
};

export const composeGradient = (gradient: IGradientColor) => {
  const { degree, startColor, startColorPercent, endColor, endColorPercent } = gradient;
  return `linear-gradient(${degree}deg, ${startColor} ${startColorPercent}%, ${endColor} ${endColorPercent}%)`;
};
