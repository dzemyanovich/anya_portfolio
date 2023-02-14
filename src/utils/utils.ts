const MAX_MOBILE_WIDTH = 600; // must be equal to var $max-mobile-width in scss

const isWindowsValue: boolean = navigator.platform.indexOf('Win') > -1;
const isMobileValue: boolean = window.innerWidth <= MAX_MOBILE_WIDTH;
const isTouchDeviceValue: boolean = 'ontouchstart' in window;

export function isWindows(): boolean {
  return isWindowsValue;
}

export function resetScroll(): void {
  window.scrollTo(0, 0);
}

export function isMobile(): boolean {
  return isMobileValue;
}

export function isTouchDevice(): boolean {
  return isTouchDeviceValue;
}
