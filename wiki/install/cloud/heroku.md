# Heroku

> 我们不建议普通用户通过 Heroku 部署 Typecho。我们正在寻找更加便捷的一键部署方案，当然也欢迎你来贡献。

## 准备工作

- Heroku 账号
- Heroku-CLI
- Git

## 环境

> 此应用采用 PHP + PostgerSQL + Apache 的架构。如有使用 MySQL 或 Nginx 之类的需求，请自行解决。

在本地安装 [Heroku Toolbelt](https://toolbelt.heroku.com/)，并登录你的账号。

``` shell
heroku login
```

克隆 typecho-lover/typecho-on-heroku 仓库

``` shell
git clone https://github.com/typecho-lover/typecho-on-heroku.git
```

进入该文件夹并创建一个应用

``` shell
cd typecho-on-heroku
heroku create
```

安装 [Heroku PgSQL 插件](https://elements.heroku.com/addons/heroku-postgresql) 并与创建的应用相绑定。

打开所创建应用的管理面板，并打开导航栏中的 **Settings**，该页面下有 **Config Vars** 项，打开就会显示PostgerSQL 数据库的相关信息。类似下表

| KEY | VALUE |
| - | - |
| DATABASE_URL | postgres://用户名:密码@数据库主机:5432/数据库名称 |

## 安装

更改 `web/config.inc.php` 中的数据库信息。只需根据之前从 Heroku 的管理面板中找到的数据库信息填写对应项即可。

``` php
/** 定义数据库参数 */
$db = new Typecho_Db('Pdo_Pgsql', 'typecho_');
$db->addServer(array (
  'host' => '数据库地址',
  'user' => '数据库用户名',
  'password' => '数据库密码',
  'charset' => 'utf8',
  'port' => '5432',
  'database' => '数据库名称',
), Typecho_Db::READ | Typecho_Db::WRITE);
Typecho_Db::set($db);
```

最后推送更改到 Heroku 上就会自动部署了，之后根据 Typecho 安装指引完成安装。

```git
git push heroku main
```
