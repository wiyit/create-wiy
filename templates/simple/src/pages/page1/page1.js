export default {
    template: import('./page1.html'),
    components: {
        Component1: import('../../components/component1/component1.js'),
    },
    data: {
        welcomeMsg: 'Welcome to wiy!'
    },
    methods: {
    },
    lifecycle: {
        init() {
        },
    },
};
