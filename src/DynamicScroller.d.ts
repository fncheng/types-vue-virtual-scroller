import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { RecycleScrollerProps } from './RecycleScroller';

/**
 * DynamicScroller组件props接口
 */
export interface DynamicScrollerProps extends Omit<RecycleScrollerProps, 'minItemSize'> {
  /**
   * 项目的最小大小（像素）
   * 用于初始渲染并在实际大小计算完成前撑开空间
   * @required
   */
  minItemSize: number | string;
}

/**
 * 带有大小标记的项目接口
 */
export interface ItemWithSize<T = any> {
  /** 原始项目数据 */
  item: T;
  /** 项目ID */
  id: string | number;
  /** 项目大小 */
  size: number;
}

/**
 * DynamicScroller组件暴露的方法接口
 */
export interface DynamicScrollerExpose {
  /**
   * 强制更新所有项目大小
   * @param clear 是否清除现有大小缓存
   */
  forceUpdate: (clear?: boolean) => void;

  /**
   * 滚动到指定索引的项目
   * @param index 项目索引
   */
  scrollToItem: (index: number) => void;

  /**
   * 获取项目的大小
   * @param item 项目对象
   * @param index 项目索引（当使用简单数组时）
   */
  getItemSize: (item: any, index?: number) => number;

  /**
   * 滚动到列表底部
   */
  scrollToBottom: () => void;
}

/**
 * DynamicScroller组件的类型定义
 */
export type DynamicScrollerType = DefineComponent<
  DynamicScrollerProps,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    resize: () => void;
    visible: () => void;
  },
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<DynamicScrollerProps> & {
    onResize?: (() => any) | undefined;
    onVisible?: (() => any) | undefined;
  },
  DynamicScrollerExpose
>;

/**
 * 动态高度虚拟滚动组件
 * 自动检测和处理不同高度的项目
 */
declare const DynamicScroller: DynamicScrollerType;

export default DynamicScroller; 