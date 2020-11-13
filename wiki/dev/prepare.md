# 准备

## 开发环境

关于本地开发环境搭建的内容暂时搁置，欢迎贡献。

## 其他工作

### 开启 `debug` 模式

打开 `debug` 模式会显示更加详细的报错信息，以便查找错误。你只需要在 `config.inc.php` 的最后插入

``` php
define('__TYPECHO_DEBUG__', true);。
```

## 文件结构

| 文件名 | 注释 | 必须 |
| - | - | - |
| screenshot.png | 模板缩略图,图片后缀支持 `jpg`，`png`，`gif`，`bmp`，`jpeg` | 否 |
| index.php | 主页以及说明文件 | **是** |
| functions.php | 模板函数 | 否 |
| header.php | 头部 | 否 |
| footer.php | 底部 | 否 |
| post.php | 文章 | 否 |
| page.php | 独立页面 | 否 |
| comments.php | 评论 | 否 |
| 404.php | 404 页 | 否 |
| archive.php | 通用页（分类、搜索、标签、作者） | 否 |
| category.php | 分类页 | 否 |
| search.php | 搜索页 | 否 |
| tag.php | 标签页 | 否 |
| author.php | 作者页 | 否 |
