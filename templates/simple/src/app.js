import wiy from '@wiyit/wiy';

new wiy.App({
    pages: {
        'page1': import('./pages/page1/page1.js'),
    },
    index: 'page1',
    lifecycle: {
        init() {
        },
    },
});   