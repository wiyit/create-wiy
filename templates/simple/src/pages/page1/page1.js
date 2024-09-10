export default {
    template: import('./page1.html'),
    components: {
        'component-1': import('../../components/component1/component1.js'),
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
