import wiy from '@wiyit/wiy';

new wiy.App({
    style: import('./app.css'),
    pages: {
        'page1': import('./pages/page1/page1.js'),
    },
    index: 'page1',
    plugins: [
        import('@wiyit/wiy-ui'),
    ],
    lifecycle: {
        init() {
            console.log('应用初始化成功');
        },
    },
});   