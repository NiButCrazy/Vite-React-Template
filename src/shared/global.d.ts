import { JSX } from 'react'


type GetEventHandlers<
  T extends keyof JSX.IntrinsicElements
> = Extract<keyof JSX.IntrinsicElements[T], `on${ string }`>;

declare global {

  /**
   * 给定元素及其事件处理函数的字符串，提供对应的事件类型
   *
   * @example
   *
   * type MyEvent = EventFor<"input", "onChange">;
   */
  declare type EventFor<
    TElement extends keyof JSX.IntrinsicElements,
    THandler extends GetEventHandlers<TElement>
  > = JSX.IntrinsicElements[TElement][THandler] extends | ((e: infer TEvent) => any)
    | undefined
    ? TEvent
    : never;
}

