# 词典

## 站点信息

| 类名 | 注释 |
| - | - |
| `<?php $this->options->siteUrl(); ?>` | 站点链接 |
| `<?php $this->options->title() ?>` | 站点标题 |
| `<?php $this->options->description() ?>` | 站点描述 |
| `<?php $this->options->feedUrl(); ?>` | RSS 地址 |

## 头部信息

| 参数 | 注释 |
| - | - |
| keywords | 关键词 |
| description | 描述、摘要 |
| rss1 | Feed rss1.0 |
| rss2 | Feed rss2.0 |
| atom | Feed atom |
| generator | 程序版本等 |
| template | 模板名称 |
| pingback | 文章引用 |
| xmlrpc | 离线写作接口 |
| wlw | Windows Live Writer 离线写作接口 |
| commentReply | 评论回复 |

## 文章信息

| 类名 | 注释 |
| - | - |
| `<?php $this->permalink() ?>` | 文章链接 |
| `<?php $this->title() ?>` | 文章标题 |
| `<?php $this->author->permalink(); ?>` | 文章作者主页链接 |
| `<?php $this->author(); ?>` | 文章作者昵称 |
| `<?php $this->date(); ?>` | 文章发布时间 |
| `<?php $this->category(','); ?>` | 文章分类，多个分类中间用逗号隔开 |
| `<?php $this->content(); ?>` | 文章内容 |
| `<?php $this->tags(', ', true, 'none'); ?>` | 文章标签，多个标签间用逗号隔开，带有超链接的标签，如果不存在则显示 none |
| `<?php $this->thePrev('%s','没有了'); ?>` | 带有超链接的上一篇文章的标题 |
| `<?php $this->theNext('%s','没有了'); ?>` | 带有超链接的下一篇文章的标题 |

## 常用统计

``` php
<?php Typecho_Widget::widget('Widget_Stat')->to($stat); ?>
<?php $stat->属性名() ?>
```

| 属性名 | 注释 |
| - | - |
| `publishedPostsNum` | 获取已发布的文章数目 |
| `waitingPostsNum` | 获取待审核的文章数目 |
| `draftPostsNum` | 获取当前用户已发布的文章数目 |
| `myPublishedPostsNum` | 获取草稿文章数目 |
| `myWaitingPostsNum` | 获取当前用户待审核文章数目 |
| `myDraftPostsNum` | 获取当前用户已发布的文章数目 |
| `currentPublishedPostsNum` | 获取当前用户草稿文章数目 |
| `currentWaitingPostsNum` | 获取当前用户待审核文章数目 |
| `currentDraftPostsNum` | 获取当前用户草稿文章数目 |
| `publishedPagesNum` | 获取已发布页面数目 |
| `draftPagesNum` | 获取草稿页面数目 |
| `publishedCommentsNum` | 获取当前显示的评论数目 |
| `waitingCommentsNum` | 获取当前待审核的评论数目 |
| `spamCommentsNum` | 获取当前垃圾评论数目 |
| `myPublishedCommentsNum` | 获取当前用户显示的评论数目 |
| `myWaitingCommentsNum` | 获取当前用户显示的评论数目 |
| `mySpamCommentsNum` | 获取当前用户显示的评论数目 |
| `currentCommentsNum` | 获取当前文章的评论数目 |
| `currentPublishedCommentsNum` | 获取当前文章显示的评论数目 |
| `currentWaitingCommentsNum` | 获取当前文章显示的评论数目 |
| `currentSpamCommentsNum` | 获取当前文章显示的评论数目 |
| `categoriesNum` | 获取分类数目 |
