export default {
    start: () => {
        document.body.classList.add('no-scroll');
    },
    end: () => {
        document.body.classList.remove('no-scroll');
    }
}
