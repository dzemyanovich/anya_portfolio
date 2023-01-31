const MOBILE_MAX_WIDTH = 600; // must be equal to var $big-tablet-width in scss

const isWindowsValue = navigator.platform.indexOf('Win') > -1;
const isMobileValue = window.screen.width <= MOBILE_MAX_WIDTH;

export function isWindows() {
  return isWindowsValue;
}

export function resetScroll() {
  window.scrollTo(0, 0);
}

export function isMobile() {
  return isMobileValue;
}
