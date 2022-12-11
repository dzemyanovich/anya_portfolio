const isWindowsValue = navigator.platform.indexOf('Win') > -1;

export function isWindows() {
  return isWindowsValue;
}
