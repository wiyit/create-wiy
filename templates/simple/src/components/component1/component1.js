export default {
    template: import('./component1.html'),
    components: {
    },
    data: {
        currentTime: new Date(),
    },
    lifecycle: {
        init() {
            setInterval(() => {
                this.currentTime = new Date();
            }, 1000);
        },
    },
};          