import { DefineComponent, ComponentOptionsMixin, EmitsOptions, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';

/**
 * RecycleScroller组件props接口
 */
export interface RecycleScrollerProps {
  /**
   * 要显示的项目列表
   * @required
   */
  items: any[];

  /**
   * 从项目中获取唯一键的字段名
   * @default 'id'
   */
  keyField?: string;

  /**
   * 滚动方向
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * 项目的大小（像素）
   * 如果未指定，则组件将使用动态大小
   */
  itemSize?: number | null;

  /**
   * 网格布局中的项目数量
   */
  gridItems?: number;

  /**
   * 网格布局中的次要尺寸
   */
  itemSecondarySize?: number;

  /**
   * 当使用动态大小时的最小项目大小
   */
  minItemSize?: number | string | null;

  /**
   * 项目大小的字段名
   * @default 'size'
   */
  sizeField?: string;

  /**
   * 项目类型的字段名
   * @default 'type'
   */
  typeField?: string;

  /**
   * 缓冲区大小（像素）
   * @default 200
   */
  buffer?: number;

  /**
   * 页面模式，监听窗口滚动而不是组件的内部滚动
   * @default false
   */
  pageMode?: boolean;

  /**
   * 预渲染的项目数量（用于SSR）
   * @default 0
   */
  prerender?: number;

  /**
   * 是否发送更新事件
   * @default false
   */
  emitUpdate?: boolean;

  /**
   * 是否禁用transform并使用top/left定位
   * @default false
   */
  disableTransform?: boolean;

  /**
   * 滚动事件更新的时间间隔（毫秒）
   * @default 0
   */
  updateInterval?: number;

  /**
   * 是否跳过hover事件
   * @default false
   */
  skipHover?: boolean;

  /**
   * 列表的HTML标签
   * @default 'div'
   */
  listTag?: string;

  /**
   * 项目的HTML标签
   * @default 'div'
   */
  itemTag?: string;

  /**
   * 列表的CSS类名
   * @default ''
   */
  listClass?: string | object | any[];

  /**
   * 项目的CSS类名
   * @default ''
   */
  itemClass?: string | object | any[];
}

/**
 * RecycleScroller组件事件接口
 */
export interface RecycleScrollerEmits {
  /**
   * 当组件大小改变时触发
   */
  resize: () => void;

  /**
   * 当组件变为可见时触发
   */
  visible: () => void;

  /**
   * 当组件变为不可见时触发
   */
  hidden: () => void;

  /**
   * 当可见项目更新时触发
   * @param startIndex 起始索引
   * @param endIndex 结束索引
   * @param visibleStartIndex 可见起始索引
   * @param visibleEndIndex 可见结束索引
   */
  update: (startIndex: number, endIndex: number, visibleStartIndex: number, visibleEndIndex: number) => void;

  /**
   * 当滚动开始时触发
   */
  'scroll-start': () => void;

  /**
   * 当滚动结束时触发
   */
  'scroll-end': () => void;
}

/**
 * RecycleScroller组件暴露的方法接口
 */
export interface RecycleScrollerExpose {
  /**
   * 滚动到指定索引的项目
   * @param index 项目索引
   */
  scrollToItem: (index: number) => void;

  /**
   * 滚动到指定位置
   * @param position 滚动位置（像素）
   */
  scrollToPosition: (position: number) => void;

  updateVisibleItems: (itemsChanged: boolean) => void;
}

/**
 * RecycleScroller组件的类型定义
 */
export type RecycleScrollerType = DefineComponent<
  RecycleScrollerProps,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    resize: () => void;
    visible: () => void;
    hidden: () => void;
    update: (startIndex: number, endIndex: number, visibleStartIndex: number, visibleEndIndex: number) => void;
    'scroll-start': () => void;
    'scroll-end': () => void;
  },
  string,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<RecycleScrollerProps> & {
    onResize?: (() => any) | undefined;
    onVisible?: (() => any) | undefined;
    onHidden?: (() => any) | undefined;
    onUpdate?: ((startIndex: number, endIndex: number, visibleStartIndex: number, visibleEndIndex: number) => any) | undefined;
    'onScroll-start'?: (() => any) | undefined;
    'onScroll-end'?: (() => any) | undefined;
  },
  RecycleScrollerExpose
>;

/**
 * Vue虚拟滚动组件
 * 高效地渲染大量数据，只渲染可见区域内的项目
 */
declare const RecycleScroller: RecycleScrollerType;

export default RecycleScroller; 