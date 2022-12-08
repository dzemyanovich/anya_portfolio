const isWindowsValue = navigator.platform.indexOf('Win') > -1;

if (isWindowsValue) {
  document.querySelector('html').classList.add('no-scrollbar');
}

export function isWindows() {
  return isWindowsValue;
}
