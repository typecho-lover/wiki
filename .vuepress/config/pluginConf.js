const sidebarConf = require('./sidebarConf.js');

module.exports = {
    '@vuepress/active-header-links': {},
    '@vuepress/last-updated': {
        transformer: (timestamp, lang) => {
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).fromNow()
        }
    },
    'vuepress-plugin-auto-sidebar': sidebarConf,
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "有新的内容更新",
            buttonText: "刷新"
        }
    }
}