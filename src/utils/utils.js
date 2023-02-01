const MAX_MOBILE_WIDTH = 600; // must be equal to var $max-mobile-width in scss

const isWindowsValue = navigator.platform.indexOf('Win') > -1;
const isMobileValue = window.screen.width <= MAX_MOBILE_WIDTH;
const isTouchDeviceValue = 'ontouchstart' in window;

export function isWindows() {
  return isWindowsValue;
}

export function resetScroll() {
  window.scrollTo(0, 0);
}

export function isMobile() {
  return isMobileValue;
}

export function isTouchDevice() {
  return isTouchDeviceValue;
}
