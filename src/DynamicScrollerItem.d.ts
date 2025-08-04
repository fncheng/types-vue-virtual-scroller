import { DefineComponent } from 'vue';

/**
 * DynamicScrollerItem组件props接口
 */
export interface DynamicScrollerItemProps {
  /**
   * 要显示的项目对象
   * @required
   */
  item: any;

  /**
   * 是否监视项目数据的变化
   * @default false
   */
  watchData?: boolean;

  /**
   * 指示视图是否正被使用来显示项目
   * @required
   */
  active: boolean;

  /**
   * 项目在列表中的索引
   */
  index?: number;

  /**
   * 影响项目大小的依赖项
   * 当这些依赖项变化时会重新计算尺寸
   */
  sizeDependencies?: any[] | Record<string, any>;

  /**
   * 是否在大小变化时发出resize事件
   * @default false
   */
  emitResize?: boolean;

  /**
   * 组件的HTML标签
   * @default 'div'
   */
  tag?: string;
}

/**
 * DynamicScrollerItem组件的类型定义
 */
export type DynamicScrollerItemType = DefineComponent<{
  props: DynamicScrollerItemProps;
  emits: {
    resize: (id: string | number) => void;
  };
}>;

/**
 * 动态滚动项组件
 * 检测并报告其内容的大小变化
 */
declare const DynamicScrollerItem: DynamicScrollerItemType;

export default DynamicScrollerItem;
