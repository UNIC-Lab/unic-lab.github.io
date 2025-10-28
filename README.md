# UNIC 实验室本科生实习招生

欢迎来到**泛在网络与智能计算研究组（UNIC）** 本科生实习招生网站！

本网站基于 [MatJek](https://github.com/ShawnTeoh/matjek) 主题构建，采用 [Material Design](https://material.io/) 设计理念，为响应式 Jekyll 网站。

## 🎯 关于我们

UNIC 实验室致力于泛在网络与智能计算领域的前沿研究，主要研究方向包括：

- **6G 与未来智能无线网络**：基于人工智能的网络管理和优化
- **空天地一体化网络**：全域网络覆盖和协议架构设计
- **车联网与自动驾驶技术**：低时延高可靠通信

## 📚 实习招生信息

我们现诚邀优秀本科生加入实习项目，参与前沿课题研究。实习生将有机会：

- 深入学习最新的网络技术和人工智能算法
- 参与真实的科研项目和论文发表
- 获得资深研究员的技术指导
- 建立学术合作网络

## 🔧 网站部署和配置

### 快速开始

克隆或 fork 本仓库，编辑 `_config.yml` 文件：

```yaml
title: "你的网站标题"
description: "网站描述"
url: "https://your-domain.github.io"
github_profile: "https://github.com/your-username"
user: "你的名称"
contact_url: "https://your-contact-link.com"
```

### 环境配置

本项目需要 Ruby 和 Jekyll。首先安装依赖：

```bash
bundle install
```

### 本地预览

运行以下命令在本地预览网站：

```bash
bundle exec jekyll serve
```

然后在浏览器中打开 `http://localhost:4000`

### 常用编辑文件

- **`_config.yml`** - 网站全局配置
- **`about.md`** - 关于页面
- **`contact.md`** - 联系方式页面
- **`projects.md`** - 项目展示页面
- **`_posts/`** - 博客文章目录
- **`assets/css/`** - 样式表
- **`assets/js/`** - JavaScript 脚本

### 配置文档

更多配置选项说明：

```yaml
github_profile: "GitHub 个人/组织主页链接"
user: "显示在侧边栏的用户名"
user_email: "侧边栏展示的邮箱（可选，留空则不显示）"
contact_url: "联系方式链接或表单链接（可选）"
google_tracking_id: "Google Analytics 跟踪 ID（可选）"
disqus_shortname: "Disqus 评论系统名称（可选）"
```

### 添加文章

在 `_posts/` 目录下创建新文件，命名格式为 `YYYY-MM-DD-标题.md`：

```yaml
---
layout: post
title: 文章标题
date: 2025-10-28 12:00:00
categories: 分类名
tags: 标签1 标签2
comments: 1
---

# 文章内容
你的文章内容写在这里...
```

## 📦 依赖库

- [Materialize.css](http://materializecss.com/) - Material Design 框架
- [GeoPattern](https://github.com/btmills/geopattern/) - 几何图案生成
- [Animate.css](https://daneden.github.io/animate.css/) - 动画库
- [Morphtext](http://morphext.fyianlai.com/) - 文本动画效果

## 📄 许可证

本主题采用 [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0.en.html) 开源许可。

## 🙏 致谢

感谢以下项目的灵感和支持：
- [Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll/)
- [Codinfox Lanyon](https://github.com/codinfox/codinfox-lanyon/)
- [MatJek](https://github.com/ShawnTeoh/matjek)

---

**更多信息**，请访问我们的 [官方网站](https://unicxidian.org/)
