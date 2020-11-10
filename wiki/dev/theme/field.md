# 字段表

## 文件夹结构

## 文件结构

| 文件名         | 作用                                                       | 必须 |
| -------------- | ---------------------------------------------------------- | ---- |
| screenshot.png | 主题缩略图,图片后缀支持 `jpg`，`png`，`gif`，`bmp`，`jpeg` | 否   |
| index.php      | 主页以及说明文件                                           | 是   |
| functions.php  | 主题函数                                                   | 否   |
| header.php     | 头部                                                       | 否   |
| footer.php     | 底部                                                       | 否   |
| post.php       | 文章                                                       | 否   |
| page.php       | 独立页面                                                   | 否   |
| comments.php   | 评论                                                       | 否   |
| 404.php        | 404 页                                                     | 否   |
| archive.php    | 通用页（分类、搜索、标签、作者）                           | 否   |
| category.php   | 分类页                                                     | 否   |
| search.php     | 搜索页                                                     | 否   |
| tag.php        | 标签页                                                     | 否   |
| author.php     | 作者页                                                     | 否   |

## 站点信息

| 代码                                     | 解释     |
| ---------------------------------------- | -------- |
| `<?php $this->options->siteUrl(); ?>`    | 站点链接 |
| `<?php $this->options->title() ?>`       | 站点标题 |
| `<?php $this->options->description() ?>` | 站点描述 |
| `<?php $this->options->feedUrl(); ?>`    | RSS 地址 |

## 文章信息

| 代码                                        | 解释                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| `<?php $this->permalink() ?>`               | 文章链接                                                     |
| `<?php $this->title() ?>`                   | 文章标题                                                     |
| `<?php $this->author->permalink(); ?>`      | 文章作者主页链接                                             |
| `<?php $this->author(); ?>`                 | 文章作者昵称                                                 |
| `<?php $this->date(); ?>`                   | 文章发布时间                                                 |
| `<?php $this->category(','); ?>`            | 文章分类，多个分类中间用逗号隔开                             |
| `<?php $this->content(); ?>`                | 文章内容                                                     |
| `<?php $this->tags(', ', true, 'none'); ?>` | 文章标签，多个标签间用逗号隔开，带有超链接的标签，如果不存在则显示 none |
| `<?php $this->thePrev('%s','没有了'); ?>`   | 带有超链接的上一篇文章的标题                                 |
| `<?php $this->theNext('%s','没有了'); ?>`   | 带有超链接的下一篇文章的标题                                 |
