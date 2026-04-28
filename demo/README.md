# uv-ui Demo 项目

用于测试 uv-ui 组件库的完整 uni-app 项目。

## 项目结构

```
demo/
├── src/
│   ├── pages/index/
│   │   └── index.vue    # 数字键盘测试页面
│   ├── App.vue          # 应用入口
│   ├── main.js          # Vue 实例创建
│   ├── manifest.json    # uni-app 应用配置
│   └── pages.json       # 页面路由配置
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 安装依赖

```bash
cd demo
npm install
```

## 启动方式

### HBuilderX（推荐）

1. 用 **HBuilderX** 打开 `demo` 文件夹作为项目
2. 在顶部菜单选择 **运行** → **运行到浏览器** → Chrome
3. 或选择 **运行到小程序模拟器** → 微信小程序

### 命令行

```bash
cd demo
npm install

# 运行到不同平台
npm run dev:h5        # H5 网页
npm run dev:mp-weixin # 微信小程序
npm run dev:mp-alipay # 支付宝小程序
npm run dev:mp-baidu  # 百度小程序
```

### 微信小程序

```bash
cd demo
npm install
npm run dev:mp-weixin
# 打开微信开发者工具，导入 demo/dist/dev/mp-weixin 目录
```

## 测试功能

| 功能 | 说明 |
|------|------|
| 数字键盘 | 支持 0-9、小数点 `.`、负号 `-` |
| 身份证键盘 | 支持 0-9 和 `X` |
| PC 端支持 | 鼠标点击触发键盘操作 |
| 操作日志 | 实时记录键盘输入和删除操作 |

## 组件使用

本 demo 引用了 `../` 目录下的 uv-ui 组件库，配置了 easycom 自动导入：

```json
// pages.json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^uv-(.*)": "@/components/uv-$1/uv-$1.vue"
    }
  }
}
```
