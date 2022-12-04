export default {
    start: () => {
        document.body.classList.add('loading');
    },
    end: () => {
        document.body.classList.remove('loading');
    }
}
