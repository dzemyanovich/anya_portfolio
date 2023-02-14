export default {
  start: (): void => {
    document.body.classList.add('no-scroll');
  },
  end: (): void => {
    document.body.classList.remove('no-scroll');
  },
};
