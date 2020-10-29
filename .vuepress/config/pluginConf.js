const sidebarConf = require('./sidebarConf.js');

module.exports = {
    '@vuepress/active-header-links': {},
    '@vuepress/last-updated': {transformer: (timestamp) => moment(timestamp).format('LLLL')},
    'vuepress-plugin-auto-sidebar': sidebarConf,
    'seo': {},
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "有新的内容更新",
            buttonText: "刷新"
        }
    }
}