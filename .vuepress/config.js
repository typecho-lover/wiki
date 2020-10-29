const headConf = require('./config/headConf.js');
const navConf = require('./config/navConf.js');
const pluginConf = require('./config/pluginConf.js');

module.exports = {
    title: 'Typecho Wiki',
    description: '由 Typecho Lover 维护的维基',
    head: headConf,
    themeConfig: {
        nav: navConf,
        lastUpdated: '上次更新',
        // 编辑
        editLinks: true,
        docsRepo: 'typecho-lover/wiki',
        docsBranch: 'master',
        editLinkText: '帮助我们改善此页面！'
    },
    plugins: pluginConf
}