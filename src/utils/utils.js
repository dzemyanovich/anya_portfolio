const isWindowsValue = navigator.platform.indexOf('Win') > -1;

export function isWindows() {
  return isWindowsValue;
}

export function resetScroll() {
  window.scrollTo(0, 0);
}
