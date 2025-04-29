# types-vue-virtual-scroller

![版本](https://img.shields.io/npm/v/types-vue-virtual-scroller)
![许可证](https://img.shields.io/npm/l/types-vue-virtual-scroller)

## 简介

`types-vue-virtual-scroller` 是 [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller) 的 TypeScript 类型声明文件包。它提供了完整的类型定义，让您在使用 TypeScript 开发 Vue 3 应用时能够获得更好的开发体验。

## 特性

- 为 `vue-virtual-scroller` 提供完整的 TypeScript 类型支持
- 支持 Vue 3 和 Composition API
- 包含所有组件的详细属性类型定义
- 提供方法和事件的类型声明

## 安装

```bash
# 使用 npm
npm install @types/vue-virtual-scroller@npm:types-vue-virtual-scroller --save-dev

# 使用 yarn
yarn add @types/vue-virtual-scroller@npm:types-vue-virtual-scroller --dev

# 使用 pnpm
pnpm add @types/vue-virtual-scroller@npm:types-vue-virtual-scroller -D
```

## 支持的组件

该类型声明包包含以下组件的类型定义：

- `RecycleScroller`：高效渲染大量数据的基础滚动组件
- `DynamicScroller`：自动处理不同高度项目的动态滚动组件
- `DynamicScrollerItem`：配合 DynamicScroller 使用的项目组件

## 使用示例

```typescript
<script setup lang="ts">
import { RecycleScroller, DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

// 使用 RecycleScroller (固定高度项目)
const items = ref(Array.from({ length: 1000 }).map((_, i) => ({ id: i, text: `Item ${i}` })))

// 使用 DynamicScroller (动态高度项目)
const dynamicItems = ref(Array.from({ length: 1000 }).map((_, i) => ({ 
  id: i, 
  text: `Dynamic Item ${i}`, 
  size: Math.floor(Math.random() * 100) + 50 
})))
</script>

<template>
  <!-- 固定高度列表 -->
  <RecycleScroller
    class="scroller"
    :items="items"
    :item-size="50"
    key-field="id"
  >
    <template #default="{ item }">
      <div class="item">{{ item.text }}</div>
    </template>
  </RecycleScroller>

  <!-- 动态高度列表 -->
  <DynamicScroller
    class="scroller"
    :items="dynamicItems"
    :min-item-size="50"
    key-field="id"
  >
    <template #default="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[item.text]"
      >
        <div class="item">{{ item.text }}</div>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>
```

## 类型定义

该包提供以下主要接口：

- `RecycleScrollerProps`：RecycleScroller 组件的属性类型
- `DynamicScrollerProps`：DynamicScroller 组件的属性类型
- `DynamicScrollerItemProps`：DynamicScrollerItem 组件的属性类型
- `PluginOptions`：插件安装选项类型

## 类型声明模块

该类型包使用 `declare module` 语法声明了 `vue-virtual-scroller` 模块的类型：

```typescript
declare module 'vue-virtual-scroller' {
  export { RecycleScroller, DynamicScroller, DynamicScrollerItem }

  export interface PluginOptions {
    // 配置选项...
  }

  const VueVirtualScroller: {
    version: string
    install(app: App, options?: PluginOptions): void
  }

  export default VueVirtualScroller
}
```

## TypeScript 配置

为确保类型声明正常工作，请在您的 `tsconfig.json` 中包含以下配置：

```json
{
  "compilerOptions": {
    "types": ["vue-virtual-scroller"]
  }
}
```

## 贡献

欢迎提交问题和改进建议！请通过 GitHub Issues 或 Pull Requests 提供您的反馈。

## 许可证

ISC

## 作者

[fncheng](https://github.com/fncheng)
