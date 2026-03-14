# 产品结构工程师个人官网

基于 `Next.js + TypeScript + Tailwind CSS` 的个人品牌展示网站，面向产品结构工程师 / 结构设计工程师的正式展示场景，适合用于：

- 招聘沟通
- 客户介绍
- 项目合作展示
- 个人作品集与品牌主页

整体风格偏理性、克制、专业、有工程感，默认文案为高质量中文占位内容，后续可快速替换成你的真实资料。

## 技术栈

- Next.js 16
- TypeScript
- Tailwind CSS 4
- App Router

## 项目目录结构

```text
E:\codex
├─ app
│  ├─ about/page.tsx
│  ├─ contact/page.tsx
│  ├─ projects/page.tsx
│  ├─ skills/page.tsx
│  ├─ globals.css
│  ├─ icon.svg
│  ├─ layout.tsx
│  ├─ not-found.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components
│  ├─ contact/contact-form.tsx
│  ├─ layout/site-footer.tsx
│  ├─ layout/site-header.tsx
│  ├─ shared/button-link.tsx
│  ├─ shared/capability-card.tsx
│  ├─ shared/cta-banner.tsx
│  ├─ shared/page-hero.tsx
│  ├─ shared/project-card.tsx
│  ├─ shared/section-heading.tsx
│  └─ icons.tsx
├─ data
│  ├─ projects.ts
│  ├─ site.ts
│  └─ skills.ts
├─ lib
│  └─ utils.ts
├─ package.json
├─ next.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ postcss.config.js
├─ public
│  └─ images
│     ├─ projects/*.svg
│     └─ site/hero-products.svg
└─ README.md
```

## 安装依赖

建议使用 Node.js `18.17+` 或 `20+`。

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

默认访问：

```text
http://localhost:3000
```

## 打包命令

```bash
npm run build
```

如需本地启动生产环境：

```bash
npm run start
```

## 页面说明

- `/` 首页：品牌首屏、个人定位、专业方向、核心能力摘要、项目预览、联系引导
- `/about` 关于我：个人简介、工作背景、工程思维、职业理念
- `/projects` 项目作品：6 个高质量占位案例，可直接替换
- `/skills` 专业能力：结构设计、工艺认知、DFMEA / DFM / DFA、工具与协作方式
- `/contact` 联系方式：高级风格表单、前端校验、联系方式展示

## SEO 与可维护性

项目已内置：

- 基础 `metadata`
- `sitemap.ts`
- `robots.ts`
- 语义化页面结构
- 数据与页面分离，便于后续维护

## 部署建议

推荐优先部署到 [Vercel](https://vercel.com/)：

1. 将项目推送到 GitHub / GitLab / Bitbucket
2. 在 Vercel 中导入仓库
3. Framework Preset 选择 `Next.js`
4. 保持默认构建命令即可
5. 部署完成后，将站点域名回填到 `data/site.ts` 中的 `siteUrl`

如果你未来需要表单真正发送，可继续接入：

- Next.js API Route
- Resend
- Formspree
- 自有企业邮箱 SMTP 服务

## 如何替换成你自己的真实内容

优先修改以下数据文件：

- `data/site.ts`
  - 姓名、职位、邮箱、微信、LinkedIn、站点地址
  - 首页定位文案
  - 关于我事实信息
  - 联系方式说明
- `data/projects.ts`
  - 项目名称、背景、负责内容、工具、问题、成果
- `data/skills.ts`
  - 能力模块、工具集、工程流程

如果要替换当前内置的产品示意图，可修改：

- `public/images/site/hero-products.svg`
- `public/images/projects/*.svg`

如果你要替换视觉文案重点，可再看：

- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

## 后续建议

- 接入真实项目图片或渲染图
- 给每个项目增加详情页
- 接入真实表单发送能力
- 补充中英文双语版本
- 增加简历下载入口

## 说明

当前仓库里原有的 `.downloads/` 与 `scripts/` 未参与这次品牌站点开发，可按你的实际用途继续保留或单独清理。
