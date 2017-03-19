import * as app from 'application';

export function toColor(...argb: number[]): number | any {
  if (app.android) {
    return toColorAndroid(argb);
  } else if (app.ios) {
    return toColorIOS(argb.slice(1));
  }
}

export function toColorAndroid(argb: number[]): number {
  return android.graphics.Color.argb(argb[0], argb[1], argb[2], argb[3]);
}

export function toColorIOS(rgb: number[]): any {
  return new Color(rgb).ios.CGColor;
}
